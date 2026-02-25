# CKAD Module 03 - ConfigMaps and Secrets for Apps

## Goals
- Inject config and secrets safely.
- Choose env vs file-based config correctly.
- Handle rotation and reload patterns.

## ConfigMaps (deep detail)
- Non-sensitive configuration.
- Consumed as env vars or files.
- Mounted files update on change (with delay).

## Secrets (deep detail)
- Sensitive data, base64 in etcd.
- Prefer encryption at rest for production.
- Use projected volumes for fine control.

## Env vs files
- Env vars do not update in running pods.
- Files update when mounted and synced.
- Use checksum annotation to force rollouts on change.

## Rotation patterns
- Update secret and restart pods.
- Use sidecar to reload config if app supports it.

## External secrets
- Tools can sync from external vaults.
- Keep source of truth outside cluster if required.

## Practice (hands-on)
1) Create ConfigMap and Secret from files.
2) Mount them as volumes and inspect.
3) Inject as env vars and compare behavior.
4) Use checksum annotation to trigger rollout.
5) Rotate a secret and restart.

## Common pitfalls
- Expecting env vars to update automatically.
- Storing secrets in Git without encryption.
- Mounting secrets to wrong path.

## Self-test (20 questions)
1) When should you use ConfigMap vs Secret?
2) Why is base64 not encryption?
3) Why do env vars not update on change?
4) How do mounted files update inside a pod?
5) What is a projected volume?
6) Why use checksum annotations?
7) How do you rotate a secret safely?
8) What is immutable ConfigMap and why use it?
9) How do you limit secret access?
10) What is a secret type?
11) Why avoid secrets in container images?
12) What is the role of RBAC for secrets?
13) What happens if a key is missing?
14) How do you validate mounted config?
15) What is an external secrets operator?
16) Why are secrets sensitive in etcd?
17) What is a safe config reload strategy?
18) Why keep config separate from code?
19) What is a ConfigMap binaryData field?
20) When should you restart pods for config?

## Labs (5)
1) Create a ConfigMap from a file and mount it.
2) Create a Secret and inject as env vars.
3) Rotate a Secret and restart pods.
4) Use a projected volume with ConfigMap + Secret.
5) Add a checksum annotation and observe rollout.
