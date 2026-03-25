# Troubleshooting: RBAC Security

## can-i returns no unexpectedly

### Cause

Wrong subject identity string or wrong namespace.

### Fix

```bash
kubectl get rolebinding -n rbac-demo
kubectl describe rolebinding pod-view-binding -n rbac-demo
```

Subject must be:

- `kind: ServiceAccount`
- `name: viewer`
- `namespace: rbac-demo`

## Access too broad

### Cause

ClusterRoleBinding used by mistake.

### Fix

```bash
kubectl get clusterrolebinding
kubectl delete clusterrolebinding <name>
```

Replace with RoleBinding in target namespace.

## Verb/resource mismatch

### Cause

Role lacks required verbs or resources.

### Fix

```bash
kubectl describe role pod-view-role -n rbac-demo
```

Confirm resources include `pods` and verbs include only required operations.
