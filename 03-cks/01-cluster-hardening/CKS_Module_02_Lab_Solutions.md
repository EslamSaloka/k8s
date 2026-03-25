# CKS Module 02 - Lab Solutions

## Lab 1: Least-privilege RBAC
Commands:
- kubectl create sa reader
- kubectl create role pod-reader --verb=get,list,watch --resource=pods
- kubectl create rolebinding read-pods --role=pod-reader --serviceaccount=default:reader

## Lab 2: PodSecurity baseline
Commands:
- kubectl label ns default pod-security.kubernetes.io/enforce=baseline

## Lab 3: Policy for labels
- Use Kyverno/Gatekeeper to require labels on pods.

## Lab 4: Audit logs
- Review audit entries for a create/update request.

## Lab 5: Hardening checklist
- Document API server, etcd, RBAC, PodSecurity steps.
