# CKAD Module 05 - Lab Solutions

## Lab 1: Expose service
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

## Lab 3: Ingress host routing
Commands (controller-specific):
- Create ingress controller.
- Apply Ingress with host rule.
- Test: curl -H "Host: app.test" http://<ingress-ip>

## Lab 4: TLS ingress
Steps:
- Create TLS secret:
  - kubectl create secret tls app-tls --cert=cert.pem --key=key.pem
- Reference it in Ingress spec.

## Lab 5: Fix selector
Commands:
- kubectl describe svc api
- kubectl get pods --show-labels
- kubectl edit svc api
