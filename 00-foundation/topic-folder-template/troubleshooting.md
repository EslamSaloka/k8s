# Topic Troubleshooting Template

## Symptom -> Cause -> Fix

## 1) Resource not found

- Cause: wrong namespace/context
- Fix:

```bash
kubectl config current-context
kubectl config view --minify | grep namespace
```

## 2) Resource created but not working

- Cause: wrong field values
- Fix:

```bash
kubectl describe <resource> <name>
kubectl get <resource> <name> -o yaml
```

## 3) Service reachable failure

- Cause: selector mismatch or targetPort mismatch
- Fix:

```bash
kubectl get pod --show-labels
kubectl describe svc <svc>
kubectl get endpoints <svc>
```

## 4) Pod Pending

- Cause: scheduling/storage constraints
- Fix:

```bash
kubectl describe pod <pod>
kubectl get pvc
kubectl describe node <node>
```

## Last Known Good Command Set

Keep 3-5 commands that solved this topic most often.
