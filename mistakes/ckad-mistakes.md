# CKAD Mistakes Log

Add your own mistakes here as you practice. Format:
**What happened → Why it failed → How to fix → How to verify**

---

## Probe settings wrong

**Mistake:** Pod runs but traffic still goes to it during startup. Or pod keeps restarting.
**Cause 1 (liveness):** `initialDelaySeconds` too short. Container not ready yet but liveness fails → restart loop.
**Cause 2 (readiness):** No readiness probe → pod gets traffic immediately even if app not ready.
**Fix:** Use `startupProbe` for slow-starting apps (gives more time before liveness kicks in). Set `initialDelaySeconds` and `failureThreshold` based on actual app startup time.
**Verify:** `k describe pod <name>` — look for probe failure events. `k get endpoints <svc>` — confirms readiness.

---

## Service targetPort mismatch

**Mistake:** Service exists, pod runs, but `curl` from another pod fails with connection refused.
**Cause:** Service `targetPort: 80` but container listens on port `8080`.
**Fix:** `k describe svc <name>` shows TargetPort. `k describe pod <name>` shows containerPort. They must match. Fix with `k edit svc <name>` or override: `k expose deploy web --port=80 --target-port=8080`.
**Verify:** `k get endpoints <svc>` — should show pod IPs.

---

## ConfigMap or Secret mount path wrong

**Mistake:** App can't find config file. Volume exists. Pod runs.
**Cause:** Mounted at `/etc/config` but app reads from `/app/config`. Or key name wrong.
**Fix:** `k exec <pod> -- ls /etc/config` — see what's actually mounted. Check app's expected path. Fix `mountPath` in pod spec, or set `subPath` to mount a single key as a specific file.
**Verify:** `k exec <pod> -- cat /expected/path/config-file`

---

## Deployment rollout not verified

**Mistake:** Applied image update but task graded wrong.
**Cause:** Old ReplicaSet still running. Rollout in progress but not complete. Or rollout failed silently.
**Fix:** Always run `k rollout status deploy/<name>` after every image update. It blocks until complete or shows failure.
**Verify:** `k get pods` — all show new image. `k rollout history deploy/<name>` shows new revision.

---

## Job or CronJob syntax issues

**Mistake:** Job pod keeps restarting instead of completing.
**Cause 1:** `restartPolicy: Always` — Jobs need `Never` or `OnFailure`.
**Cause 2:** Command array syntax wrong. Passed as string instead of array.
**Fix for restartPolicy:** Set `restartPolicy: Never` (always) or `OnFailure` in the Job pod template.
**Fix for command:** Use array format: `command: ["sh", "-c", "echo done"]` not `command: "echo done"`.
**Verify:** `k get jobs` — shows COMPLETIONS 1/1. `k get pods` — shows `Completed`.

---

## Multi-container pod — wrong volume name

**Mistake:** Second container can't read file written by first container.
**Cause:** `volumeMounts` use different `name` values, or volume is not shared (using two separate volumes).
**Fix:** Both containers must reference the same volume by name:
  - `volumes[].name: shared` in pod spec
  - Both `volumeMounts[].name: shared` in each container
**Verify:** `k exec <pod> -c sidecar -- ls /shared-path` — shows files written by main container.

---

## SecurityContext — readOnlyRootFilesystem breaks app

**Mistake:** Pod CrashLoops after adding `readOnlyRootFilesystem: true`.
**Cause:** App writes to `/tmp` or `/var/run` which are now read-only.
**Fix:** Add an `emptyDir` volume for writable paths:
```yaml
volumeMounts:
- name: tmp
  mountPath: /tmp
volumes:
- name: tmp
  emptyDir: {}
```
**Verify:** `k get pod <name>` — Running. `k exec <pod> -- touch /tmp/test` — succeeds.

---

## Forgot `--restart=Never` for standalone Pods

**Mistake:** Created a pod with `k run web --image=nginx` and got a pod but it restarts on failure instead of failing-fast.
**Cause:** Default `restartPolicy` is Always for `k run`.
**Note:** For CKA/CKAD pods that should not restart (like a test pod), add `--restart=Never`. For Pods used as Job workalikes, this matters.

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
