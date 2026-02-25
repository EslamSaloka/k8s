# Module 06 - Storage and CSI

## Goals
- Understand PV/PVC and StorageClass.
- Know access modes and reclaim policies.
- Use CSI drivers for dynamic provisioning.

## PV/PVC model (deep detail)
- PV is a cluster resource (supply).
- PVC is a user claim (demand).
- Binding connects a PVC to a compatible PV.

## StorageClass
- Defines dynamic provisioning parameters.
- Default StorageClass is used if PVC does not specify one.

## Access modes
- ReadWriteOnce (RWO): mount read-write by one node.
- ReadOnlyMany (ROX): read-only by many nodes.
- ReadWriteMany (RWX): read-write by many nodes.

## Reclaim policy
- Retain: keep data after PVC deletion.
- Delete: remove storage on PVC deletion.

## CSI (Container Storage Interface)
- External plugin model for storage.
- Supports snapshots, expansion, and topology.

## Volume types
- hostPath (local testing only).
- emptyDir (ephemeral).
- configMap/secret (config data).
- persistentVolumeClaim (persistent).

## Practice (hands-on)
1) Create PV and PVC and check binding.
2) Mount PVC into a pod and write data.
3) Expand a PVC if your StorageClass supports it.

## Common pitfalls
- Using hostPath in production.
- Forgetting access mode compatibility.
- Deleting PVC without backup when policy is Delete.

## Self-test (20 questions)
1) Why are PVs cluster scoped?
2) What does a PVC request contain?
3) How does a StorageClass help?
4) What is the default reclaim policy usually used for dynamic storage?
5) When would you use RWX?
6) What is the difference between emptyDir and PVC?
7) How does a PVC bind to a PV?
8) What happens when a PVC is deleted with Retain policy?
9) What is a CSI driver?
10) How does volume expansion work?
11) Why is hostPath unsafe in production?
12) What is the role of volumeMounts?
13) What happens if a pod uses an unbound PVC?
14) What is a volume snapshot?
15) How do you see the storage class of a PVC?
16) What is a local PV?
17) How do you make a PVC use a specific StorageClass?
18) What is the difference between PV and PVC capacity?
19) Why do StatefulSets use volumeClaimTemplates?
20) How do you debug storage mount failures?

## Labs (5)
1) Create PV/PVC using hostPath for lab.
2) Mount a PVC and verify data persistence after pod restart.
3) Test PVC binding failure by using mismatched access mode.
4) Inspect StorageClass parameters and explain them.
5) Expand a PVC (if supported) and verify filesystem resize.
