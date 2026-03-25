# Topic Notes Template

## Objective

Write the exact exam-relevant goal for this topic in one line.

Example: "Create and bind a PVC to a Pod with the requested StorageClass and access mode."

## Core Concepts (20%)

- What this object does
- Which fields are mandatory
- Typical exam traps

## Exam Signals (what question text usually says)

- "Create a ..."
- "Expose ..."
- "Patch ..."
- "Troubleshoot ..."

## Fast Build Pattern (80%)

1. Generate base YAML using dry-run
2. Edit only required fields
3. Apply
4. Verify
5. Save the final YAML in `examples/`

## Minimal Working Spec Checklist

- Correct `apiVersion`
- Correct namespace
- Required labels/selectors aligned
- Resource-specific required fields set
- Validation command executed

## Verify Commands

```bash
kubectl get <resource> -n <ns>
kubectl describe <resource> <name> -n <ns>
```

## Common Failure Modes

- Wrong namespace
- Label/selector mismatch
- Wrong port/targetPort
- Missing RBAC verb/resource
- StorageClass/accessMode mismatch

## Personal Notes

Add short bullets only. Do not write long theory here.
