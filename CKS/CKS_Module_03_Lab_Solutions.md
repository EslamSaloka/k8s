# CKS Module 03 - Lab Solutions

## Lab 1: readOnlyRootFilesystem
YAML snippet:
```yaml
securityContext:
  readOnlyRootFilesystem: true
```

## Lab 2: seccomp profile
YAML snippet:
```yaml
securityContext:
  seccompProfile:
    type: RuntimeDefault
```

## Lab 3: Drop capabilities
YAML snippet:
```yaml
securityContext:
  capabilities:
    drop: ["ALL"]
    add: ["NET_BIND_SERVICE"]
```

## Lab 4: Kubelet hardening plan
- Document kubelet authn/authz and TLS settings.

## Lab 5: SSH restrictions
- Document bastion access and key rotation.
