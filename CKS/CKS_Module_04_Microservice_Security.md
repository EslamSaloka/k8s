# CKS Module 04 - Microservice Vulnerability Mitigation

## Goals
- Reduce runtime attack surface.
- Control network access between services.
- Apply secure defaults for workloads.

## Core concepts (deep detail)
### NetworkPolicy
- Default deny, allow only required flows.
- Limit ingress and egress.

### Service mesh (optional)
- mTLS for service-to-service traffic.
- Policy enforcement at layer 7.

### Pod security
- Enforce non-root, no privilege escalation.
- Drop capabilities, limit syscalls.

### Dependency risks
- Scan dependencies and use SCA tools.

## Practice (hands-on)
1) Create a default deny NetworkPolicy.
2) Allow only required pod-to-pod traffic.
3) Apply securityContext with non-root and read-only FS.
4) Use a namespace with restricted PodSecurity.
5) Document a microservice threat model (theory).

## Common pitfalls
- No egress control.
- Overly permissive NetworkPolicy.
- Running with default privileges.

## Self-test (20 questions)
1) Why use default deny?
2) How do you allow specific ingress?
3) Why control egress?
4) What is mTLS used for?
5) Why restrict capabilities?
6) What is allowPrivilegeEscalation?
7) Why avoid hostPID and hostIPC?
8) What is an SCA scan?
9) How do you validate policy enforcement?
10) Why use namespace isolation?
11) What is a service account token risk?
12) Why restrict exec access?
13) What is a pod security warning mode?
14) Why do you need dependency pinning?
15) How does network policy affect DNS?
16) What is a zero trust network model?
17) Why apply resource limits for security?
18) What is a workload identity?
19) How do you handle third-party images?
20) Why is logging part of security?

## Labs (5)
1) Create NetworkPolicy default deny and allow one app.
2) Apply restricted securityContext to a deployment.
3) Deny egress and allow DNS only.
4) Verify policy enforcement by testing connectivity.
5) Write a short microservice security checklist.
