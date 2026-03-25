# CKAD Module 02 - Lab Solutions

## Lab 1: Sidecar log shipper
YAML:
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: sidecar-demo
spec:
  volumes:
  - name: logs
    emptyDir: {}
  containers:
  - name: app
    image: busybox:1.36
    command: ["sh", "-c", "while true; do date >> /var/log/app.log; sleep 5; done"]
    volumeMounts:
    - name: logs
      mountPath: /var/log
  - name: shipper
    image: busybox:1.36
    command: ["sh", "-c", "tail -f /var/log/app.log"]
    volumeMounts:
    - name: logs
      mountPath: /var/log
```

## Lab 2: Init container
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
  - name: init
    image: busybox:1.36
    command: ["sh", "-c", "echo ready > /work/ready.txt"]
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

## Lab 3: postStart hook
YAML snippet:
```yaml
lifecycle:
  postStart:
    exec:
      command: ["sh", "-c", "echo started > /work/started.txt"]
```

## Lab 4: Shared emptyDir
Commands:
- kubectl exec -it sidecar-demo -c app -- sh -c "ls -l /var/log"
- kubectl exec -it sidecar-demo -c shipper -- sh -c "tail -n 1 /var/log/app.log"

## Lab 5: Ambassador pattern (theory)
- Use an nginx sidecar to proxy to an external API endpoint.
- App uses localhost to call proxy.
