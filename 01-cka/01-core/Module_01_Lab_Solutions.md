# Module 01 - Lab Solutions

## Lab 1: Identify control plane pods
Commands:
- kubectl get pods -n kube-system -o wide
- kubectl get pods -n kube-system | grep -E "api|etcd|scheduler|controller"

What to note:
- kube-apiserver, kube-scheduler, kube-controller-manager, etcd.
- These are often static pods on control plane nodes.

## Lab 2: Trace a Deployment flow
Steps:
1) Create a deployment:
   - kubectl create deployment web --image=nginx:1.25
2) Watch events:
   - kubectl get events --sort-by=.metadata.creationTimestamp
3) Inspect ReplicaSet:
   - kubectl get rs -l app=web
4) Inspect pods:
   - kubectl get pods -l app=web -o wide

## Lab 3: Inspect node conditions
Commands:
- kubectl get nodes
- kubectl describe node <node>

What to note:
- Ready, DiskPressure, MemoryPressure, PIDPressure.

## Lab 4: Pod lifecycle via events
YAML:
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: demo
spec:
  containers:
  - name: app
    image: busybox:1.36
    command: ["sh", "-c", "sleep 15"]
```
Commands:
- kubectl apply -f pod.yaml
- kubectl get events --sort-by=.metadata.creationTimestamp

## Lab 5: Verify kube-proxy mode
Commands:
- kubectl -n kube-system get cm kube-proxy -o yaml
- kubectl -n kube-system get pods -l k8s-app=kube-proxy -o wide

What to note:
- Look for mode: iptables or ipvs in config.
