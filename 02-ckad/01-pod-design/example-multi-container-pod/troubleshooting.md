# Troubleshooting: Multi-Container Pod

## Sidecar shows no logs

### Cause

Writer and sidecar are not mounted to same volume path or volume name mismatch.

### Fix

```bash
kubectl get pod mc-log-pod -o yaml | grep -A12 volumeMounts
kubectl get pod mc-log-pod -o yaml | grep -A8 volumes
```

## One container CrashLoopBackOff

### Cause

Bad command in only one container.

### Fix

```bash
kubectl logs mc-log-pod -c <container-name> --previous
kubectl describe pod mc-log-pod
```

## Pod Ready=false

### Cause

One container not healthy, readiness failing.

### Fix

Check per-container state:

```bash
kubectl get pod mc-log-pod -o jsonpath='{.status.containerStatuses[*].state}'
```
