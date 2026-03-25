# CKA Mock Exams (3 Sets)

Use 2 hours per set. No external notes. Verify after each task.

## Mock 1
1) Create a namespace team-a and set it as current.
2) Create a deployment web with nginx:1.25, 3 replicas.
3) Expose web as ClusterIP on port 80.
4) Add a label tier=frontend to all web pods.
5) Create a ConfigMap app-config with MODE=prod and mount into a pod.
6) Create a Secret db-pass and expose it as env var in a pod.
7) Create a PVC 1Gi and mount it into a pod.
8) Create a Job that prints "hello" and completes.
9) Create a CronJob that runs every minute.
10) Taint a node and schedule a tolerated pod.
11) Add nodeSelector for disktype=ssd.
12) Fix a service with wrong selector.
13) Debug a CrashLoopBackOff pod.
14) Check events sorted by time and report the first error.
15) Roll out a bad image update and roll back.

## Mock 2
1) Create a Deployment api with 2 replicas and update image.
2) Add readiness and liveness probes.
3) Create a headless service and test DNS.
4) Create a NetworkPolicy to allow only app=client.
5) Create a PV and PVC with RWO.
6) Create a StatefulSet with volumeClaimTemplates.
7) Drain a node safely and uncordon.
8) Create a Role and RoleBinding for read-only pods.
9) Verify access with kubectl auth can-i.
10) Inspect kube-proxy mode.
11) Install metrics-server (if allowed) and run kubectl top.
12) Fix a pod stuck Pending due to requests.
13) Create a PodDisruptionBudget for a deployment.
14) Expose a Deployment with NodePort.
15) Create an Ingress and route / to a service.

## Mock 3
1) Create a deployment and scale to 5 replicas.
2) Pause a rollout and resume it.
3) Use kubectl diff before apply.
4) Create a ConfigMap from a file and mount it.
5) Create a Secret and mount as a file.
6) Create a pod with init container that writes a file.
7) Add resource requests and limits to a pod.
8) Create a service with session affinity and verify.
9) Fix DNS resolution inside a pod.
10) Create a NetworkPolicy default deny, then allow DNS only.
11) Create a PVC and verify binding.
12) Verify node conditions and report DiskPressure if present.
13) Create a DaemonSet and verify one per node.
14) Create a CronJob and list Jobs it created.
15) Document a short upgrade plan for control plane and nodes.
