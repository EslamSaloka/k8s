# Module 11 - Lab Solutions

## Lab 1: Bad command
YAML:
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: bad-cmd
spec:
  containers:
  - name: app
    image: busybox:1.36
    command: ["sh", "-c", "exit 1"]
```
Fix:
- kubectl edit pod bad-cmd

## Lab 2: Bad service selector
Commands:
- kubectl describe svc <svc>
- kubectl get pods --show-labels
- kubectl edit svc <svc>

## Lab 3: Pending pod
Create pod with huge requests and see Pending.
Fix by reducing requests.

## Lab 4: Probe crash
Add livenessProbe with too short initialDelaySeconds.
Fix by increasing delay.

## Lab 5: Node NotReady
Steps:
- kubectl describe node <node>
- Check kubelet and runtime logs on node.
