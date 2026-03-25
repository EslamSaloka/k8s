# Module 04 - Lab Solutions

## Lab 1: Deployment update and rollback
Commands:
- kubectl create deployment api --image=nginx:1.25
- kubectl scale deployment api --replicas=3
- kubectl set image deployment/api nginx=nginx:1.26
- kubectl rollout status deployment/api
- kubectl rollout undo deployment/api

## Lab 2: StatefulSet
YAML:
```yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: web
spec:
  serviceName: web
  replicas: 2
  selector:
    matchLabels:
      app: web
  template:
    metadata:
      labels:
        app: web
    spec:
      containers:
      - name: nginx
        image: nginx:1.25
        volumeMounts:
        - name: data
          mountPath: /data
  volumeClaimTemplates:
  - metadata:
      name: data
    spec:
      accessModes: ["ReadWriteOnce"]
      resources:
        requests:
          storage: 1Gi
```

## Lab 3: DaemonSet
YAML:
```yaml
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: node-agent
spec:
  selector:
    matchLabels:
      app: node-agent
  template:
    metadata:
      labels:
        app: node-agent
    spec:
      containers:
      - name: agent
        image: busybox:1.36
        command: ["sh", "-c", "sleep 3600"]
```

## Lab 4: CronJob
YAML:
```yaml
apiVersion: batch/v1
kind: CronJob
metadata:
  name: hello
spec:
  schedule: "*/1 * * * *"
  jobTemplate:
    spec:
      template:
        spec:
          restartPolicy: OnFailure
          containers:
          - name: hello
            image: busybox:1.36
            command: ["sh", "-c", "date; echo hello"]
```

## Lab 5: ReplicaSet behavior
Commands:
- kubectl create deployment rs-demo --image=nginx:1.25
- kubectl get rs -l app=rs-demo
- kubectl scale deployment rs-demo --replicas=2
