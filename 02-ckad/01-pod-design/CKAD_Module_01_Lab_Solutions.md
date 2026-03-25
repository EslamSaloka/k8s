# CKAD Module 01 - Lab Solutions

## Lab 1: Deployment with probes and limits
YAML:
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web
spec:
  replicas: 2
  selector:
    matchLabels:
      app: web
  template:
    metadata:
      labels:
        app: web
    spec:
      containers:
      - name: web
        image: nginx:1.25
        ports:
        - containerPort: 80
        livenessProbe:
          httpGet:
            path: /
            port: 80
          initialDelaySeconds: 5
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /
            port: 80
          initialDelaySeconds: 5
          periodSeconds: 5
        resources:
          requests:
            cpu: "100m"
            memory: "128Mi"
          limits:
            cpu: "200m"
            memory: "256Mi"
```

## Lab 2: preStop hook
YAML snippet:
```yaml
lifecycle:
  preStop:
    exec:
      command: ["sh", "-c", "sleep 10"]
```

## Lab 3: Readiness failure
Commands:
- kubectl patch deployment web -p '{"spec":{"template":{"spec":{"containers":[{"name":"web","readinessProbe":{"httpGet":{"path":"/bad","port":80},"initialDelaySeconds":5,"periodSeconds":5}}]}}}}'
- kubectl get endpoints web

## Lab 4: Multi-stage build (concept)
Dockerfile outline:
```Dockerfile
FROM golang:1.22 AS build
WORKDIR /src
COPY . .
RUN CGO_ENABLED=0 go build -o app

FROM gcr.io/distroless/base-debian12
COPY --from=build /src/app /app
USER 65532:65532
ENTRYPOINT ["/app"]
```

## Lab 5: App readiness checklist
Checklist:
- Readiness probe exists and checks dependency health.
- Liveness probe checks basic process health.
- SIGTERM handled with shutdown delay.
- Requests/limits set.
- Config externalized.
