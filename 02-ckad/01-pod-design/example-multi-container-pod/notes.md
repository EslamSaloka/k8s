# CKAD Example Topic: Pod Design - Multi-Container Pod

## Objective

Design a multi-container Pod where one container writes logs and another sidecar reads and streams them.

## Exam-Relevant Points

- Containers in same pod share:
  - network namespace (localhost)
  - volumes
- Sidecar pattern is commonly tested with shared `emptyDir`.
- Probe failures in one container can restart only that container, but pod readiness is impacted.

## Minimal Workflow

1. Create shared volume
2. Main container writes to file
3. Sidecar tails same file
4. Verify logs from sidecar

## Traps

- Different volume names in each container
- Wrong mount path in sidecar
- Main container exits immediately
