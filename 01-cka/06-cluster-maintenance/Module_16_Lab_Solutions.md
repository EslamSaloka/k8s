# Module 16 - Lab Solutions

## Lab 1: Two contexts
Commands:
- kind create cluster --name dev
- kind create cluster --name test
- kubectl config get-contexts

## Lab 2: Explicit context
Commands:
- kubectl --context kind-dev get nodes
- kubectl --context kind-test get nodes

## Lab 3: Default namespace per context
Commands:
- kubectl config set-context --current --namespace=dev

## Lab 4: GitOps multi-cluster
Steps:
- Use two Argo CD apps pointing to same repo.

## Lab 5: Runbook
Write a runbook for safe multi-cluster changes.
