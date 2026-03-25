# CKA Question Bank 06 (Q501-Q600)

## Theory (Q501-Q580)
Q501) What is an Ingress resource?
Q502) What is an ingress controller?
Q503) How does host-based routing work?
Q504) How does path-based routing work?
Q505) What is TLS termination in ingress?
Q506) What is a default backend?
Q507) Why is Ingress not a replacement for Service?
Q508) What is an IngressClass?
Q509) What is a CRD?
Q510) How do you version a CRD?
Q511) What is a conversion webhook?
Q512) Why does a CRD need a schema?
Q513) What is a custom controller?
Q514) What is the reconcile loop in custom controllers?
Q515) What is an Operator?
Q516) How does an Operator manage upgrades?
Q517) What is a finalizer and why use it?
Q518) What is a validating admission webhook?
Q519) What is a mutating admission webhook?
Q520) What is a controller cache and why is it needed?
Q521) What is a CR status subresource?
Q522) Why are CRDs stored in etcd?
Q523) What is the difference between CRD and CR?
Q524) How do you secure admission webhooks?
Q525) What is a webhook timeout?
Q526) What is a CA bundle in webhook config?
Q527) What is leader election and why use it in controllers?
Q528) What is a work queue in a controller?
Q529) What is rate limiting in controller work queues?
Q530) Why should controllers be idempotent?
Q531) What is a validating webhook failure policy?
Q532) Why should CRDs avoid breaking changes?
Q533) What is a subresource like /status used for?
Q534) How does an operator differ from Helm?
Q535) What is an API aggregation layer?
Q536) What are admission stages (mutate then validate)?
Q537) Why is backoff important in controllers?
Q538) What is a namespace selector in webhook config?
Q539) What is a selectorless service used for with ingress?
Q540) What is a service backend in ingress?
Q541) What is a TLS secret in ingress?
Q542) How do you test ingress routing?
Q543) Why are CRDs cluster-scoped?
Q544) What is controller-runtime and why use it?
Q545) What is an operator lifecycle manager (OLM)?
Q546) What is a webhook certificate rotation strategy?
Q547) Why are CRDs often used for storage systems?
Q548) What is a reconciliation error and retry?
Q549) How do you observe CRD events?
Q550) What is a custom metrics API?
Q551) What is an APIService object?
Q552) How do you handle CRD migrations?
Q553) What is a CRD versioning strategy?
Q554) What is a CustomResourceDefinition scope?
Q555) How do you secure a CRD API?
Q556) What is a namespace-scoped CRD?
Q557) What does preserveUnknownFields do?
Q558) Why should you avoid deprecated APIs?
Q559) What is an ingress annotation?
Q560) Why is annotation usage controller-specific?
Q561) What is a pathType in Ingress?
Q562) How does an ingress controller watch resources?
Q563) What is class-based routing with IngressClass?
Q564) What is a webhook side effect?
Q565) What is admissionReview versioning?
Q566) Why should webhooks be highly available?
Q567) What is the difference between sync and async controllers?
Q568) How do you debug an admission webhook failure?
Q569) What is an operator CRD status condition?
Q570) Why do controllers update status instead of spec?
Q571) What is an ownership reference for CRs?
Q572) What is a controller finalizer cleanup pattern?
Q573) What is a validating policy in admission?
Q574) How does a conversion webhook handle versions?
Q575) Why should CRD schemas include defaults?
Q576) What is the difference between legacy Ingress and Gateway API?
Q577) Why is Gateway API emerging?
Q578) How do you migrate from Ingress to Gateway?
Q579) What is a webhook caBundle used for?
Q580) What is a failurePolicy=Ignore risk?

## Practical tasks (Q581-Q600)
Q581) Install an ingress controller and expose a service.
Q582) Create an Ingress with host-based routing.
Q583) Add TLS to an Ingress using a secret.
Q584) Create a CRD and a custom resource instance.
Q585) Add a status field to a CR via controller (theory lab).
Q586) Deploy a sample operator and inspect its managed resources.
Q587) Configure a validating webhook (theory lab).
Q588) Debug a failing webhook due to TLS issues.
Q589) Add a finalizer and observe deletion behavior.
Q590) Create an IngressClass and bind an Ingress to it.
Q591) Use an Ingress annotation to enable rewrite (controller-specific).
Q592) Test ingress routing with curl and host headers.
Q593) Delete a CRD and observe CR cleanup behavior.
Q594) Inspect CRD storage version and served versions.
Q595) Document an operator upgrade plan.
Q596) Implement a conversion webhook outline (theory lab).
Q597) Trace an Ingress request to a service endpoint.
Q598) Identify a failed admission webhook in events.
Q599) Create a Gateway API resource (if available).
Q600) Write a short CRD versioning plan.
