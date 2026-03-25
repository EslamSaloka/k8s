# Kubernetes Study Repo

Practical workspace for:

- CKA
- CKAD
- CKS

## Quick Start

- [START_HERE.md](START_HERE.md)
- [STUDY_PLAN.md](STUDY_PLAN.md)
3. [DAILY_WORKFLOW.md](DAILY_WORKFLOW.md)
4. [EXAM_STRATEGY.md](EXAM_STRATEGY.md)

## Daily Rule

Each session should produce:

1. one topic update (notes or commands)
2. one practical artifact (lab result or YAML)
3. one mistake or reinforcement note

## Structure

- `00-foundation/`: fast references you use every study day
- `01-cka/`: CKA content grouped by exam area
- `02-ckad/`: CKAD content grouped by exam area
- `03-cks/`: CKS content grouped by exam area
- `labs/`: hands-on work from KodeKloud, Killercoda, and personal practice
- `templates/`: ready YAML templates
- `mistakes/`: repeated errors and fixes by exam track
- `exam-fast-track/`: final-week revision files per exam

## Where To Save Content

- Repeated commands and patterns: `00-foundation/`
- Reusable YAML: `templates/`
- Lab work and experiments: `labs/`
- Failures and weak areas: `mistakes/`
- Last-week revision only: `exam-fast-track/`

## High-Value Paths

- Foundation toolkit: `00-foundation/`
- Reusable topic template: `00-foundation/topic-folder-template/`
- CKA practical example: `01-cka/03-storage/example-pv-pvc/`
- CKAD practical example: `02-ckad/01-pod-design/example-multi-container-pod/`
- CKS practical example: `03-cks/01-cluster-hardening/example-rbac-security/`
- Last-week revision: `exam-fast-track/`

## Dashboard (Mobile + iPad + Desktop)

This repo now includes a responsive study dashboard in `docs/`.

### Enable on GitHub Pages

1. Push this repository to GitHub.
2. Open repository Settings -> Pages.
3. Under Build and deployment, choose:
	- Source: Deploy from a branch
	- Branch: `main`
	- Folder: `/docs`
4. Save and wait for deployment.

Your dashboard URL will be:

`https://<your-github-username>.github.io/<repo-name>/`

### Features

- Study steps (CKA -> CKAD -> CKS flow)
- Clickable content map
- Markdown viewer for notes and guides
- Responsive layout for phone, tablet, and desktop