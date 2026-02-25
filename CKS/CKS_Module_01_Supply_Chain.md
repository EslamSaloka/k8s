# CKS Module 01 - Supply Chain Security

## Goals
- Secure the build-to-deploy pipeline.
- Verify image provenance and integrity.
- Reduce vulnerable dependencies.

## Core concepts (deep detail)
### Image provenance
- Use signed images and verify signatures before deploy.
- Prefer digest pinning over tags.

### SBOM
- Generate and store SBOM for every image.
- Use SBOM for vulnerability and license tracking.

### Image scanning
- Scan images during build and before deploy.
- Block critical CVEs or enforce exceptions.

### Registries and policies
- Use private registries and allowlists.
- Enforce immutable tags where possible.

### CI/CD controls
- Enforce security checks in CI pipeline.
- Use policy-as-code for admission checks.

## Practice (hands-on)
1) Scan a container image and record findings.
2) Sign an image and verify it in admission (theory if tool not available).
3) Use image digest in a deployment.
4) Enforce registry allowlist policy.
5) Generate an SBOM and store it.

## Common pitfalls
- Using latest tags.
- Skipping scans for base images.
- Allowing unsigned images in production.

## Self-test (20 questions)
1) Why use image digests instead of tags?
2) What is an SBOM and why is it required?
3) What is an image signature?
4) How do you enforce image provenance?
5) Why scan images at build time?
6) What is a registry allowlist policy?
7) Why is tag mutability a risk?
8) What is a supply chain attestation?
9) How do you manage exceptions for CVEs?
10) Why use minimal base images?
11) What is an admission policy for images?
12) How do you block unsigned images?
13) Why do you pin dependency versions?
14) What is the risk of pulling from public registries?
15) Why verify signatures at deploy time?
16) What is a policy-as-code workflow?
17) How do you handle SBOM storage?
18) What is a trusted registry?
19) Why scan dependencies as well as images?
20) What is a build pipeline security gate?

## Labs (5)
1) Scan an image and document CVEs.
2) Deploy using image digest instead of tag.
3) Write an allowlist policy for registries.
4) Create a signed image verification plan.
5) Produce an SBOM for a sample app.
