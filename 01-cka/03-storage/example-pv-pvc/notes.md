# CKA Example Topic: Storage - PV/PVC

## Objective

Create a PersistentVolume and PersistentVolumeClaim, then mount the claim into a Pod.

## Exam-Relevant Points

- PV is cluster-scoped; PVC is namespaced.
- PVC binding requires compatible:
  - access mode
  - storage size
  - storageClassName
- If no dynamic provisioner is available, static PV must exist first.

## Minimal Workflow

1. Create PV
2. Create PVC
3. Verify `Bound`
4. Mount PVC into Pod
5. Verify file write/read inside container

## Traps

- `ReadWriteMany` requested but PV supports `ReadWriteOnce`
- PVC in wrong namespace
- StorageClass mismatch (`manual` vs default class)
- Capacity mismatch (PVC > PV)
