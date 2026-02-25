# Module 04 - Workloads (Deployments, StatefulSets, DaemonSets, Jobs)

## Goals
- Choose the right workload for each use case.
- Master rolling updates and rollbacks.
- Understand controller behaviors and guarantees.

## Deployment (deep detail)
- Manages ReplicaSets for stateless apps.
- Supports rolling updates with maxSurge and maxUnavailable.
- Uses selector labels to manage pods.

## ReplicaSet
- Ensures desired replica count.
- Usually managed by a Deployment.

## StatefulSet
- Stable identity for each pod (name-0, name-1).
- Stable storage via PVC templates.
- Ordered startup/shutdown by default.

## DaemonSet
- One pod per node (or per selected node).
- Used for logging agents, monitoring, CNI components.

## Job and CronJob
- Jobs run to completion.
- CronJobs run on schedule with concurrency policy.

## Practice (hands-on)
1) Create a deployment, scale it, and update image.
2) Roll back after a failed update.
3) Create a StatefulSet with volumeClaimTemplates.
4) Create a DaemonSet and confirm one per node.
5) Create a CronJob and verify schedule.

## Common pitfalls
- Changing labels without updating selectors.
- Using Deployment for stateful storage.
- Forgetting to clean up Jobs and CronJobs.

## Self-test (20 questions)
1) What is the main responsibility of a Deployment?
2) Why does a StatefulSet need stable identity?
3) What does maxSurge control?
4) What is the difference between a Deployment and ReplicaSet?
5) Why are DaemonSets used for node agents?
6) What happens when a StatefulSet pod is deleted?
7) How do rolling updates reduce downtime?
8) What is a Job backoffLimit?
9) How do you stop a CronJob from creating new Jobs?
10) Why do StatefulSets use volumeClaimTemplates?
11) What is the purpose of revisionHistoryLimit?
12) What is the effect of deleting a Deployment?
13) When should you use a Job instead of a Deployment?
14) How can you pin a DaemonSet to specific nodes?
15) What is the OnDelete update strategy?
16) How do you roll back a Deployment?
17) What is a ReplicaSet selector?
18) Why does a CronJob have concurrencyPolicy?
19) What is pod management policy in StatefulSets?
20) How do you debug a rollout stuck in progress?

## Labs (5)
1) Deploy an app and perform a rolling update, then rollback.
2) Create a StatefulSet and verify stable pod names.
3) Create a DaemonSet that runs on all nodes.
4) Schedule a CronJob to run every minute and inspect Jobs.
5) Scale a Deployment and observe ReplicaSet changes.
