# Module 15 - Lab Solutions

## Lab 1: Quota and limits
Commands:
- kubectl create ns limits
- Apply ResourceQuota and LimitRange YAML.

## Lab 2: PodSecurity
Commands:
- kubectl label ns limits pod-security.kubernetes.io/enforce=baseline

## Lab 3: Policy engine
Steps:
- Install Kyverno or Gatekeeper.
- Create a policy requiring labels.

## Lab 4: Audit logs
Steps:
- Enable audit policy (self-managed).
- Inspect audit logs for a change.

## Lab 5: Compliance report
Steps:
- List current policies.
- Map to internal controls.
