# Module 02 - Lab Solutions

## Lab 1: Create namespace and deploy
Commands:
- kubectl create namespace team-a
- kubectl -n team-a create deployment api --image=nginx:1.25
- kubectl -n team-a get all

## Lab 2: Labels and selectors
Commands:
- kubectl -n team-a label pod <pod> tier=frontend
- kubectl -n team-a get pods -l tier=frontend

## Lab 3: kubectl explain
Commands:
- kubectl explain deployment.spec
- kubectl explain deployment.spec.template.spec

## Lab 4: Server-side apply
Commands:
- kubectl apply --server-side -f deploy.yaml
- kubectl get managedfields -n team-a deployment api -o yaml

## Lab 5: Garbage collection
Steps:
1) Create Deployment and verify ReplicaSet.
2) Delete Deployment:
   - kubectl delete deployment api -n team-a
3) Verify ReplicaSet is deleted:
   - kubectl get rs -n team-a
