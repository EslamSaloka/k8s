# CKAD Module 01 - Application Design and Build

## Goals
- Design apps that run well in Kubernetes.
- Understand stateless vs stateful decisions.
- Build containers and define health and shutdown behavior.

## Core principles (deep detail)
### 12-factor alignment
- Config in environment or mounted config, not baked in image.
- Logs to stdout/stderr for centralized collection.
- Single process per container; scale by replicas.

### Stateless vs stateful
- Stateless apps store state in external systems (DB, cache, object store).
- Stateful apps need stable identity and storage (StatefulSet + PVC).

### Build and image design
- Use minimal base images.
- Pin versions, avoid latest.
- Use multi-stage builds to reduce size.
- Run as non-root where possible.

### Health and graceful shutdown
- Readiness gates traffic.
- Liveness restarts hung containers.
- Startup probe for long boot.
- Handle SIGTERM with clean shutdown.
- Use preStop to delay termination.

### Resource budgets
- Set requests/limits for predictable performance.
- Protect from noisy neighbors and OOM kills.

## Practical patterns
- Config via ConfigMap and Secret.
- Externalize state and make services idempotent.
- Separate migrations into Jobs.

## Practice (hands-on)
1) Build a simple app image and deploy it.
2) Add readiness and liveness probes.
3) Add preStop hook and verify graceful shutdown.
4) Set resource requests and limits.
5) Convert a stateful pod to StatefulSet + PVC (conceptual).

## Common pitfalls
- No readiness probe causes traffic to broken pods.
- Relying on local disk in stateless apps.
- Running as root without need.

## Self-test (20 questions)
1) What makes an app stateless in Kubernetes?
2) Why should config be externalized from images?
3) Why is readiness probe critical for zero downtime?
4) When should you use startup probes?
5) What happens if a container ignores SIGTERM?
6) Why use preStop hooks?
7) Why avoid latest tags?
8) What is the benefit of a minimal image?
9) How do requests affect scheduling?
10) What causes OOM kills?
11) Why log to stdout/stderr?
12) What is the role of a Job for migrations?
13) What is an idempotent endpoint?
14) Why should apps handle retries safely?
15) What is a graceful shutdown window?
16) When do you choose StatefulSet over Deployment?
17) What is a build once, run anywhere principle?
18) Why should you pin dependency versions?
19) Why should health checks be fast?
20) What is an app config reload strategy?

## Labs (5)
1) Create a deployment with probes and resource limits.
2) Add preStop hook and observe termination delay.
3) Trigger readiness failure and confirm endpoints change.
4) Build a multi-stage Dockerfile and use it.
5) Write a brief app readiness checklist.
