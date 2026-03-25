# KodeKloud CKS Lab Checklist

Track your hands-on lab completions. Check each box as you finish it.

**Course**: Certified Kubernetes Security Specialist (CKS)
**Platform**: KodeKloud
**Prerequisite**: CKA must be active before booking CKS exam.

---

## Module 1 — Cluster Setup
- [ ] CIS Benchmarks (kube-bench)
- [ ] Network Policies — basics
- [ ] Network Policies — advanced (deny all, namespace isolation)
- [ ] TLS in Kubernetes
- [ ] Ingress with TLS
- [ ] API Server Security (anonymous auth, insecure port)
- [ ] Kubelet Security (authorization mode, read-only port)
- [ ] kubectl proxy & port-forward

## Module 2 — Cluster Hardening
- [ ] RBAC — roles and rolebindings
- [ ] RBAC — clusterroles and clusterrolebindings
- [ ] Service Accounts (disable automount, token projection)
- [ ] Restrict API Access (NodeRestriction admission plugin)
- [ ] Upgrade Kubernetes Cluster

## Module 3 — System Hardening
- [ ] OS-level footprint reduction
- [ ] Limit Node Access (SSH hardening)
- [ ] AppArmor
- [ ] Seccomp
- [ ] Linux Capabilities

## Module 4 — Minimize Microservice Vulnerabilities
- [ ] Security Contexts (runAsUser, readOnlyRootFilesystem, allowPrivilegeEscalation)
- [ ] Admission Controllers (NamespaceAutoProvision, etc.)
- [ ] OPA (Open Policy Agent) and Kyverno
- [ ] Pod Security Admission (enforce/audit/warn)
- [ ] Secrets management (encryption at rest)
- [ ] Container sandboxing (gVisor/kata)
- [ ] mTLS (mutual TLS between pods)

## Module 5 — Supply Chain Security
- [ ] Image Security (private registry, imagePullSecrets)
- [ ] Image Policy Webhook
- [ ] Trivy — scan images for vulnerabilities
- [ ] Dockerfile best practices (non-root, minimal base image)

## Module 6 — Monitoring, Logging & Runtime Security
- [ ] Falco rules: detect suspicious syscalls
- [ ] Immutable containers (readOnlyRootFilesystem)
- [ ] Audit Logs (audit policy, log backend)
- [ ] Enable Audit Logging (kube-apiserver flags)

---

## Lightning Labs
- [ ] Lightning Lab 1
- [ ] Lightning Lab 2

## Mock Exams
- [ ] Mock Exam 1
- [ ] Mock Exam 2

---

## Progress

| Section | Done | Total |
|---------|------|-------|
| Module 1 — Cluster Setup | 0 | 8 |
| Module 2 — Cluster Hardening | 0 | 5 |
| Module 3 — System Hardening | 0 | 5 |
| Module 4 — Microservice Vulnerabilities | 0 | 7 |
| Module 5 — Supply Chain Security | 0 | 4 |
| Module 6 — Monitoring & Runtime | 0 | 4 |
| Lightning Labs | 0 | 2 |
| Mock Exams | 0 | 2 |
| **TOTAL** | **0** | **37** |

---

## High-Priority CKS Topics (Most Tested)

1. **RBAC** — know ClusterRole vs Role, aggregate roles
2. **Network Policies** — deny-all default, allow specific namespace/pod
3. **Pod Security Admission** — enforce, audit, warn modes
4. **Falco** — read rules, identify violation, fix rule or restart
5. **Trivy** — `trivy image <image>` to find HIGH/CRITICAL CVEs
6. **Audit Logs** — policy stages, levels (None/Metadata/Request/RequestResponse)
7. **Secrets encryption at rest** — EncryptionConfiguration, aescbc provider
8. **AppArmor/Seccomp** — apply profile to pod via annotation or securityContext
9. **Image scanning + pull policy** — Always + private registry
10. **Service Accounts** — disable automount, restrict RBAC

---

## Notes
- Record all mistakes in [mistakes/cks-mistakes.md](../../mistakes/cks-mistakes.md)
- CKS exam is 2 hours, 15–20 questions
- Simulator: killer.sh (2 sessions included with exam registration)
- Must hold active CKA before scheduling CKS
