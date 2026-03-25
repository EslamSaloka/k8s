# Module 05 - Lab Solutions

## Lab 1: Expose deployment and curl
Commands:
- kubectl create deployment api --image=nginx:1.25
- kubectl expose deployment api --port=80 --target-port=80
- kubectl run curl --image=busybox:1.36 --restart=Never -- sh -c "wget -qO- http://api"

## Lab 2: Headless service
YAML:
```yaml
apiVersion: v1
kind: Service
metadata:
  name: headless
spec:
  clusterIP: None
  selector:
    app: api
  ports:
  - port: 80
    targetPort: 80
```
Check DNS:
- kubectl run dns --image=busybox:1.36 --restart=Never -- sh -c "nslookup headless"

## Lab 3: EndpointSlices
Commands:
- kubectl get endpointslices
- kubectl describe endpointslices -l kubernetes.io/service-name=api

## Lab 4: NetworkPolicy allow
YAML:
```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-web
spec:
  podSelector:
    matchLabels:
      app: api
  policyTypes: ["Ingress"]
  ingress:
  - from:
    - podSelector:
        matchLabels:
          role: client
```

## Lab 5: Fix wrong selector
Commands:
- kubectl describe svc api
- kubectl get pods --show-labels
- kubectl edit svc api
