# CKA Last Week Fast Track

## Daily Focus Blocks

1. Cluster operations and node maintenance
2. Scheduling constraints and taints/tolerations
3. Storage (PV/PVC/StorageClass)
4. Networking and services/ingress
5. Troubleshooting flow under time pressure
6. ETCD backup and restore sequence

## Daily Drill (60-90 min)

1. Create 3 resources from scratch using dry-run
2. Solve 2 troubleshooting scenarios
3. Perform one etcd backup/restore simulation
4. Update one mistake in `mistakes/cka-mistakes.md`

## Must-Rehearse Commands

```bash
kubectl drain <node> --ignore-daemonsets --delete-emptydir-data
kubectl uncordon <node>
kubectl top nodes
kubectl get events --sort-by=.metadata.creationTimestamp
kubectl rollout status deploy/<name>
```
