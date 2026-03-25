# CKS Add-On Path (Security Specialist)

This is a focused security path on top of CKA.

## Modules
1) Supply chain security
2) Cluster hardening
3) System hardening
4) Minimize microservice vulnerabilities
5) Monitoring, logging, and runtime security

## Module Pages
- [CKS_Module_01_Supply_Chain.md](CKS_Module_01_Supply_Chain.md)
- [CKS_Module_02_Cluster_Hardening.md](CKS_Module_02_Cluster_Hardening.md)
- [CKS_Module_03_System_Hardening.md](CKS_Module_03_System_Hardening.md)
- [CKS_Module_04_Microservice_Security.md](CKS_Module_04_Microservice_Security.md)
- [CKS_Module_05_Runtime_Observability.md](CKS_Module_05_Runtime_Observability.md)

## Lab Solution Pages
- [CKS_Module_01_Lab_Solutions.md](CKS_Module_01_Lab_Solutions.md)
- [CKS_Module_02_Lab_Solutions.md](CKS_Module_02_Lab_Solutions.md)
- [CKS_Module_03_Lab_Solutions.md](CKS_Module_03_Lab_Solutions.md)
- [CKS_Module_04_Lab_Solutions.md](CKS_Module_04_Lab_Solutions.md)
- [CKS_Module_05_Lab_Solutions.md](CKS_Module_05_Lab_Solutions.md)

## Coverage and Mocks
- [Coverage_Matrix.md](Coverage_Matrix.md)
- [CKS_Gap_Additions.md](CKS_Gap_Additions.md)
- [Mock_Exams.md](Mock_Exams.md)

## Module A: Supply Chain Security
- Image scanning and signing (cosign, sigstore)
- Use private registries and pull policies
- SBOM and provenance

## Module B: Cluster Hardening
- API server hardening
- RBAC least privilege
- PodSecurity enforcement
- Secrets encryption and KMS

## Module C: System Hardening
- Node OS patching
- Restrict SSH access
- Use minimal base images

## Module D: Microservice Vulnerabilities
- NetworkPolicy default deny
- mTLS with service mesh
- Limit container privileges

## Module E: Monitoring and Runtime
- Audit logs
- Falco or runtime detection
- Alerting on suspicious events

## Practice ideas
- Enforce restricted PodSecurity in a namespace.
- Scan and sign an image, then verify before deploy.
- Create NetworkPolicy to allow only required traffic.
- Enable audit policy and review events.
