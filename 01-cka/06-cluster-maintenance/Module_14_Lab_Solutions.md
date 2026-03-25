# Module 14 - Lab Solutions

## Lab 1: Drain node
Commands:
- kubectl cordon <node>
- kubectl drain <node> --ignore-daemonsets --delete-emptydir-data
- kubectl uncordon <node>

## Lab 2: Upgrade plan
Steps:
- Document control plane upgrade order.
- Document node upgrade order.

## Lab 3: Backup runbook
Include:
- etcd snapshot command (self-managed).
- PV backup procedure.
- Restore validation steps.

## Lab 4: Restore app
Steps:
- Restore PV data.
- Apply manifests.
- Verify endpoints.

## Lab 5: Certificate rotation
Steps:
- Identify certs in use.
- Rotate in a lab or document plan.
