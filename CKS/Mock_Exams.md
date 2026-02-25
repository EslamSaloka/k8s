# CKS Mock Exams (3 Sets)

Use 2 hours per set. Assume a lab cluster.

## Mock 1
1) Enforce PodSecurity restricted in a namespace.
2) Create a pod with runAsNonRoot and readOnlyRootFilesystem.
3) Drop all capabilities and add NET_BIND_SERVICE.
4) Create NetworkPolicy default deny and allow only app=client.
5) Restrict egress to DNS only.
6) Create RBAC Role for read-only pods and bind it.
7) Disable automountServiceAccountToken on a pod.
8) Create a policy to block privileged containers (theory if no engine).
9) Use an image digest in a deployment.
10) Scan an image and record CVEs.
11) Create audit policy outline and describe log fields.
12) Identify a risky ClusterRoleBinding and fix it.
13) Apply seccomp RuntimeDefault in a pod.
14) Verify a secret is not readable by another service account.
15) Write an incident response checklist.

## Mock 2
1) Create a namespace with restricted PodSecurity and test a privileged pod.
2) Create a policy to allow only approved registries.
3) Apply AppArmor profile in pod spec (if supported).
4) Configure a NetworkPolicy to allow only specific ports.
5) Use Kyverno/Gatekeeper to require labels (theory if no engine).
6) Rotate a Secret and restart workloads.
7) Create a service account with minimal permissions.
8) Verify kubectl auth can-i for a service account.
9) Document a CIS benchmark check list for API server.
10) Verify platform binaries (checksums) for a tool (theory).
11) Enable audit logging and review entries (theory).
12) Detect exec usage and log it (theory).
13) Create a sandboxed runtime class (if supported).
14) Use mTLS concept for service-to-service encryption (theory).
15) Document a response plan for suspicious activity.

## Mock 3
1) Enforce non-root and no privilege escalation for a deployment.
2) Create default deny and allow DNS egress only.
3) Apply ResourceQuota and LimitRange for a namespace.
4) Use image signature verification plan (theory).
5) Create a NetworkPolicy to isolate a database pod.
6) Restrict hostPath volumes via policy (theory).
7) Create an audit log retention policy (document).
8) Use seccomp and AppArmor together (if supported).
9) Create a pod with readOnlyRootFilesystem and tmpfs for /tmp.
10) Use SBOM tool output to identify packages.
11) Verify a ServiceAccount token is not mounted.
12) Investigate a suspicious event and outline steps.
13) Create a runtime detection rule in Falco (theory).
14) Document a supply chain gate for CI.
15) Create a checklist for cluster hardening.
