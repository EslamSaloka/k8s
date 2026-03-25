# Module 07 - Lab Solutions

## Lab 1: ConfigMap from file
Commands:
- kubectl create configmap app-config --from-file=app.properties
- kubectl get configmap app-config -o yaml

## Lab 2: Secret as env vars
Commands:
- kubectl create secret generic app-secret --from-literal=PASSWORD=admin123
- kubectl run secret-demo --image=busybox:1.36 --restart=Never --dry-run=client -o yaml > secret-demo.yaml

secret-demo.yaml (snippet):
```yaml
env:
- name: PASSWORD
  valueFrom:
    secretKeyRef:
      name: app-secret
      key: PASSWORD
```

## Lab 3: Rotate Secret
Commands:
- kubectl create secret generic app-secret --from-literal=PASSWORD=newpass -o yaml --dry-run=client | kubectl apply -f -
- kubectl rollout restart deployment <name>

## Lab 4: Immutable ConfigMap
Commands:
- kubectl create configmap imm --from-literal=KEY=val -o yaml --dry-run=client > imm.yaml
- Edit imm.yaml to add: immutable: true
- kubectl apply -f imm.yaml

## Lab 5: Projected volume
YAML:
```yaml
volumes:
- name: config
  projected:
    sources:
    - configMap:
        name: app-config
    - secret:
        name: app-secret
```
