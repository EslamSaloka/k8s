# Scheduling — Advanced Topics

Covers topics from the 2025 KodeKloud CKA syllabus beyond basic nodeSelector.

---

## Taints and Tolerations

Taints repel pods from nodes. Tolerations allow pods to accept taints.

**Add a taint:**
```bash
kubectl taint nodes node1 env=prod:NoSchedule
kubectl taint nodes node1 env=prod:NoExecute
kubectl taint nodes node1 env=prod:PreferNoSchedule
```

**Remove a taint:**
```bash
kubectl taint nodes node1 env=prod:NoSchedule-
```

**Toleration in pod spec:**
```yaml
spec:
  tolerations:
  - key: "env"
    operator: "Equal"
    value: "prod"
    effect: "NoSchedule"
  # To tolerate ANY taint with a key:
  # - key: "env"
  #   operator: "Exists"
  #   effect: "NoSchedule"
```

**Taint effects:**
| Effect | Behavior |
|--------|----------|
| `NoSchedule` | New pods without toleration won't be scheduled |
| `PreferNoSchedule` | Prefer not to schedule (soft) |
| `NoExecute` | Evict running pods without toleration |

---

## Node Affinity

More expressive than nodeSelector. Supports operators: In, NotIn, Exists, DoesNotExist, Gt, Lt.

```yaml
spec:
  affinity:
    nodeAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        nodeSelectorTerms:
        - matchExpressions:
          - key: disk
            operator: In
            values:
            - ssd
            - nvme
      preferredDuringSchedulingIgnoredDuringExecution:
      - weight: 50
        preference:
          matchExpressions:
          - key: region
            operator: In
            values:
            - us-east-1
```

`required` = hard rule (pod stays Pending if no match)
`preferred` = soft preference (pod still schedules if no match)

---

## Pod Affinity and Anti-Affinity

Schedule pods near or away from other pods.

```yaml
spec:
  affinity:
    # Co-locate with frontend pods
    podAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
      - labelSelector:
          matchLabels:
            app: frontend
        topologyKey: kubernetes.io/hostname

    # Spread replicas across nodes
    podAntiAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
      - labelSelector:
          matchLabels:
            app: web
        topologyKey: kubernetes.io/hostname
```

---

## Topology Spread Constraints

Distribute pods evenly across nodes or zones.

```yaml
spec:
  topologySpreadConstraints:
  - maxSkew: 1
    topologyKey: kubernetes.io/hostname
    whenUnsatisfiable: DoNotSchedule   # or ScheduleAnyway
    labelSelector:
      matchLabels:
        app: web
```

---

## Priority Classes

High-priority pods can preempt lower-priority pods when resources are tight.

```yaml
apiVersion: scheduling.k8s.io/v1
kind: PriorityClass
metadata:
  name: high-priority
value: 1000000
globalDefault: false
description: "Critical workloads"
preemptionPolicy: PreemptLowerPriority    # default
```

Use in pod:
```yaml
spec:
  priorityClassName: high-priority
```

Check priority classes:
```bash
kubectl get priorityclass
kubectl describe priorityclass high-priority
```

---

## Manual Scheduling (no scheduler)

Set `nodeName` directly in the pod spec to bypass the scheduler:

```yaml
spec:
  nodeName: node1
  containers:
  - name: app
    image: nginx
```

---

## Static Pods

Defined by files on the node, not via the API. Kubelet reads them directly.

Default manifest path: `/etc/kubernetes/manifests/`

```bash
# Find the manifest path in kubelet config
cat /var/lib/kubelet/config.yaml | grep staticPodPath
# or
ps aux | grep kubelet | grep -o 'config=.*' 
```

To create a static pod on a node:
```bash
# SSH to the node, then:
cp pod.yaml /etc/kubernetes/manifests/
```

To delete: remove the file from the manifests directory.

---

## Multiple Schedulers

A pod can target a custom scheduler:
```yaml
spec:
  schedulerName: my-custom-scheduler
```

Check which scheduler runs each pod:
```bash
kubectl get pod <name> -o jsonpath='{.spec.schedulerName}'
```

---

## Troubleshooting Scheduling Failures

```bash
# Pod stays Pending?
kubectl describe pod <name>     # look at Events section
kubectl get events --sort-by=.metadata.creationTimestamp

# Check node conditions
kubectl describe node <node>    # look for Ready, MemoryPressure, DiskPressure

# Check if taint is blocking
kubectl get nodes -o json | grep -A5 taints

# Check resource requests vs node capacity
kubectl describe node <node> | grep -A5 "Allocated resources"
```

**Common Pending causes:**
| Cause | Diagnose |
|-------|----------|
| Taint not tolerated | `kubectl describe node` — check taints |
| nodeSelector no match | `kubectl get nodes --show-labels` |
| Insufficient CPU/memory | `kubectl describe node` — Allocated vs Capacity |
| PVC not bound | `kubectl get pvc` — check status |
| Pod affinity impossible | Check existing pod labels on nodes |

## Priority Classes

- PriorityClass lets you rank pods for scheduling and preemption.
- Higher priority pods can evict lower priority pods when resources are limited.
- Use this carefully because aggressive preemption can disrupt workloads.

Quick checks:

```bash
kubectl get priorityclass
kubectl describe priorityclass <name>
```

## Multiple Schedulers

- Kubernetes can run more than one scheduler.
- A pod can target a non-default scheduler using `spec.schedulerName`.
- This matters when you need custom placement logic.

Quick checks:

```bash
kubectl get pods -n kube-system
kubectl get pod <pod> -o yaml
```

## Scheduler Profiles

- Scheduler profiles let one scheduler process use different plugin configurations.
- In practice, you should understand that scheduling behavior can be customized without deploying separate binaries for every case.

## Static Pods and Scheduling

- Static pods are managed directly by the kubelet.
- They do not go through the scheduler.
- They are important for control-plane components in kubeadm-based clusters.

## Admission Controllers and Scheduling

- Admission happens before scheduling.
- Mutating controllers can change a pod before it is stored.
- Validating controllers can reject the request.
- This matters because not every placement issue is a scheduler problem.

## Fast Troubleshooting Checklist

- check `nodeSelector`
- check taints and tolerations
- check node affinity rules
- check resource requests
- check PVC binding state
- check priority and preemption events
- check whether admission mutated or rejected the object