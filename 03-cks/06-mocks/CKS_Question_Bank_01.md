# CKS Question Bank 01 (S001-S100)

## Theory (S001-S080)
S001) What is supply chain security in Kubernetes?
S002) Why should images be signed?
S003) What is an SBOM and why use it?
S004) What is image provenance?
S005) Why avoid running as root?
S006) How does PodSecurity restricted help?
S007) What is a securityContext?
S008) Why drop Linux capabilities?
S009) What is a seccomp profile?
S010) What is AppArmor used for?
S011) What is a readOnlyRootFilesystem?
S012) Why disable privilege escalation?
S013) What is a privileged container risk?
S014) Why use a non-root user ID?
S015) What is container image scanning?
S016) What is a CVE and how is it handled?
S017) What is a minimal base image?
S018) Why pin image tags?
S019) What is imagePullPolicy and why does it matter?
S020) What is admission control used for?
S021) What is a validating policy?
S022) What is a mutating policy?
S023) Why enforce registry allowlists?
S024) What is a default deny NetworkPolicy?
S025) Why is egress control important?
S026) What is a service account token risk?
S027) Why rotate credentials?
S028) What is encryption at rest for secrets?
S029) What is KMS in Kubernetes?
S030) Why secure kubeconfig files?
S031) What is audit logging used for?
S032) What is a runtime security tool?
S033) What is Falco?
S034) What is a policy violation alert?
S035) Why use CIS benchmarks?
S036) What is node hardening?
S037) Why restrict SSH access on nodes?
S038) What is node OS patching?
S039) What is attack surface reduction?
S040) What is least privilege for RBAC?
S041) What is a Pod Security admission warning?
S042) Why use PSP replacement with PodSecurity?
S043) What is a sandboxed runtime?
S044) Why use read-only root FS with tmpfs?
S045) What is a syscall filter?
S046) What is a runtime class?
S047) Why limit hostPath?
S048) What is hostNetwork risk?
S049) Why avoid hostPID and hostIPC?
S050) What is a rootless container?
S051) Why enable audit logs on API server?
S052) What is a webhook failurePolicy risk?
S053) Why require image signing in admission?
S054) What is a secret rotation strategy?
S055) What is a token request API?
S056) What is short-lived token benefit?
S057) What is RBAC escalation?
S058) How do you prevent privilege escalation?
S059) What is a break-glass account?
S060) What is a deny-by-default posture?
S061) What is a supply chain trust policy?
S062) Why isolate sensitive workloads?
S063) What is an allowlist for egress?
S064) What is admission webhook TLS used for?
S065) Why use node selectors for sensitive workloads?
S066) What is a security baseline for images?
S067) Why use image digests?
S068) What is a vulnerability scan frequency?
S069) What is a security response playbook?
S070) What is the purpose of containerd config hardening?
S071) What is node kernel hardening?
S072) Why disable unused ports?
S073) What is a policy audit mode?
S074) How do you monitor for privilege escalation attempts?
S075) Why log exec access into pods?
S076) What is a supply chain attestation?
S077) What is a trusted registry?
S078) Why use namespace isolation for security?
S079) What is a cluster network segmentation?
S080) Why document security controls?

## Practical tasks (S081-S100)
S081) Apply PodSecurity restricted in a namespace.
S082) Create a pod that runs as non-root with read-only root FS.
S083) Drop all Linux capabilities and add only NET_BIND_SERVICE.
S084) Enforce registry allowlist with a policy engine.
S085) Create NetworkPolicy default deny and allow only required ports.
S086) Enable audit policy and verify logs (lab).
S087) Sign an image and verify in admission (theory lab).
S088) Scan an image and record CVEs (lab).
S089) Disable automountServiceAccountToken on a pod.
S090) Use a seccomp profile in a pod spec.
S091) Apply AppArmor profile (if supported).
S092) Enforce no hostNetwork policy.
S093) Restrict hostPath usage with policy.
S094) Rotate a secret and restart workloads.
S095) Create an RBAC role with least privilege and test.
S096) Verify a pod cannot exec without permission.
S097) Configure an egress allowlist policy.
S098) Add an admission policy to require labels.
S099) Create a runtime alert rule (Falco or similar).
S100) Document a security incident response runbook.
