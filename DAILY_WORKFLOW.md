# Daily Workflow

Use this as your operating routine, not as optional guidance.

## 1) While Watching a Course Lesson (15-40 min)

1. Open topic folder for current exam domain.
2. Add short bullets to `notes.md` only for exam-useful points.
3. Add 3-8 commands to `commands.md` that you actually executed.
4. If YAML appears in lesson, save a clean version in `examples/`.

Rule: if you did not run it, do not store it.

## 2) After Each Lab (10-20 min)

1. Save lab result in `labs/kodekloud/` or `labs/killercoda/`.
2. Record one failure and one fix in `mistakes/<track>-mistakes.md`.
3. Add one reusable command pattern into `00-foundation/kubectl-cheatsheet.md` only if repeated twice.

## 3) Daily Speed Block (20 min)

1. Rebuild 2 YAMLs from memory using dry-run.
2. Run one troubleshooting scenario:
   - Pending pod
   - service not routing
   - RBAC access denied
3. Verify with `kubectl describe` and events.

## 4) Weekly Consolidation (60-90 min)

1. Remove duplicate notes.
2. Keep only final working YAMLs in `examples/`.
3. Promote generic patterns to `templates/`.
4. Update weak-area bullets in mistakes logs.

## 5) Mock Exam Day Workflow

1. Start with `00-foundation/exam-setup.md`.
2. Keep `00-foundation/kubectl-cheatsheet.md` open.
3. Follow `00-foundation/troubleshooting-flow.md` when blocked.
4. After mock: update mistakes log immediately.

## 6) Final Exam Week

1. No new long notes.
2. Focus on:
   - mistakes logs
   - troubleshooting flow
   - template speed
3. Do timed drills and context switching only.
