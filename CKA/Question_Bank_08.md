# CKA Question Bank 08 (Q701-Q800)

## Theory (Q701-Q780)
Q701) What are the main cluster provisioning options?
Q702) What is the Kubernetes version skew policy?
Q703) Why upgrade control plane before nodes?
Q704) What is a rolling node upgrade?
Q705) What is a maintenance window?
Q706) What is an etcd snapshot?
Q707) What should be backed up besides etcd?
Q708) Why test backups and restores?
Q709) What is a cluster disaster recovery plan?
Q710) What is certificate rotation and why is it needed?
Q711) What is a kubeconfig file used for?
Q712) How do you prevent context mistakes?
Q713) What is a runbook?
Q714) What is node cordon?
Q715) What is node drain?
Q716) What is a node upgrade strategy?
Q717) How do you handle local storage during drain?
Q718) Why do you use PodDisruptionBudgets?
Q719) What is cluster autoscaler?
Q720) What is the difference between HPA and VPA?
Q721) What is a control plane endpoint?
Q722) What is high availability for control plane?
Q723) How do you monitor upgrade health?
Q724) What is a kubelet config file?
Q725) What is a static pod manifest path?
Q726) Why should you pin node OS versions?
Q727) What is a node pool?
Q728) What is a taint on control plane nodes?
Q729) What is a drain timeout?
Q730) What is a node lease?
Q731) What is a node bootstrap process?
Q732) What is container runtime upgrade impact?
Q733) Why do you need cluster resource quotas?
Q734) What is a deprecation policy for APIs?
Q735) How do you handle API removals?
Q736) What is a rollback plan for upgrades?
Q737) Why document configuration drift?
Q738) What is a config management tool in ops?
Q739) What is a secret rotation policy?
Q740) What is a backup retention policy?
Q741) What is a disaster recovery RTO and RPO?
Q742) What is an SLA vs SLO?
Q743) What is a cluster health check?
Q744) What is a node health check?
Q745) What is a kubelet log useful for?
Q746) What is a kubeadm upgrade plan?
Q747) What is an admission controller update risk?
Q748) Why should you stage upgrades?
Q749) What is a canary cluster?
Q750) What is a blue/green control plane?
Q751) What is a component status check?
Q752) What is a control plane backup strategy?
Q753) What is a critical add-on?
Q754) Why should you version manifest files?
Q755) What is a change management process?
Q756) What is a rollback criteria?
Q757) How do you handle node OS security patches?
Q758) What is an image cache warm-up?
Q759) What is a maintenance drain order?
Q760) Why do you need capacity planning?
Q761) What is a cluster sizing calculation?
Q762) How do you verify API server health?
Q763) What is a dependency map for addons?
Q764) How do you monitor etcd health?
Q765) What is an etcd defrag operation?
Q766) What is a node affinity impact on ops?
Q767) What is a control plane scaling limit?
Q768) Why do you segregate workloads by node pools?
Q769) How do you audit ops changes?
Q770) What is a config backup cadence?
Q771) How do you test a restore in a lab?
Q772) What is a failover test?
Q773) How do you document operational risks?
Q774) What is a post-upgrade verification checklist?
Q775) How do you handle upgrade automation safely?
Q776) What is a compliance requirement for backups?
Q777) What is a node reboot strategy?
Q778) What is a cluster admission change risk?
Q779) How do you plan for cluster scale growth?
Q780) What is a disaster recovery drill?

## Practical tasks (Q781-Q800)
Q781) Cordon and drain a node, then uncordon it.
Q782) Create a PodDisruptionBudget and observe behavior during drain.
Q783) Document a kubeadm upgrade plan (theory lab).
Q784) Take an etcd snapshot (theory lab if managed).
Q785) Restore a small app from backup (lab or theory).
Q786) Verify cluster health after a simulated upgrade.
Q787) Rotate a certificate in a lab cluster (theory lab).
Q788) Create a runbook for node maintenance.
Q789) Inspect component statuses and report issues.
Q790) Verify version skew between control plane and nodes.
Q791) Create a change plan for a CNI upgrade.
Q792) Simulate a node failure and observe rescheduling.
Q793) Perform a controlled rollout of a critical add-on.
Q794) Document RTO/RPO targets for a service.
Q795) Create a capacity plan with current CPU/memory usage.
Q796) Run a post-upgrade verification checklist.
Q797) Audit recent changes and list risky modifications.
Q798) Plan a rollback scenario for an upgrade.
Q799) Write a backup and retention policy.
Q800) Schedule a disaster recovery drill.
