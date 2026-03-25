# Module 03 - Lab Solutions

## Lab 1: Probes
YAML:
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: probe-demo
spec:
  containers:
  - name: web
    image: nginx:1.25
    ports:
    - containerPort: 80
    livenessProbe:
      httpGet:
        path: /
        port: 80
      initialDelaySeconds: 5
      periodSeconds: 10
    readinessProbe:
      httpGet:
        path: /
        port: 80
      initialDelaySeconds: 5
      periodSeconds: 5
```
Commands:
- kubectl apply -f probe.yaml
- kubectl describe pod probe-demo

## Lab 2: CrashLoop and fix
Bad pod:
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: crash-demo
spec:
  containers:
  - name: app
    image: busybox:1.36
    command: ["sh", "-c", "exit 1"]
```
Fix by changing command to sleep:
- kubectl edit pod crash-demo

## Lab 3: Init container
YAML:
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: init-demo
spec:
  volumes:
  - name: work
    emptyDir: {}
  initContainers:
  - name: setup
    image: busybox:1.36
    command: ["sh", "-c", "echo hi > /work/ready.txt"]
    volumeMounts:
    - name: work
      mountPath: /work
  containers:
  - name: app
    image: busybox:1.36
    command: ["sh", "-c", "cat /work/ready.txt && sleep 3600"]
    volumeMounts:
    - name: work
      mountPath: /work
```

## Lab 4: Requests/limits
YAML:
```yaml
resources:
  requests:
    cpu: "100m"
    memory: "128Mi"
  limits:
    cpu: "200m"
    memory: "256Mi"
```
Check QoS:
- kubectl get pod init-demo -o jsonpath='{.status.qosClass}'

## Lab 5: Ephemeral container
Commands:
- kubectl debug -it init-demo --image=busybox:1.36 --target=app
