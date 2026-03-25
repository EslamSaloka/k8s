# CKAD Module 03 - Lab Solutions

## Lab 1: ConfigMap mount
Commands:
- kubectl create configmap app-config --from-literal=MODE=prod

Pod snippet:
```yaml
volumes:
- name: cfg
  configMap:
    name: app-config
containers:
- name: app
  image: busybox:1.36
  command: ["sh", "-c", "cat /cfg/MODE && sleep 3600"]
  volumeMounts:
  - name: cfg
    mountPath: /cfg
```

## Lab 2: Secret env vars
Commands:
- kubectl create secret generic app-secret --from-literal=PASSWORD=admin123

Env snippet:
```yaml
env:
- name: PASSWORD
  valueFrom:
    secretKeyRef:
      name: app-secret
      key: PASSWORD
```

## Lab 3: Rotate secret
Commands:
- kubectl create secret generic app-secret --from-literal=PASSWORD=newpass -o yaml --dry-run=client | kubectl apply -f -
- kubectl rollout restart deployment <name>

## Lab 4: Projected volume
YAML snippet:
```yaml
volumes:
- name: proj
  projected:
    sources:
    - configMap:
        name: app-config
    - secret:
        name: app-secret
```

## Lab 5: Checksum rollout
YAML snippet:
```yaml
metadata:
  annotations:
    checksum/config: "<sha256>"
```
