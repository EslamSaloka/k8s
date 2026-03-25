# CKS Question Bank 02 (S101-S200)

## Theory (S101-S180)
S101) What is container image signing?
S102) What is cosign used for?
S103) What is sigstore?
S104) What is a supply chain attestation?
S105) Why enforce policy in CI/CD?
S106) What is a build pipeline security control?
S107) What is a Kubernetes audit policy?
S108) Why should audit logs be immutable?
S109) What is log retention policy?
S110) What is a node isolation strategy?
S111) Why restrict API server access?
S112) What is API server rate limiting?
S113) What is kubelet authentication and authorization?
S114) Why disable anonymous kubelet access?
S115) What is a secure kubeconfig storage practice?
S116) What is a secret zero?
S117) What is a workload identity?
S118) Why avoid long-lived static tokens?
S119) What is a cluster admin risk?
S120) What is a privileged escalation via RBAC?
S121) What is a securityContext allowPrivilegeEscalation?
S122) Why restrict privileged containers?
S123) What is a runtime syscall whitelist?
S124) What is a network policy for egress DNS only?
S125) What is a DNS exfiltration risk?
S126) Why enforce image tag policies?
S127) What is a policy-as-code workflow?
S128) Why centralize security policies?
S129) What is a sandbox runtime class?
S130) What is gVisor or Kata containers?
S131) Why use read-only root filesystem?
S132) What is a tmpfs for writable paths?
S133) Why set resource limits for security?
S134) What is a denial of service risk in clusters?
S135) Why enforce resource quotas?
S136) What is a multi-tenant security boundary?
S137) What is a compliance report?
S138) Why do you map controls to CIS benchmarks?
S139) What is secret rotation cadence?
S140) What is a security regression test?
S141) What is a static analysis scan?
S142) What is a dynamic analysis scan?
S143) What is a runtime detection rule?
S144) Why monitor exec and port-forward usage?
S145) What is a Kubernetes RBAC audit?
S146) Why avoid cluster-admin in pipelines?
S147) What is a break-glass procedure?
S148) What is a policy exception expiry?
S149) What is a minimal attack surface for nodes?
S150) Why use node taints for sensitive workloads?
S151) What is a node security group rule?
S152) How do you handle secrets in Git?
S153) What is SOPS?
S154) What is Sealed Secrets?
S155) Why use encryption at rest for etcd?
S156) What is a KMS plugin?
S157) What is a security context for pod vs container?
S158) What is an image admission webhook?
S159) What is a trusted root for image signing?
S160) Why verify provenance before deploy?
S161) What is a software supply chain risk?
S162) What is a dependency confusion attack?
S163) How do you limit RBAC verbs?
S164) What is an allowlist vs denylist?
S165) What is a security log correlation?
S166) Why keep audit logs separate from app logs?
S167) What is a control plane hardening checklist?
S168) What is a node kernel version policy?
S169) Why enforce time sync on nodes?
S170) What is a secret access audit?
S171) Why should you run kube-bench?
S172) What is kube-hunter?
S173) What is a policy enforcement pipeline?
S174) What is a cluster baseline scan?
S175) Why encrypt backups?
S176) What is a key rotation policy?
S177) Why avoid storing secrets in env vars?
S178) What is a secret projection volume?
S179) What is a compliance drift alert?
S180) Why document security incidents?

## Practical tasks (S181-S200)
S181) Configure a policy to block latest image tags.
S182) Create an RBAC policy for read-only access and test it.
S183) Apply a restricted securityContext to a deployment.
S184) Restrict egress to DNS and one API endpoint.
S185) Enable audit logging and verify request records.
S186) Rotate service account tokens with token request API.
S187) Create a policy for allowed registries only.
S188) Apply a seccomp profile and verify it in a pod.
S189) Use SOPS to encrypt a secret (lab).
S190) Create a sandboxed runtime class and schedule a pod.
S191) Restrict hostPath volumes with policy engine.
S192) Configure admission webhook for image scanning (theory).
S193) Audit RBAC bindings and remove unused.
S194) Implement node taints for sensitive workloads.
S195) Verify encryption at rest for secrets.
S196) Run kube-bench and record findings.
S197) Run kube-hunter and record findings.
S198) Document a security hardening runbook.
S199) Create a policy for privileged containers and test.
S200) Simulate a security incident and document response.
