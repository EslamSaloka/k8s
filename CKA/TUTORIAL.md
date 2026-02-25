# CKA Full Tutorial (3-Day Crash)

This is a practical, hands-on tutorial focused on the most tested CKA skills.
Follow the order and execute every command.

## 0) Fast Setup
- Always start with context check:
  - kubectl config get-contexts
  - kubectl config current-context
- Set a short alias (optional):
  - alias k=kubectl
- Use --dry-run=client -o yaml to generate and edit fast.

## 1) Pods and kubectl fluency
### Create a pod fast
- kubectl run web --image=nginx:1.25 --restart=Never
- kubectl get pods -o wide
- kubectl describe pod web

### Exec and logs
- kubectl exec -it web -- sh
- kubectl logs web

### Edit a pod
- kubectl edit pod web

### Delete
- kubectl delete pod web

## 2) Deployments
### Create, scale, update
- kubectl create deployment api --image=nginx:1.25
- kubectl scale deployment api --replicas=3
- kubectl set image deployment/api nginx=nginx:1.26

### Rollback
- kubectl rollout status deployment/api
- kubectl rollout undo deployment/api

### Expose as service
- kubectl expose deployment api --port=80 --target-port=80 --type=ClusterIP
- kubectl get svc

## 3) Labels and selectors
- kubectl label pod web tier=frontend
- kubectl get pods -l tier=frontend

## 4) ConfigMap and Secret
### Create ConfigMap
- kubectl create configmap app-config --from-literal=MODE=prod

### Create Secret
- kubectl create secret generic app-secret --from-literal=PASSWORD=admin123

### Use in a pod (env)
- kubectl run cm-demo --image=busybox:1.36 --restart=Never --dry-run=client -o yaml > cm-demo.yaml
- Edit cm-demo.yaml to add envFrom:
  - configMapRef: app-config
  - secretRef: app-secret
- kubectl apply -f cm-demo.yaml

## 5) Storage (PV/PVC)
### Create PV and PVC
Create pv.yaml
- apiVersion: v1
- kind: PersistentVolume
- metadata:
-   name: pv-demo
- spec:
-   capacity:
-     storage: 1Gi
-   accessModes:
-   - ReadWriteOnce
-   hostPath:
-     path: /tmp/pv-demo

Create pvc.yaml
- apiVersion: v1
- kind: PersistentVolumeClaim
- metadata:
-   name: pvc-demo
- spec:
-   accessModes:
-   - ReadWriteOnce
-   resources:
-     requests:
-       storage: 1Gi

Apply and verify
- kubectl apply -f pv.yaml
- kubectl apply -f pvc.yaml
- kubectl get pv,pvc

### Mount PVC in a pod
- kubectl run pvc-pod --image=busybox:1.36 --restart=Never --dry-run=client -o yaml > pvc-pod.yaml
- Edit pvc-pod.yaml: add volume + volumeMount using pvc-demo
- kubectl apply -f pvc-pod.yaml

## 6) Scheduling and node maintenance
### Taints and tolerations
- kubectl taint nodes <node-name> special=true:NoSchedule
- Create a pod with toleration to schedule there.

### nodeSelector
- kubectl label nodes <node-name> disktype=ssd
- Add nodeSelector: disktype=ssd in pod spec.

### Cordon and drain
- kubectl cordon <node-name>
- kubectl drain <node-name> --ignore-daemonsets --delete-emptydir-data
- kubectl uncordon <node-name>

## 7) RBAC
### Create a ServiceAccount
- kubectl create sa reader

### Create Role and RoleBinding (namespace only)
- kubectl create role pod-reader --verb=get,list,watch --resource=pods
- kubectl create rolebinding read-pods --role=pod-reader --serviceaccount=default:reader

### Test using impersonation
- kubectl auth can-i list pods --as=system:serviceaccount:default:reader

## 8) Troubleshooting
### Common checks
- kubectl get pods -o wide
- kubectl describe pod <pod>
- kubectl logs <pod>
- kubectl exec -it <pod> -- sh
- kubectl get events --sort-by=.metadata.creationTimestamp

### Pod CrashLoopBackOff
- Check logs and command/args
- Verify image and env vars

### ImagePullBackOff
- Check image name, tag, and registry access

### DNS check from a pod
- kubectl run dns-test --image=busybox:1.36 --restart=Never -- sh -c "nslookup kubernetes.default"

## 9) Networking basics
### Services
- ClusterIP for internal traffic
- NodePort for node access
- Headless service for direct pod DNS

### Endpoints
- kubectl get endpoints

### NetworkPolicy (basic)
- Allow ingress only from specific pods using labels

## 10) Full Mock (2 hours)
- 15-20 tasks, timeboxed
- Redo every failed task until fast and clean

## Speed Tips
- Use: kubectl create -o yaml --dry-run=client
- Edit YAML quickly, then apply
- Always verify with get/describe/logs
