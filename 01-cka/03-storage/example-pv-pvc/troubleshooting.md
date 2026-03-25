# Troubleshooting: PV/PVC

## PVC Pending

### Cause

No matching PV or StorageClass mismatch.

### Fix

```bash
kubectl describe pvc demo-pvc
kubectl get pv
```

Check:

- `storageClassName` matches
- PV capacity >= PVC request
- Access mode compatible

## Pod Pending due to volume

### Cause

PVC not bound.

### Fix

```bash
kubectl describe pod pvc-app
kubectl get pvc demo-pvc
```

Do not debug pod first if PVC is not `Bound`.

## Data not persisted

### Cause

Mounted wrong path or wrong claim name.

### Fix

```bash
kubectl get pod pvc-app -o yaml | grep -A6 volumeMounts
kubectl get pod pvc-app -o yaml | grep -A8 volumes
```
