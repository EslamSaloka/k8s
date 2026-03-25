# CKS Gap Additions (Objective Completeness)

This file fills gaps from the latest CKS objectives.

## Cluster setup domain
- CIS benchmark checks for API server, kubelet, etcd, CoreDNS.
- Protect node metadata endpoints.
- Verify platform binaries before deploy.
- Ingress with TLS and secure defaults.

## Static analysis tools
- Kubesec and KubeLinter for static analysis.
- Integrate in CI pipeline.

## Pod-to-pod encryption
- Use Cilium or Istio for mTLS if required by policy.

## Platform binary verification
- Use checksums and signed releases.
- Verify before installing kubeadm/kubelet/kubectl.
