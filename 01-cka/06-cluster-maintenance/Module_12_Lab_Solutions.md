# Module 12 - Lab Solutions

## Lab 1: Ingress
Commands (controller-specific):
- Deploy ingress controller.
- Create service and ingress.
- Test with curl and host header.

## Lab 2: CRD
Example CRD skeleton:
```yaml
apiVersion: apiextensions.k8s.io/v1
kind: CustomResourceDefinition
metadata:
  name: demos.example.com
spec:
  group: example.com
  names:
    kind: Demo
    plural: demos
  scope: Namespaced
  versions:
  - name: v1
    served: true
    storage: true
    schema:
      openAPIV3Schema:
        type: object
        properties:
          spec:
            type: object
```

## Lab 3: Operator
Steps:
- Install a sample operator.
- Create a CR and watch it reconcile.

## Lab 4: TLS ingress
Create a TLS secret and reference it in ingress.

## Lab 5: Observe operator behavior
Commands:
- kubectl get pods -n <operator-ns>
- kubectl logs <operator-pod>
