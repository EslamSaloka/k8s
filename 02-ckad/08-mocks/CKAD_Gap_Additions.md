# CKAD Gap Additions (Objective Completeness)

This file fills gaps from the latest CKAD objectives.

## Authn/Authz/Admission (app view)
- Use ServiceAccounts for pod identity.
- RBAC controls what apps can access.
- Admission controllers can enforce policy (PodSecurity, quotas).

## SecurityContext (app security)
- runAsNonRoot, allowPrivilegeEscalation=false, readOnlyRootFilesystem.
- Drop capabilities by default.

## Requests, limits, quotas
- Requests/limits are per container.
- LimitRange sets defaults and min/max.
- ResourceQuota limits overall namespace usage.

## CRDs and Operators (awareness)
- CRDs extend the API.
- Operators automate application lifecycle.

## NetworkPolicy basics
- Default deny and allow rules for ingress/egress.
- Requires a supporting CNI.

## API deprecations
- Always check apiVersion compatibility in manifests.
- Use kubectl explain or docs for supported versions.
