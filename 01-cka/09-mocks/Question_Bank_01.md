# CKA Question Bank 01 (Q001-Q100)

## Theory (Q001-Q080)
Q001) What problem does Kubernetes solve in container operations?
Q002) Define desired state in Kubernetes.
Q003) What is a reconciliation loop and why is it important?
Q004) What is the primary role of kube-apiserver?
Q005) What is etcd used for?
Q006) Why does etcd require quorum for writes?
Q007) What does the scheduler do when a pod is created?
Q008) What is the controller manager responsible for?
Q009) Why is kubelet needed on every node?
Q010) What is the role of kube-proxy?
Q011) What is a static pod and when is it used?
Q012) What is the difference between spec and status?
Q013) What is a namespace and why use it?
Q014) Which resources are cluster-scoped vs namespaced?
Q015) What is a label and how is it used?
Q016) What is a selector and why must it be stable?
Q017) What is an annotation and when do you use it?
Q018) What is a ServiceAccount and what is it used for?
Q019) What is a kubeconfig context?
Q020) What happens during API request admission?
Q021) What is a CRI and why does it matter?
Q022) What is the difference between a pod and a container?
Q023) Why are pods ephemeral?
Q024) What are pod lifecycle phases?
Q025) What does CrashLoopBackOff mean?
Q026) What is a liveness probe used for?
Q027) What is a readiness probe used for?
Q028) When should you use a startup probe?
Q029) What is an init container?
Q030) What is an ephemeral container?
Q031) What are resource requests?
Q032) What are resource limits?
Q033) How do requests influence scheduling?
Q034) What happens when a container exceeds a memory limit?
Q035) What is a Guaranteed QoS class?
Q036) What is a Burstable QoS class?
Q037) What is a BestEffort QoS class?
Q038) What is terminationGracePeriodSeconds?
Q039) What does restartPolicy control?
Q040) Why do containers in a pod share localhost?
Q041) What is a Deployment used for?
Q042) What does a ReplicaSet do?
Q043) What is a rolling update?
Q044) What does maxSurge control?
Q045) What does maxUnavailable control?
Q046) How do you roll back a Deployment?
Q047) What is revisionHistoryLimit?
Q048) What is a StatefulSet used for?
Q049) Why does a StatefulSet provide stable identity?
Q050) What are volumeClaimTemplates?
Q051) What is a DaemonSet used for?
Q052) How does a DaemonSet differ from a Deployment?
Q053) What is a Job and when do you use it?
Q054) What is a CronJob?
Q055) What does concurrencyPolicy do in CronJob?
Q056) What is a selector mismatch and why is it dangerous?
Q057) What is ownerReferences and why do they matter?
Q058) What is garbage collection in Kubernetes?
Q059) What is server-side apply?
Q060) What is a field manager in apply?
Q061) Why use kubectl diff?
Q062) What is the role of kubectl explain?
Q063) What is a patch and when would you use it?
Q064) What is a strategic merge patch?
Q065) Why do you avoid editing live objects without YAML?
Q066) How do you list all resources in a namespace?
Q067) What is a label selector expression?
Q068) What does --dry-run=client do?
Q069) Why do controllers need watch streams?
Q070) What does a node condition represent?
Q071) What does a node taint do at a high level?
Q072) What are EndpointSlices and why were they introduced?
Q073) What is the difference between desired replicas and available replicas?
Q074) What is the role of status conditions in a Deployment?
Q075) What is a pod disruption budget?
Q076) What does kubelet report to the API server?
Q077) Why should you set requests for critical workloads?
Q078) What is a rollout pause and when to use it?
Q079) Why is a namespace boundary important for security?
Q080) What does kubectl get events show?

## Practical tasks (Q081-Q100)
Q081) Create a namespace named team-a and switch context to it.
Q082) Create a pod named web using nginx:1.25 and verify it is Running.
Q083) Add a label tier=frontend to the web pod and query it by label.
Q084) Create a Deployment named api with 3 replicas and image nginx:1.25.
Q085) Scale the Deployment to 5 replicas and confirm.
Q086) Update the Deployment image to nginx:1.26 and watch rollout.
Q087) Roll back the Deployment to the previous revision.
Q088) Create a Job that prints hello and completes.
Q089) Create a CronJob that runs every minute and verify Job creation.
Q090) Add liveness and readiness probes to a pod and confirm they work.
Q091) Create a pod with an init container that creates a file.
Q092) Set CPU/memory requests and limits on a pod and check QoS.
Q093) Use kubectl explain to find the required fields for a Deployment.
Q094) Use kubectl diff on a manifest before applying it.
Q095) Create a ReplicaSet directly and verify it maintains replicas.
Q096) Delete a parent Deployment and observe ReplicaSet deletion.
Q097) Create a pod with a bad command and fix CrashLoopBackOff.
Q098) Use kubectl logs and exec to inspect a running pod.
Q099) Create a pod and observe events in chronological order.
Q100) Export a Deployment to YAML and re-apply it.
