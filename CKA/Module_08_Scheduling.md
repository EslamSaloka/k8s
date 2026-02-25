# Module 08 - Scheduling and Node Management

## Goals
- Control where pods run.
- Understand taints, tolerations, and affinity.
- Perform safe node maintenance.

## Scheduling basics
- Scheduler filters nodes, then scores them.
- Unschedulable pods stay Pending.

## nodeSelector
- Simple key/value match for node labels.
- Easy but not expressive.

## Node affinity
- RequiredDuringScheduling (hard)
- PreferredDuringScheduling (soft)
- Supports operators and topology.

## Taints and tolerations
- Taints repel pods, tolerations allow scheduling.
- NoSchedule, PreferNoSchedule, NoExecute.

## Priority and preemption
- Higher priority pods can evict lower priority pods.

## Node maintenance
- cordon: mark unschedulable.
- drain: evict pods safely.
- uncordon: return to service.

## Practice (hands-on)
1) Label a node and schedule a pod via nodeSelector.
2) Add a taint and schedule only tolerated pods.
3) Drain a node and observe pod rescheduling.

## Common pitfalls
- Forgetting to add tolerations after taints.
- Using nodeSelector for complex topology rules.
- Draining without handling local storage or daemonsets.

## Self-test (20 questions)
1) What does nodeSelector do?
2) How is node affinity more flexible?
3) What does NoExecute taint do?
4) Why are taints used on control plane nodes?
5) What is a toleration?
6) How does priority affect scheduling?
7) What does preemption do?
8) What is a pod disruption budget?
9) Why do pods stay Pending?
10) How do you restrict pods to a specific zone?
11) What is the difference between cordon and drain?
12) How do you prevent eviction during drain?
13) What happens to DaemonSet pods during drain?
14) Why should you avoid hard affinity in small clusters?
15) What is topologySpreadConstraints?
16) How do you schedule only on GPU nodes?
17) How do you debug scheduling failures?
18) What is a Node condition and why does it matter?
19) How does the scheduler choose between equal nodes?
20) When would you use PreferNoSchedule?

## Labs (5)
1) Use nodeSelector to schedule a pod to a labeled node.
2) Create taint and matching toleration.
3) Drain and uncordon a node with safe flags.
4) Apply a preferred node affinity and observe scheduling.
5) Create a pod with priority class and observe preemption (lab only).
