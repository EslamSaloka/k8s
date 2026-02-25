# Module 03 - Pods and Containers

## Goals
- Understand the pod as the atomic scheduling unit.
- Master container lifecycle and probes.
- Use resource requests and limits correctly.

## Pod fundamentals (deep detail)
- A pod has a shared network namespace and shared volumes.
- Containers in a pod communicate via localhost.
- Pods are ephemeral; controllers recreate them on failure.

## Lifecycle and states
- Pending: scheduler has not bound to a node or image not pulled.
- Running: at least one container is running.
- Succeeded/Failed: terminal states for completed pods.
- CrashLoopBackOff: container keeps failing and restarting.

## Probes
- Liveness: restart if unhealthy.
- Readiness: remove from service endpoints if not ready.
- Startup: delay liveness until startup completes.
- Probes can be HTTP, TCP, or exec.

## Init containers
- Run before app containers.
- Used for setup, migrations, permission fixes.

## Resources and QoS
- requests drive scheduling.
- limits enforce usage caps.
- QoS classes: Guaranteed, Burstable, BestEffort.

## Ephemeral containers
- Used for debugging running pods.
- Cannot be part of normal workload spec.

## Practice (hands-on)
1) Create a pod with probes and resources.
2) Add an init container to prepare a directory.
3) Use kubectl exec to inspect filesystem.

## Common pitfalls
- Probes too aggressive causing restarts.
- No resource requests leading to eviction.
- Using pods directly instead of deployments for long-lived apps.

## Self-test (20 questions)
1) Why are pods considered ephemeral?
2) What does readiness control?
3) When do you use a startup probe?
4) What is the difference between a pod and a container?
5) How do resource requests affect scheduling?
6) What is the Guaranteed QoS class?
7) What happens when a pod exceeds its memory limit?
8) Why are init containers useful?
9) How do you debug a running pod without restart?
10) What is CrashLoopBackOff signaling?
11) How do you share data between containers in a pod?
12) Why not run stateful apps in simple pods?
13) What is an ephemeral container?
14) How does kubelet know which pod to run?
15) What causes a pod to stay Pending?
16) Why do probes impact service endpoints?
17) What is the role of the pod spec?
18) How does terminationGracePeriodSeconds work?
19) What is the difference between restartPolicy values?
20) Why do pods have IP addresses?

## Labs (5)
1) Create a pod with HTTP liveness and readiness probes.
2) Force a CrashLoopBackOff and fix it.
3) Add init container to create a file, then verify in app container.
4) Set requests/limits and observe QoS class.
5) Use an ephemeral container to debug a pod.
