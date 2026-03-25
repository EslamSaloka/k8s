# Module 08 - Lab Solutions

## Lab 1: nodeSelector
Commands:
- kubectl label nodes <node> disktype=ssd
- kubectl run ns-demo --image=nginx:1.25 --restart=Never --dry-run=client -o yaml > ns-demo.yaml

ns-demo.yaml (snippet):
```yaml
nodeSelector:
  disktype: ssd
```

## Lab 2: Taint and toleration
Commands:
- kubectl taint nodes <node> special=true:NoSchedule

toleration snippet:
```yaml
tolerations:
- key: "special"
  operator: "Equal"
  value: "true"
  effect: "NoSchedule"
```

## Lab 3: Drain node
Commands:
- kubectl cordon <node>
- kubectl drain <node> --ignore-daemonsets --delete-emptydir-data
- kubectl uncordon <node>

## Lab 4: Preferred affinity
affinity snippet:
```yaml
affinity:
  nodeAffinity:
    preferredDuringSchedulingIgnoredDuringExecution:
    - weight: 50
      preference:
        matchExpressions:
        - key: disktype
          operator: In
          values: ["ssd"]
```

## Lab 5: PriorityClass
Commands:
- kubectl create priorityclass high-priority --value=100000 --global-default=false --description="high"
