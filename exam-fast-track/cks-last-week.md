# CKS Last Week Fast Track

## Daily Focus Blocks

1. RBAC and least privilege verification
2. Pod Security Admission and securityContext hardening
3. NetworkPolicy validation with positive/negative tests
4. Runtime security with Falco
5. Audit logs and incident triage

## Daily Drill (60-90 min)

1. Write one least-privilege RBAC policy and validate with `can-i`
2. Apply one restrictive pod security spec and test behavior
3. Create one NetworkPolicy and test allowed/blocked traffic
4. Review one Falco or audit logs scenario
5. Update one entry in `mistakes/cks-mistakes.md`

## Must-Rehearse Commands

```bash
kubectl auth can-i --list --as=system:serviceaccount:<ns>:<sa>
kubectl describe netpol <name>
kubectl logs -n kube-system <falco-pod>
cat /var/log/kubernetes/audit.log | head
```
