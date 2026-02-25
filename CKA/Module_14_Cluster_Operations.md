# Module 14 - Cluster Operations and Lifecycle

## Goals
- Understand provisioning, upgrades, and backups.
- Perform safe node maintenance.
- Learn disaster recovery basics.

## Provisioning choices
- Managed control plane vs self-managed.
- Trade-offs: control, cost, responsibility.

## Versioning and upgrades
- Follow Kubernetes version skew policy.
- Upgrade control plane first, then nodes.
- Use cordon and drain during upgrades.

## Backups
- etcd snapshot is critical for self-managed clusters.
- Back up PV data separately from etcd.

## Certificates
- Control plane uses certs for TLS.
- Cert rotation must be planned and tested.

## Disaster recovery
- Restore etcd, then restore workloads and PVs.
- Validate restore procedures regularly.

## Practice (hands-on)
1) Simulate node drain and upgrade sequence.
2) Document an etcd snapshot and restore plan.
3) Practice kubeconfig context safety checks.

## Common pitfalls
- Skipping backups before upgrades.
- Ignoring version skew warnings.
- Draining nodes without handling local storage.

## Self-test (20 questions)
1) Why upgrade control plane first?
2) What is version skew policy?
3) How does cordon differ from drain?
4) Why are etcd backups essential?
5) What is a safe upgrade strategy?
6) How do you handle rolling node upgrades?
7) What should be backed up besides etcd?
8) Why test disaster recovery?
9) What is a kubelet version limit?
10) How do you rotate certificates safely?
11) How do you avoid downtime during upgrades?
12) What is the role of a maintenance window?
13) Why are node labels important in ops?
14) How do you restore a cluster from snapshot?
15) What is the impact of deleting a node?
16) How do you verify cluster health after upgrade?
17) Why should you document runbooks?
18) How do you manage cluster config changes?
19) What is the role of autoscalers in ops?
20) How do you test backups?

## Labs (5)
1) Drain a node and observe pod rescheduling.
2) Perform a simulated control plane upgrade plan.
3) Write a backup runbook with steps and checks.
4) Restore a small app from backup (lab or theory).
5) Rotate a certificate in a lab cluster (theory if managed).
