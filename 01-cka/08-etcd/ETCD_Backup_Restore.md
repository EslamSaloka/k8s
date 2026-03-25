# ETCD Backup and Restore

etcd is the brain of the cluster. If it is lost on a self-managed cluster, everything is lost.
The CKA exam tests this directly. Know every step and every command.

---

## Why etcd matters

- etcd stores all cluster state: pods, services, configs, secrets, role bindings — everything.
- It does NOT store application data (PV data is separate).
- In a kubeadm cluster, etcd runs as a static pod on the control plane.

---

## Step 0 — Find Cert Paths

The exam will give you a cluster. Get the actual paths from the running etcd pod:

```bash
kubectl describe pod etcd-controlplane -n kube-system | grep -E 'cert|key|trusted|endpoint|listen'
```

Or read the manifest directly:
```bash
cat /etc/kubernetes/manifests/etcd.yaml | grep -E 'cert|key|trusted|peer|listen'
```

Typical defaults on a kubeadm cluster:
```
endpoint:  https://127.0.0.1:2379
ca cert:   /etc/kubernetes/pki/etcd/ca.crt
cert:      /etc/kubernetes/pki/etcd/server.crt
key:       /etc/kubernetes/pki/etcd/server.key
```

---

## Step 1 — Set Environment

```bash
export ETCDCTL_API=3
```

Or use inline:
```bash
ETCDCTL_API=3 etcdctl ...
```

---

## Step 2 — Take a Snapshot

```bash
ETCDCTL_API=3 etcdctl snapshot save /opt/etcd-backup.db \
  --endpoints=https://127.0.0.1:2379 \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --key=/etc/kubernetes/pki/etcd/server.key
```

---

## Step 3 — Verify the Snapshot

```bash
ETCDCTL_API=3 etcdctl snapshot status /opt/etcd-backup.db -w table
```

Output shows: hash, revision, total keys, total size.

---

## Step 4 — Restore the Snapshot

```bash
ETCDCTL_API=3 etcdutl snapshot restore /opt/etcd-backup.db \
  --data-dir=/var/lib/etcd-restored
```

> Use `etcdutl` (not `etcdctl`) for restore in etcd v3.5+.
> `etcdctl snapshot restore` is deprecated but may still work on older clusters.

---

## Step 5 — Repoint etcd to Restored Data Directory

Edit the etcd static pod manifest:

```bash
vi /etc/kubernetes/manifests/etcd.yaml
```

Find the `--data-dir` flag and update it:
```yaml
- --data-dir=/var/lib/etcd-restored   # change from /var/lib/etcd
```

Also update the `hostPath` volume mount:
```yaml
volumes:
- hostPath:
    path: /var/lib/etcd-restored      # change from /var/lib/etcd
    type: DirectoryOrCreate
  name: etcd-data
```

---

## Step 6 — Wait for Recovery

The kubelet will detect the manifest change and restart the etcd pod automatically.

```bash
# Watch for etcd pod to restart
watch kubectl get pods -n kube-system

# Once it's running, verify cluster state:
kubectl get nodes
kubectl get pods -A
```

---

## Full Command Reference

```bash
# Check etcd health
ETCDCTL_API=3 etcdctl endpoint health \
  --endpoints=https://127.0.0.1:2379 \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --key=/etc/kubernetes/pki/etcd/server.key

# List all keys (forensics)
ETCDCTL_API=3 etcdctl get / --prefix --keys-only \
  --endpoints=https://127.0.0.1:2379 \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --key=/etc/kubernetes/pki/etcd/server.key

# Member list (for HA clusters)
ETCDCTL_API=3 etcdctl member list \
  --endpoints=https://127.0.0.1:2379 \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --key=/etc/kubernetes/pki/etcd/server.key
```

---

## Common Pitfalls

| Pitfall | Fix |
|---------|-----|
| Wrong cert paths | Read them from `etcd.yaml` first |
| Using `etcdctl restore` on v3.5+ | Use `etcdutl` instead |
| Forgot to update both `--data-dir` and `hostPath` | Edit both in the manifest |
| API server down after restore | Give it 60–90 seconds; kubelet restarts static pods |
| Restoring into the existing data dir | Always restore to a NEW directory |
| Testing restore in the wrong order | Save → verify → restore → repoint → wait |

---

## Exam Memory Rule

```
1. Save snapshot
2. Verify snapshot
3. Restore to new dir
4. Repoint manifest
5. Wait and verify
```

## Why etcd matters

- etcd stores Kubernetes cluster state.
- If etcd is lost in a self-managed cluster, the control plane loses its source of truth.
- For CKA, you should understand snapshots, restore flow, and verification.

## Core Ideas

- take snapshots before risky maintenance
- restore carefully and validate cluster state after recovery
- back up workload data separately from etcd because etcd is not application storage

## Useful Commands

```bash
ETCDCTL_API=3 etcdctl snapshot save snapshot.db
ETCDCTL_API=3 etcdctl snapshot status snapshot.db -w table
ETCDCTL_API=3 etcdutl snapshot restore snapshot.db
kubectl get pods -n kube-system
kubectl get nodes
```

## What You Need In Real Labs

- endpoints
- CA cert
- client cert
- client key

Those are often mounted for control-plane static pods in kubeadm clusters.

## Snapshot Workflow

1. identify etcd endpoint and certificates
2. run snapshot save
3. validate snapshot status
4. store backup safely

## Restore Workflow

1. stop the old etcd process or static pod workflow safely
2. restore snapshot to a fresh data directory
3. update etcd manifest or startup config if needed
4. restart etcd
5. verify API server recovers and objects are visible

## Fast Verification

- check control-plane pods
- check node readiness
- check critical namespaces and workloads
- inspect etcd logs if API server does not recover

## Common Pitfalls

- wrong cert paths
- restoring into the wrong data directory
- forgetting manifest path changes
- assuming PV data is restored with etcd

## Exam Memory Rule

Think in this order:

1. snapshot
2. verify
3. restore
4. repoint
5. recover