# CKAD Question Bank 01 (D001-D100)

## Theory (D001-D080)
D001) What is a 12-factor app?
D002) Why should apps be stateless in Kubernetes?
D003) What is graceful shutdown in pods?
D004) What is a readiness probe for an app?
D005) What is a liveness probe for an app?
D006) What is a startup probe for slow apps?
D007) What is a sidecar container pattern?
D008) What is an ambassador pattern?
D009) What is an adapter pattern?
D010) When do you use init containers?
D011) How do you handle app config changes?
D012) What is a config reload strategy?
D013) What is the difference between env and mounted config?
D014) What is secret rotation from an app view?
D015) Why should apps log to stdout/stderr?
D016) What is structured logging?
D017) What is a correlation ID?
D018) Why are metrics important for apps?
D019) What is a service discovery mechanism?
D020) What is client-side load balancing?
D021) What is a headless service for apps?
D022) What is a session affinity use case?
D023) Why should apps avoid local disk state?
D024) What is a rolling update in app delivery?
D025) What is a blue/green deployment?
D026) What is a canary deployment?
D027) What is a feature flag and why use it?
D028) What is a retry and backoff strategy?
D029) What is a circuit breaker?
D030) What is a timeout and why use it?
D031) What is a bulkhead pattern?
D032) What is a resource request for an app?
D033) What is a resource limit for an app?
D034) What is HPA and when to use it?
D035) What is a horizontal scaling signal?
D036) Why should apps handle SIGTERM?
D037) What is a preStop hook?
D038) What is a postStart hook?
D039) What is an init failure impact?
D040) What is a config validation step?
D041) What is a readiness gate?
D042) What is a startup delay risk?
D043) What is a rolling restart?
D044) Why should you avoid long init containers?
D045) What is a multi-container pod use case?
D046) What is a service port vs targetPort?
D047) Why use named ports in apps?
D048) What is a canary metric?
D049) What is a health endpoint?
D050) Why use probes instead of external checks?
D051) What is an ingress controller for app devs?
D052) What is TLS termination for apps?
D053) What is a host-based route?
D054) What is a path-based route?
D055) What is HTTP 503 from readiness?
D056) Why do apps need idempotency?
D057) What is safe retry behavior?
D058) What is a migration job?
D059) What is a one-off job?
D060) What is a config map binary data?
D061) What is a secret volume default mode?
D062) How do you do config validation on startup?
D063) What is an init container for DB migrations?
D064) How do you prevent thundering herd on rollout?
D065) What is a resource budget per request?
D066) What is a request timeout in ingress?
D067) What is a service mesh for apps?
D068) What is mTLS for app traffic?
D069) Why use correlation IDs across services?
D070) What is log sampling?
D071) Why do apps need graceful degradation?
D072) What is a backpressure signal?
D073) How do you handle dependent service failure?
D074) What is readiness vs liveness for app logic?
D075) Why are clean shutdowns important?
D076) What is a stateful app pattern in K8s?
D077) What is an app config fallback?
D078) Why use environment-specific config?
D079) What is a job completion signal?
D080) What is a build once, run anywhere principle?

## Practical tasks (D081-D100)
D081) Create a Deployment with readiness and liveness probes.
D082) Add a preStop hook to delay termination.
D083) Create a multi-container pod with a sidecar logger.
D084) Create an init container that runs a migration.
D085) Expose an app with a Service and test it.
D086) Create an Ingress with host-based routing.
D087) Add TLS to an Ingress using a secret.
D088) Inject a ConfigMap into an app as env vars.
D089) Inject a Secret into an app as a volume.
D090) Create a Job for a one-off task.
D091) Create a CronJob for scheduled tasks.
D092) Implement a rolling update and verify readiness gating.
D093) Create a canary deployment with 1 replica.
D094) Configure resource requests and limits for an app.
D095) Configure HPA for a Deployment.
D096) Create a PodDisruptionBudget for an app.
D097) Configure a liveness probe to restart a stuck app.
D098) Test graceful shutdown by sending SIGTERM.
D099) Add structured logging to a sample app.
D100) Create a blue/green deployment plan (theory lab).
