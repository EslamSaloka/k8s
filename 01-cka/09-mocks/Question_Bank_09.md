# CKA Question Bank 09 (Q801-Q900)

## Theory (Q801-Q880)
Q801) What is a ResourceQuota used for?
Q802) What is a LimitRange used for?
Q803) How do quotas affect scheduling?
Q804) What happens when a namespace hits quota?
Q805) What is PodSecurity admission used for?
Q806) What is the baseline policy level?
Q807) What is the restricted policy level?
Q808) What is a policy engine?
Q809) What is OPA Gatekeeper?
Q810) What is Kyverno?
Q811) What is a constraint template?
Q812) What is a constraint in Gatekeeper?
Q813) What is a Kyverno policy rule?
Q814) What is a mutation policy?
Q815) What is a validation policy?
Q816) What is a generate policy?
Q817) Why use admission policies for compliance?
Q818) What is audit mode vs enforce mode?
Q819) Why should policies be tested?
Q820) What is policy drift?
Q821) How do you handle policy exceptions?
Q822) What is a namespace label for PodSecurity?
Q823) How do you block privileged pods?
Q824) What is a hostPath restriction policy?
Q825) What is image registry allowlist policy?
Q826) What is a label requirement policy?
Q827) How do you enforce resource requests on all pods?
Q828) What is a default deny network policy?
Q829) Why should policies be versioned?
Q830) What is a policy review process?
Q831) What is an audit log used for?
Q832) What is a change management process for policies?
Q833) Why is policy transparency important?
Q834) What is a compliance report?
Q835) What is a security benchmark (CIS)?
Q836) How do you map policies to controls?
Q837) What is a policy violation alert?
Q838) How do you monitor policy violations?
Q839) What is a break-glass exception?
Q840) How do you remove a temporary exception?
Q841) What is the role of admission controllers in policy?
Q842) Why is least privilege part of governance?
Q843) What is a namespace governance model?
Q844) How do you manage multi-tenant clusters?
Q845) Why are quotas critical in shared clusters?
Q846) What is a resource limit defaulting policy?
Q847) What is a policy engine webhook?
Q848) What is a constraint violation report?
Q849) How do you implement labeling standards?
Q850) Why should you enforce image tag policies?
Q851) What is an OCI registry policy?
Q852) What is a security exception approval flow?
Q853) What is a policy unit test?
Q854) What is a policy dry run?
Q855) How do you validate policies in CI?
Q856) What is a namespace quota template?
Q857) What is a governance dashboard?
Q858) How do you manage policy ownership?
Q859) What is a policy-as-code practice?
Q860) Why should policies be documented?
Q861) What is a risk assessment for policy changes?
Q862) What is a resource quota scope?
Q863) How do you limit object counts (pods, services)?
Q864) What is a ResourceQuota for storage?
Q865) How do you enforce CPU limits?
Q866) What is the difference between quota and limit?
Q867) How do you avoid noisy neighbor issues?
Q868) What is a namespace lifecycle policy?
Q869) How do you prevent privileged escalation across namespaces?
Q870) What is a policy exception expiry?
Q871) Why should policies be tested in staging?
Q872) What is a multi-tenant admission policy?
Q873) What is a policy rollback plan?
Q874) What is the purpose of LimitRange defaults?
Q875) What is a policy compliance audit?
Q876) How do you handle legacy workloads under new policies?
Q877) What is a pod security label warning mode?
Q878) How do you migrate from PSP to PodSecurity?
Q879) What is a policy for hostNetwork usage?
Q880) What is a policy for privileged ports?

## Practical tasks (Q881-Q900)
Q881) Create a namespace with ResourceQuota and LimitRange.
Q882) Trigger a quota violation and observe error.
Q883) Apply PodSecurity baseline and test a pod.
Q884) Enforce restricted PodSecurity and observe rejection.
Q885) Install Kyverno or Gatekeeper (lab).
Q886) Create a policy requiring labels on pods.
Q887) Create a policy to block privileged containers.
Q888) Create a policy to restrict hostPath.
Q889) Enable audit mode for a policy and review findings.
Q890) Create a policy exception with expiry (lab).
Q891) Create a quota for object counts (pods, services).
Q892) Enforce CPU and memory limits using LimitRange.
Q893) Label a namespace for PodSecurity and test behavior.
Q894) Review audit logs for policy violations.
Q895) Write a policy runbook for approvals.
Q896) Create a policy to allow only approved registries.
Q897) Document a governance model for shared clusters.
Q898) Test a policy change in staging then promote.
Q899) Remove a temporary exception and verify enforcement.
Q900) Create a compliance report outline.
