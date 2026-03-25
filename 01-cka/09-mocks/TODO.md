# CKA 3-Day Todo (Hard Mode)

Day 1 - Core workloads + kubectl speed
- Learn: pod lifecycle, deployment basics, labels/selectors
- Practice: create pod, expose, logs/exec, edit, apply -f
- Practice: deployment create, scale, update image, rollback
- Practice: ConfigMap and Secret (env + volume)
- Timer: 2 blocks x 90 minutes, no breaks during tasks

Day 2 - Scheduling + storage + RBAC
- Learn: taints/tolerations, nodeSelector, affinity
- Practice: cordon, drain, uncordon
- Learn: PV/PVC/StorageClass, access modes
- Practice: bind PVC to PV and mount to pod
- Learn: Roles, RoleBindings, ServiceAccounts
- Practice: read-only pods in namespace via SA

Day 3 - Troubleshooting + networking + full mock
- Learn: pod troubleshooting patterns, events, describe
- Practice: image pull errors, CrashLoopBackOff, DNS checks
- Learn: Services, endpoints, headless service
- Practice: NetworkPolicy basics
- Full mock: 2 hours, 15-20 tasks, redo all failures

Rules
- Use kubectl only; avoid long docs reading
- Always do a post-task verify (get/describe/logs)
- Write down any command you had to look up
