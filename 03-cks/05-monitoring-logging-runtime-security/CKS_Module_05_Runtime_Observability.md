# CKS Module 05 - Runtime Security and Observability

## Goals
- Detect runtime threats.
- Use audit logs and alerts.
- Monitor suspicious activity.

## Core concepts (deep detail)
### Audit logging
- Capture API server activity.
- Store securely with retention policies.

### Runtime detection
- Falco or similar tools detect suspicious syscalls.
- Alert on exec, port-forward, and privilege escalation.

### Incident response
- Triage, contain, eradicate, recover.
- Maintain runbooks for incidents.

## Practice (hands-on)
1) Enable audit logging and review entries (theory if managed).
2) Create a runtime alert rule (Falco or similar).
3) Monitor exec access and port-forward usage.
4) Document an incident response runbook.
5) Simulate a suspicious event and response.

## Common pitfalls
- No alerting on security events.
- Logs stored in same place as app logs.
- Missing incident response plan.

## Self-test (20 questions)
1) Why enable audit logs?
2) What is a runtime detection rule?
3) Why monitor exec usage?
4) What is a security incident runbook?
5) Why keep audit logs immutable?
6) What is alert fatigue?
7) How do you detect privilege escalation?
8) What is a suspicious syscall?
9) Why isolate compromised pods?
10) What is a forensic timeline?
11) Why separate security logs from app logs?
12) What is an incident severity?
13) Why is containment important?
14) What is a recovery step?
15) How do you verify no persistence remains?
16) What is an IOC (indicator of compromise)?
17) Why do you need retention policies?
18) How do you test incident response?
19) What is a post-incident review?
20) Why are alerts tied to SLOs?

## Labs (5)
1) Draft an audit policy and explain it.
2) Create a Falco rule to detect shell exec (theory if no Falco).
3) Review audit logs for a change.
4) Write an incident response checklist.
5) Simulate a suspicious event and document actions.
