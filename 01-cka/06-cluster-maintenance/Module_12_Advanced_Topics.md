# Module 12 - Advanced Topics (Ingress, CRD, Operators)

## Goals
- Understand advanced APIs and extension points.
- Use ingress to route HTTP traffic.
- Know how custom resources and operators work.

## Ingress
- Routes HTTP and HTTPS based on host or path.
- Requires an Ingress Controller (nginx, traefik, etc.).
- TLS termination can happen at the controller.

## CRD (CustomResourceDefinition)
- Extends the Kubernetes API with new types.
- Stored in etcd like built-in objects.

## Operators
- Controllers that manage a specific app lifecycle.
- Encode domain knowledge into automation.

## Admission webhooks
- Mutating or validating requests.
- Used for policy or defaulting.

## Practice (hands-on)
1) Install an ingress controller and expose a service.
2) Create a simple CRD and apply a custom resource.
3) Inspect an operator-managed resource.

## Common pitfalls
- Creating Ingress without a controller.
- CRDs without clear versioning or schema.
- Operators with unsafe privileges.

## Self-test (20 questions)
1) What does an ingress controller do?
2) How is Ingress different from a Service?
3) What is a CRD?
4) Why are operators useful?
5) What is a webhook and when is it called?
6) How do you secure ingress with TLS?
7) Why does a CRD need a schema?
8) What is a controller reconcile loop?
9) How do operators manage upgrades?
10) What is a conversion webhook?
11) How do you define API versions in a CRD?
12) Why use an operator instead of scripts?
13) What happens when a CRD is deleted?
14) How do you observe operator logs?
15) How does ingress routing match hosts?
16) What is a default backend in ingress?
17) How do admission webhooks affect create requests?
18) What are finalizers and why do they matter?
19) Why is versioning important for custom APIs?
20) What is a controller cache?

## Labs (5)
1) Install nginx ingress controller and route / to a service.
2) Create a CRD for a Demo resource and apply a custom object.
3) Write a simple controller outline (theory lab).
4) Configure TLS on an ingress with a secret.
5) Inspect operator-managed StatefulSet behavior.
