# CKA Question Bank 05 (Q401-Q500)

## Theory (Q401-Q480)
Q401) What are the three pillars of observability?
Q402) Why are events useful for debugging?
Q403) What does kubectl logs show?
Q404) What is metrics-server used for?
Q405) How does HPA consume metrics?
Q406) What is Prometheus and why use it?
Q407) What is an alert rule?
Q408) What is a service level indicator?
Q409) What is a service level objective?
Q410) Why avoid high-cardinality labels?
Q411) What is distributed tracing?
Q412) What is OpenTelemetry?
Q413) Why should you correlate logs and traces?
Q414) What is a status condition?
Q415) What is kubelet health check?
Q416) What is node pressure?
Q417) What is an eviction threshold?
Q418) What is a readiness gate?
Q419) What is a synthetic check?
Q420) Why use dashboards?
Q421) What is a runbook?
Q422) What is a postmortem?
Q423) What is the difference between symptoms and root cause?
Q424) What is a canary rollout?
Q425) What is an ImagePullBackOff?
Q426) What does CrashLoopBackOff indicate?
Q427) Why do pods remain Pending?
Q428) What does ErrImagePull mean?
Q429) How do you interpret container exit codes?
Q430) What is a liveness probe failure pattern?
Q431) What is a readiness probe failure pattern?
Q432) How do you debug a service with no endpoints?
Q433) How do you debug DNS failures?
Q434) What is a CNI failure symptom?
Q435) What is a PVC stuck Pending symptom?
Q436) How do you check events sorted by time?
Q437) Why check describe output before logs?
Q438) What is a node NotReady condition?
Q439) How do you debug a failing DaemonSet?
Q440) What is a rollout status check?
Q441) What is a rollback strategy?
Q442) Why are logs lost after container restart?
Q443) How do you access logs for previous container?
Q444) What is the difference between error rate and availability?
Q445) What is a golden signal?
Q446) What is a latency percentile?
Q447) Why do you need alert routing?
Q448) What is a probe timeout?
Q449) What is backoffLimit in Jobs?
Q450) What is a common cause of Job failures?
Q451) What is node disk pressure?
Q452) Why is kube-proxy logging useful?
Q453) What is a pod sandbox error?
Q454) How do you verify a ConfigMap is mounted?
Q455) What is a common cause of readiness failure?
Q456) How do you debug a stuck terminating pod?
Q457) What is a finalizer and how can it block deletion?
Q458) What is a container runtime error?
Q459) What is a misconfigured service selector symptom?
Q460) How do you test service routing from inside a pod?
Q461) What is a network policy drop symptom?
Q462) Why is it important to check Node events?
Q463) What is a kubelet log used for?
Q464) What is the difference between kubectl logs and exec?
Q465) What does kubectl top show for nodes?
Q466) What is a node lease and why does it matter?
Q467) Why do pods get evicted?
Q468) What is an out-of-memory kill?
Q469) What is a readiness gate condition?
Q470) How do you detect a bad rollout quickly?
Q471) What is a rollback after a failed canary?
Q472) Why do you need rate limits on APIs?
Q473) What is a thundering herd problem?
Q474) How do you monitor cluster upgrades?
Q475) What is a synthetic transaction?
Q476) What is a health endpoint?
Q477) How do you track availability SLOs?
Q478) What is the difference between alerts and notifications?
Q479) Why is on-call rotation needed?
Q480) What is mean time to recovery?

## Practical tasks (Q481-Q500)
Q481) Use kubectl logs and describe to debug a failing pod.
Q482) Install metrics-server and verify kubectl top works.
Q483) Create a Deployment and observe rollout status.
Q484) Force a liveness probe failure and fix it.
Q485) Create a service with wrong selector and fix it.
Q486) Debug a pod stuck Pending due to resource requests.
Q487) Identify why a pod is in ImagePullBackOff.
Q488) Use kubectl logs --previous to inspect a crashed container.
Q489) Inspect events sorted by timestamp and find the first error.
Q490) Create a basic alert rule in your monitoring stack.
Q491) Simulate node disk pressure and observe eviction (lab).
Q492) Debug DNS resolution inside a pod.
Q493) Find the endpoint list for a service and explain it.
Q494) Create a failing Job and fix its command.
Q495) Debug a CrashLoopBackOff using describe and logs.
Q496) Add readiness probe and confirm traffic is gated.
Q497) Identify a stuck terminating pod and remove finalizer (lab).
Q498) Verify node health and conditions for all nodes.
Q499) Create a canary deployment with 1 replica and compare metrics.
Q500) Write a short incident report for a simulated outage.
