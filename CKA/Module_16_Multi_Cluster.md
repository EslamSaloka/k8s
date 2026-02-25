# Module 16 - Multi-Cluster and Advanced Operations

## Goals
- Safely manage multiple clusters.
- Understand context switching risks.
- Learn basic multi-cluster patterns.

## kubeconfig and contexts
- kubeconfig holds clusters, users, and contexts.
- Always verify current context before changes.

## Multi-cluster patterns
- Separate clusters by environment or region.
- Centralized GitOps for consistency.

## Federation basics
- Some resources can be synchronized across clusters.
- Typically handled by higher-level tooling.

## Service mesh and multi-cluster
- A mesh can provide cross-cluster traffic management.
- Not required for most beginners, but useful in large systems.

## Practice (hands-on)
1) Create two contexts (local clusters) and switch safely.
2) Set a context-specific namespace to avoid mistakes.
3) Practice safe commands with explicit --context.

## Common pitfalls
- Accidentally modifying the wrong cluster.
- Assuming network connectivity between clusters.
- Missing consistent policy enforcement across clusters.

## Self-test (20 questions)
1) What is stored in kubeconfig?
2) Why is context switching risky?
3) How do you set a default namespace for a context?
4) What is a multi-cluster use case?
5) How does GitOps help multi-cluster management?
6) What is federation and when is it used?
7) Why are identities harder across clusters?
8) How do you avoid secret sprawl across clusters?
9) What is a service mesh used for?
10) How do you standardize policies across clusters?
11) Why should you use explicit --context in scripts?
12) How do you audit multi-cluster changes?
13) What are common errors with kubeconfig files?
14) How do you test connectivity between clusters?
15) What is the risk of shared admin credentials?
16) How do you rotate credentials across clusters?
17) What is the difference between cluster and namespace scope?
18) Why should you document cluster ownership?
19) How do you handle upgrades across many clusters?
20) What is the role of a hub cluster?

## Labs (5)
1) Create two local clusters and manage both via contexts.
2) Use explicit --context for all commands in a script.
3) Set different namespaces per context and verify.
4) Sync a simple app to two clusters via GitOps (theory lab).
5) Write a runbook for multi-cluster changes.
