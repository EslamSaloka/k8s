# CKA Question Bank 04 (Q301-Q400)

## Theory (Q301-Q380)
Q301) What is RBAC and why is it needed?
Q302) What is the difference between Role and ClusterRole?
Q303) What is the difference between RoleBinding and ClusterRoleBinding?
Q304) How does RBAC evaluate permissions?
Q305) What are verbs in RBAC rules?
Q306) What are API groups in RBAC?
Q307) Why should you avoid wildcards in RBAC?
Q308) What is the purpose of service accounts?
Q309) How do you disable automountServiceAccountToken?
Q310) What is the difference between user and service account identity?
Q311) What is a securityContext?
Q312) What does runAsNonRoot do?
Q313) What does allowPrivilegeEscalation do?
Q314) What is fsGroup used for?
Q315) Why should you drop Linux capabilities?
Q316) What is a readOnlyRootFilesystem?
Q317) What is PodSecurity admission?
Q318) What is the baseline policy level?
Q319) What is the restricted policy level?
Q320) What is an admission controller?
Q321) What is a validating webhook?
Q322) What is a mutating webhook?
Q323) What is an admission chain?
Q324) How do you secure the API server endpoint?
Q325) What is audit logging?
Q326) What is the difference between authn and authz?
Q327) What is OIDC used for?
Q328) Why should you rotate credentials?
Q329) What is least privilege?
Q330) How do you limit access to secrets with RBAC?
Q331) Why is encryption at rest recommended?
Q332) What is a KMS provider?
Q333) What is image policy admission?
Q334) What is imagePullPolicy?
Q335) How do you restrict hostPath volumes?
Q336) What is a privileged container?
Q337) Why avoid privileged containers?
Q338) How do you restrict host networking?
Q339) What is a PodSecurity label?
Q340) How do you apply PodSecurity at namespace scope?
Q341) What is a service account token projection?
Q342) Why avoid long-lived tokens?
Q343) What is a token request API?
Q344) How do you audit RBAC changes?
Q345) What is a policy engine (OPA/Kyverno)?
Q346) What is a policy exception?
Q347) What is supply chain security?
Q348) How do you verify image provenance?
Q349) What is a seccomp profile?
Q350) What is an AppArmor profile?
Q351) Why is network policy part of security?
Q352) What is a network default deny?
Q353) What is a security benchmark (CIS)?
Q354) Why should you pin image versions?
Q355) What is the risk of using latest tags?
Q356) What is a runtime class?
Q357) How does a sandboxed runtime help security?
Q358) What is a Pod Security Context vs Container Security Context?
Q359) How do you secure kubeconfig files?
Q360) What is the difference between RBAC and ABAC?
Q361) Why are namespaces useful for security boundaries?
Q362) What is a cluster admin role?
Q363) How do you avoid accidental privilege escalation?
Q364) What is subject access review?
Q365) How do you verify RBAC changes safely?
Q366) What is a self-subject access review?
Q367) What is a self-subject rules review?
Q368) Why is audit logging important for forensics?
Q369) What is a security incident response plan?
Q370) How do you revoke a compromised credential?
Q371) What is a restricted SCC (conceptual)?
Q372) How do you prevent namespace privilege escalation?
Q373) How does PodSecurity admission replace PSP?
Q374) What is a resource whitelist in policies?
Q375) How do you enforce approved registries only?
Q376) What is a signed image?
Q377) Why should you limit exec into pods?
Q378) What is the risk of sharing service accounts?
Q379) What is a break-glass procedure?
Q380) What is the effect of deleting a RoleBinding?

## Practical tasks (Q381-Q400)
Q381) Create a Role that can list pods in a namespace.
Q382) Bind the Role to a ServiceAccount and test access.
Q383) Create a ClusterRole and bind it to a user.
Q384) Disable automountServiceAccountToken for a pod.
Q385) Create a pod with runAsNonRoot and readOnlyRootFilesystem.
Q386) Drop all Linux capabilities and add only needed ones.
Q387) Apply PodSecurity baseline to a namespace and test.
Q388) Create a validating policy with Kyverno or Gatekeeper (lab).
Q389) Create a Secret and verify RBAC blocks access for others.
Q390) Rotate a ServiceAccount token and verify new token usage.
Q391) Create a NetworkPolicy deny-all and allow only one service.
Q392) Test an audit policy file (theory lab).
Q393) Create a pod that violates PodSecurity and observe rejection.
Q394) Configure imagePullPolicy and verify behavior.
Q395) Mount a secret as a file with correct permissions.
Q396) Create a RoleBinding in the wrong namespace and fix it.
Q397) Use kubectl auth can-i to validate permissions.
Q398) Apply a seccomp profile to a pod (if supported).
Q399) Set allowPrivilegeEscalation=false on a container.
Q400) Document a least-privilege RBAC plan for a team.
