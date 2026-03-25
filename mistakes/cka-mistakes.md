# CKA Mistakes Log

Add your own mistakes here as you practice. Format:
**What happened → Why it failed → How to fix → How to verify**

---

## Namespace mistakes

**Mistake:** Created a resource but it wasn't found in the next task.
**Cause:** Forgot to switch namespace. Resource landed in `default`, task expected `team-a`.
**Fix:** Always run `k config set-context --current --namespace=<ns>` before starting a task. Verify with `k config view --minify | grep namespace`.
**Prevention:** At task start, read namespace requirement carefully. Set it before any other command.

---

## Label / selector mismatch

**Mistake:** Service has no endpoints. Pod is Running but traffic fails.
**Cause:** Service selector `app: web` but Pod label was `app: Web` (capital W) or `app: myapp`.
**Fix:** `k describe svc <name>` shows `Selectors:`. Compare exactly with `k get pod --show-labels`. Fix the label on the pod or the selector on the service.
**Verify:** `k get endpoints <svc-name>` — must show pod IPs, not `<none>`.

---

## Forgot to verify after apply

**Mistake:** Task graded wrong even though I applied the YAML.
**Cause:** YAML had a syntax error or wrong value. Applied silently, resource in wrong state.
**Fix:** After every `k apply -f`, run `k get <resource>` and `k describe <resource>`.
**Rule:** Never move to next task without confirming the resource is in expected state.

---

## Storage — access mode or capacity mismatch

**Mistake:** PVC stays in Pending state forever.
**Cause:** PVC requests `ReadWriteMany` but only PV available uses `ReadWriteOnce`. Or PVC requests 2Gi but PV only has 1Gi.
**Fix:** `k describe pvc <name>` shows the binding failure reason. Check that PV `accessModes` and `capacity.storage` both satisfy PVC request. Access mode must match exactly. PV capacity must be ≥ PVC request.

---

## RBAC — wrong subject type or namespace

**Mistake:** `kubectl auth can-i get pods --as=user1` returns no, even after creating RoleBinding.
**Cause:** Bound to wrong subject. Used `kind: User` but account was a ServiceAccount. Or RoleBinding in wrong namespace.
**Fix:** `k describe rolebinding <name>` — check subjects. For ServiceAccount, use `kind: ServiceAccount` with `namespace:` set. For a user, use `kind: User` with the exact username.

---

## etcd — wrong cert paths

**Mistake:** `etcdctl snapshot save` fails with TLS handshake error.
**Cause:** Used default cert paths but cluster uses different paths.
**Fix:** Check actual paths first: `cat /etc/kubernetes/manifests/etcd.yaml | grep -E 'cert|key|trusted'`. Use those exact paths in the etcdctl command.

---

## Rolling update — bad image not caught

**Mistake:** Deployment stuck in rollout. Pods in ImagePullBackOff.
**Cause:** Updated to wrong image tag. Rollout gets stuck.
**Fix:** `k rollout status deploy/web` — shows stuck. `k get pods` — shows ImagePullBackOff. Roll back: `k rollout undo deploy/web`. Then use the correct image.

---

## Node drain fails

**Mistake:** `kubectl drain node1` fails with "cannot delete pods with local storage".
**Cause:** Pods using emptyDir volumes block drain by default.
**Fix:** Add `--delete-emptydir-data` flag. Full command: `kubectl drain node1 --ignore-daemonsets --delete-emptydir-data`.

---

## Context not switched per question

**Mistake:** Performed tasks on the wrong cluster. All answers wrong for that question.
**Cause:** Exam gives context switch command at top of each question. Skipped it.
**Fix:** Run `kubectl config use-context <name>` as the very first command for every question. Make it a habit.

---

## NetworkPolicy not taking effect

**Mistake:** Applied NetworkPolicy but traffic still flows / still blocked.
**Cause 1:** CNI plugin does not support NetworkPolicy (e.g., Flannel without Calico).
**Cause 2:** Policy selector doesn't match the pod labels exactly.
**Cause 3:** Applied to wrong namespace.
**Fix:** `k describe netpol <name>` — check selector. `k get pods --show-labels` — confirm labels. Verify CNI supports policies.

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
