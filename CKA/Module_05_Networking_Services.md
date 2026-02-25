# Module 05 - Networking and Services

## Goals
- Understand pod networking, services, and DNS.
- Know how kube-proxy and CNI work together.
- Apply NetworkPolicy concepts.

## Pod network model (deep detail)
- Every pod gets an IP on the cluster network.
- Pod-to-pod communication is direct, no NAT.
- Nodes route pod traffic via the CNI plugin.

## CNI (Container Network Interface)
- Creates pod network interfaces and assigns IPs.
- Configures routes between nodes.
- Examples: Calico, Cilium, Flannel.

## Services
- ClusterIP: stable virtual IP inside cluster.
- NodePort: exposes a port on each node.
- LoadBalancer: cloud-managed external access.
- Headless: no cluster IP, DNS returns pod IPs.

## kube-proxy
- Programs iptables or IPVS rules.
- Handles service VIP and load balancing.

## DNS
- CoreDNS provides service discovery.
- Service name resolves to ClusterIP.
- Headless services return individual pod IPs.

## EndpointSlices
- Scalable representation of service endpoints.
- Used by kube-proxy and service discovery.

## NetworkPolicy
- Controls traffic between pods and namespaces.
- Requires a CNI that enforces policies.
- Start with default deny, then allow needed flows.

## Practice (hands-on)
1) Create a Deployment and expose it via ClusterIP.
2) Create a headless service and inspect DNS.
3) Check endpoints and EndpointSlices.
4) Create a basic NetworkPolicy allow from a label.

## Common pitfalls
- Assuming NetworkPolicy works without a supporting CNI.
- Using NodePort without firewall or security group rules.
- Forgetting to verify endpoints when a service fails.

## Self-test (20 questions)
1) Why does each pod get its own IP?
2) What does CNI do during pod creation?
3) How does kube-proxy implement services?
4) When would you use a headless service?
5) What is the difference between ClusterIP and NodePort?
6) How does DNS resolve a service name?
7) Why are EndpointSlices used instead of Endpoints?
8) What is a Service selector?
9) How do NetworkPolicies select pods?
10) Why might a NetworkPolicy not take effect?
11) How does external traffic reach a NodePort?
12) What is session affinity in a service?
13) How do you test DNS inside a pod?
14) Why can service traffic fail even if pods are running?
15) What is a LoadBalancer service in a local cluster?
16) How do you debug a service routing issue?
17) What are common CNI plugins?
18) How do you allow traffic from one namespace to another?
19) How do you make a service target a specific port?
20) What is the role of kube-dns or CoreDNS?

## Labs (5)
1) Expose a deployment and curl it from another pod.
2) Create a headless service and list its DNS records.
3) Create a NetworkPolicy that denies all ingress, then allow one pod.
4) Inspect kube-proxy mode (iptables or IPVS).
5) Debug a service with wrong selector and fix it.
