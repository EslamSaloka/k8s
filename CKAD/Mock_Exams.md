# CKAD Mock Exams (3 Sets)

Use 2 hours per set. Focus on speed and correctness.

## Mock 1
1) Create a deployment web with nginx and 3 replicas.
2) Add readiness and liveness probes.
3) Add preStop hook to delay termination by 10s.
4) Create a ConfigMap and inject via envFrom.
5) Create a Secret and mount as volume.
6) Create a Job that runs once and completes.
7) Create a CronJob that runs every minute.
8) Expose web with a ClusterIP service.
9) Create an Ingress with host-based routing.
10) Perform a rolling update and roll back.
11) Add resource requests/limits.
12) Create HPA for the deployment.
13) Add a sidecar to ship logs to stdout.
14) Create a canary deployment with 1 replica.
15) Swap a service selector from blue to green.

## Mock 2
1) Create a multi-container pod with shared emptyDir.
2) Use init container to write a file used by app container.
3) Add postStart hook and verify it runs.
4) Create a headless service and resolve DNS.
5) Use kubectl logs --previous to view crash logs.
6) Add a config checksum annotation to force rollout.
7) Create a NetworkPolicy to allow only app=client.
8) Create a deployment with 0 maxUnavailable.
9) Update image and verify readiness gates traffic.
10) Create a service with named ports and targetPort.
11) Create a pod with securityContext non-root.
12) Use ServiceAccount in a pod.
13) Create a resource quota and observe failure.
14) Document API deprecation risk in a manifest.
15) Debug a broken service selector.

## Mock 3
1) Create a Deployment and scale up and down.
2) Implement blue/green with two services.
3) Configure a canary and define success criteria.
4) Create a Job for DB migration (simulated).
5) Add readiness probe for dependency check.
6) Create ConfigMap from file and mount it.
7) Create Secret from file and mount it.
8) Expose service via Ingress with TLS (use dummy secret).
9) Add resource requests and observe QoS class.
10) Create a PodDisruptionBudget for availability.
11) Add a sidecar for log formatting (adapter pattern).
12) Use kubectl top to view resource usage.
13) Create a network troubleshooting pod and test DNS.
14) Fix a CrashLoopBackOff by updating command.
15) Write a short release checklist.
