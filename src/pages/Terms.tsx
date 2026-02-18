export default function TermsPage() {
  return (
    <section className="relative pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>

        <div className="prose prose-invert prose-slate max-w-none space-y-6 text-slate-400 leading-relaxed">
          <p>
            <strong className="text-white">Last updated:</strong> February 2026
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">Agreement</h2>
          <p>
            By accessing and using findable.me ("the Site"), you agree to be
            bound by these Terms of Service. If you do not agree with any part
            of these terms, you may not access the Site.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">Services</h2>
          <p>
            Findable LLC provides AI-powered business intelligence consulting
            services. The specific scope of any consulting engagement will be
            defined in a separate agreement between Findable LLC and the client.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">Intellectual Property</h2>
          <p>
            All content on this Site, including text, graphics, logos, and
            design, is the property of Findable LLC and is protected by
            applicable intellectual property laws.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">Limitation of Liability</h2>
          <p>
            The information on this Site is provided on an "as is" basis.
            Findable LLC makes no warranties, expressed or implied, and hereby
            disclaims all warranties including, without limitation, implied
            warranties of merchantability and fitness for a particular purpose.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">Contact</h2>
          <p>
            For questions regarding these terms, please contact us at{" "}
            <a
              href="mailto:hello@findable.me"
              className="text-cyan-400 hover:text-cyan-300"
            >
              hello@findable.me
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
