# Module 02 - Objects, YAML, and kubectl

## Goals
- Master the Kubernetes object model.
- Write clean manifests by hand.
- Use kubectl efficiently for fast iteration.

## Object model (deep detail)
- Every resource has apiVersion, kind, metadata, spec, status.
- spec is your desired state; status is set by controllers.
- Most resources are namespaced; some are cluster-scoped.

## Namespaces
- Logical separation of resources.
- Policies and quotas are commonly per-namespace.
- Default namespace is not special except by convention.

## Labels and selectors
- Labels are key/value pairs for selection.
- Selectors drive services, deployments, and queries.
- Labels are for identity; annotations are for metadata.

## Owners and garbage collection
- ownerReferences link child resources to parents.
- Deleting a parent can delete children (foreground or background).

## YAML mechanics
- YAML indentation controls structure.
- Lists use hyphens, objects use key: value.
- Be consistent with spacing and avoid tabs.

## kubectl patterns
- Inspect: kubectl get, describe, explain
- Create: kubectl apply -f
- Generate: kubectl create --dry-run=client -o yaml
- Debug: kubectl logs, exec, events
- Diff: kubectl diff -f

## Practice (hands-on)
1) Generate YAML fast:
   - kubectl create deployment api --image=nginx:1.25 --dry-run=client -o yaml > deploy.yaml
2) Explain fields:
   - kubectl explain deployment.spec
3) Apply, then diff:
   - kubectl apply -f deploy.yaml
   - kubectl diff -f deploy.yaml

## Common pitfalls
- Editing live objects without saving desired YAML.
- Using annotations where labels are required by selectors.
- Forgetting namespace flags in kubectl commands.

## Self-test (20 questions)
1) What is the difference between spec and status?
2) Name three cluster-scoped resources.
3) Why do selectors require stable labels?
4) What is the default namespace used for?
5) How does garbage collection know what to delete?
6) What does kubectl apply do compared to create?
7) Why use kubectl diff?
8) What is a strategic merge patch?
9) What is an annotation used for?
10) How do you list all resources in a namespace?
11) Why is YAML indentation important?
12) What does --dry-run=client do?
13) What is the purpose of kubectl explain?
14) How do you change the current namespace context?
15) Why do you avoid editing live objects without YAML?
16) What is a field manager in apply?
17) How does server-side apply differ?
18) Why are CRDs in apiVersion custom groups?
19) What is a label selector expression?
20) Why are some objects not namespaced?

## Labs (5)
1) Create a namespace and deploy resources into it.
2) Add labels to pods and query with selectors.
3) Use kubectl explain to find required fields for a resource.
4) Practice server-side apply with a small YAML.
5) Delete a parent and observe child garbage collection.
