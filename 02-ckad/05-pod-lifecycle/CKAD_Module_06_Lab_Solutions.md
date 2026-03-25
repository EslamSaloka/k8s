# CKAD Module 06 - Lab Solutions

## Lab 1: Rolling update and rollback
Commands:
- kubectl create deployment web --image=nginx:1.25
- kubectl set image deployment/web nginx=nginx:1.26
- kubectl rollout status deployment/web
- kubectl rollout undo deployment/web

## Lab 2: Blue/green swap
Steps:
- Create two deployments: web-blue and web-green.
- Service selector points to app=web-blue.
- Switch selector to app=web-green.

## Lab 3: Canary with 1 replica
Commands:
- kubectl create deployment web-canary --image=nginx:1.26
- kubectl scale deployment web-canary --replicas=1

## Lab 4: HPA
Commands:
- kubectl autoscale deployment web --cpu-percent=50 --min=2 --max=5
- kubectl get hpa

## Lab 5: Delivery runbook
Include:
- Pre-checks
- Rollout steps
- Rollback steps
- Verification steps
