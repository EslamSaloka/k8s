# YAML Templates

Reusable Kubernetes manifests for exam speed and daily practice.

## Usage

1. Copy a template.
2. Rename resources and namespace.
3. Apply and verify.
4. Keep final validated version in topic `examples/`.

## Starter Set

- pod, deployment, service
- configmap, secret
- pvc, statefulset
- role, rolebinding
- networkpolicy
- job, cronjob
- ingress, hpa, pdb

## Fast Template Lookup

- Run one container quickly: `pod.yaml`
- Rollout app changes: `deployment.yaml`
- Expose app traffic: `service.yaml` or `ingress.yaml`
- Inject config/secrets: `configmap.yaml`, `secret.yaml`
- Persist data: `pvc.yaml`, `statefulset.yaml`
- Restrict access: `role.yaml`, `rolebinding.yaml`, `networkpolicy.yaml`
- Run batch tasks: `job.yaml`, `cronjob.yaml`

## Exam Speed Rule

Do not start from blank YAML during timed practice if a template already exists.
Copy template, edit only required fields, apply, verify.
