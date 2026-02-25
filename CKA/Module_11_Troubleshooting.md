# Module 11 - Troubleshooting and Debugging

## Goals
- Use a repeatable debugging process.
- Understand common failure patterns.
- Fix issues quickly using kubectl.

## Debugging process (deep detail)
1) Identify the failing object and scope.
2) Describe and check events.
3) Read container status and logs.
4) Validate config, probes, and selectors.
5) Check networking, storage, and permissions.

## Common failure patterns
- ImagePullBackOff: bad image or registry access.
- CrashLoopBackOff: command or dependency failure.
- Pending: no capacity, taints, or PVC issues.
- Service not routing: wrong selector or no endpoints.

## Node issues
- Node NotReady from kubelet or runtime issues.
- Disk pressure and memory pressure evictions.

## Network issues
- DNS resolution failures.
- CNI plugin not functioning.

## Storage issues
- PVC stuck Pending.
- Mount failures due to access mode or permissions.

## Practice (hands-on)
1) Break a deployment and fix it.
2) Create a bad service selector and repair it.
3) Create a pod stuck Pending and resolve it.

## Common pitfalls
- Skipping events and going straight to logs.
- Ignoring namespace when troubleshooting.
- Changing too many variables at once.

## Self-test (20 questions)
1) What is your first step when a pod fails?
2) How do events help more than logs?
3) Why does a pod stay Pending?
4) What does CrashLoopBackOff mean?
5) How do you debug a service not routing?
6) What command shows detailed pod status?
7) Why might DNS fail inside a pod?
8) How do you check node health?
9) What causes ImagePullBackOff?
10) How do you inspect a PVC binding issue?
11) What is the difference between liveness and readiness failures?
12) How do you debug a failing init container?
13) What is the role of endpoints in service debugging?
14) How do you isolate a network policy issue?
15) What does kubelet do during pod startup?
16) Why are node pressures important?
17) How do you safely change configs during debugging?
18) What is a minimal reproduction case?
19) How do you inspect container exit codes?
20) What is the best way to verify a fix?

## Labs (5)
1) Create a pod with a bad command and fix it using logs.
2) Break DNS by pointing to a wrong service and fix it.
3) Create a PVC that cannot bind and resolve it.
4) Cause a crash with a liveness probe and adjust timing.
5) Debug a Node NotReady condition (lab or simulated).
