# Install Kubernetes for Production-Style Learning (CentOS 10)

This is a production-style, kubeadm-based install. It mirrors common self-managed production setups.
If you plan to use a managed service (EKS/GKE/AKS), use their official guides instead.

## Recommended topology
- Control plane node(s): 4 CPU, 8 GB RAM, 50+ GB disk
- Worker nodes: 2 CPU, 4 GB RAM, 30+ GB disk

## 1) System preparation (all nodes)
### Update and reboot
```bash
sudo dnf update -y
sudo reboot
```

### Disable swap
```bash
sudo swapoff -a
sudo sed -i '/ swap / s/^/#/' /etc/fstab
```

### Kernel modules and sysctl
```bash
sudo modprobe br_netfilter
sudo tee /etc/modules-load.d/k8s.conf <<'EOF'
br_netfilter
EOF

sudo tee /etc/sysctl.d/k8s.conf <<'EOF'
net.bridge.bridge-nf-call-iptables = 1
net.bridge.bridge-nf-call-ip6tables = 1
net.ipv4.ip_forward = 1
EOF
sudo sysctl --system
```

## 2) Install containerd (all nodes)
```bash
sudo dnf install -y containerd
sudo mkdir -p /etc/containerd
sudo containerd config default | sudo tee /etc/containerd/config.toml
```

Edit /etc/containerd/config.toml and set:
```
SystemdCgroup = true
```

Then restart:
```bash
sudo systemctl enable --now containerd
```

## 3) Install kubeadm, kubelet, kubectl (all nodes)
Add the Kubernetes repo:
```bash
cat <<'EOF' | sudo tee /etc/yum.repos.d/kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=https://pkgs.k8s.io/core:/stable:/v1.34/rpm/
enabled=1
gpgcheck=1
gpgkey=https://pkgs.k8s.io/core:/stable:/v1.34/rpm/repodata/repomd.xml.key
EOF
```

Install packages:
```bash
sudo dnf install -y kubelet kubeadm kubectl
sudo systemctl enable --now kubelet
```

## 4) Initialize control plane (control plane node)
```bash
sudo kubeadm init --pod-network-cidr=192.168.0.0/16

```
Then you can join any number of worker nodes by running the following on each as root:

kubeadm join 192.168.61.138:6443 --token w1noai.8wet42jcwk1m77u3 \
	--discovery-token-ca-cert-hash sha256:f2ec1084203b12d925fb490618e964d3ef23cfd0ebbcaf00d6ca8d7496b24256 



Configure kubectl:
```bash
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
```

## 5) Install a CNI plugin (control plane)
Example with Calico:
```bash
kubectl apply -f https://raw.githubusercontent.com/projectcalico/calico/v3.28.0/manifests/calico.yaml
```

## 6) Join worker nodes
On the control plane, get join command:
```bash
kubeadm token create --print-join-command
```
Run that command on each worker node.

## 7) Verify cluster
```bash
kubectl get nodes
kubectl get pods -n kube-system
```

## 8) Production notes
- For HA control plane, use multiple control plane nodes and an API server load balancer.
- Back up etcd regularly (self-managed clusters).
- Use RBAC and PodSecurity from day 1.

## Next step
Start with the study order file: [STUDY_ORDER.md](STUDY_ORDER.md)
