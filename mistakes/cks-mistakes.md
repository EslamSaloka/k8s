# CKS Mistakes Log

Add your own mistakes here as you practice. Format:
**What happened → Why it failed → How to fix → How to verify**

---

## NetworkPolicy too open

**Mistake:** Applied NetworkPolicy but pod still accessible from everywhere.
**Cause:** Selector `podSelector: {}` with no `egress/ingress` rules — this is a deny-all policy, not an allow-all. But writing an ingress rule with `from: []` allows nothing OR a rule with no `from` field allows everything.
**Fix:** An ingress rule with no `from:` field = allow all ingress. An ingress rule with `from: []` = deny all.
**Rule:**
- `policyTypes: [Ingress]` with no `ingress:` block = deny all ingress to selected pods
- Add explicit `ingress:` block with `from:` rules to allow specific sources
**Verify:** `k exec test-pod -- curl http://<target>` from allowed and blocked sources.

---

## Container not running as non-root after setting runAsNonRoot

**Mistake:** Set `runAsNonRoot: true` but pod fails with "container has runAsNonRoot and image will run as root".
**Cause:** Image default USER is root. Setting `runAsNonRoot: true` blocks it without specifying a user.
**Fix:** Add `runAsUser: 1000` (or any non-zero UID) alongside `runAsNonRoot: true`.
```yaml
securityContext:
	runAsUser: 1000
	runAsNonRoot: true
```
**Verify:** `k exec <pod> -- id` — shows uid=1000.

---

## AppArmor annotation wrong format

**Mistake:** AppArmor annotation applied but pod ignores it or fails to start.
**Cause 1:** Annotation key includes wrong container name.
**Cause 2:** Profile not loaded on the node.
**Fix:**
- Correct key format: `container.apparmor.security.beta.kubernetes.io/<container-name>: runtime/default`
- Check profile: SSH to node, run `apparmor_status | grep <profile>`
**Verify:** `k describe pod <name> | grep -i apparmor` — shows the annotation.

---

## Falco rule not triggering

**Mistake:** Wrote custom Falco rule but no alerts generated.
**Cause 1:** Rule syntax error — Falco silently ignores invalid rules.
**Cause 2:** Falco not restarted after rule change.
**Cause 3:** Rule condition uses wrong field names.
**Fix:**
1. Restart Falco: `systemctl restart falco`
2. Check logs: `journalctl -fu falco` — look for parsing errors on startup
3. Trigger the condition manually and watch logs
**Verify:** `journalctl -fu falco | grep -i warning`

---

## Audit policy not taking effect

**Mistake:** Changed audit policy but log file empty or unchanged.
**Cause 1:** API server manifest not updated with `--audit-policy-file` flag.
**Cause 2:** Volume mount for policy file missing in the manifest.
**Cause 3:** API server pod didn't restart (static pod should restart automatically on manifest change).
**Fix:**
1. Verify flags in manifest: `cat /etc/kubernetes/manifests/kube-apiserver.yaml | grep audit`
2. Confirm both `volumeMounts` and `volumes` sections reference the policy file
3. Wait 30-60 seconds for apiserver to restart, then test
**Verify:** `cat /var/log/kubernetes/audit.log | head -3 | python3 -m json.tool`

---

## RBAC too permissive — ClusterRoleBinding where RoleBinding needed

**Mistake:** Created ClusterRoleBinding where RoleBinding was appropriate.
**Cause:** Didn't check whether the access should be cluster-wide or namespace-scoped.
**Rule:** If the task says "give access to pods in namespace X", use Role + RoleBinding (not ClusterRole).
ClusterRoleBinding gives access across ALL namespaces.
**Fix:** Delete the ClusterRoleBinding. Create Role in the correct namespace + RoleBinding.
**Verify:** `k auth can-i get pods --as=user --namespace=X` (should be yes). `k auth can-i get pods --as=user --namespace=Y` (should be no for a RoleBinding).

---

## Pod security admission blocking pod creation

**Mistake:** Pod fails to create in namespace, error says policy violation.
**Cause:** Namespace labeled with `enforce=restricted` or `enforce=baseline`. Pod spec violates the policy.
**Fix:** Either fix the pod spec (add `securityContext`, drop capabilities, set `readOnlyRootFilesystem`) OR adjust the namespace label if you own it.
**Diagnose:** The error on `kubectl apply` shows which policy check failed.

---

## Trivy — wrong scan target

**Mistake:** Ran `trivy image` but showed 0 vulnerabilities where many were expected.
**Cause:** Scanned wrong image tag. e.g., `nginx:latest` but pod uses `nginx:1.14`.
**Fix:** Get the actual image: `k get pod <name> -o jsonpath='{.spec.containers[0].image}'`. Then scan that exact image.
**Command:** `trivy image nginx:1.14 --severity HIGH,CRITICAL`

---

## etcd secret encryption — wrong provider order

**Mistake:** Enabled encryption at rest but new secrets still stored in plaintext.
**Cause:** EncryptionConfiguration has `identity` provider listed BEFORE `aescbc`. The FIRST provider is used for writes.
**Fix:** Put the encryption provider (`aescbc`) FIRST in the providers list. `identity` must be last.
```yaml
providers:
- aescbc:           # first = used for writes
		keys:
		- name: key1
			secret: <base64-encoded-32-byte-key>
- identity: {}      # last = allows reading unencrypted data
```

---

## Add Your Own Mistakes Here

Format:
```
## Topic

**Mistake:** What you did
**Cause:** Why it failed
**Fix:** What to do
**Verify:** How to confirm it's fixed
```