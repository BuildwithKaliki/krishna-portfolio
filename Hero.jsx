export default function Hero() {
  return (
    <section className="py-16">
      <div className="panel p-6 md:p-8 shadow-lg shadow-black/40">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex items-center justify-center w-24 h-24 text-4xl font-bold rounded-full shrink-0 bg-gradient-to-br from-term-blue to-term-green text-term-bg">
            KK
          </div>
          <div>
            <h1 className="text-3xl font-bold md:text-4xl">
              Krishna Kaliki
            </h1>
            <p className="mt-2 text-term-blue">Sr DevOps Engineer</p>
            <p className="mt-1 text-term-dim">
              AWS · Kubernetes · Terraform · GitOps — Multi-Region Cloud Platform Engineering
            </p>
          </div>
        </div>

        <div className="mt-8 border border-term-border rounded bg-black/40 p-4 text-sm leading-relaxed">
          <p>
            <span className="prompt">krishna@devops:~$</span> whoami
          </p>
          <p className="text-term-green">
            DevOps engineer building and running multi-tenant Kubernetes platforms on AWS for
            confidential global financial-services clients.
          </p>
          <p className="mt-3">
            <span className="prompt">krishna@devops:~$</span> cat mission.txt
          </p>
          <p className="text-gray-300">
            4+ years at SS&C — platform engineering, GitOps delivery, cost optimization,
            observability, and 24/7 support across <span className="text-term-amber">60+ AWS accounts</span> in
            {' '}<span className="text-term-amber">5 regions</span> (Europe, Australia, US) serving multiple client programs.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <a
            href="https://www.linkedin.com/"
            className="px-4 py-2 rounded border border-term-blue text-term-blue hover:bg-term-blue hover:text-term-bg transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn →
          </a>
          <a
            href="https://github.com/buildwithkaliki"
            className="px-4 py-2 rounded border border-term-border text-gray-300 hover:border-term-green hover:text-term-green transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
