# State Persistence — CKAD

## Why This Matters on the Exam
CKAD tests you from the **application developer** perspective. You do not configure storage backends — you consume them. Key skills:
- Attach PVC to a Pod
- Use the right volume type for the right job
- Deploy StatefulSets when identity + stable storage is required
- Know when to use emptyDir vs PVC vs configMap/secret volume

---

## Volume Types You Must Know

| Volume | Lifetime | Use Case |
|--------|----------|----------|
| `emptyDir` | Pod lifetime | Scratch space, shared between containers in a Pod |
| `hostPath` | Node lifetime | Rarely used; bind-mount node path into container |
| `configMap` | Pod lifetime | Mount config files from a ConfigMap |
| `secret` | Pod lifetime | Mount TLS certs, credentials |
| `persistentVolumeClaim` | Beyond Pod | Durable data, databases |

---

## emptyDir — Shared Scratch Space

```yaml
volumes:
  - name: shared
    emptyDir: {}
containers:
  - name: app
    volumeMounts:
      - name: shared
        mountPath: /data
  - name: sidecar
    volumeMounts:
      - name: shared
        mountPath: /data
```

Both containers in the same Pod share the same `/data` directory. Data is gone when the Pod is deleted.

---

## Persistent Volume (PV) — Admin Creates This

```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv-data
spec:
  capacity:
    storage: 1Gi
  accessModes:
    - ReadWriteOnce
  hostPath:
    path: /mnt/data
```

> On the CKAD exam, PVs are pre-provisioned. You only create PVCs.

---

## Persistent Volume Claim (PVC) — Developer Creates This

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 500Mi
```

**Access Modes:**
- `ReadWriteOnce` (RWO) — one node, read/write
- `ReadOnlyMany` (ROX) — many nodes, read only
- `ReadWriteMany` (RWX) — many nodes, read/write

PVC binds to a PV that satisfies: capacity ≥ request + matching access mode.

---

## Attaching a PVC to a Pod

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: app
spec:
  containers:
    - name: app
      image: nginx
      volumeMounts:
        - name: storage
          mountPath: /usr/share/nginx/html
  volumes:
    - name: storage
      persistentVolumeClaim:
        claimName: my-pvc
```

**Three things must match:**
1. `volumes[].name` == `volumeMounts[].name`
2. `claimName` references a real PVC
3. PVC is Bound (check with `kubectl get pvc`)

---

## StorageClass — Dynamic Provisioning

When a StorageClass exists, you can skip creating PVs manually. The PVC triggers automatic PV creation.

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: dynamic-pvc
spec:
  accessModes:
    - ReadWriteOnce
  storageClassName: standard   # must match a StorageClass name
  resources:
    requests:
      storage: 1Gi
```

Check available StorageClasses:
```bash
kubectl get storageclass
kubectl get sc
```

---

## StatefulSets — When Identity Matters

Use StatefulSet when your app needs:
- Stable, unique network names (pod-0, pod-1, pod-2)
- Stable, persistent storage per pod
- Ordered, graceful deployment and scaling

```yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: db
spec:
  selector:
    matchLabels:
      app: db
  serviceName: db-headless     # REQUIRED — headless service
  replicas: 3
  template:
    metadata:
      labels:
        app: db
    spec:
      containers:
        - name: db
          image: mysql:8
          volumeMounts:
            - name: data
              mountPath: /var/lib/mysql
  volumeClaimTemplates:
    - metadata:
        name: data
      spec:
        accessModes: ["ReadWriteOnce"]
        resources:
          requests:
            storage: 1Gi
```

**What happens:**
- Pod names: `db-0`, `db-1`, `db-2`
- Each pod gets its own PVC: `data-db-0`, `data-db-1`, `data-db-2`
- Pods start in order (0 → 1 → 2), terminate in reverse
- The PVC outlives the pod — data survives pod restart

**Headless Service** (required for stable DNS):
```yaml
apiVersion: v1
kind: Service
metadata:
  name: db-headless
spec:
  clusterIP: None           # headless = no ClusterIP
  selector:
    app: db
  ports:
    - port: 3306
```

Each pod gets a DNS name: `db-0.db-headless.namespace.svc.cluster.local`

---

## ConfigMap and Secret as Volume

```yaml
volumes:
  - name: config-vol
    configMap:
      name: my-config
  - name: secret-vol
    secret:
      secretName: my-secret

containers:
  - volumeMounts:
      - name: config-vol
        mountPath: /etc/config
      - name: secret-vol
        mountPath: /etc/secrets
        readOnly: true
```

Each key in the ConfigMap/Secret becomes a file inside the mount path.

---

## Quick Diagnostic Commands

```bash
# Check PVC status — must be Bound
kubectl get pvc
kubectl describe pvc <name>

# Check PV binding
kubectl get pv
kubectl describe pv <name>

# Confirm volume is mounted in pod
kubectl exec <pod> -- ls /mountpath
kubectl describe pod <pod> | grep -A5 Volumes
kubectl describe pod <pod> | grep -A5 Mounts

# Check StatefulSet
kubectl get statefulset
kubectl get pods -l app=db
kubectl get pvc -l app=db
```

---

## Common Exam Mistakes

| Mistake | Fix |
|---------|-----|
| PVC stays Pending | No matching PV (check capacity, accessMode, storageClass) |
| Wrong claimName | `kubectl get pvc` to confirm name |
| Forgot `serviceName` in StatefulSet | Always required — set even if using a regular service |
| StatefulSet pods not starting | Check events: `kubectl describe pod db-0` |
| Volume data not persisting | Are you using `emptyDir`? Use PVC instead |

---

## Exam Speed Pattern

**Attach a PVC to a Pod (30 seconds):**
```bash
kubectl run app --image=nginx --dry-run=client -o yaml > pod.yaml
# Edit: add volumes + volumeMounts blocks
kubectl apply -f pod.yaml
kubectl get pvc  # confirm Bound
kubectl exec app -- ls /mountpath  # confirm mount
```

**Create PVC fast:**
```bash
kubectl create -f - <<EOF
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-pvc
spec:
  accessModes: [ReadWriteOnce]
  resources:
    requests:
      storage: 1Gi
EOF
```
