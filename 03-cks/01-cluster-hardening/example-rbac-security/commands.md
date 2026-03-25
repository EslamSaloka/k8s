# Commands: RBAC Security

## Apply resources

```bash
kubectl apply -f examples/01-namespace-sa.yaml
kubectl apply -f examples/02-role.yaml
kubectl apply -f examples/03-rolebinding.yaml
```

## Verify permissions

```bash
kubectl auth can-i get pods --as=system:serviceaccount:rbac-demo:viewer -n rbac-demo
kubectl auth can-i delete pods --as=system:serviceaccount:rbac-demo:viewer -n rbac-demo
kubectl auth can-i get secrets --as=system:serviceaccount:rbac-demo:viewer -n rbac-demo
```

Expected:

- get/list/watch pods = yes
- delete pods = no
- get secrets = no

## Cleanup

```bash
kubectl delete -f examples/03-rolebinding.yaml
kubectl delete -f examples/02-role.yaml
kubectl delete -f examples/01-namespace-sa.yaml
```
