# Ingress and Gateway API

---

## Ingress

Ingress routes external HTTP/HTTPS traffic into Kubernetes services.
It does nothing without an **Ingress Controller** (nginx, traefik, etc.).

### Basic Ingress

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: app-ingress
  namespace: default
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  ingressClassName: nginx
  rules:
  - host: app.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: web-svc
            port:
              number: 80
```

### Multi-path Ingress

```yaml
spec:
  ingressClassName: nginx
  rules:
  - host: app.example.com
    http:
      paths:
      - path: /api
        pathType: Prefix
        backend:
          service:
            name: api-svc
            port:
              number: 8080
      - path: /
        pathType: Prefix
        backend:
          service:
            name: frontend-svc
            port:
              number: 80
```

### Ingress with TLS

```yaml
spec:
  ingressClassName: nginx
  tls:
  - hosts:
    - app.example.com
    secretName: tls-secret       # Secret must be type kubernetes.io/tls
  rules:
  - host: app.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: web-svc
            port:
              number: 80
```

Create TLS secret:
```bash
kubectl create secret tls tls-secret \
  --cert=tls.crt \
  --key=tls.key
```

### pathType values
| pathType | Meaning |
|----------|---------|
| `Prefix` | matches path prefix (e.g. `/api` matches `/api/v1`) |
| `Exact` | exact path match only |
| `ImplementationSpecific` | controller decides |

---

## Ingress Troubleshooting

```bash
# Check controller exists
kubectl get pods -n ingress-nginx

# Check ingress resource
kubectl get ingress -A
kubectl describe ingress <name>

# Check backend service exists and has endpoints
kubectl get svc <backend-svc>
kubectl get endpoints <backend-svc>

# Check ingress class
kubectl get ingressclass

# Check events
kubectl describe ingress <name> | grep -A10 Events
```

**Common failures:**
- Ingress controller not installed → `kubectl get pods -n ingress-nginx` is empty
- Wrong `ingressClassName` → controller ignores the resource
- Backend service name wrong or in different namespace
- Backend pod not ready → endpoint missing → 503
- Missing TLS secret → 404 or SSL error

---

## Gateway API (CKA 2025 syllabus)

Gateway API is the evolution of Ingress. It separates cluster-level infrastructure concerns (Gateway) from route ownership (HTTPRoute).

### Resource Hierarchy

```
GatewayClass   → defines what controller handles the gateways
    └── Gateway    → represents a network listener (like an LB)
         └── HTTPRoute  → routing rules (like Ingress rules)
```

### GatewayClass (cluster-level, created by admin)

```yaml
apiVersion: gateway.networking.k8s.io/v1
kind: GatewayClass
metadata:
  name: nginx-gateway
spec:
  controllerName: gateway.nginx.org/nginx-gateway-controller
```

### Gateway

```yaml
apiVersion: gateway.networking.k8s.io/v1
kind: Gateway
metadata:
  name: main-gateway
  namespace: default
spec:
  gatewayClassName: nginx-gateway
  listeners:
  - name: http
    port: 80
    protocol: HTTP
    allowedRoutes:
      namespaces:
        from: Same
```

### HTTPRoute

```yaml
apiVersion: gateway.networking.k8s.io/v1
kind: HTTPRoute
metadata:
  name: web-route
  namespace: default
spec:
  parentRefs:
  - name: main-gateway        # must match Gateway name
  hostnames:
  - "app.example.com"
  rules:
  - matches:
    - path:
        type: PathPrefix
        value: /
    backendRefs:
    - name: web-svc
      port: 80
```

---

## Ingress vs Gateway API

| Feature | Ingress | Gateway API |
|---------|---------|-------------|
| API stability | Stable (v1) | Stable (v1 from 1.28+) |
| Role separation | No | Yes (admin/dev) |
| Traffic splitting | Annotation-based | Native |
| TCP/UDP routing | Limited | Native |
| Maturity | Older | Newer standard |

**For CKA:** Understand the purpose and basic resource relationships. The exam may ask you to create an HTTPRoute or troubleshoot a Gateway.

---

## Key Commands

```bash
# Ingress
kubectl get ingress -A
kubectl describe ingress <name>
kubectl get ingressclass

# Gateway API
kubectl get gatewayclass
kubectl get gateway -A
kubectl get httproute -A
kubectl describe httproute <name>
```

## Ingress

- Ingress provides HTTP and HTTPS routing into services.
- It depends on an Ingress controller. The resource alone does nothing without a controller.
- Common use cases:
  - host-based routing
  - path-based routing
  - TLS termination

Quick checks:

```bash
kubectl get ingress -A
kubectl describe ingress <name>
kubectl get svc -n ingress-nginx
```

Common failure points:

- controller not installed
- wrong backend service name
- wrong backend port
- missing ingress class
- DNS not pointing to controller endpoint

## Ingress Annotations

- Annotations are controller-specific behavior switches.
- Rewrite, auth, rate-limits, and class selection often depend on annotations.
- Do not assume one controller's annotation works on another.

## Gateway API

- Gateway API is a newer routing model for Kubernetes.
- Common resources:
  - GatewayClass
  - Gateway
  - HTTPRoute
- It separates infrastructure ownership from route ownership more cleanly than classic Ingress.

## Ingress vs Gateway API

- Ingress is simpler and older.
- Gateway API is more expressive and role-oriented.
- For CKA, know the purpose and the basic resource relationship.

## Fast Troubleshooting Checklist

- check controller or gateway implementation exists
- check route attaches to the intended listener
- check backend service and ports
- check namespace and class references
- check events on ingress, gateway, and route objects