# CKA Question Bank 02 (Q101-Q200)

## Theory (Q101-Q180)
Q101) What is the Kubernetes pod network model?
Q102) What is a CNI plugin responsible for?
Q103) Name three common CNI plugins.
Q104) What is a ClusterIP service?
Q105) What is a NodePort service?
Q106) What is a LoadBalancer service?
Q107) What is a headless service and when use it?
Q108) What does kube-proxy do for service traffic?
Q109) What is session affinity in a service?
Q110) What is an EndpointSlice?
Q111) How does DNS resolve a service name?
Q112) What is CoreDNS used for?
Q113) What is the difference between a service selector and labels?
Q114) Why can a service have no endpoints?
Q115) What is the difference between pod IP and service IP?
Q116) What is a NetworkPolicy?
Q117) Why might a NetworkPolicy have no effect?
Q118) What is default deny in NetworkPolicy?
Q119) How do you allow traffic from a namespace?
Q120) What is egress control in NetworkPolicy?
Q121) What is an ingress controller?
Q122) Why do you need an ingress controller for Ingress resources?
Q123) What is a PV?
Q124) What is a PVC?
Q125) What is a StorageClass?
Q126) What does dynamic provisioning mean?
Q127) What is ReadWriteOnce?
Q128) What is ReadWriteMany?
Q129) What is ReadOnlyMany?
Q130) What is a reclaim policy?
Q131) What is the difference between Retain and Delete?
Q132) What is a volume snapshot?
Q133) What is a CSI driver?
Q134) Why is hostPath unsafe in production?
Q135) What is emptyDir and when is it used?
Q136) What does volumeMounts do?
Q137) What happens if a PVC is unbound?
Q138) How does a StatefulSet use storage?
Q139) What is a local PV?
Q140) What is a storage topology constraint?
Q141) How do you expand a PVC?
Q142) What is a volume attachment object?
Q143) What is the difference between PV capacity and PVC request?
Q144) Why do you need a default StorageClass?
Q145) What does allowVolumeExpansion do?
Q146) What is a RWX storage example in cloud?
Q147) What is the difference between a mount failure and attach failure?
Q148) How do you check PVC events?
Q149) Why do you separate storage from pods?
Q150) How does storage affect scheduling?
Q151) What is DNS policy in a pod?
Q152) What is a service endpoint?
Q153) How does kube-proxy choose a backend pod?
Q154) What is a NodePort range?
Q155) How do you expose a service in a local cluster?
Q156) How do you verify service routing?
Q157) What is service port vs targetPort?
Q158) What is a named port and why use it?
Q159) How do you debug DNS issues in a pod?
Q160) What happens if CoreDNS is down?
Q161) What is the default cluster DNS domain?
Q162) How do you view EndpointSlices?
Q163) What is iptables mode vs IPVS mode?
Q164) How do you check kube-proxy mode?
Q165) What is pod-to-service NAT?
Q166) Why is it important to label pods consistently?
Q167) What is service discovery?
Q168) What is an externalName service?
Q169) How do you map a service to a static IP?
Q170) What is a headless service used for in StatefulSet?
Q171) What is a topology-aware service?
Q172) Why would endpoints be empty even if pods exist?
Q173) What is a selectorless service?
Q174) What is an egress gateway?
Q175) How do you restrict egress to the internet?
Q176) What is a service account token projected volume?
Q177) Why do CNI plugins require node privileges?
Q178) How do you debug a CNI plugin issue?
Q179) What is a pod sandbox?
Q180) Why should storage and networking be tested before production?

## Practical tasks (Q181-Q200)
Q181) Create a Deployment and expose it as ClusterIP.
Q182) Verify the service endpoints for the Deployment.
Q183) Create a headless service and test DNS resolution.
Q184) Create a NodePort service and access it from the node.
Q185) Create a NetworkPolicy that denies all ingress, then allow one label.
Q186) Create a PVC and mount it into a pod.
Q187) Write data to the mounted PVC and verify after pod restart.
Q188) Create a PVC with invalid access mode and observe Pending.
Q189) Inspect StorageClass parameters and explain them.
Q190) Expand a PVC (if supported) and verify filesystem resize.
Q191) Create a service with wrong selector and fix it.
Q192) Debug a DNS failure inside a pod with nslookup.
Q193) Inspect EndpointSlices for a service.
Q194) Verify kube-proxy mode on a node.
Q195) Create an externalName service and test resolution.
Q196) Create an emptyDir volume and verify it is cleared on pod restart.
Q197) Use named ports in a service targetPort and verify.
Q198) Test traffic routing across two pods behind a service.
Q199) Create a selectorless service and manually set endpoints.
Q200) Document a network policy plan for a namespace.
