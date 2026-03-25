# Aliases and Exam Environment Setup

## Run This First — Every Exam Session

```bash
alias k=kubectl
export do='--dry-run=client -o yaml'
export now='--force --grace-period=0'
complete -F __start_kubectl k
```

## Vim Setup (run once per exam session)

```bash
cat >> ~/.vimrc << 'EOF'
set expandtab
set tabstop=2
set shiftwidth=2
set autoindent
set number
EOF
```

## Namespace Switcher Function

```bash
kn() { kubectl config set-context --current --namespace="$1"; }
```

Usage: `kn kube-system` then all `k get pods` will use that namespace.

## ETCD Alias (use before etcd tasks)

```bash
export ETCDCTL_API=3
alias etcdctl='etcdctl \
  --endpoints=https://127.0.0.1:2379 \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --key=/etc/kubernetes/pki/etcd/server.key'
```

Get actual cert paths from etcd pod manifest if different:
```bash
cat /etc/kubernetes/manifests/etcd.yaml | grep -E 'cert|key|trusted|endpoint'
```

## Force Delete

```bash
k delete pod <name> $now     # instant deletion
```

## All Aliases at Once (copy-paste block)

```bash
alias k=kubectl
export do='--dry-run=client -o yaml'
export now='--force --grace-period=0'
complete -F __start_kubectl k
kn() { kubectl config set-context --current --namespace="$1"; }
export ETCDCTL_API=3
cat >> ~/.vimrc << 'EOF'
set expandtab
set tabstop=2
set shiftwidth=2
set autoindent
EOF
```

## Verify Setup

```bash
k version --short
k config current-context
k get nodes
```