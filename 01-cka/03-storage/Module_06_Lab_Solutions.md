# Module 06 - Lab Solutions

## Lab 1: PV and PVC
pv.yaml:
```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv-demo
spec:
  capacity:
    storage: 1Gi
  accessModes:
  - ReadWriteOnce
  hostPath:
    path: /tmp/pv-demo
```

pvc.yaml:
```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: pvc-demo
spec:
  accessModes:
  - ReadWriteOnce
  resources:
    requests:
      storage: 1Gi
```

Commands:
- kubectl apply -f pv.yaml
- kubectl apply -f pvc.yaml
- kubectl get pv,pvc

## Lab 2: Mount PVC
pod.yaml:
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: pvc-pod
spec:
  volumes:
  - name: data
    persistentVolumeClaim:
      claimName: pvc-demo
  containers:
  - name: app
    image: busybox:1.36
    command: ["sh", "-c", "echo hi > /data/hi.txt && sleep 3600"]
    volumeMounts:
    - name: data
      mountPath: /data
```

## Lab 3: Expand PVC
Commands:
- kubectl patch pvc pvc-demo -p '{"spec":{"resources":{"requests":{"storage":"2Gi"}}}}'
- kubectl get pvc pvc-demo

## Lab 4: Inspect StorageClass
Commands:
- kubectl get sc
- kubectl describe sc <class>

## Lab 5: Binding failure
Create PVC with mismatched accessModes and observe Pending.
