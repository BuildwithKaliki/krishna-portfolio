export default function Architecture() {
  const zones = [
    {
      name: 'Identity & Access',
      color: 'text-term-amber',
      items: ['Corporate AD to Keycloak (OIDC)', 'K8s RBAC per namespace', 'ArgoCD RBAC + SSO', 'AWS SSO / IAM roles per account', 'Joiner-Mover-Leaver via ITSM'],
    },
    {
      name: 'Infrastructure (Terraform)',
      color: 'text-term-green',
      items: ['~100 env stacks (dev/uat/stage/prod)', 'Reusable modules: VPC, EKS, RDS, MSK, TGW, Vault, WAF', 'State in S3 + DynamoDB locking', 'Terraform CI plan / CD apply pipelines', 'AWS organizations & SCP governance'],
    },
    {
      name: 'Runtime (Kubernetes)',
      color: 'text-term-blue',
      items: ['EKS clusters - US / UK / APAC datacenters', 'Cluster auto-scaler + LB controller', 'Namespace isolation per app group / CMDB ID', 'Helm + ArgoCD app-of-apps', 'DR: documented failover deployment pattern'],
    },
    {
      name: 'Delivery (GitOps)',
      color: 'text-term-green',
      items: ['GitHub Enterprise + reusable Actions', 'ArgoCD registry = source of truth', 'PR-driven: plan to review to apply', 'Charts from Artifactory OCI, version-pinned', 'Fanout values per env per namespace'],
    },
    {
      name: 'Data & Messaging',
      color: 'text-term-amber',
      items: ['RDS Postgres (incl. prod to lower clone pipeline)', 'Kafka (MSK + Strimzi, SASL/SSL)', 'RabbitMQ / AmazonMQ bridges', 'Elasticsearch read models', 'S3 + Private S3 on cloud storage'],
    },
    {
      name: 'Observability & Ops',
      color: 'text-term-blue',
      items: ['Prometheus + custom ServiceMonitors', 'Grafana dashboards as code', 'Alertmanager to client on-call', 'Runbooks & KT sessions', 'FinOps: cost audits, lifecycle, right-sizing'],
    },
  ];

  return (
    <section id="architecture" className="py-12">
      <h2 className="section-title">$ cat platform-architecture.md</h2>
      <p className="mt-4 text-sm text-term-dim">
        how the platform I operate is layered - every box below is something I build, tune or
        support day-to-day for our client programs.
      </p>
      <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2 lg:grid-cols-3">
        {zones.map((z) => (
          <div key={z.name} className="panel p-5">
            <h3 className={`font-bold ${z.color}`}>[ {z.name} ]</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-300">
              {z.items.map((it) => (
                <li key={it} className="flex gap-2">
                  <span className="text-term-dim">-</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
