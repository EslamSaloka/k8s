# CKAD Module 04 - Lab Solutions

## Lab 1: Debug CrashLoopBackOff
Commands:
- kubectl describe pod <pod>
- kubectl logs <pod> --previous
- kubectl get events --sort-by=.metadata.creationTimestamp

## Lab 2: Metrics endpoint
Steps:
- Expose /metrics in your app.
- Use Prometheus or metrics scrape (theory if no stack).

## Lab 3: Correlation ID
Example log format:
- "request_id=abc123 method=GET path=/status"

## Lab 4: kubectl top
Commands:
- kubectl top pods
- kubectl top nodes

## Lab 5: SLO draft
Example SLO:
- 99.9% of requests under 300ms over 30 days.
