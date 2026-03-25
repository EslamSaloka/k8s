# CKAD Module 05 - Services and Ingress for Apps

## Goals
- Expose apps reliably.
- Understand service routing and DNS.
- Use Ingress for HTTP routing.

## Services (deep detail)
- ClusterIP for internal access.
- NodePort for node exposure.
- LoadBalancer for external cloud access.
- Headless for direct pod DNS.

## DNS
- CoreDNS resolves service names.
- Service FQDN: <svc>.<ns>.svc.cluster.local

## Service routing
- kube-proxy uses iptables or IPVS.
- Endpoints/EndpointSlices map service to pods.

## Ingress
- Requires ingress controller.
- Supports host and path routing.
- TLS termination via secret.

## App-focused networking
- Readiness gates traffic.
- Use session affinity carefully.
- Keep ports consistent and named.

## Practice (hands-on)
1) Expose a deployment with ClusterIP.
2) Create a headless service and resolve DNS.
3) Create Ingress and test host-based route.
4) Add TLS to Ingress.
5) Debug a service with no endpoints.

## Common pitfalls
- Ingress without controller.
- Service selector mismatch.
- Missing readiness probe causing bad traffic.

## Self-test (20 questions)
1) When use ClusterIP vs NodePort?
2) Why is DNS important for services?
3) What is a headless service used for?
4) What is the role of EndpointSlices?
5) How does a service choose pods?
6) Why does readiness affect service traffic?
7) What is an IngressClass?
8) How does TLS work in Ingress?
9) What is a default backend?
10) How do you test Ingress routing?
11) Why use named ports?
12) What is session affinity?
13) Why do services fail without endpoints?
14) How do you verify endpoints quickly?
15) What is a service targetPort?
16) How does kube-proxy load balance?
17) What is a host header used for?
18) What is the service FQDN format?
19) Why use readiness before exposing traffic?
20) How do you debug a bad selector?

## Labs (5)
1) Expose a deployment and curl it from a pod.
2) Create a headless service and inspect DNS.
3) Create an Ingress and test with curl -H Host.
4) Enable TLS on Ingress with a secret.
5) Fix a service selector mismatch.
