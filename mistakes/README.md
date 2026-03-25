# Mistakes System

This folder tracks repeated failures by exam track.

## Files

- `cka-mistakes.md`
- `ckad-mistakes.md`
- `cks-mistakes.md`
- `weak-areas-scoreboard.md`

## Update Rule

After every lab or mock, add:

1. Mistake
2. Cause
3. Fix
4. Verify command

This is your highest-value revision source before exam day.

## 90-Second Entry Workflow

1. Use this format: Mistake -> Cause -> Fix -> Verify -> Prevention rule.
2. Write one concrete failure only (no long story).
3. Add one verification command that proves fix works.
4. Add one prevention rule in one line.

Weekly rule:

1. Score weak areas in `weak-areas-scoreboard.md`
2. Pick top 2 weak domains
3. Run labs that target only those domains
