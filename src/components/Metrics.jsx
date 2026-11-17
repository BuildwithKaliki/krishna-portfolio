const metrics = [
  { value: '60+', label: 'AWS accounts managed', sub: 'across 5 regions: EU, AU, US east x2, Cape Town' },
  { value: '18', label: 'managed platform services', sub: 'K8s platform, Keycloak, Kafka, observability, API gateway, AI platforms - per CMDB' },
  { value: '~100', label: 'Terraform environment stacks', sub: 'dev / uat / stage / prod per client program' },
  { value: '10+', label: 'EKS / K8s cluster families', sub: 'US, UK & APAC datacenters - STL, KC, Wales, Sydney' },
  { value: '$140k+', label: 'annual cloud savings identified', sub: 'RDS right-sizing, region restriction, snapshot & S3 cleanup' },
  { value: '4 yrs', label: 'at SS&C', sub: 'DevOps to Sr DevOps Engineer, multi-client platform support' },
];

export default function Metrics() {
  return (
    <section id="metrics" className="py-12">
      <h2 className="section-title">$ impact --scale</h2>
      <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((m) => (
          <div key={m.label} className="panel p-5 hover:border-term-green/60 transition-colors">
            <div className="text-3xl font-bold text-term-green">{m.value}</div>
            <div className="mt-1 font-semibold text-gray-200">{m.label}</div>
            <div className="mt-1 text-xs text-term-dim">{m.sub}</div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-term-dim">
        figures from live platform inventory across client programs (client names confidential -
        financial services, wealth management & fund administrations).
      </p>
    </section>
  );
}
