# Troubleshooting Flow

Use this when a task is failing and you need a repeatable diagnosis path.

## 1. Confirm scope

- right cluster
- right context
- right namespace
- right resource name

## 2. Describe first

```bash
kubectl describe <resource> <name>
kubectl get events --sort-by=.metadata.creationTimestamp
```

## 3. Check the common failure class

### Pod Pending

- node selector mismatch
- taints or tolerations issue
- missing PVC or unbound claim
- not enough requested resources

### ImagePullBackOff

- wrong image name or tag
- private registry auth missing
- network or DNS issue

### CrashLoopBackOff

- bad command or args
- missing config
- failing startup dependency
- probe misconfiguration

### Service not routing

- selector does not match labels
- targetPort mismatch
- pod not ready
- wrong namespace

### PVC Pending

- no matching StorageClass
- capacity mismatch
- access mode mismatch

## 4. Inspect YAML when needed

```bash
kubectl get <resource> <name> -o yaml
```

## 5. Verify after each fix

Do not stack five edits before testing. Apply one clear change and re-check state.

---

## 6. Node Troubleshooting Flow

Use when a node shows `NotReady` or pods are being evicted from a node.

```bash
# Step 1 — confirm node status
kubectl get nodes
kubectl describe node <node-name>   # look at: Conditions, Taints, Events, Allocatable

# Step 2 — check kubelet on the node (SSH in)
systemctl status kubelet
journalctl -u kubelet -n 50 --no-pager   # last 50 lines

# Step 3 — check container runtime
systemctl status containerd          # or docker / crio depending on cluster
crictl ps                            # list running containers
crictl info | grep -i runtime        # confirm runtime is healthy

# Step 4 — check node pressure
kubectl describe node <node-name> | grep -A5 "Conditions:"
# MemoryPressure, DiskPressure, PIDPressure → cause evictions

# Step 5 — check for network / CNI problem
kubectl get pods -n kube-system | grep -E "calico|flannel|weave|cilium"
# CNI pod down = all pods on node can't get IP = Pending or crash

# Step 6 — if kubelet is stopped, try restarting it
systemctl start kubelet
systemctl enable kubelet
```

**Common node failure causes:**

| Symptom | Cause | Fix |
|---------|-------|-----|
| Node `NotReady`, kubelet stopped | kubelet crashed or not started | `systemctl start kubelet` |
| Node `NotReady`, kubelet running | CNI plugin down | Restart CNI DaemonSet pod |
| DiskPressure | Low disk on node | Free disk space, remove old images: `crictl rmi --prune` |
| MemoryPressure | Low RAM | Identify high-usage pods, evict or scale down |
| All pods Pending on node | Node cordoned | `kubectl uncordon <node>` |

---

## 7. Control Plane Component Failure Flow

Use when the API server, scheduler, controller-manager, or etcd are unresponsive or crashing.

> **Note:** All control plane components run as static pods. Manifests live in `/etc/kubernetes/manifests/`.

```bash
# Step 1 — check component status from a working kubectl
kubectl get pods -n kube-system
kubectl get componentstatuses        # (deprecated but still works in some versions)

# Step 2 — if kubectl doesn't respond (API server down), work on the control-plane node directly
# Check static pod manifests
ls /etc/kubernetes/manifests/
# kube-apiserver.yaml  kube-controller-manager.yaml  kube-scheduler.yaml  etcd.yaml

# Step 3 — check if static pods are running via crictl (no kubectl needed)
crictl ps | grep -E "apiserver|controller|scheduler|etcd"

# Step 4 — read logs of a crashed component
crictl logs <container-id>           # get ID from crictl ps -a (includes stopped)

# For running static pods (if kubectl works):
kubectl logs -n kube-system kube-apiserver-<node>
kubectl logs -n kube-system kube-scheduler-<node>
kubectl logs -n kube-system kube-controller-manager-<node>
kubectl logs -n kube-system etcd-<node>

# Step 5 — common API server issues: bad flag or missing cert in manifest
cat /etc/kubernetes/manifests/kube-apiserver.yaml | grep -E "cert|key|etcd"

# Step 6 — if you edited a manifest and broke it, kubelet will not start the pod
# Check kubelet logs for manifest parsing errors:
journalctl -u kubelet -n 30 --no-pager | grep -i "apiserver\|error\|fail"

# Step 7 — etcd health check
ETCDCTL_API=3 etcdctl endpoint health \
	--endpoints=https://127.0.0.1:2379 \
	--cacert=/etc/kubernetes/pki/etcd/ca.crt \
	--cert=/etc/kubernetes/pki/etcd/server.crt \
	--key=/etc/kubernetes/pki/etcd/server.key
```

**Control plane recovery decision tree:**

```
kubectl not responding?
	└─ Yes → SSH to control-plane node
			 ├─ crictl ps shows apiserver running?
			 │    └─ No → crictl logs <apiserver-container-id> → find error
			 │         → Check /etc/kubernetes/manifests/kube-apiserver.yaml for bad flags/paths
			 └─ Yes → kubectl works now? No → check kube-apiserver logs for auth/cert issue

Scheduler or controller-manager down?
	└─ Pods stuck in Pending (no scheduler) or Deployments not scaling (no controller)
	└─ Check /etc/kubernetes/manifests/<component>.yaml for syntax error
	└─ kubectl logs -n kube-system <component-pod-name>

etcd down?
	└─ API server can't write or read → everything stops
	└─ crictl ps | grep etcd → check logs
	└─ Verify data-dir path matches manifest hostPath volume
```

**Component → config file mapping:**

| Component | Manifest | Key config |
|-----------|----------|-----------|
| kube-apiserver | `/etc/kubernetes/manifests/kube-apiserver.yaml` | certs, etcd URL, admission plugins |
| kube-controller-manager | `/etc/kubernetes/manifests/kube-controller-manager.yaml` | kubeconfig, service-account key |
| kube-scheduler | `/etc/kubernetes/manifests/kube-scheduler.yaml` | kubeconfig |
| etcd | `/etc/kubernetes/manifests/etcd.yaml` | data-dir, cert paths |
| kubelet | `/var/lib/kubelet/config.yaml` + `/etc/systemd/system/kubelet.service.d/` | cgroupDriver, staticPodPath |