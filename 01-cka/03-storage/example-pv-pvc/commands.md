# Commands: PV/PVC

## Create and apply

```bash
kubectl apply -f examples/01-pv.yaml
kubectl apply -f examples/02-pvc.yaml
kubectl get pv,pvc
```

## Verify bind details

```bash
kubectl describe pv demo-pv
kubectl describe pvc demo-pvc
```

## Create pod that uses pvc

```bash
kubectl apply -f examples/03-pod-uses-pvc.yaml
kubectl get pod pvc-app
kubectl exec pvc-app -- sh -c 'echo hello > /data/hello.txt && cat /data/hello.txt'
```

## Cleanup

```bash
kubectl delete -f examples/03-pod-uses-pvc.yaml
kubectl delete -f examples/02-pvc.yaml
kubectl delete -f examples/01-pv.yaml
```
