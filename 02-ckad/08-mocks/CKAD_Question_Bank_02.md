# CKAD Question Bank 02 (D101-D200)

## Theory (D101-D180)
D101) What is a sidecar log shipper?
D102) What is an adapter container used for?
D103) What is a shared volume in multi-container pods?
D104) Why use emptyDir for shared data?
D105) What is a lifecycle hook order?
D106) What is a rolling update maxUnavailable effect?
D107) What is a canary analysis step?
D108) Why use feature flags in delivery?
D109) What is a config-driven rollout?
D110) Why pin app container images?
D111) What is a container startup time budget?
D112) What is a readiness timeout?
D113) What is an app health contract?
D114) How do you handle large config maps?
D115) What is hot reload in a pod?
D116) What is a service endpoint for apps?
D117) What is a headless service for stateful apps?
D118) What is sticky sessions for apps?
D119) What is a zero-downtime deployment goal?
D120) What is a preStop hook used for?
D121) What is a terminationGracePeriodSeconds impact?
D122) What is a pod affinity for app locality?
D123) What is an anti-affinity for high availability?
D124) What is a pod topology spread for apps?
D125) What is a graceful drain impact on apps?
D126) Why use readiness gates for dependencies?
D127) What is a validation job before rollout?
D128) What is a smoke test job?
D129) What is a canary success criteria?
D130) What is a request budget?
D131) What is a queue-based backpressure?
D132) What is a retry storm?
D133) Why use circuit breakers in apps?
D134) What is a fallback response?
D135) What is a cache warm-up?
D136) What is a rate limit for app endpoints?
D137) What is a bulkhead for app resources?
D138) What is a concurrency limit for apps?
D139) What is a cold start penalty?
D140) What is a rolling restart vs rollout?
D141) Why use postStart hooks?
D142) What is an init container failure recovery?
D143) What is an app dependency health check?
D144) Why do apps need schema migration plans?
D145) What is a state migration rollback?
D146) What is a blue/green cutover step?
D147) What is a canary traffic split?
D148) What is a latency budget?
D149) What is a throughput target?
D150) Why do apps need observability in dev?
D151) What is tracing span context propagation?
D152) What is log correlation in microservices?
D153) Why do apps need to handle 429 responses?
D154) What is a queue depth metric?
D155) What is a graceful degradation mode?
D156) Why are timeouts required for outbound calls?
D157) What is a default client timeout?
D158) What is a retry budget?
D159) What is a shutdown hook behavior?
D160) Why should apps avoid mutable local state?
D161) What is an idempotent operation?
D162) Why use immutable config for releases?
D163) What is a config rollout failure?
D164) What is a secrets reload strategy?
D165) Why avoid secret exposure in logs?
D166) What is a service mesh retry policy?
D167) What is a retry jitter?
D168) What is a slow start load balancing?
D169) What is a readiness gate for external dependency?
D170) What is a pod disruption budget for app availability?
D171) What is a concurrency policy in CronJob?
D172) What is a backoffLimit impact on Jobs?
D173) Why do apps need resource limits for noisy neighbors?
D174) What is a queue consumer autoscaling signal?
D175) What is a canary rollback trigger?
D176) What is a regional failover for apps?
D177) What is a session store for stateless apps?
D178) Why use a shared cache?
D179) What is a readiness failure in canary?
D180) What is a deployment freeze?

## Practical tasks (D181-D200)
D181) Create a sidecar pattern for log shipping to shared volume.
D182) Add a readiness gate for a config init step.
D183) Configure a rolling update with maxUnavailable=0.
D184) Create a Job for schema migration and verify completion.
D185) Create a canary deployment and route 10 percent traffic (theory).
D186) Use a preStop hook to delay shutdown by 10s.
D187) Add a postStart hook to warm cache.
D188) Implement an HPA based on CPU and verify scale.
D189) Use a PodDisruptionBudget to ensure 2 pods available.
D190) Configure a service with session affinity and test.
D191) Create a headless service for a StatefulSet.
D192) Add config reload via sidecar (theory).
D193) Use a CronJob with concurrencyPolicy Forbid.
D194) Set resource requests/limits and check QoS.
D195) Create a topology spread constraint for app pods.
D196) Set pod anti-affinity to spread across nodes.
D197) Add a config checksum annotation to force rollout on config change.
D198) Implement blue/green with two services and swap selectors.
D199) Configure graceful shutdown and verify no 503s.
D200) Write a delivery checklist for app releases.
