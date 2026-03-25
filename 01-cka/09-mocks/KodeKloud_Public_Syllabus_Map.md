# KodeKloud CKA Public Syllabus Map

This file maps the public KodeKloud CKA course outline to this repo.

Important:

- This is an original coverage map based on the public syllabus.
- It is not a copy of the course lessons or premium notes.

## Public Course Summary

- 17 modules
- 315 lessons
- 70 labs
- mock exams
- 2025 updates include Helm, Kustomize, Gateway API, admission controller updates, and autoscaling updates

## Coverage Map

### 1. Introduction

- Repo coverage: top-level docs
- Use:
  - [../../README.md](../../README.md)
  - [../../START_HERE.md](../../START_HERE.md)
  - [../../STUDY_PLAN.md](../../STUDY_PLAN.md)

### 2. Core Concepts

- Repo coverage:
  - [../01-core/PROFESSIONAL_PATH.md](../01-core/PROFESSIONAL_PATH.md)
  - [../01-core/Module_01_Architecture.md](../01-core/Module_01_Architecture.md)
  - [../01-core/Module_02_Objects_YAML_kubectl.md](../01-core/Module_02_Objects_YAML_kubectl.md)
  - [../01-core/Module_03_Pods_Containers.md](../01-core/Module_03_Pods_Containers.md)
  - [../01-core/Module_04_Workloads.md](../01-core/Module_04_Workloads.md)

### 3. Scheduling

- Repo coverage:
  - [../02-scheduling/Module_08_Scheduling.md](../02-scheduling/Module_08_Scheduling.md)
  - [../02-scheduling/KodeKloud_Scheduling_Additions.md](../02-scheduling/KodeKloud_Scheduling_Additions.md)

### 4. Logging and Monitoring

- Repo coverage:
  - [../07-troubleshooting/Module_10_Observability.md](../07-troubleshooting/Module_10_Observability.md)

### 5. Application Lifecycle Management

- Repo coverage:
  - [../01-core/Module_07_Config_Secrets.md](../01-core/Module_07_Config_Secrets.md)
  - [../01-core/Module_04_Workloads.md](../01-core/Module_04_Workloads.md)

### 6. Cluster Maintenance

- Repo coverage:
  - [../06-cluster-maintenance/Module_14_Cluster_Operations.md](../06-cluster-maintenance/Module_14_Cluster_Operations.md)
  - [../06-cluster-maintenance/Kubeadm_Cluster_Lifecycle.md](../06-cluster-maintenance/Kubeadm_Cluster_Lifecycle.md)

### 7. Security

- Repo coverage:
  - [../05-security/Module_09_Security_RBAC.md](../05-security/Module_09_Security_RBAC.md)
  - [../05-security/Module_15_Policy_Governance.md](../05-security/Module_15_Policy_Governance.md)

### 8. Storage

- Repo coverage:
  - [../03-storage/Module_06_Storage.md](../03-storage/Module_06_Storage.md)

### 9. Networking

- Repo coverage:
  - [../04-networking/Module_05_Networking_Services.md](../04-networking/Module_05_Networking_Services.md)
  - [../04-networking/Ingress_Gateway_API.md](../04-networking/Ingress_Gateway_API.md)

### 10. Design and Install a Kubernetes Cluster

- Repo coverage:
  - [../06-cluster-maintenance/Kubeadm_Cluster_Lifecycle.md](../06-cluster-maintenance/Kubeadm_Cluster_Lifecycle.md)

### 11. Install Kubernetes the kubeadm way

- Repo coverage:
  - [../06-cluster-maintenance/Kubeadm_Cluster_Lifecycle.md](../06-cluster-maintenance/Kubeadm_Cluster_Lifecycle.md)

### 12. Helm Basics

- Repo coverage:
  - [../06-cluster-maintenance/Module_13_Packaging_GitOps.md](../06-cluster-maintenance/Module_13_Packaging_GitOps.md)
  - [../06-cluster-maintenance/Module_13_Lab_Solutions.md](../06-cluster-maintenance/Module_13_Lab_Solutions.md)

### 13. Kustomize Basics

- Repo coverage:
  - [../06-cluster-maintenance/Module_13_Packaging_GitOps.md](../06-cluster-maintenance/Module_13_Packaging_GitOps.md)
  - [../06-cluster-maintenance/Module_13_Lab_Solutions.md](../06-cluster-maintenance/Module_13_Lab_Solutions.md)

### 14. Troubleshooting

- Repo coverage:
  - [../07-troubleshooting/Module_11_Troubleshooting.md](../07-troubleshooting/Module_11_Troubleshooting.md)
  - [../../00-foundation/troubleshooting-flow.md](../../00-foundation/troubleshooting-flow.md)

### 15. Other Topics

- Repo coverage:
  - [../09-mocks/TUTORIAL.md](../09-mocks/TUTORIAL.md)

### 16. Lightning Labs

- Repo use:
  - [../../labs/kodekloud/cka-lab-checklist.md](../../labs/kodekloud/cka-lab-checklist.md)

### 17. Mock Exams

- Repo coverage:
  - [Mock_Exams.md](Mock_Exams.md)
  - [Coverage_Matrix.md](Coverage_Matrix.md)
  - [Question_Bank_Index.md](Question_Bank_Index.md)

## Public-Syllabus Gaps Added In This Repo

- scheduling updates: priority classes, multiple schedulers, scheduler profiles
- ingress and gateway api review notes
- kubeadm install, upgrade, and HA notes
- etcd backup and restore notes
- lab tracking checklist for KodeKloud practice

## Practical Use

After finishing a KodeKloud section:

1. find the matching file here
2. do the related lab
3. write your own commands in `labs/kodekloud/`
4. add repeated failures to `mistakes/cka-mistakes.md`