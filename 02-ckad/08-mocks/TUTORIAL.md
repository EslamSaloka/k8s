# CKAD Full Tutorial (App Developer)

This guide focuses on application design, delivery, and day-to-day developer workflows on Kubernetes.
For deep detail, use the module pages and labs listed in CKAD_Path.md.
Do the theory quickly, then spend most time on hands-on labs.

## 0) Fast Setup
- Check context:
  - kubectl config get-contexts
  - kubectl config current-context
- Optional alias:
  - alias k=kubectl
- Generate YAML fast:
  - kubectl create ... --dry-run=client -o yaml

## 1) Pods and Multi-Container Patterns
### Single pod
- kubectl run web --image=nginx:1.25 --restart=Never
- kubectl get pods -o wide

### Sidecar pattern
- One container runs app, another ships logs or provides helper.
- Shared volume using emptyDir.

### Init container
- Runs before app container, good for migrations and setup.

Practice
- Create a pod with init container that writes a file and app reads it.

## 2) Deployments and Rollouts
### Create and scale
- kubectl create deployment api --image=nginx:1.25
- kubectl scale deployment api --replicas=3

### Update and rollback
- kubectl set image deployment/api nginx=nginx:1.26
- kubectl rollout status deployment/api
- kubectl rollout undo deployment/api

Practice
- Create a bad image update and roll back.

## 3) Probes and Lifecycle Hooks
### Liveness and readiness
- Use HTTP or exec probes.
- Readiness gates traffic; liveness restarts.

### Hooks
- preStop: delay shutdown.
- postStart: run initialization.

Practice
- Add readiness probe and check endpoints change.

## 4) ConfigMaps and Secrets for Apps
### ConfigMap
- For non-sensitive config.
- Use envFrom or volume.

### Secret
- Sensitive data; use env or volume.

Practice
- Mount a ConfigMap and Secret as files.

## 5) Services and Ingress (App Facing)
### Services
- ClusterIP for internal access.
- NodePort for node access.

### Ingress
- Host/path-based routing.
- Requires ingress controller.

Practice
- Expose an app with a Service.
- Add Ingress and test with host header.

## 6) Jobs and CronJobs
### Job
- One-time task like DB migration.

### CronJob
- Scheduled tasks.

Practice
- Run a CronJob every minute and check Jobs.

## 7) Resource Requests, Limits, and HPA
### Requests and limits
- Requests affect scheduling.
- Limits cap usage.

### HPA
- Scale based on CPU or custom metrics.

Practice
- Create HPA and generate load.

## 8) Observability for Apps
### Logs
- kubectl logs and previous logs.

### Metrics
- metrics-server, kubectl top.

### Events
- Use events for quick diagnosis.

Practice
- Debug a CrashLoopBackOff using describe + logs.

## 9) Delivery Patterns
### Rolling update
- Default for Deployments.

### Blue/green
- Two deployments and swap service selector.

### Canary
- Small traffic percentage to new version.

Practice
- Create two deployments and swap service selector.

## 10) CKAD Exam Skills
- Work fast with kubectl apply and dry-run YAML.
- Always verify after every change.
- Use labels and selectors carefully.

## Quick Labs (Checklist)
1) Create a deployment and scale it.
2) Add liveness and readiness probes.
3) Use ConfigMap and Secret in a pod.
4) Create a Job and CronJob.
5) Expose an app with Service and Ingress.
6) Add resource requests/limits and HPA.
7) Perform rollback and verify.
8) Implement a blue/green selector swap.

## Speed Tips
- Use kubectl create --dry-run=client -o yaml
- Keep YAML minimal
- Use kubectl explain
- Use kubectl get events for fast clues
