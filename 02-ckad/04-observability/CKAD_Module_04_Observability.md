# CKAD Module 04 - Observability for Apps

## Goals
- Capture logs, metrics, and traces for apps.
- Debug application failures quickly.
- Build app-focused SLOs.

## Logs (deep detail)
- Apps should log to stdout/stderr.
- Use structured logging (JSON).
- Include correlation IDs for tracing.

## Metrics
- Expose /metrics endpoint if possible.
- Use metrics-server for basic CPU/mem.
- Use Prometheus for app metrics.

## Tracing
- Use OpenTelemetry for spans.
- Propagate trace context across services.

## Events and status
- Events show pod lifecycle and errors.
- Status conditions reflect readiness.

## Debugging patterns
- Describe -> logs -> exec -> config review.
- Focus on readiness and dependencies first.

## Practice (hands-on)
1) Capture logs from a crashing pod.
2) Expose app metrics and scrape them.
3) Add a basic trace header in requests.
4) Use kubectl top to watch CPU/mem.
5) Create an SLO for latency and error rate (theory).

## Common pitfalls
- No correlation IDs in logs.
- Metrics without labels or with high cardinality.
- Debugging without checking events.

## Self-test (20 questions)
1) Why log to stdout/stderr?
2) What is a correlation ID?
3) What is a trace span?
4) Why is metrics-server limited?
5) What is a good SLI for an API?
6) Why is high-cardinality bad?
7) How do you correlate logs and traces?
8) What is a readiness gate?
9) Why are events useful?
10) What does kubectl logs --previous do?
11) What is a golden signal?
12) How does HPA use metrics?
13) Why are health endpoints required?
14) What is a simple uptime check?
15) What is a p95 latency?
16) Why should logs be structured?
17) What is alert fatigue?
18) How do you verify a fix?
19) Why do apps need timeouts?
20) What is a postmortem summary?

## Labs (5)
1) Debug a CrashLoopBackOff using logs and describe.
2) Add a basic /metrics endpoint and scrape it.
3) Add correlation ID to logs (app config).
4) Use kubectl top to capture resource usage.
5) Write a small SLO target for an app.
