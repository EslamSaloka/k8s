# Module 10 - Observability and Monitoring

## Goals
- Collect logs, metrics, and traces.
- Understand events and status conditions.
- Build basic alerting and dashboards.

## Logs
- kubectl logs for container output.
- Use sidecar or DaemonSet for log collection.

## Events
- Events show scheduling, failures, and restarts.
- Sort events by timestamp to find root cause.

## Metrics
- metrics-server provides CPU and memory metrics.
- Prometheus is common for time-series metrics.

## Tracing
- Distributed tracing shows request path across services.
- OpenTelemetry is a common standard.

## SLIs and SLOs
- SLI: a measurable metric (latency, error rate).
- SLO: target for SLI performance.

## Practice (hands-on)
1) Inspect logs and events for a pod.
2) Install metrics-server and use kubectl top.
3) Create a simple alert rule (Prometheus or similar).

## Common pitfalls
- Relying only on logs without metrics.
- Ignoring events and status conditions.
- Collecting too much data without clear SLOs.

## Self-test (20 questions)
1) What is the difference between logs and metrics?
2) Why are events useful for debugging?
3) What does kubectl top show?
4) How does HPA use metrics?
5) Why use Prometheus?
6) What is a trace span?
7) What is an SLO?
8) How do you capture logs in production?
9) What is the risk of missing logs on container crash?
10) How do you monitor node health?
11) What are status conditions?
12) What is an alert and why is it needed?
13) How do you instrument an app for tracing?
14) What is a service level indicator?
15) Why do you need dashboards?
16) What is the role of metrics-server?
17) How do you collect kubelet metrics?
18) Why should you label metrics?
19) How do you correlate logs and traces?
20) What is high cardinality and why avoid it?

## Labs (5)
1) Capture logs from a crashing pod and identify the cause.
2) Install metrics-server and run kubectl top.
3) Create a dashboard for CPU usage (tool of choice).
4) Emit custom app metrics and scrape them.
5) Produce a simple trace across two services.
