# Topic Commands Template

## Setup

```bash
# Always set context/namespace first
kubectl config use-context <context>
kubectl config set-context --current --namespace=<ns>
```

## Build Fast

```bash
# Generate starter YAML
kubectl create <resource> <name> --dry-run=client -o yaml > <resource>.yaml
```

## Apply + Verify Loop

```bash
kubectl apply -f <resource>.yaml
kubectl get <resource> <name> -o yaml
kubectl describe <resource> <name>
```

## Debug Shortcuts

```bash
kubectl get events --sort-by=.metadata.creationTimestamp
kubectl logs <pod> --tail=80
kubectl describe pod <pod>
```

## Cleanup

```bash
kubectl delete -f <resource>.yaml
```
