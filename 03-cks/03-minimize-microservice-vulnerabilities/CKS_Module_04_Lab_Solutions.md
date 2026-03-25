# CKS Module 04 - Lab Solutions

## Lab 1: Default deny policy
YAML:
```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: deny-all
spec:
  podSelector: {}
  policyTypes: ["Ingress", "Egress"]
```

## Lab 2: Allow app traffic
YAML:
```yaml
ingress:
- from:
  - podSelector:
      matchLabels:
        app: client
```

## Lab 3: Restricted securityContext
YAML snippet:
```yaml
securityContext:
  runAsNonRoot: true
  allowPrivilegeEscalation: false
  readOnlyRootFilesystem: true
```

## Lab 4: DNS only egress
- Allow UDP/TCP 53 to kube-dns namespace.

## Lab 5: Security checklist
- Document microservice hardening steps.
