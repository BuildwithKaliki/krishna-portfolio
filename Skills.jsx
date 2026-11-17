const skillGroups = [
  {
    group: 'Cloud & Infrastructure as Code',
    skills: [
      ['AWS (EKS, RDS, MSK, S3, TGW, WAF, IAM, SCP)', 5],
      ['Terraform (modules, multi-account, remote state)', 5],
      ['Kubernetes / EKS (RBAC, autoscaling, storage)', 5],
      ['Helm / Helmfile', 5],
      ['Ansible', 4],
      ['Multi-region & multi-account architecture', 4],
    ],
  },
  {
    group: 'CI/CD & GitOps',
    skills: [
      ['ArgoCD (app-of-apps, fleet management)', 5],
      ['GitHub Actions (reusable org workflows)', 5],
      ['GitOps delivery patterns', 5],
      ['Jenkins', 3],
      ['Nexus / Artifactory, chart & image pipelines', 4],
    ],
  },
  {
    group: 'Observability & Reliability',
    skills: [
      ['Prometheus + ServiceMonitors', 4],
      ['Grafana (dashboards as code, alerting)', 4],
      ['Elasticsearch / Kibana', 4],
      ['Incident triage & root-cause analysis', 5],
      ['Runbooks & KT documentation', 5],
    ],
  },
  {
    group: 'Data, Messaging & Security',
    skills: [
      ['Kafka (MSK/Strimzi, SASL/SSL, onboarding)', 4],
      ['RabbitMQ / AmazonMQ', 4],
      ['PKI / TLS truststores (JKS/PEM), Sectigo', 4],
      ['Vault / Consul', 3],
      ['Keycloak + OIDC / AD integration', 4],
      ['FinOps / cost optimization', 4],
    ],
  },
];

function Bar({ level }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`h-2 w-5 rounded-sm ${i < level ? 'bg-term-green' : 'bg-term-border'}`}
        />
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-12">
      <h2 className="section-title">$ ./skills-matrix --render</h2>
      <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2">
        {skillGroups.map((g) => (
          <div key={g.group} className="panel p-5">
            <h3 className="font-bold text-term-amber"># {g.group}</h3>
            <div className="mt-4 space-y-3">
              {g.skills.map(([name, level]) => (
                <div key={name} className="flex items-center justify-between gap-4 text-sm">
                  <span className="text-gray-300">{name}</span>
                  <Bar level={level} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-term-dim">
        scale: 5 = build & operate daily · 4 = strong, production experience · 3 = working knowledge
      </p>
    </section>
  );
}
