# Module 09 - Lab Solutions

## Lab 1: Read-only Role
Commands:
- kubectl create sa reader
- kubectl create role pod-reader --verb=get,list,watch --resource=pods
- kubectl create rolebinding read-pods --role=pod-reader --serviceaccount=default:reader
- kubectl auth can-i list pods --as=system:serviceaccount:default:reader

## Lab 2: Test permissions
Commands:
- kubectl auth can-i create pods --as=system:serviceaccount:default:reader

## Lab 3: Security context
YAML:
```yaml
securityContext:
  runAsNonRoot: true
  runAsUser: 1000
  allowPrivilegeEscalation: false
  readOnlyRootFilesystem: true
```

## Lab 4: Token automount off
YAML:
```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: no-token
automountServiceAccountToken: false
```

## Lab 5: PodSecurity baseline
Commands:
- kubectl label ns default pod-security.kubernetes.io/enforce=baseline
