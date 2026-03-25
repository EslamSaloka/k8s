# CKAD Last Week Fast Track

## Daily Focus Blocks

1. Pod design and multi-container patterns
2. ConfigMaps/Secrets and environment wiring
3. Probes and pod lifecycle controls
4. Services and ingress routing
5. Jobs/CronJobs and rollout strategies

## Daily Drill (60-90 min)

1. Build 2 app manifests from memory
2. Add probes and resource limits correctly
3. Expose app and validate service routing
4. Do one canary or image update rollback
5. Update one item in `mistakes/ckad-mistakes.md`

## Must-Rehearse Commands

```bash
kubectl run tmp --image=busybox:1.36 --restart=Never -- sh
kubectl expose deploy <name> --port=80 --target-port=8080 --type=ClusterIP
kubectl set image deploy/<name> <container>=<image>
kubectl rollout undo deploy/<name>
```
