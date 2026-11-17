const projects = [
  {
    title: 'Multi-Tenant EKS Platform (GIDS)',
    tags: ['EKS', 'Terraform', 'ArgoCD', 'Keycloak', 'Multi-tenancy'],
    blurb: 'Cluster-per-offering Kubernetes platform across US / UK / APAC datacenters.',
    detail: [
      'One EKS cluster per application group and platform (dev/uat/prod), namespace-isolated with RBAC wired to corporate Active Directory via Keycloak + OIDC.',
      'Cluster lifecycle fully codified: Terraform + Ansible pipeline (terraform-ci plan / terraform-cd apply) - new cluster = new folder + tfvars.',
      'Automated kubeconfig issuance for the whole DevOps team (OIDC-based, k8sswitch-friendly).',
    ],
  },
  {
    title: 'GitOps Delivery on ArgoCD Fleet',
    tags: ['ArgoCD', 'Helm', 'GitHub Actions', 'Artifactory'],
    blurb: 'App-of-apps registry that declares every cluster, app and tool in the fleet.',
    detail: [
      'Control-plane / data-plane model: a registry of ArgoCD Application manifests fans out to all clusters; app teams ship by merging a PR to their values.',
      'Reusable org-level GitHub Actions workflows - env repos are thin callers; PR targeting a lane drives plan to review to apply automatically.',
      'Unified Helm chart deploys a namespace of microservices from enabled-flags in values.yaml; charts published to Artifactory/Nexus on feature-branch and release builds.',
    ],
  },
  {
    title: 'AWS Cost Optimization Program',
    tags: ['FinOps', 'RDS', 'SCP', 'S3', 'EC2'],
    blurb: 'Multiple cost-reduction tickets across client orgs - $140k+/yr identified.',
    detail: [
      'RDS clone lifecycle: found 10 stale prod-clone instances (up to 4 TB each) - designed TTL + resize-while-idle pattern recovering ~70-80% of a ~$100k/yr run-rate.',
      'Region restriction via SCP: audited 73 of 83 org accounts, proved zero resources in unused regions, then tightened the OU SCP deny-list - while catching a near-miss that would have broken another business unit in eu-central-1.',
      'Housekeeping: EBS snapshot/AMI cleanup (~1.1 TB freed), S3 lifecycle policies rolled out across accounts, IAM access-key reduction.',
    ],
  },
  {
    title: 'Observability Stack Rollout',
    tags: ['Prometheus', 'Grafana', 'Elasticsearch', 'Kibana', 'Alertmanager'],
    blurb: 'Metrics, dashboards and alerting for every cluster in the fleet.',
    detail: [
      'Prometheus + Grafana + Elasticsearch/Kibana deployed via Helmfile as platform tools, not pets - one values-file per cluster.',
      'Custom ServiceMonitors per workload; Alertmanager routes to the client on-call channel.',
      'Grafana dashboards and ES index templates shipped as code alongside each microservice deployment.',
    ],
  },
  {
    title: 'Kafka Platform Operations',
    tags: ['MSK/Strimzi', 'SASL/SSL', 'Automation'],
    blurb: 'Kafka onboarding + topic automation + deep TLS/SASL troubleshooting.',
    detail: [
      'JSON-driven onboarding pipeline: drop a config in the env directory and the workflow creates topics, ACLs and users.',
      'Root-caused a notorious SSL handshake failed loop - proved the app code itself stripped truststore properties, fell back to JVM cacerts, and failed PKIX against the Strimzi cluster CA; fixed with config-server fallback + pre-validated fix in a scratch pod.',
      'Enabled Quorum queues / RabbitMQ + AmazonMQ bridges plus Kafka for event-driven microservices.',
    ],
  },
  {
    title: 'Runbooks, KT & Operations Excellence',
    tags: ['Documentation', 'KT sessions', 'Decommissioning', 'DR'],
    blurb: '40+ engineering notes, KT presentations, and repeatable operational patterns.',
    detail: [
      'Presented a 1-hour knowledge-transfer session on the full platform architecture (accounts, clusters, repos, deployment flow, escalation) to hand over support of a client region.',
      'Authored runbooks: PKI/sectigo trust failures, PrivateLink implementations, CDC host triage, prod deployment, decommissioning fusion envs (K8s + Terraform parts).',
      'Disaster-recovery structure documented cluster architecture and deployment pattern for DR failover.',
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <h2 className="section-title">$ ls ~/projects --all</h2>
      <div className="mt-6 space-y-4">
        {projects.map((p, i) => (
          <details key={p.title} className="panel group p-5" open={i === 0}>
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
              <div>
                <span className="text-term-green font-bold">0{i + 1}</span>{' '}
                <span className="font-bold text-gray-100">{p.title}</span>
                <p className="mt-1 text-sm text-term-dim">{p.blurb}</p>
              </div>
              <span className="text-term-dim group-open:rotate-90 transition-transform">></span>
            </summary>
            <div className="mt-4 space-y-2">
              <ul className="space-y-2 text-sm text-gray-300">
                {p.detail.map((d) => (
                  <li key={d} className="flex gap-2">
                    <span className="text-term-blue">></span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full border border-term-border text-term-amber">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
