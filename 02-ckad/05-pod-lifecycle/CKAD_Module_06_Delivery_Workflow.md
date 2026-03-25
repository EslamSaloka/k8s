# CKAD Module 06 - Delivery and Developer Workflow

## Goals
- Deliver apps safely and fast.
- Use rollout strategies.
- Build a repeatable workflow.

## Rollout strategies (deep detail)
- Rolling updates with maxSurge/maxUnavailable.
- Blue/green with two deployments and service switch.
- Canary with small traffic and metrics evaluation.

## Deployment controls
- Pause and resume rollout.
- Roll back on failure.
- Use readiness to gate traffic.

## Resource tuning
- Set requests and limits.
- Use HPA for scaling.

## CI/CD and GitOps
- CI builds images and runs tests.
- CD deploys via Helm or Kustomize.
- GitOps reconciles from Git.

## Developer workflow
- Use namespaces per app or team.
- Keep manifests minimal and versioned.
- Use kubectl diff before apply.

## Practice (hands-on)
1) Perform a rolling update and rollback.
2) Create blue/green deployments and swap selector.
3) Create a canary with 1 replica.
4) Add HPA and observe scaling.
5) Create a release checklist.

## Common pitfalls
- No rollback plan.
- Rolling out without readiness probes.
- Not versioning manifests.

## Self-test (20 questions)
1) What is the difference between blue/green and canary?
2) Why use maxSurge?
3) Why use maxUnavailable?
4) How do you pause a rollout?
5) How do you roll back quickly?
6) Why does readiness gate traffic?
7) What is a canary success metric?
8) How do you keep rollouts safe?
9) Why use HPA?
10) What is a release checklist?
11) Why version manifests?
12) Why use kubectl diff?
13) What is a rollout restart?
14) What is an immutable release?
15) What is a promotion pipeline?
16) How do you handle config changes?
17) What is a deployment freeze?
18) Why separate dev/stage/prod?
19) What is GitOps drift?
20) Why should you document rollback steps?

## Labs (5)
1) Rolling update and rollback for a deployment.
2) Blue/green swap using services.
3) Canary rollout with 1 replica.
4) Add HPA and generate load.
5) Write a delivery runbook.
