# CKA Question Bank 10 (Q901-Q1000)

## Theory (Q901-Q980)
Q901) What is the difference between CKA, CKAD, and CKS scopes?
Q902) What kubectl commands should you master for speed?
Q903) Why is YAML proficiency critical for Kubernetes?
Q904) What is the difference between declarative and imperative workflows?
Q905) What are the most common exam time sinks?
Q906) How do you use kubectl explain during an exam?
Q907) Why is context awareness critical?
Q908) What are common causes of failed rollouts?
Q909) How do you recover from a broken Deployment?
Q910) What is the fastest way to edit a live resource?
Q911) Why should you verify changes immediately?
Q912) What is a checklist approach to troubleshooting?
Q913) What is the difference between spec and status in debugging?
Q914) Why do service selectors often cause failures?
Q915) What is a fast method to generate YAML?
Q916) Why do you avoid manual typing of large manifests?
Q917) What is the role of annotations in operational tools?
Q918) Why does resource pressure affect scheduling?
Q919) What is a minimal reproducible scenario?
Q920) How does node capacity influence scheduling?
Q921) What is the most common storage error for beginners?
Q922) Why do you confirm endpoints when a service fails?
Q923) What is a fast DNS check inside a pod?
Q924) How do you troubleshoot a PVC stuck Pending?
Q925) What is the fastest way to troubleshoot CrashLoopBackOff?
Q926) Why are events often the fastest clue?
Q927) How do you quickly check RBAC access?
Q928) What is a safe way to test permissions?
Q929) Why is reading existing YAML often faster than writing from scratch?
Q930) What is a fast way to copy a pod spec into a Deployment?
Q931) What are common pitfalls with taints and tolerations?
Q932) Why do pods remain Pending after taints?
Q933) How do you verify node labels?
Q934) What is a safe drain command?
Q935) Why do daemons not get evicted by drain by default?
Q936) What is the best practice for image tags?
Q937) Why should you set requests and limits?
Q938) How do you validate a service targets the right port?
Q939) What is the importance of readiness probes in services?
Q940) Why is rollback part of every change?
Q941) What is the impact of using hostPath in exams?
Q942) How do you clean up resources quickly?
Q943) What is the difference between nodeSelector and affinity in exam tasks?
Q944) What is the simplest way to create a ConfigMap?
Q945) What is the simplest way to create a Secret?
Q946) How do you verify a Secret mount?
Q947) What is the effect of envFrom on a pod?
Q948) Why should you keep a clean namespace?
Q949) Why is naming consistency important?
Q950) Why should you avoid editing cluster-wide objects without care?
Q951) What is the difference between a DaemonSet and a Deployment in exam tasks?
Q952) Why is K8s troubleshooting a systems skill?
Q953) What is the difference between logs and events in exams?
Q954) How do you verify a rollout succeeded?
Q955) What is a fastest way to label and select pods?
Q956) Why is apply -f the standard workflow?
Q957) What is a safe method to update a running service?
Q958) What is the fastest way to expose a deployment?
Q959) Why do you use --dry-run=client -o yaml?
Q960) Why is kubectl describe often sufficient for first diagnosis?
Q961) How do you verify a pod is running on the right node?
Q962) What is a simple way to check service DNS?
Q963) What is a safe way to restart a pod in a deployment?
Q964) How do you handle stuck Terminating pods?
Q965) What is the best approach to multi-step tasks under time pressure?
Q966) Why should you keep manifests minimal in exams?
Q967) How do you verify a PVC is bound?
Q968) Why does a Service not route if endpoints are empty?
Q969) What is a quick check for CNI issues?
Q970) What is a quick check for kube-proxy issues?
Q971) Why is RBAC often a hidden cause?
Q972) How do you check which user you are using?
Q973) What is the safest way to switch contexts?
Q974) Why should you use namespaces in practice clusters?
Q975) What is the role of notes in labs?
Q976) Why do you re-run tests after every change?
Q977) What is the most reliable method to verify success?
Q978) How do you keep focus during long troubleshooting?
Q979) Why is systematic thinking more valuable than guesswork?
Q980) How do you balance speed and accuracy?

## Practical tasks (Q981-Q1000)
Q981) Create a pod and expose it as a service in one namespace.
Q982) Create a deployment, update image, and roll back.
Q983) Create a ConfigMap and inject it into a pod.
Q984) Create a Secret and mount it as a volume.
Q985) Create a PVC and mount it into a pod.
Q986) Create a nodeSelector rule and schedule a pod.
Q987) Taint a node and schedule a tolerated pod.
Q988) Create a NetworkPolicy to allow only one app.
Q989) Debug a pod in CrashLoopBackOff and fix it.
Q990) Debug a service with no endpoints and fix the selector.
Q991) Debug DNS resolution inside a pod.
Q992) Use kubectl exec to verify a mounted file.
Q993) Use kubectl logs --previous for a crashed container.
Q994) Create a Job that runs once and completes.
Q995) Create a CronJob and verify it triggers.
Q996) Drain a node and verify rescheduling.
Q997) Create Role and RoleBinding for read-only access.
Q998) Check permissions with kubectl auth can-i.
Q999) Create a Deployment with probes and verify readiness gating.
Q1000) Write a brief runbook for a common outage scenario.
