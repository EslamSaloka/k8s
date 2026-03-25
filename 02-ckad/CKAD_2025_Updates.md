# CKAD 2025 — Updated Exam Topics

These topics were added or expanded in the CKAD exam syllabus for 2024/2025.
This file supplements the core CKAD modules.

---

## 1. Custom Resource Definitions (CRDs)

CRDs extend the Kubernetes API with custom resource types.
As an app developer, you consume CRDs created by platform teams or operators.

**Read a CRD:**
```bash
kubectl get crd
kubectl describe crd <crd-name>
kubectl explain <custom-resource>
```

**Create a CR (custom resource) instance:**
```bash
# First, check the CRD schema
kubectl explain myapp.spec

# Then apply a CR manifest
kubectl apply -f myapp-instance.yaml
```

Example CR:
```yaml
apiVersion: apps.example.com/v1
kind: MyApp
metadata:
  name: my-app-instance
spec:
  replicas: 3
  version: "2.0"
```

**Why it matters for CKAD:**
- You may be given a CRD and asked to create a CR
- You need to know how to read the schema using `kubectl explain`
- You do not need to create a CRD from scratch

---

## 2. Admission Controllers

Admission controllers intercept API requests before objects are stored.
They can **mutate** (change) or **validate** (allow/reject) requests.

**Types:**
- Mutating: adds/modifies fields (e.g., inject sidecar, add labels)
- Validating: allows or denies the request (e.g., reject privileged containers)

**Check which are enabled:**
```bash
# Look at the kube-apiserver flags
kubectl describe pod kube-apiserver-controlplane -n kube-system | grep admission
# or
cat /etc/kubernetes/manifests/kube-apiserver.yaml | grep admission
```

**Common built-in admission controllers:**
| Controller | Purpose |
|-----------|---------|
| `NamespaceLifecycle` | Prevent creation in terminating namespaces |
| `LimitRanger` | Enforce LimitRange defaults |
| `ResourceQuota` | Enforce ResourceQuota limits |
| `PodSecurity` | Enforce Pod Security Standards |
| `ServiceAccount` | Auto-inject service account tokens |
| `NodeRestriction` | Limit what kubelets can modify |

**PodSecurity Admission:**
```bash
# Label a namespace to enforce pod security level
kubectl label namespace team-a \
  pod-security.kubernetes.io/enforce=restricted \
  pod-security.kubernetes.io/warn=restricted \
  pod-security.kubernetes.io/audit=restricted
```

Three levels:
| Level | What it blocks |
|-------|---------------|
| `privileged` | Nothing (allows all) |
| `baseline` | Blocks host namespaces, privileged containers |
| `restricted` | Baseline + requires non-root, read-only root FS |

Test it:
```bash
# This should be blocked in restricted namespace:
kubectl run bad --image=nginx --overrides='{"spec":{"containers":[{"name":"bad","image":"nginx","securityContext":{"privileged":true}}]}}'
```

---

## 3. Deployment Strategies

### Rolling Update (default)

```yaml
spec:
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1            # allow 1 extra pod during update
      maxUnavailable: 0      # never less than desired replicas
```

Monitor rollout:
```bash
kubectl rollout status deploy/web
kubectl rollout history deploy/web
kubectl rollout undo deploy/web          # rollback
kubectl rollout undo deploy/web --to-revision=2
```

### Blue-Green Deployment

Run two full deployments. Switch traffic by updating Service selector.

```bash
# Blue (current)
kubectl create deploy web-blue --image=nginx:1.25
kubectl expose deploy web-blue --port=80 --name=web-svc

# Deploy Green (new version)
kubectl create deploy web-green --image=nginx:1.26

# Switch the service selector to green
kubectl patch service web-svc -p '{"spec":{"selector":{"app":"web-green"}}}'
# or edit:
kubectl edit service web-svc   # change selector.app from web-blue to web-green

# Verify
kubectl get endpoints web-svc
```

Rollback = patch selector back to web-blue.

### Canary Deployment

Route a small percentage of traffic to the new version by running fewer replicas.

```bash
# Existing: web-stable (10 replicas) with label version=stable
# Canary:   web-canary (1 replica) with label version=canary

# Both have the shared label app=web
# Service selects on app=web only (not version)
# 1/(10+1) = ~9% traffic goes to canary
```

```yaml
# Service selector (matches both stable and canary)
spec:
  selector:
    app: web    # intentionally does NOT select 'version'
```

Gradually increase canary replicas and reduce stable replicas.

---

## 4. Helm Basics (App Developer View)

Helm packages Kubernetes YAML into reusable charts.

```bash
# Add a repo
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update

# Search and inspect
helm search repo nginx
helm show values bitnami/nginx

# Install
helm install my-nginx bitnami/nginx
helm install my-nginx bitnami/nginx --set replicaCount=3

# Install with custom values file
helm install my-nginx bitnami/nginx -f custom-values.yaml

# List releases
helm list
helm list -n <namespace>

# Upgrade
helm upgrade my-nginx bitnami/nginx --set image.tag=1.26

# Rollback
helm rollback my-nginx 1      # revision number from helm history

# Uninstall
helm uninstall my-nginx

# Status and history
helm status my-nginx
helm history my-nginx
```

**Values override precedence (highest wins):**
`--set` > `-f custom-values.yaml` > chart's `values.yaml`

---

## 5. API Versions and Deprecations

Kubernetes deprecates API versions over time. Old apiVersions stop working.

```bash
# Check what version a resource uses
kubectl api-resources | grep deployment
kubectl explain deployment | head -5

# Check if an API version is still active
kubectl api-versions | grep apps

# Test manifest compatibility
kubectl apply -f file.yaml --dry-run=server
```

**Common apiVersion upgrades:**
| Resource | Old | Current |
|---------|-----|---------|
| Deployment | apps/v1beta1 | apps/v1 |
| Ingress | networking.k8s.io/v1beta1 | networking.k8s.io/v1 |
| HPA | autoscaling/v1 | autoscaling/v2 |
| CronJob | batch/v1beta1 | batch/v1 |
| PodSecurityPolicy | policy/v1beta1 | **removed** → use PodSecurity admission |

**How to convert a deprecated manifest:**
```bash
kubectl convert -f old.yaml --output-version apps/v1
# Note: kubectl convert requires the convert plugin (not installed by default)
# Alternative: manually update apiVersion in the file
```

---

## 6. Security Context (App Developer Perspective)

As a developer, you own the securityContext for your containers.

```yaml
spec:
  securityContext:
    runAsUser: 1000
    runAsGroup: 3000
    fsGroup: 2000
    runAsNonRoot: true
  containers:
  - name: app
    image: nginx
    securityContext:
      allowPrivilegeEscalation: false
      readOnlyRootFilesystem: true
      capabilities:
        drop: ["ALL"]
        add: ["NET_BIND_SERVICE"]   # only add what you need
```

If your container needs to write to disk with `readOnlyRootFilesystem: true`:
```yaml
    volumeMounts:
    - name: tmp
      mountPath: /tmp
  volumes:
  - name: tmp
    emptyDir: {}
```

---

## Exam Checklist for 2025 Topics

- [ ] Can you create a CR from a given CRD?
- [ ] Can you label a namespace with PodSecurity enforcement?
- [ ] Can you perform a blue-green switch using Service selectors?
- [ ] Can you implement a canary using replica ratio?
- [ ] Can you install, upgrade, and roll back a Helm release?
- [ ] Can you update a deprecated apiVersion in a manifest?
- [ ] Can you apply a restrictive securityContext to a container?
