const timeline = [
  {
    period: '~4 years → present',
    role: 'Sr DevOps Engineer — SS&C',
    points: [
      'Promoted to senior after ownership of platform cost-optimization program and multi-region client onboarding.',
      'Support multiple confidential financial-services clients on one shared Kubernetes platform.',
      'Own GitOps delivery lanes, Terraform module library, and fleet-wide observability tooling.',
    ],
  },
  {
    period: 'earlier @ SS&C',
    role: 'DevOps Engineer',
    points: [
      'Provisioned AWS environments end-to-end (VPC → EKS → RDS → Kafka → Vault) with Terraform.',
      'Built ArgoCD registry pattern and automated kubeconfig issuance for the DevOps team.',
      'Ran Kafka onboarding automation and PKI/truststore incident triage.',
    ],
  },
];

const support = [
  ['App teams', "we provide the paved road — they own their CI/CD pipelines and ship by merging PRs into our GitOps lanes"],
  ['Guidelines & frameworks', "we own deployment guidelines, reference implementations and standard monitoring/alerting frameworks"],
  ['Centralized observability', "we provide the shared monitoring & alerting stack — app teams integrate their workloads with ServiceMonitors"],
  ['COTS platform tooling', "we deploy and version platform COTS (Keycloak, Nifi, Superset, Vault, Kafka) — app teams administrate their own usage"],
  ['Client prod-support teams', 'walk-throughs, runbooks, escalation paths; certified KT sessions for handover'],
  ['Security & IAM', 'AD/Keycloak RBAC, IAM key reduction, SCP region governance, PKI lifecycle'],
  ['FinOps / management', 'cost audits, right-sizing proposals, savings sign-off documentation'],
  ['Other DevOps regions', 'AU/US/APAC peers — shared tool repos, cluster config parity, DR patterns'],
];

export default function Experience() {
  return (
    <section id="experience" className="py-12">
      <h2 className="section-title">$ git log --career</h2>
      <div className="mt-6 space-y-4">
        {timeline.map((t) => (
          <div key={t.role} className="panel p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-bold text-gray-100">{t.role}</h3>
              <span className="text-sm text-term-dim">{t.period}</span>
            </div>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-300">
              {t.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="text-term-green">*</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h3 className="mt-10 font-bold text-term-green text-lg">$ cat how-we-support-teams.md</h3>
      <div className="panel mt-4 p-5">
        <p className="text-sm text-term-dim mb-4">
          official platform-engineering model we operate: app teams build & ship their own
          services — we provide the toolchains and workflows that make that self-service:
        </p>
        <ul className="space-y-3 text-sm text-gray-300">
          {support.map(([team, what]) => (
            <li key={team} className="flex flex-col sm:flex-row gap-1 sm:gap-4">
              <span className="text-term-blue font-semibold sm:w-56 shrink-0">{team}</span>
              <span>{what}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
