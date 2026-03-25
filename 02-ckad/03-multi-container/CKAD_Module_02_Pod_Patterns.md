# CKAD Module 02 - Multi-Container Pod Patterns

## Goals
- Use sidecar, ambassador, and adapter patterns.
- Share data safely between containers.
- Control startup order with init containers.

## Core patterns (deep detail)
### Sidecar
- Companion container extends app behavior (logging, proxy, config reload).
- Shares volumes or network with main container.

### Ambassador
- Acts as proxy to external services.
- Hides remote service complexity from app.

### Adapter
- Transforms output to standard format for logging or metrics.

### Init containers
- Run before app containers.
- Good for migrations, permissions, waiting for dependencies.

### Shared data
- Use emptyDir or projected volumes for shared files.
- Avoid shared mutable state where possible.

## Lifecycle hooks
- postStart runs after container start.
- preStop runs before termination.

## Process namespace and debugging
- shareProcessNamespace allows sidecar to inspect processes.
- Useful for debugging and advanced patterns.

## Practice (hands-on)
1) Create a sidecar that tails a shared log file.
2) Use init container to generate config file.
3) Add preStop hook for controlled shutdown.
4) Use an adapter container to format logs.
5) Test shareProcessNamespace (if allowed).

## Common pitfalls
- Sidecar causing resource contention.
- Init container blocking startup due to dependency failure.
- Writing logs only to files and losing them.

## Self-test (20 questions)
1) What is a sidecar and when would you use it?
2) What is the difference between sidecar and ambassador?
3) Why use an adapter container?
4) What is an init container used for?
5) How do containers in a pod communicate?
6) What is emptyDir used for?
7) When should you avoid shared mutable state?
8) How can you control startup ordering?
9) What is a postStart hook used for?
10) What is a preStop hook used for?
11) What is shareProcessNamespace?
12) Why might a sidecar need resource limits?
13) What is the risk of long init containers?
14) How do you share config between containers?
15) Why do pods share a network namespace?
16) How do you debug a multi-container pod?
17) What is the difference between stdout logs and file logs?
18) Why do you need volumeMounts for sidecars?
19) What is a common sidecar for service mesh?
20) When is a multi-container pod unnecessary?

## Labs (5)
1) Create a pod with app + sidecar log shipper.
2) Create a pod with init container that writes a file.
3) Add a postStart hook that writes a marker.
4) Use shared emptyDir to pass data between containers.
5) Create an ambassador container to proxy to an external endpoint (theory lab).
