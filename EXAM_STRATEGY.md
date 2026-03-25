# Exam Strategy

## Order

Take the exams in this order:

1. CKA
2. CKAD
3. CKS

## Speed Rules

1. Use aliases
2. Generate YAML fast
3. Verify after every change
4. Skip blocked tasks and return later

## Timed Mock Discipline

1. If blocked for more than 4 minutes, skip and continue.
2. Always use a verify loop: get -> describe -> events.
3. Record each miss immediately after mock.

Use: [exam-fast-track/rapid-revision-checklist.md](exam-fast-track/rapid-revision-checklist.md)

## Review Files

- [00-foundation/kubectl-cheatsheet.md](00-foundation/kubectl-cheatsheet.md)
- [00-foundation/yaml-patterns.md](00-foundation/yaml-patterns.md)
- [00-foundation/aliases.md](00-foundation/aliases.md)
- [00-foundation/troubleshooting-flow.md](00-foundation/troubleshooting-flow.md)
- [mistakes/cka-mistakes.md](mistakes/cka-mistakes.md)
- [mistakes/ckad-mistakes.md](mistakes/ckad-mistakes.md)
- [mistakes/cks-mistakes.md](mistakes/cks-mistakes.md)

## Last Review Focus

### CKA

- kubectl speed
- scheduling
- storage
- networking
- RBAC
- troubleshooting
- etcd

### CKAD

- pod design
- config and secrets
- probes
- services
- rollouts

### CKS

- cluster hardening
- system hardening
- supply chain security
- network policies
- runtime security

## Weak Area Control

After every mock, update:

- [mistakes/weak-areas-scoreboard.md](mistakes/weak-areas-scoreboard.md)

Choose next topic by highest weakness score, not by mood.