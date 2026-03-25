# Kubernetes Professional Path (Beginner to Pro)

This guide is a deep, structured path that builds both theory and hands-on skill. It assumes you are on Windows and will practice locally with kind/minikube/k3d, using bash.

## How to Use This
- Do each module in order.
- For every concept, read the theory section, then do the practice tasks.
- Keep a personal lab log: commands, YAML files, notes, and fixes.

## Module Pages
- [Module_01_Architecture.md](Module_01_Architecture.md)
- [Module_02_Objects_YAML_kubectl.md](Module_02_Objects_YAML_kubectl.md)
- [Module_03_Pods_Containers.md](Module_03_Pods_Containers.md)
- [Module_04_Workloads.md](Module_04_Workloads.md)
- [Module_05_Networking_Services.md](Module_05_Networking_Services.md)
- [Module_06_Storage.md](Module_06_Storage.md)
- [Module_07_Config_Secrets.md](Module_07_Config_Secrets.md)
- [Module_08_Scheduling.md](Module_08_Scheduling.md)
- [Module_09_Security_RBAC.md](Module_09_Security_RBAC.md)
- [Module_10_Observability.md](Module_10_Observability.md)
- [Module_11_Troubleshooting.md](Module_11_Troubleshooting.md)
- [Module_12_Advanced_Topics.md](Module_12_Advanced_Topics.md)
- [Module_13_Packaging_GitOps.md](Module_13_Packaging_GitOps.md)
- [Module_14_Cluster_Operations.md](Module_14_Cluster_Operations.md)
- [Module_15_Policy_Governance.md](Module_15_Policy_Governance.md)
- [Module_16_Multi_Cluster.md](Module_16_Multi_Cluster.md)

## Lab Solution Pages
- [Module_01_Lab_Solutions.md](Module_01_Lab_Solutions.md)
- [Module_02_Lab_Solutions.md](Module_02_Lab_Solutions.md)
- [Module_03_Lab_Solutions.md](Module_03_Lab_Solutions.md)
- [Module_04_Lab_Solutions.md](Module_04_Lab_Solutions.md)
- [Module_05_Lab_Solutions.md](Module_05_Lab_Solutions.md)
- [Module_06_Lab_Solutions.md](Module_06_Lab_Solutions.md)
- [Module_07_Lab_Solutions.md](Module_07_Lab_Solutions.md)
- [Module_08_Lab_Solutions.md](Module_08_Lab_Solutions.md)
- [Module_09_Lab_Solutions.md](Module_09_Lab_Solutions.md)
- [Module_10_Lab_Solutions.md](Module_10_Lab_Solutions.md)
- [Module_11_Lab_Solutions.md](Module_11_Lab_Solutions.md)
- [Module_12_Lab_Solutions.md](Module_12_Lab_Solutions.md)
- [Module_13_Lab_Solutions.md](Module_13_Lab_Solutions.md)
- [Module_14_Lab_Solutions.md](Module_14_Lab_Solutions.md)
- [Module_15_Lab_Solutions.md](Module_15_Lab_Solutions.md)
- [Module_16_Lab_Solutions.md](Module_16_Lab_Solutions.md)

## Question Bank
- [Question_Bank_Index.md](Question_Bank_Index.md)

## Coverage and Mocks
- [Coverage_Matrix.md](Coverage_Matrix.md)
- [CKA_Gap_Additions.md](CKA_Gap_Additions.md)
- [Mock_Exams.md](Mock_Exams.md)

## Tooling Setup (Local)
Recommended local lab options (pick one):
- kind (Kubernetes in Docker)
- minikube (VM or Docker driver)
- k3d (k3s in Docker)

Suggested installs:
- kubectl
- kind or minikube or k3d
- Docker Desktop
- k9s (optional UI)
- yq (YAML processor)

### Lab choice guide
- Use kind if you want fast, lightweight clusters for YAML and API practice.
- Use minikube if you want add-ons and a more "full" single-node lab.
- Use k3d if you want k3s behavior and very fast startup.

### Installation steps (Linux bash)
1) Install kubectl:
   - curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
   - sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
   - kubectl version --client
2) Install Docker:
   - Follow the official Docker Engine install for your distro.
   - sudo usermod -aG docker $USER
3) Install one local cluster tool:
   - kind: curl -Lo ./kind https://kind.sigs.k8s.io/dl/latest/kind-linux-amd64
     sudo install -o root -g root -m 0755 kind /usr/local/bin/kind
   - minikube: curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
     sudo install minikube-linux-amd64 /usr/local/bin/minikube
   - k3d: curl -s https://raw.githubusercontent.com/k3d-io/k3d/main/install.sh | bash

### Installation steps (Windows with WSL)
1) Install Docker Desktop for Windows and enable WSL integration.
2) Install WSL2 and a Linux distro (Ubuntu recommended).
3) Inside WSL, follow the Linux steps above.

### Create a local cluster
- kind:
  - kind create cluster --name dev
  - kubectl cluster-info --context kind-dev
- minikube:
  - minikube start --driver=docker
  - kubectl get nodes
- k3d:
  - k3d cluster create dev
  - kubectl get nodes

## Core Concepts (High-Level Map)
1) Cluster architecture and control plane
2) Workloads: pods, deployments, statefulsets, daemonsets
3) Networking: CNI, services, DNS, ingress
4) Storage: PV, PVC, StorageClass, CSI
5) Security: RBAC, admission, pod security
6) Observability: logs, metrics, tracing
7) Scaling: HPA, VPA, cluster autoscaler
8) Operations: upgrades, backups, policies
9) Advanced topics: custom resources, operators
10) Packaging and release: Helm, Kustomize, GitOps
11) Cluster lifecycle: provisioning, upgrades, disaster recovery
12) Multi-cluster and federation basics

---

# Module 1: Kubernetes Architecture (Theory First)
## What Kubernetes is
- An orchestration system for scheduling and managing containers across nodes.
- It provides a declarative API where you define desired state, and controllers make it happen.

## Key components
Control plane:
- API Server: the front door. All requests go here.
- etcd: key-value store holding cluster state.
- Scheduler: assigns pods to nodes.
- Controller Manager: runs reconciliation loops for resources.
- Cloud Controller Manager (if cloud): integrates with cloud APIs.

Worker node:
- kubelet: node agent that runs pods.
- kube-proxy: manages service networking rules.
- Container runtime: containerd or CRI-O.

## Why controllers matter
- Kubernetes is control-loop driven.
- You declare desired state, controllers correct drift.

## API machinery basics
- apiVersion and kind route requests to the correct API group.
- The API server validates and persists desired state.
- Controllers watch resources and reconcile actual state.

## Control plane data flow (mental model)
1) You submit YAML to the API server.
2) Validation and admission happen.
3) etcd stores the object.
4) Controllers and scheduler react to the change.
5) kubelet runs containers to match spec.

### Practice
- Inspect cluster info:
  - kubectl cluster-info
  - kubectl get nodes -o wide
- Check components:
  - kubectl get pods -n kube-system

---

# Module 2: Objects, YAML, and kubectl
## Objects and declarative config
- Every object is stored in etcd via the API server.
- YAML is a declarative manifest: apiVersion, kind, metadata, spec.

## Important metadata fields
- name: unique in a namespace.
- labels: key/value for grouping and selectors.
- annotations: non-identifying metadata.

## Namespaces
- Logical separation for resources.
- Many policies are applied per-namespace.

## Ownership and garbage collection
- Controllers set ownerReferences.
- Deleting a parent object can delete children.

## kubectl patterns
- kubectl get <type> -o wide
- kubectl describe <type> <name>
- kubectl explain <type>.spec
- kubectl apply -f <file>
- kubectl diff -f <file>

### Practice
- Create a pod via YAML:
  - kubectl run nginx --image=nginx:1.25 --restart=Never --dry-run=client -o yaml > pod.yaml
  - kubectl apply -f pod.yaml
- Get/describe/delete:
  - kubectl get pods
  - kubectl describe pod nginx
  - kubectl delete pod nginx

---

# Module 3: Pods and Containers (Deep Dive)
## Pod basics
- Smallest scheduling unit.
- One or more containers sharing network and storage.

## Pod lifecycle
- Pending -> Running -> Succeeded/Failed.
- CrashLoopBackOff for repeatedly failing containers.

## Probes
- Liveness: restart if unhealthy.
- Readiness: stop traffic until ready.
- Startup: slow boots.

## Resource requests and limits
- Requests affect scheduling.
- Limits cap CPU or memory usage.
- Use realistic values to avoid eviction.

## QoS classes
- Guaranteed: requests = limits for all containers.
- Burstable: some requests set.
- BestEffort: no requests or limits.

### Practice
- Add liveness and readiness probes to a pod.
- Observe pod events:
  - kubectl get events --sort-by=.metadata.creationTimestamp

---

# Module 4: Workloads
## Deployment
- Manages ReplicaSets for stateless pods.
- Supports rolling updates and rollback.

## StatefulSet
- Stable identity and storage for stateful apps.

## DaemonSet
- One pod per node (e.g., log agents).

## Job and CronJob
- Jobs run to completion.
- CronJobs run on schedules.

### Practice
- Create a deployment and scale it.
- Roll back after a bad image update.
- Create a daemonset and verify one pod per node.

---

# Module 5: Services and Networking
## Pod networking model
- Each pod gets its own IP.
- All pods can communicate without NAT.

## Services
- ClusterIP: internal access.
- NodePort: expose via node IP.
- LoadBalancer: cloud-managed external access.
- Headless: DNS returns pod IPs.

## DNS
- kube-dns/CoreDNS provides service discovery.

## kube-proxy and service routing
- iptables or IPVS rules route traffic to pods.
- Session affinity can be enabled.

## CNI (Container Network Interface)
- Plugin responsible for pod IP assignment and routing.
- Examples: Calico, Cilium, Flannel.

### Practice
- Expose a deployment with ClusterIP.
- Test DNS resolution inside a pod.
- Inspect endpoints:
  - kubectl get endpoints

---

# Module 6: Storage
## PV/PVC model
- PV: cluster resource.
- PVC: user claim.
- StorageClass: dynamic provisioning.

## Access modes
- ReadWriteOnce, ReadOnlyMany, ReadWriteMany.

## Reclaim policy
- Retain: keep data after PVC delete.
- Delete: remove storage when PVC is deleted.

## CSI drivers
- External storage plugins for cloud or on-prem.

### Practice
- Create PV and PVC.
- Mount PVC in a pod and write a file.

---

# Module 7: Config and Secrets
## ConfigMap
- Store non-sensitive config.

## Secret
- Store sensitive data (base64 in etcd by default).

## Secret encryption
- Enable encryption at rest for etcd.
- Use KMS in production.

### Practice
- Inject config via env and volume.
- Mount secret as a file.

---

# Module 8: Scheduling
## Scheduler decisions
- nodeSelector, affinity, taints/tolerations.

## Priority and preemption
- Higher priority pods can evict lower priority pods.

### Practice
- Label a node and target it.
- Taint a node and schedule only tolerated pods.

---

# Module 9: Security and RBAC
## RBAC model
- Roles define permissions.
- RoleBindings attach to users or service accounts.

## Pod security
- Pod Security Standards: privileged, baseline, restricted.

## Admission controllers
- Validate and mutate requests.
- Examples: NamespaceLifecycle, ResourceQuota, PodSecurity.

### Practice
- Create a read-only Role and bind to a ServiceAccount.
- Test permissions with kubectl auth can-i.

---

# Module 10: Observability
## Logs
- kubectl logs, kubectl exec, events.

## Metrics
- metrics-server for CPU/mem.
- HPA uses metrics.

## Tracing and profiling
- OpenTelemetry for tracing.
- pprof or eBPF tools for profiling.

### Practice
- Install metrics-server (if not present) and check kubectl top.

---

# Module 11: Troubleshooting
## Common patterns
- ImagePullBackOff: bad image name or registry issues.
- CrashLoopBackOff: bad command, config, or missing dependency.
- Pending: no node capacity, taint, or PVC issues.

## Systematic debugging flow
1) Describe the object and read events.
2) Check logs and container status.
3) Validate labels, selectors, and probes.
4) Verify services and endpoints.
5) Check node conditions and capacity.

### Practice
- Create a failing pod and fix it using logs/describe.

---

# Module 12: Advanced Topics
## Ingress
- Routes HTTP traffic based on host/path.

## CRD and Operators
- Extend Kubernetes with custom resources.

## NetworkPolicy
- Define pod-level traffic rules.

### Practice
- Install an ingress controller and expose a service.
- Create a simple NetworkPolicy with podSelector.

---

# Module 13: Packaging, Release, and GitOps
## Helm
- Package manager for Kubernetes apps.
- Templates and values enable reuse.

## Kustomize
- Layered config without templates.
- Overlays for dev/stage/prod.

## GitOps
- Git is the source of truth.
- Argo CD or Flux reconciles clusters to Git.

### Practice
- Install a Helm chart in a namespace.
- Use kustomize overlays for dev and prod.

---

# Module 14: Cluster Operations and Lifecycle
## Provisioning choices
- Managed cloud control plane vs self-managed.
- Consider upgrades, backups, and security policies.

## Upgrades
- Control plane first, then nodes.
- Always check version skew policy.

## Backup and restore
- etcd snapshots for self-managed clusters.
- Backup PV data separately.

## Disaster recovery
- Restore etcd, then restore PVs and app configs.
- Test restore procedures.

### Practice
- Take a simulated etcd snapshot (theory if local).
- Document restore steps in your lab log.

---

# Module 15: Policy and Governance
## ResourceQuota and LimitRange
- Enforce resource usage boundaries.

## Network policy as default deny
- Start with deny-all and allow only needed traffic.

## PodSecurity and admission
- Use baseline or restricted for most namespaces.

### Practice
- Create a namespace with ResourceQuota and LimitRange.
- Enforce baseline PodSecurity.

---

# Module 16: Multi-Cluster and Federation Basics
## Use cases
- Separate clusters for regions or environments.
- Centralized management via GitOps.

## Kubeconfig contexts
- Manage multiple clusters safely.
- Always verify current context.

---

# Weekly Practice Plan (4 hours/week)
Week 1-2: Modules 1-3
Week 3-4: Modules 4-5
Week 5-6: Modules 6-7
Week 7-8: Modules 8-9
Week 9-10: Modules 10-11
Week 11-12: Module 12 + project
Week 13-14: Modules 13-14
Week 15-16: Modules 15-16

---

# Capstone Projects (Pro Level)
1) Build a multi-tier app: frontend + API + database
2) Add ConfigMap/Secret and rolling updates
3) Add HPA and resource requests/limits
4) Add NetworkPolicy and RBAC
5) Backup and restore a stateful component
6) Release the app using Helm or GitOps

---

# Reference Behaviors to Master
- Write clean YAML by hand
- Debug quickly using logs/describe/exec
- Understand what controllers do behind the scenes
- Know when to use each workload and service type
- Apply least-privilege RBAC
- Track changes using Git and GitOps
