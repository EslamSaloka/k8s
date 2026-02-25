# Module 10 - Lab Solutions

## Lab 1: Logs and events
Commands:
- kubectl logs <pod>
- kubectl get events --sort-by=.metadata.creationTimestamp

## Lab 2: metrics-server
Commands:
- kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
- kubectl top nodes

## Lab 3: Alert rule (Prometheus)
Example rule:
```yaml
groups:
- name: k8s-alerts
  rules:
  - alert: HighPodRestarts
    expr: increase(kube_pod_container_status_restarts_total[5m]) > 3
    for: 5m
    labels:
      severity: warning
    annotations:
      summary: "High pod restarts"
```

## Lab 4: Custom metrics
Steps:
1) Expose /metrics endpoint in app.
2) Create ServiceMonitor (if using Prometheus Operator).

## Lab 5: Basic trace
Steps:
1) Add OpenTelemetry SDK to app.
2) Send traces to collector.
3) Verify in tracing UI.
