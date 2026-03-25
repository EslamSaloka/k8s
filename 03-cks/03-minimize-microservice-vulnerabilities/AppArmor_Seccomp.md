# AppArmor and Seccomp

These are the two Linux security mechanisms tested most in CKS.
Both are about reducing what a container process can do at the OS level.

---

## AppArmor

AppArmor restricts what files, capabilities, and system calls a process can use.
It works with named **profiles** which are loaded on the node.

### How it works in Kubernetes

1. Profile is loaded on the node (not in Kubernetes — this is an OS-level concept)
2. Pod references the profile via an annotation (older) or `securityContext` (v1.30+)

### Apply AppArmor profile via annotation (pre-v1.30)

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: secure-app
  annotations:
    # Format: container.apparmor.security.beta.kubernetes.io/<container-name>: profile
    container.apparmor.security.beta.kubernetes.io/app: runtime/default
    # OR use a custom loaded profile:
    # container.apparmor.security.beta.kubernetes.io/app: localhost/my-nginx-profile
spec:
  containers:
  - name: app
    image: nginx
```

### Apply AppArmor via securityContext (v1.30+)

```yaml
spec:
  containers:
  - name: app
    image: nginx
    securityContext:
      appArmorProfile:
        type: RuntimeDefault    # or: Localhost, Unconfined
        # localhostProfile: my-profile   # use when type: Localhost
```

### Profile values

| Value | Meaning |
|-------|---------|
| `runtime/default` | Use the container runtime's default profile |
| `localhost/<profile-name>` | Use a profile loaded on the node |
| `unconfined` | No restriction |

### Check if a profile is loaded on the node

```bash
# SSH to the node first
ssh node1

# List loaded AppArmor profiles
cat /sys/kernel/security/apparmor/profiles | sort

# Check specific profile
apparmor_status | grep <profile-name>

# Load a profile file onto a node
apparmor_parser -q /etc/apparmor.d/my-profile
```

### Verify profile is applied to a pod

```bash
kubectl describe pod secure-app | grep -i apparmor
kubectl exec secure-app -- cat /proc/1/attr/current
```

---

## Seccomp

Seccomp (Secure Computing) restricts which system calls a container can make.
A seccomp profile is a JSON file that lists allowed or denied syscalls.

### Apply the default runtime seccomp profile

```yaml
spec:
  securityContext:
    seccompProfile:
      type: RuntimeDefault     # most restrictive safe default
```

Or per-container:
```yaml
spec:
  containers:
  - name: app
    image: nginx
    securityContext:
      seccompProfile:
        type: RuntimeDefault
```

### Apply a custom seccomp profile (node-level file)

```yaml
spec:
  securityContext:
    seccompProfile:
      type: Localhost
      localhostProfile: profiles/my-profile.json    # relative to /var/lib/kubelet/seccomp/
```

### Profile types

| Type | Meaning |
|------|---------|
| `RuntimeDefault` | Container runtime's default seccomp profile |
| `Localhost` | Custom profile file on the node |
| `Unconfined` | No seccomp restriction (default if not set) |

### Custom profile JSON example

```json
{
  "defaultAction": "SCMP_ACT_ERRNO",
  "architectures": ["SCMP_ARCH_X86_64"],
  "syscalls": [
    {
      "names": ["read", "write", "exit", "exit_group", "open", "close", "stat", "fstat", "openat"],
      "action": "SCMP_ACT_ALLOW"
    }
  ]
}
```

Place this at: `/var/lib/kubelet/seccomp/profiles/my-profile.json` on the node.

### Verify seccomp is applied

```bash
kubectl get pod secure-app -o jsonpath='{.spec.securityContext.seccompProfile}'
kubectl exec secure-app -- grep Seccomp /proc/1/status
```

---

## AppArmor vs Seccomp

| Feature | AppArmor | Seccomp |
|---------|---------|---------|
| Restricts | Files, capabilities, network | System calls |
| Config | Profile file on node | JSON profile on node |
| Apply method | Pod annotation or securityContext | securityContext |
| Default option | `runtime/default` | `RuntimeDefault` |
| Scope | Process MAC (mandatory access control) | Syscall filter |

---

## CKS Exam Pattern

The exam typically gives you a scenario like:

> "Apply the `runtime/default` AppArmor profile to the container named `app` in pod `secure-app`"

Steps:
1. Check if profile is loaded: `apparmor_status` on the node
2. Edit the pod manifest to add the annotation or securityContext
3. Recreate the pod: `kubectl replace --force -f pod.yaml`
4. Verify: `kubectl describe pod secure-app | grep -i apparmor`

> "Apply a seccomp profile of type RuntimeDefault to all containers in the deployment `web`"

Steps:
1. `kubectl edit deploy web`
2. Add under `spec.template.spec.securityContext`:
   ```yaml
   seccompProfile:
     type: RuntimeDefault
   ```
3. Verify rollout: `kubectl rollout status deploy/web`

---

## Quick Reference

```bash
# AppArmor — check profile loaded on node
ssh <node>
apparmor_status
cat /sys/kernel/security/apparmor/profiles | grep <name>

# Load a profile
apparmor_parser -q /etc/apparmor.d/<profile-file>

# Seccomp — check default path
ls /var/lib/kubelet/seccomp/

# Verify applied to pod
kubectl get pod <name> -o yaml | grep -A3 seccompProfile
kubectl get pod <name> -o yaml | grep -A3 appArmor
```
