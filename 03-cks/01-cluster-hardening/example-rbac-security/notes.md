# CKS Example Topic: Cluster Hardening - RBAC Security

## Objective

Grant least-privilege access to a ServiceAccount for pod read-only operations in a single namespace.

## Security Principles

- Prefer Role + RoleBinding for namespace scope
- Avoid ClusterRoleBinding unless cluster-wide access is required
- Grant only required verbs and resources

## Minimal Workflow

1. Create namespace and ServiceAccount
2. Create Role with least privileges
3. Bind Role to ServiceAccount
4. Validate with `kubectl auth can-i`

## Traps

- Binding subject namespace omitted
- Using ClusterRoleBinding accidentally
- Verbs too broad (`*`) when read-only is needed
