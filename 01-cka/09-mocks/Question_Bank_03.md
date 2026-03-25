# CKA Question Bank 03 (Q201-Q300)

## Theory (Q201-Q280)
Q201) What is a ConfigMap used for?
Q202) What is a Secret used for?
Q203) Why is base64 not encryption?
Q204) How do env and envFrom differ?
Q205) How do mounted ConfigMaps update in a pod?
Q206) Why do env vars not update on ConfigMap change?
Q207) What is a projected volume?
Q208) What is an immutable ConfigMap?
Q209) How do you rotate a secret safely?
Q210) Why should secrets not be stored in images?
Q211) What is secret encryption at rest?
Q212) What is KMS integration for secrets?
Q213) How do you limit access to secrets?
Q214) What is a service account token?
Q215) What is a CSI secret store driver?
Q216) What is the scheduler responsible for?
Q217) What is nodeSelector?
Q218) What is node affinity?
Q219) What is pod affinity?
Q220) What is pod anti-affinity?
Q221) What is a taint?
Q222) What is a toleration?
Q223) What does NoSchedule mean?
Q224) What does PreferNoSchedule mean?
Q225) What does NoExecute mean?
Q226) What is a PriorityClass?
Q227) What is preemption?
Q228) What is topologySpreadConstraints?
Q229) Why do pods remain Pending?
Q230) How do you debug scheduling failures?
Q231) What is a PodDisruptionBudget?
Q232) Why should you cordon before drain?
Q233) What does drain do with DaemonSet pods?
Q234) How do you safely drain nodes with local storage?
Q235) What is a node condition?
Q236) What is the difference between node affinity and nodeSelector?
Q237) How do you schedule pods on GPU nodes?
Q238) What is the purpose of node labels?
Q239) Why use tolerations for special nodes?
Q240) What is a scheduler profile?
Q241) How does the scheduler score nodes?
Q242) What is the difference between preferred and required affinity?
Q243) What is a startup taint?
Q244) What is a taint-based eviction?
Q245) Why is NoExecute used for node issues?
Q246) How does pod affinity affect availability?
Q247) What is the role of resource requests in scheduling?
Q248) How do you restrict pods to a zone or region?
Q249) What is a nodeName field and why avoid it?
Q250) What is a scheduler extender?
Q251) What is a dynamic admission controller?
Q252) How do you set default CPU/memory limits?
Q253) What is a LimitRange?
Q254) How do you protect a node from new pods?
Q255) What is the difference between cordon and drain?
Q256) How do you uncordon a node?
Q257) What does kubectl taint do?
Q258) What is the default scheduling behavior for control plane nodes?
Q259) Why should you avoid hard affinity in small clusters?
Q260) What is the effect of a tolerationSeconds value?
Q261) How does node pressure affect scheduling?
Q262) What is a scheduler event?
Q263) What is a scheduler cache?
Q264) Why does scheduling depend on volume topology?
Q265) What is a topology key in affinity?
Q266) What is a pod affinity term?
Q267) What is a node affinity term?
Q268) Why is node affinity useful for compliance?
Q269) What is a taint key/value/effect format?
Q270) What is the difference between node and pod affinity?
Q271) How do you enforce even spread of pods across nodes?
Q272) What is a preferredDuringSchedulingIgnoredDuringExecution rule?
Q273) What is a requiredDuringSchedulingIgnoredDuringExecution rule?
Q274) How do you schedule pods only on SSD nodes?
Q275) What is a namespace default in scheduling?
Q276) Why can a pod be unschedulable even with free CPU?
Q277) What is a pod eviction?
Q278) How do you see scheduling reasons for a pod?
Q279) What is a scheduler plugin?
Q280) Why does the scheduler need to be deterministic?

## Practical tasks (Q281-Q300)
Q281) Create a ConfigMap from a file and mount it.
Q282) Inject a Secret into a pod as env vars.
Q283) Create an immutable ConfigMap and try to edit it.
Q284) Rotate a Secret and restart pods to pick it up.
Q285) Create a pod with nodeSelector and verify placement.
Q286) Add a taint to a node and create a toleration.
Q287) Create required node affinity and verify scheduling.
Q288) Create preferred pod anti-affinity and observe placement.
Q289) Use topologySpreadConstraints for even distribution.
Q290) Cordon and drain a node, then uncordon it.
Q291) Create a PriorityClass and schedule a high-priority pod.
Q292) Create a PodDisruptionBudget and test drain behavior.
Q293) Create a pod that stays Pending and resolve it.
Q294) Inspect scheduler events for a pod.
Q295) Label a node and schedule pods only there.
Q296) Add NoExecute taint and observe eviction behavior.
Q297) Use tolerationSeconds to delay eviction.
Q298) Create a pod with hard affinity to a missing label and fix it.
Q299) Show how requests impact scheduling decisions.
Q300) Document a node maintenance runbook.
