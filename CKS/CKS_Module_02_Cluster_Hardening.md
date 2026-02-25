# CKS Module 02 - Cluster Hardening

## Goals
- Secure API server, etcd, and control plane.
- Apply least-privilege RBAC.
- Enforce PodSecurity and admission policies.

## Core concepts (deep detail)
### API server hardening
- Restrict access with authn/authz.
- Limit public exposure.
- Enable audit logs.

### etcd security
- Encrypt secrets at rest.
- Restrict access to etcd endpoints.
- Back up and secure snapshots.

### Admission controls
- Enforce PodSecurity.
- Use policy engines (OPA/Kyverno).

### RBAC
- Avoid cluster-admin for apps.
- Use namespace-scoped roles when possible.

## Practice (hands-on)
1) Create least-privilege Role and RoleBinding.
2) Apply PodSecurity baseline in a namespace.
3) Enable admission policy to require labels (lab).
4) Review audit logs (theory if managed).
5) Encrypt secrets at rest (theory if managed).

## Common pitfalls
- Excessive cluster-admin bindings.
- Missing audit logging.
- Allowing privileged pods in shared namespaces.

## Self-test (20 questions)
1) Why is least privilege essential?
2) What is PodSecurity admission?
3) How do you protect API server access?
4) What is etcd encryption at rest?
5) Why use audit logs?
6) What is a validating admission webhook?
7) Why avoid wildcard RBAC rules?
8) What is a ClusterRoleBinding risk?
9) How do you secure kubeconfig files?
10) What is a policy engine?
11) What is a break-glass account?
12) Why isolate sensitive workloads by namespace?
13) What is an admission failurePolicy risk?
14) How do you audit RBAC changes?
15) Why restrict hostPath?
16) Why disable privilege escalation?
17) How do you enforce non-root pods?
18) What is a secret rotation policy?
19) Why limit API server exposure?
20) What is a resource quota security benefit?

## Labs (5)
1) Create a Role and RoleBinding for read-only access.
2) Enforce PodSecurity baseline in a namespace.
3) Use kubectl auth can-i to verify permissions.
4) Create a policy to require labels (Kyverno/Gatekeeper).
5) Document an API server hardening checklist.
