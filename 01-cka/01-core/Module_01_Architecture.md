# Module 01 - Architecture and Control Plane

## Goals
- Understand how Kubernetes is built and how requests flow through the system.
- Know every control plane and node component and what it does.
- Understand reconciliation and why desired state matters.

## Core ideas
- Kubernetes is a distributed control system for containers.
- You declare desired state in the API; controllers converge actual state.
- Most failures are observable by reading object status and events.

## Control plane components (deep detail)
### kube-apiserver
- Single entry point for all requests.
- Handles authentication, authorization, admission, validation.
- Persists objects to etcd and serves watch streams.
- Everything in the cluster is API-driven (even internal components).

### etcd
- Strongly consistent key-value store.
- Stores all cluster state (spec and status).
- Uses raft consensus; writes require quorum.
- Protect with backup, encryption at rest, and access controls.

### kube-scheduler
- Watches for pods without a node assignment.
- Filters nodes (taints, resource limits, affinity).
- Scores nodes (least loaded, topology spread, etc.).
- Binds pods to nodes by writing to the API.

### kube-controller-manager
- Runs many control loops (deployments, replicas, nodes, endpoints).
- Controllers reconcile observed state with desired state.
- Examples: ReplicaSet controller, Node controller, EndpointSlice controller.

### cloud-controller-manager
- Runs cloud specific controllers (load balancers, routes, volumes).
- Separates cloud provider logic from core Kubernetes.

## Node components (deep detail)
### kubelet
- Node agent that watches API for pod specs.
- Talks to container runtime via CRI.
- Mounts volumes, starts containers, reports status.
- Runs liveness/readiness/startup probes.

### kube-proxy
- Programs iptables or IPVS rules for Services.
- Load balances Service traffic across pod endpoints.

### Container runtime
- containerd or CRI-O are common.
- Kubernetes interacts through CRI (Container Runtime Interface).

## API request flow (mental model)
1) You send YAML to API server.
2) AuthN/AuthZ and admission happen.
3) Object is stored in etcd.
4) Controllers see the new object and act.
5) Scheduler assigns pod to node.
6) Kubelet runs containers, reports status.
7) Endpoints and service routing update.

## Static pods
- Pods defined on a node via a local manifest file.
- Kubelet reads them directly, not via the API.
- Control plane components often run as static pods on self-managed clusters.

## Certificates and identity
- Control plane uses TLS certificates for component-to-component auth.
- kubeconfig files store cluster, user, context, and credentials.
- Service accounts provide identity for pods.

## Practice (hands-on)
1) Inspect the cluster:
   - kubectl cluster-info
   - kubectl get nodes -o wide
2) See control plane pods:
   - kubectl get pods -n kube-system
3) View component statuses:
   - kubectl get componentstatuses

## Common pitfalls
- Confusing desired state (spec) with actual state (status).
- Forgetting that all changes go through the API server.
- Ignoring events and status conditions when debugging.

## Self-test (20 questions)
1) What is the single entry point to a cluster?
2) Why does etcd need quorum for writes?
3) What is the role of the scheduler?
4) How do controllers know what to reconcile?
5) What does kubelet do that the API server does not?
6) What is the difference between spec and status?
7) Why are static pods used for the control plane?
8) What is the CRI and why does it matter?
9) What does kube-proxy program on nodes?
10) What is a watch stream and why is it efficient?
11) Which component performs admission control?
12) Why is TLS everywhere in the control plane?
13) What data is stored in etcd?
14) What is the purpose of the cloud controller manager?
15) How does a pod get bound to a node?
16) What is the role of a service account?
17) What is the difference between authn and authz?
18) How do controllers avoid tight loops or thrashing?
19) Why are controllers eventually consistent?
20) What are EndpointSlices used for?

## Labs (5)
1) Identify all control plane pods and map them to components.
2) Explain the flow of a new Deployment from YAML to running pods.
3) Inspect node conditions and explain each condition.
4) Create a pod and trace its lifecycle in events.
5) Verify kube-proxy mode (iptables or IPVS) on your cluster.
