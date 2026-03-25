# kubectl Cheatsheet

## Aliases (set at exam start)

```bash
alias k=kubectl
export do='--dry-run=client -o yaml'
export now='--force --grace-period=0'
complete -F __start_kubectl k
```

---

## Context and Namespace

```bash
k config get-contexts                                   # list all contexts
k config current-context                                # show current
k config use-context <name>                             # switch cluster
k config set-context --current --namespace=<ns>        # switch namespace
k config view --minify | grep namespace                 # confirm namespace
```

---

## Inspect

```bash
k get pods -A                                          # all namespaces
k get pods -n <ns>                                     # specific namespace
k get pods -o wide                                     # with node and IP
k get pods --show-labels                               # with labels
k get pods -l app=web                                  # filter by label
k get all -n <ns>                                      # all resources
k get deploy,svc,ing -A                                # multi-resource
k describe pod <name>                                  # full details + events
k describe node <name>                                 # node info + conditions
k logs <pod>                                           # pod logs
k logs <pod> -c <container>                            # specific container
k logs <pod> --previous                                # previous run logs
k logs <pod> -f                                        # follow live
k get events --sort-by=.metadata.creationTimestamp     # sorted events
k get events -n <ns>                                   # namespace events
k top pod                                              # CPU/mem per pod
k top node                                             # CPU/mem per node
k api-resources                                        # all resource types
k api-resources --namespaced=true                      # namespaced only
k api-resources | grep <keyword>                       # search
```

---

## Create Fast (imperative)

```bash
k run web --image=nginx $do > pod.yaml                 # pod YAML
k run web --image=nginx --port=80 $do > pod.yaml       # with port
k run web --image=nginx --env="APP=prod" $do > pod.yaml   # with env
k run web --image=nginx --labels="tier=frontend" $do > pod.yaml
k run web --image=busybox --command -- sleep 3600 $do > pod.yaml

k create deploy web --image=nginx --replicas=3 $do > deploy.yaml
k expose deploy web --port=80 --target-port=80 $do > svc.yaml
k expose deploy web --port=80 --target-port=8080 --type=NodePort $do

k create configmap app-config --from-literal=MODE=prod $do > cm.yaml
k create configmap app-config --from-file=config.txt $do > cm.yaml
k create secret generic db-pass --from-literal=password=secret $do > sec.yaml
k create serviceaccount my-sa $do > sa.yaml

k create role pod-reader --verb=get,list,watch --resource=pods $do > role.yaml
k create rolebinding bind --role=pod-reader --serviceaccount=default:my-sa $do
k create clusterrole cr --verb=get,list --resource=pods $do > cr.yaml
k create clusterrolebinding crb --clusterrole=cr --user=jane $do

k create job my-job --image=busybox -- sh -c "echo done" $do > job.yaml
k create cronjob my-cron --image=busybox --schedule="*/1 * * * *" -- sh -c "echo hi" $do

k create namespace team-a
k create ingress my-ing --rule="/*=web-svc:80" $do > ing.yaml
```

---

## Apply, Diff, Delete

```bash
k apply -f file.yaml
k apply -f dir/                # apply a whole directory
k delete -f file.yaml
k diff -f file.yaml            # preview changes before applying
k replace -f file.yaml         # replace (not merge)
k replace --force -f file.yaml # force recreate
```

---

## Edit and Explain

```bash
k edit deploy web
k explain pod.spec
k explain pod.spec.containers.securityContext
k explain deployment.spec.template.spec.containers
k explain persistentvolumeclaim.spec
k explain networkpolicy.spec
```

---

## Rollouts

```bash
k rollout status deploy/web
k rollout history deploy/web
k rollout history deploy/web --revision=2
k rollout undo deploy/web
k rollout undo deploy/web --to-revision=2
k rollout pause deploy/web
k rollout resume deploy/web
k set image deploy/web web=nginx:1.26        # triggers rollout
```

---

## Scale and Patch

```bash
k scale deploy web --replicas=5
k autoscale deploy web --min=2 --max=5 --cpu-percent=80
k patch deploy web -p '{"spec":{"replicas":3}}'
k label pod web-abc tier=frontend
k label pod web-abc tier-                  # remove label
k annotate pod web-abc description="test"
k taint nodes node1 key=value:NoSchedule
k taint nodes node1 key=value:NoSchedule-  # remove taint
k label node node1 disk=ssd
```

---

## Node Maintenance

```bash
k cordon <node>
k drain <node> --ignore-daemonsets --delete-emptydir-data
k uncordon <node>
```

---

## Exec, Copy, Port-Forward

```bash
k exec -it <pod> -- bash
k exec -it <pod> -c <container> -- sh
k exec <pod> -- curl http://svc:80
k exec <pod> -- cat /etc/config/app.conf
k cp <pod>:/path/file ./localfile
k port-forward pod/<pod> 8080:80
k port-forward svc/<svc> 8080:80
```

---

## RBAC and Auth

```bash
k auth can-i get pods                              # can I do this?
k auth can-i get pods --as=user1                   # as another user
k auth can-i get pods --as=system:serviceaccount:default:my-sa
k auth can-i --list                                # list all allowed actions
k auth can-i --list --as=user1                     # for another user
```

---

## Output Formats

```bash
k get pods -o yaml
k get pods -o json
k get pods -o wide
k get pods --no-headers
k get pods -o custom-columns=NAME:.metadata.name,STATUS:.status.phase
k get nodes -o jsonpath='{.items[*].metadata.name}'
k get node cp -o jsonpath='{.status.capacity.cpu}'
k get pods -o jsonpath='{.items[*].spec.nodeName}'
```

---

## Sorting and Filtering

```bash
k get events --sort-by=.metadata.creationTimestamp
k get pods --sort-by=.metadata.name
k get pods --field-selector=status.phase=Running
k get pods --field-selector=spec.nodeName=node1
```

---

## Troubleshoot

```bash
k describe pod <name>
k describe node <name>
k get pod <name> -o yaml
k get endpoints <svc>
k get endpointslices
k top pod
k top node
k get all -A
k get componentstatuses      # control plane health (deprecated but still works)
k cluster-info
```