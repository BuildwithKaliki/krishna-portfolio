const qa = [
  {
    q: 'What do you do day-to-day?',
    a: 'I operate a shared multi-tenant Kubernetes platform on AWS: provisioning client environments with Terraform, shipping platform tooling through ArgoCD/Helm, supporting app teams deployments, triaging incidents (Kafka TLS, PKI, storage mounts, networking), and driving the cost-optimization program.',
  },
  {
    q: 'How many accounts / clusters / repos do you manage?',
    a: '60+ AWS accounts across 5 regions, ~100 Terraform environment stacks, 10+ EKS cluster families across US/UK/APAC datacenters, and ~60 Git repos covering charts, Terraform modules, environment stacks, ArgoCD registries and deploy tooling.',
  },
  {
    q: 'Walk me through your GitOps flow.',
    a: 'ArgoCD registry is the source of truth — it declares control planes, data planes, apps and tools. App teams merge PRs to their values (image tag, chart version); reusable GitHub Actions run terraform plan; ArgoCD fans out the application chart from Artifactory OCI at the pinned version into each namespace. Nothing is kubectl-applied by hand; ArgoCD reverts any manual drift.',
  },
  {
    q: 'Tell me about a hard problem you solved.',
    a: 'A microservice looped on SSL handshake failed against Kafka. Everyone suspected expired certs. I mounted the app image in a scratch pod with JDK 25 and falsified that theory — the real cause was the app code itself filtering out any property containing truststore, so it always fell back to JVM cacerts and failed PKIX against the Strimzi cluster CA. Fixed by removing the env overrides so config-server values applied; pre-validated the fix in a temp pod before the MR.',
  },
  {
    q: 'Tell me about a cost win.',
    a: 'Audited a prod AWS account and found 10 stale RDS clones — 2-4 TB each, up to a year old — but DNS-CNAMEd so apps still treated them as primary. Instead of delete (PII-flagged account), I designed a TTL + resize-while-idle pattern (m7g.8xlarge to t4g.small, 12000 to 3000 IOPS) recovering ~70-80% of a ~$100k/yr run-rate. Also caught a near-miss in an SCP region-restriction change that would have blocked another business unit in eu-central-1.',
  },
  {
    q: 'How do you support other teams?',
    a: 'Official platform-engineering split: app teams own their CI/CD pipelines — we provide the paved road. My team owns the centralized monitoring & alerting stack, the standard frameworks and deployment guidelines/reference implementations, and the COTS platform tooling (Keycloak, Nifi, Superset). Beyond that: client prod-support teams get runbooks and certified KT sessions; security gets AD/Keycloak RBAC and SCP governance; management gets FinOps audits with sign-off-ready proposals.',
  },
  {
    q: 'How do you handle secrets & access?',
    a: 'OIDC kubeconfigs issued via automation (no static creds), RBAC per namespace joined to corporate AD, Vault for app secrets, AWS SSO per-account roles, IAM access-key reduction program, and org-level SCP region restriction with break-glass exemptions.',
  },
  {
    q: 'DR story?',
    a: 'Cluster-per-offering architecture with documented deployment structure for disaster recovery; ArgoCD app-of-apps means a cluster can be rebuilt from Git (Terraform rebuilds infra, registry re-syncs workloads); prod to lower RDS clone pipeline for refreshed lower environments.',
  },
];

export default function Interview() {
  return (
    <section id="interview" className="py-12">
      <h2 className="section-title">$ man krishna # how i work</h2>
      <p className="mt-4 text-sm text-term-dim">
        quick answers I keep ready — the "tell me about yourself" short version:
      </p>
      <div className="mt-6 space-y-3">
        {qa.map((item) => (
          <details key={item.q} className="panel p-4">
            <summary className="cursor-pointer font-semibold text-gray-100 list-none flex justify-between gap-4">
              <span>
                <span className="text-term-amber">Q:</span> {item.q}
              </span>
              <span className="text-term-dim">+</span>
            </summary>
            <p className="mt-3 text-sm text-gray-300 leading-relaxed">
              <span className="text-term-green font-bold">A:</span> {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
