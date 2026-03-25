# Module 13 - Packaging, Release, and GitOps

## Goals
- Package apps for repeatable installs.
- Manage environments with overlays.
- Use Git as the source of truth.

## Helm (deep detail)
- Templating system for Kubernetes manifests.
- Values files drive configuration.
- Charts can include dependencies.

## Kustomize
- Patch and overlay YAML without templates.
- Base + overlays for dev/stage/prod.

## GitOps
- Git is the desired state.
- A controller reconciles cluster to Git.
- Common tools: Argo CD, Flux.

## Release practices
- Versioned charts and tags.
- Promote changes via pull requests.
- Automated rollbacks on failure.

## Practice (hands-on)
1) Install a Helm chart into a namespace.
2) Create a Kustomize base and overlay.
3) Set up a simple GitOps repo and sync.

## Common pitfalls
- Template complexity hiding real config.
- Not pinning chart versions.
- Directly changing live cluster state in GitOps workflows.

## Self-test (20 questions)
1) Why use Helm instead of raw YAML?
2) What is a values file?
3) How does Kustomize overlay work?
4) What is GitOps reconciliation?
5) Why should releases be versioned?
6) What is chart dependency?
7) How do you roll back a Helm release?
8) Why avoid kubectl apply in GitOps?
9) What is drift detection?
10) How do you manage secrets in GitOps?
11) What is the difference between Helm and Kustomize?
12) Why use a dedicated namespace for releases?
13) How do you test a chart before deploy?
14) What is a Helm hook?
15) How do you handle environment-specific values?
16) What is a GitOps sync window?
17) Why should you sign releases?
18) What is promotion between environments?
19) How do you audit changes in GitOps?
20) Why use a chart repository?

## Labs (5)
1) Package a simple app into a Helm chart.
2) Use Kustomize overlays for dev and prod.
3) Roll back a Helm release after a bad update.
4) Configure Argo CD to sync from Git.
5) Detect and fix drift in a GitOps managed namespace.
