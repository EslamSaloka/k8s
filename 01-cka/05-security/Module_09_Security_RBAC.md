# Module 09 - Security and RBAC

## Goals
- Understand Kubernetes security layers.
- Apply least-privilege RBAC.
- Use pod security settings safely.

## Security layers (deep detail)
1) API server authn/authz and admission.
2) RBAC policies for users and service accounts.
3) Pod security and runtime settings.
4) Network controls (NetworkPolicy, firewall).
5) Supply chain (image provenance, scanning).

## Authentication (authn)
- Client certs, tokens, OIDC, service accounts.
- kubeconfig stores credentials and contexts.

## Authorization (authz)
- RBAC is most common.
- Requests are allowed if any rule matches.

## RBAC objects
- Role: namespace scoped permissions.
- ClusterRole: cluster scoped permissions.
- RoleBinding: bind Role to subject.
- ClusterRoleBinding: cluster-wide binding.

## ServiceAccounts
- Identity for pods.
- Tokens mounted by default (can be disabled).

## Admission controllers
- Validate and mutate requests.
- PodSecurity admission enforces baseline or restricted.
- ResourceQuota, LimitRanger enforce resource policies.

## Security contexts
- RunAsUser, RunAsNonRoot, fsGroup.
- Capabilities and privilege escalation.

## Secrets protection
- Enable encryption at rest.
- Use external KMS when possible.

## Practice (hands-on)
1) Create a read-only Role and bind to a ServiceAccount.
2) Use kubectl auth can-i to test permissions.
3) Create a pod with restricted security context.

## Common pitfalls
- Binding ClusterRole too broadly.
- Running containers as root when not needed.
- Storing secrets in plain YAML.

## Self-test (20 questions)
1) What is the difference between authn and authz?
2) Why use ClusterRole instead of Role?
3) What does RoleBinding do?
4) How does kubectl auth can-i work?
5) Why should pods run as non-root?
6) What is a PodSecurity admission level?
7) How do you restrict privilege escalation?
8) What is a ServiceAccount token used for?
9) How does RBAC evaluate multiple rules?
10) Why is least privilege important?
11) What is a security context?
12) How do you prevent root filesystem writes?
13) What is the purpose of ResourceQuota?
14) How does LimitRange help?
15) How do you encrypt secrets at rest?
16) What is OIDC used for?
17) What is the risk of mounting tokens in all pods?
18) How do you limit access to secrets?
19) Why are admission controllers critical?
20) What is a ClusterRoleBinding used for?

## Labs (5)
1) Create a namespace and restrict pods to non-root.
2) Create Role and RoleBinding for read-only pods.
3) Test permissions via impersonation.
4) Create a pod with securityContext and verify it runs.
5) Enable automatic token mounting off for a service account and test.
