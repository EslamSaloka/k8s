# Module 15 - Policy and Governance

## Goals
- Enforce limits and quotas.
- Apply pod security policies safely.
- Use policy engines for compliance.

## ResourceQuota and LimitRange
- ResourceQuota limits total resource use.
- LimitRange sets defaults and min/max per pod.

## Pod Security Standards
- Privileged, baseline, restricted.
- Enforced by PodSecurity admission.

## Policy engines
- OPA Gatekeeper or Kyverno enforce custom rules.
- Policies can mutate or validate resources.

## Audit and compliance
- Audit logs track API activity.
- Useful for security reviews and incidents.

## Practice (hands-on)
1) Create a namespace with ResourceQuota and LimitRange.
2) Enforce baseline PodSecurity and test a pod.
3) Write a basic policy with Kyverno or Gatekeeper.

## Common pitfalls
- Setting quotas without communicating limits.
- Breaking workloads with overly strict policies.
- Not auditing changes.

## Self-test (20 questions)
1) What is the difference between ResourceQuota and LimitRange?
2) Why use PodSecurity admission?
3) What happens if a pod violates a policy?
4) What is an audit log used for?
5) Why do teams use policy engines?
6) What is a default deny policy?
7) How do you test a new policy safely?
8) What is a namespace label for PodSecurity?
9) How does LimitRange set defaults?
10) What is the risk of missing quotas?
11) How do you enforce image registry policies?
12) How do you restrict hostPath usage?
13) What is the difference between validation and mutation?
14) Why should policies be versioned?
15) What is an exception policy?
16) How do you handle legacy workloads with new policies?
17) What is the role of admission controllers?
18) How do you monitor policy violations?
19) What is an allowlist policy?
20) How do you implement least privilege at scale?

## Labs (5)
1) Apply ResourceQuota and observe failed scheduling for overuse.
2) Use LimitRange to set default CPU and memory.
3) Enforce restricted PodSecurity and test a pod.
4) Write a policy to require labels on all pods.
5) Review audit logs for a change.
