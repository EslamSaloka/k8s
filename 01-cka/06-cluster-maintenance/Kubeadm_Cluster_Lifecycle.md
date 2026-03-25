# Kubeadm — Cluster Lifecycle

---

## kubeadm init (Cluster Bootstrap)

```bash
# 1. Initialize the control plane
kubeadm init \
  --pod-network-cidr=192.168.0.0/16 \
  --apiserver-advertise-address=<CONTROL_PLANE_IP>

# 2. Set up kubeconfig (run as your user, not root)
mkdir -p $HOME/.kube
cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
chown $(id -u):$(id -g) $HOME/.kube/config

# 3. Install a CNI (e.g. Calico)
kubectl apply -f https://docs.projectcalico.org/manifests/calico.yaml

# 4. Get the join command for workers
kubeadm token create --print-join-command
```

---

## kubeadm join (Worker Node)

```bash
# On each worker node (from the output of --print-join-command):
kubeadm join <API_IP>:6443 \
  --token <token> \
  --discovery-token-ca-cert-hash sha256:<hash>
```

---

## Cluster Upgrade — Step by Step

### Version skew policy
- kube-apiserver is the reference version
- kubelet/kube-proxy can be at most 2 minor versions behind apiserver
- kubectl can be 1 minor version ahead or behind
- Always upgrade control plane first, then nodes

### Upgrade Control Plane

```bash
# 1. Check available versions
kubeadm upgrade plan

# 2. Upgrade kubeadm on control plane node
apt-mark unhold kubeadm && \
apt-get update && apt-get install -y kubeadm=1.XX.0-00 && \
apt-mark hold kubeadm

# 3. Apply the upgrade
kubeadm upgrade apply v1.XX.0

# 4. Upgrade kubelet and kubectl
apt-mark unhold kubelet kubectl && \
apt-get install -y kubelet=1.XX.0-00 kubectl=1.XX.0-00 && \
apt-mark hold kubelet kubectl

# 5. Restart kubelet
systemctl daemon-reload
systemctl restart kubelet

# 6. Verify
kubectl get nodes
```

### Upgrade Worker Nodes (one at a time)

```bash
# On control plane: drain the worker
kubectl drain node1 --ignore-daemonsets --delete-emptydir-data

# On the worker node:
apt-mark unhold kubeadm && apt-get install -y kubeadm=1.XX.0-00 && apt-mark hold kubeadm
kubeadm upgrade node
apt-mark unhold kubelet kubectl && apt-get install -y kubelet=1.XX.0-00 kubectl=1.XX.0-00 && apt-mark hold kubelet kubectl
systemctl daemon-reload && systemctl restart kubelet

# Back on control plane: uncordon the worker
kubectl uncordon node1

# Verify all nodes on new version
kubectl get nodes
```

---

## Safe Node Maintenance

```bash
# Prevent new pods from scheduling
kubectl cordon <node>

# Evict all pods safely (respects PDB, graceful termination)
kubectl drain <node> --ignore-daemonsets --delete-emptydir-data

# Do maintenance (patch OS, replace hardware, etc.)

# Return node to service
kubectl uncordon <node>
```

---

## High Availability (HA) Control Plane

- HA requires **3 or more** control plane nodes (always odd number for etcd quorum)
- A load balancer must sit in front of the API servers
- etcd can be stacked (on control plane nodes) or external

**Stacked etcd** (simpler, used in most labs):
```
Control Plane Node 1: kube-apiserver + etcd
Control Plane Node 2: kube-apiserver + etcd
Control Plane Node 3: kube-apiserver + etcd
         ↑
Load Balancer (VIP / HAProxy / cloud LB)
```

**External etcd** (more resilient, harder to manage):
```
Control Plane Nodes: kube-apiserver only
Separate etcd cluster: 3 dedicated etcd nodes
```

Init HA cluster:
```bash
kubeadm init \
  --control-plane-endpoint="LOAD_BALANCER_DNS:6443" \
  --upload-certs \
  --pod-network-cidr=192.168.0.0/16
```

Join additional control plane node:
```bash
kubeadm join <LB>:6443 \
  --token <token> \
  --discovery-token-ca-cert-hash sha256:<hash> \
  --control-plane \
  --certificate-key <cert-key>
```

---

## Certificate Management

```bash
# Check certificate expiry
kubeadm certs check-expiration

# Renew all certificates
kubeadm certs renew all

# Renew specific cert
kubeadm certs renew apiserver
```

---

## Useful Verification Commands After Upgrade

```bash
kubectl get nodes                        # all nodes show new version
kubectl get pods -n kube-system          # system pods healthy
kubectl version --short                  # client and server versions
kubectl cluster-info                     # API server reachable
systemctl status kubelet                 # kubelet running on each node
```

---

## Common Pitfalls

| Pitfall | Fix |
|---------|-----|
| Skip etcd backup before upgrade | Always run `etcdctl snapshot save` first |
| Upgrade worker before control plane | Control plane must be upgraded first |
| Forget to restart kubelet after upgrade | `systemctl daemon-reload && systemctl restart kubelet` |
| Version skew violation | Check `kubeadm upgrade plan` before proceeding |
| Drain fails due to pods with local storage | Add `--delete-emptydir-data` flag |

## What kubeadm is for

- kubeadm bootstraps a Kubernetes cluster.
- It is commonly used for self-managed lab and production-style clusters.
- It does not replace node provisioning, OS prep, or lifecycle automation tools.

## Basic Flow

1. prepare hosts
2. install container runtime
3. install kubeadm, kubelet, kubectl
4. initialize control plane
5. install CNI
6. join worker nodes

## Core Commands

```bash
kubeadm init
kubeadm token create --print-join-command
kubeadm join ...
kubeadm upgrade plan
kubeadm upgrade apply <version>
kubectl drain <node> --ignore-daemonsets
kubectl uncordon <node>
```

## High Availability Basics

- HA control plane needs multiple control-plane nodes.
- You also need a stable control-plane endpoint, usually a load balancer.
- etcd can be stacked on control-plane nodes or external.

## Upgrade Flow

1. back up etcd
2. check version skew policy
3. run `kubeadm upgrade plan`
4. upgrade control plane
5. drain and upgrade worker nodes one by one
6. verify cluster health after each stage

## Safe Node Maintenance

- cordon stops new scheduling
- drain evicts workloads safely
- uncordon returns the node to service

## Common Failure Points

- skipping etcd backup
- ignoring version skew
- forgetting to reinstall or restart node components
- draining nodes that host unmanaged or local-storage workloads without checking impact

## What to Practice

- reading a join command
- documenting upgrade order
- simulating drain and uncordon
- explaining stacked vs external etcd