# Module 13 - Lab Solutions

## Lab 1: Helm chart
Commands:
- helm create demo
- helm install demo ./demo -n demo --create-namespace

## Lab 2: Kustomize overlays
Commands:
- kustomize build overlays/dev | kubectl apply -f -
- kustomize build overlays/prod | kubectl apply -f -

## Lab 3: Helm rollback
Commands:
- helm upgrade demo ./demo -n demo
- helm rollback demo 1 -n demo

## Lab 4: GitOps sync
Steps:
- Create repo with manifests.
- Configure Argo CD or Flux to sync.

## Lab 5: Drift fix
Steps:
- Change live object manually.
- Watch GitOps controller revert it.
