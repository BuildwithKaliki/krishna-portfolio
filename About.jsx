export default function About() {
  return (
    <section id="about" className="py-12">
      <h2 className="section-title">$ whoami --verbose</h2>
      <div className="mt-6 space-y-4 text-gray-300 leading-relaxed">
        <p>
          I'm a Sr DevOps Engineer on a cloud platform team that builds and operates the
          infrastructure <span className="text-term-blue">multiple confidential financial-services clients</span> run
          on. My team owns the paved road: AWS accounts, EKS clusters, Terraform modules, Helm
          charts, ArgoCD GitOps, observability, and the CI/CD pipelines that application teams
          deploy through.
        </p>
        <p>
          Day to day, that looks like: provisioning new client environments end-to-end with
          Terraform (VPC, EKS, RDS, MSK/Kafka, Vault, Transit Gateway, WAF), designing GitOps
          delivery with ArgoCD app-of-apps and GitHub Actions, tuning cost (I've led audits that
          identified <span className="text-term-green">$140k+/yr</span> in savings), running incident triage on
          Kubernetes/Kafka/PKI issues, and writing the runbooks that let other teams operate
          without us.
        </p>
        <p>
          I've presented internal knowledge-transfer sessions on the platform architecture and
          authored 40+ engineering notes and runbooks — PKI/truststore failures, DR structure,
          environment decommissioning, IAM key reduction, observability onboarding.
        </p>
        <p className="text-term-dim text-sm">
          Clients can't be named (NDA) — I can walk through any of this work in detail on a call.
        </p>
      </div>
    </section>
  );
}
