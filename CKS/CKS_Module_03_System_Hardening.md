# CKS Module 03 - System Hardening

## Goals
- Harden node OS and runtime.
- Reduce attack surface.
- Secure kubelet and container runtime.

## Core concepts (deep detail)
### Node OS
- Patch regularly.
- Restrict SSH access.
- Enforce least-privilege system accounts.

### Kubelet hardening
- Disable anonymous access.
- Use webhook authn/authz.
- Protect kubelet endpoints.

### Runtime hardening
- Use containerd or CRI-O securely.
- Apply seccomp/AppArmor profiles.
- Use read-only root filesystem.

### Network hardening
- Restrict node ports and inbound access.
- Use firewall rules and security groups.

## Practice (hands-on)
1) Apply seccomp profile to a pod (if supported).
2) Use readOnlyRootFilesystem in a pod.
3) Drop Linux capabilities and allow only required.
4) Document kubelet hardening settings.
5) Review node OS patching plan.

## Common pitfalls
- Leaving SSH open to public networks.
- Running privileged containers by default.
- No kernel or OS patching policy.

## Self-test (20 questions)
1) Why patch nodes regularly?
2) What is kubelet anonymous access risk?
3) What is a seccomp profile?
4) Why use readOnlyRootFilesystem?
5) What is the risk of privileged containers?
6) Why drop Linux capabilities?
7) What is AppArmor and when used?
8) Why restrict hostNetwork?
9) What is a runtime class?
10) Why limit hostPath volumes?
11) What is a node firewall rule?
12) Why should you monitor kernel CVEs?
13) What is a systemd unit hardening?
14) Why limit SSH access to bastions?
15) What is a rootless container benefit?
16) Why use cgroup limits?
17) What is a kernel module risk?
18) How do you audit node configuration?
19) What is a node image hardening baseline?
20) Why isolate nodes by workload class?

## Labs (5)
1) Create a pod with readOnlyRootFilesystem.
2) Apply seccomp profile and verify in pod spec.
3) Drop all capabilities and add NET_BIND_SERVICE.
4) Create a node hardening checklist.
5) Document SSH access restrictions for nodes.
