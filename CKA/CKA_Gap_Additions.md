# CKA Gap Additions (Objective Completeness)

This file fills gaps from the latest CKA objectives.

## kubeadm cluster lifecycle (high level)
- Initialize control plane: kubeadm init
- Join worker node: kubeadm join
- Upgrade control plane: kubeadm upgrade plan/apply
- Upgrade kubelet/kubectl on nodes
- Drain/uncordon nodes during upgrades

## Highly available control plane (concept)
- Multiple control plane nodes
- Stacked or external etcd
- Load balancer for API server endpoint

## Extension interfaces (CNI/CSI/CRI)
- CNI: pod networking plugin (Calico, Cilium, Flannel)
- CSI: storage drivers for PV/PVC
- CRI: container runtime interface (containerd, CRI-O)

## Gateway API (basics)
- Newer model for L4/L7 routing (Gateway, HTTPRoute, TCPRoute).
- Works alongside or as evolution of Ingress.

## Verify objective coverage
- If your exam environment uses Gateway API, practice basic routing with HTTPRoute.
