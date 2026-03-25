# Commands: Multi-Container Pod

## Apply

```bash
kubectl apply -f examples/01-multi-container-pod.yaml
kubectl get pod mc-log-pod
```

## Verify containers

```bash
kubectl get pod mc-log-pod -o jsonpath='{.spec.containers[*].name}'
kubectl logs mc-log-pod -c writer --tail=20
kubectl logs mc-log-pod -c log-sidecar --tail=20
```

## Verify shared volume behavior

```bash
kubectl exec mc-log-pod -c writer -- ls /var/log/app
kubectl exec mc-log-pod -c log-sidecar -- ls /var/log/app
```

## Cleanup

```bash
kubectl delete -f examples/01-multi-container-pod.yaml
```
