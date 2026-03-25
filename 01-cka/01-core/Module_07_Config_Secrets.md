# Module 07 - ConfigMaps and Secrets

## Goals
- Store and inject configuration safely.
- Understand secret handling and security limits.
- Use env and volume mounts correctly.

## ConfigMap (deep detail)
- Stores non-sensitive key/value config.
- Can be consumed as env vars or files.

## Secret (deep detail)
- Stores sensitive data (base64 in etcd).
- Use encryption at rest in production.
- Avoid putting secrets in images or plain YAML files.

## Consumption patterns
- envFrom: import all keys as env vars.
- env: import selected keys.
- volume: mount as files.

## Updates and reload
- Mounted config updates on change (with delay).
- Env vars do not update in running containers.

## Practice (hands-on)
1) Create ConfigMap and Secret from literals.
2) Mount them as files and inspect contents.
3) Inject specific keys as env vars.

## Common pitfalls
- Expecting env vars to update after ConfigMap changes.
- Storing secrets in Git without encryption.
- Overwriting app config paths by mounting volumes incorrectly.

## Self-test (20 questions)
1) What is the difference between ConfigMap and Secret?
2) Why is base64 not encryption?
3) How do you mount a secret as files?
4) What does envFrom do?
5) Why do env vars not update on ConfigMap change?
6) How can you safely store secrets in Git?
7) What is secret encryption at rest?
8) How do you project multiple ConfigMaps into a volume?
9) What is a projected volume?
10) How do you limit access to secrets?
11) What is the default type of Secret?
12) Why might a pod fail to start with a secret volume?
13) How do you rotate secrets safely?
14) What is an immutable ConfigMap?
15) How do you validate a secret is mounted correctly?
16) What happens if a key is missing in env?
17) Why use a volume for certificates?
18) What is the risk of putting secrets in container images?
19) How does Kubernetes store secret data in etcd?
20) How do you restrict secret access with RBAC?

## Labs (5)
1) Create ConfigMap from a file and mount it to a pod.
2) Create a Secret and use it as env vars.
3) Rotate a Secret and restart pods to pick it up.
4) Create an immutable ConfigMap and attempt to edit it.
5) Use a projected volume with ConfigMap and Secret together.
