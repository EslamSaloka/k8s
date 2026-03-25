# Exam Day Setup

The first 3 minutes of every Kubernetes exam set you up to work 3x faster.
Do this in order, every time, before attempting any question.

---

## Step 1 — Set Aliases (run this immediately)

```bash
alias k=kubectl
export do='--dry-run=client -o yaml'
export now='--force --grace-period=0'
complete -F __start_kubectl k
```

Verify:
```bash
k version --short
```

---

## Step 2 — Configure vim for YAML

```bash
cat >> ~/.vimrc << 'EOF'
set expandtab
set tabstop=2
set shiftwidth=2
set autoindent
set number
EOF
```

This prevents tab/space YAML errors. Do it once per session.

---

## Step 3 — Optional: Set a namespace shortcut function

```bash
# Sets current namespace for all subsequent kubectl commands
# Use: kn kube-system
kn() { kubectl config set-context --current --namespace="$1"; }
```

---

## Step 4 — Check your cluster context

```bash
k config get-contexts
k config current-context
k get nodes
```

Know which cluster you are on before every question. The exam switches contexts per question — always check.

---

## Step 5 — Use imperative commands aggressively

These generate YAML you edit instead of typing from scratch:

```bash
# Pod
k run web --image=nginx $do > pod.yaml

# Deployment
k create deploy web --image=nginx --replicas=3 $do > deploy.yaml

# Service (from existing deployment)
k expose deploy web --port=80 --target-port=80 $do > svc.yaml

# ConfigMap
k create configmap app-config --from-literal=MODE=prod $do > cm.yaml

# Secret
k create secret generic db-pass --from-literal=password=secret $do > secret.yaml

# ServiceAccount
k create serviceaccount my-sa $do > sa.yaml

# Role
k create role pod-reader --verb=get,list,watch --resource=pods $do > role.yaml

# RoleBinding
k create rolebinding pod-reader-bind --role=pod-reader --serviceaccount=default:my-sa $do > rb.yaml

# ClusterRole
k create clusterrole cluster-pod-reader --verb=get,list,watch --resource=pods $do > cr.yaml

# ClusterRoleBinding
k create clusterrolebinding cluster-pod-bind --clusterrole=cluster-pod-reader --user=jane $do > crb.yaml

# Job
k create job my-job --image=busybox -- sh -c "echo done" $do > job.yaml

# CronJob
k create cronjob my-cron --image=busybox --schedule="*/1 * * * *" -- sh -c "echo cron" $do > cj.yaml

# Namespace
k create namespace team-a $do > ns.yaml
```

---

## Step 6 — Force delete when needed (stuck pods)

```bash
k delete pod bad-pod $now
```

---

## Step 7 — Context switch per question (exam-critical)

The exam gives you the context switch command at the top of each question:
```bash
kubectl config use-context <cluster-name>
```

Run it. Do not skip it.

---

## Speed Rules

| Rule | Reason |
|------|--------|
| Always use `$do` to generate YAML | Never type full YAML manually |
| Always verify after apply | `k get pod web` or `k describe pod web` |
| Skip blocker, come back | Move on after 3 failed attempts |
| Use `k explain` for field syntax | Faster than guessing YAML |
| Set namespace with `-n` always | Wrong namespace = wrong answer |
| Use tab completion | `k get po<TAB>` saves seconds |

---

## Verify Commands (after every task)

```bash
# Pod running?
k get pod <name>
k get pod <name> -o wide

# Deployment healthy?
k rollout status deploy/<name>

# Service endpoints wired up?
k get endpoints <service-name>

# PVC bound?
k get pvc

# RBAC correct?
k auth can-i <verb> <resource> --as=<user>

# Ingress created?
k get ingress -A

# Correct namespace?
k config view --minify | grep namespace
```

---

## ETCD Exam Shortcut

Set these before working on etcd tasks:

```bash
export ETCDCTL_API=3
alias etcdctl='etcdctl \
  --endpoints=https://127.0.0.1:2379 \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --key=/etc/kubernetes/pki/etcd/server.key'
```

Get actual endpoints from the etcd pod:
```bash
k describe pod etcd-controlplane -n kube-system | grep -E 'listen-client|cert|key|trusted'
```

---

## kubectl Output Shortcuts

```bash
# Short output
k get pods                     # default table
k get pods -o wide             # with node and IP
k get pods -o yaml             # full YAML
k get pods -o json             # full JSON
k get pods --show-labels       # with labels
k get pods -l app=web          # filter by label
k get all -n kube-system       # everything in a namespace

# Quick field extraction
k get node controlplane -o jsonpath='{.status.capacity.cpu}'
k get nodes -o jsonpath='{.items[*].metadata.name}'
k get pods -o custom-columns=NAME:.metadata.name,STATUS:.status.phase
```

---

## Sorting and Filtering

```bash
k get events --sort-by=.metadata.creationTimestamp
k get pods --sort-by=.metadata.name
k get pods --field-selector=status.phase=Running
```

---

## Exam Quick Reference

| Task | Command |
|------|---------|
| Switch context | `k config use-context <name>` |
| Switch namespace | `k config set-context --current --namespace=<ns>` |
| What can I do? | `k auth can-i --list` |
| Can user do X? | `k auth can-i get pods --as=user1` |
| Find resource API | `k api-resources | grep <keyword>` |
| Get resource fields | `k explain pod.spec.containers.securityContext` |
| Node status | `k describe node <name>` |
| Taint a node | `k taint nodes <node> key=value:NoSchedule` |
| Remove taint | `k taint nodes <node> key=value:NoSchedule-` |
| Label a node | `k label node <node> disk=ssd` |
| Drain a node | `k drain <node> --ignore-daemonsets --delete-emptydir-data` |
| Uncordon a node | `k uncordon <node>` |
| Cordon a node | `k cordon <node>` |
| Top pods | `k top pod` |
| Top nodes | `k top node` |
| Exec into pod | `k exec -it <pod> -- bash` |
| Exec command | `k exec <pod> -- curl http://svc:80` |
| Copy file from pod | `k cp <pod>:/path/file ./local` |
| Port forward | `k port-forward pod/<pod> 8080:80` |
