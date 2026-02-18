export default function PrivacyPage() {
  return (
    <section className="relative pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

        <div className="prose prose-invert prose-slate max-w-none space-y-6 text-slate-400 leading-relaxed">
          <p>
            <strong className="text-white">Last updated:</strong> February 2026
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">Overview</h2>
          <p>
            Findable LLC ("Findable", "we", "us") respects your privacy and is
            committed to protecting your personal data. This privacy policy
            explains how we collect, use, and safeguard your information when
            you visit findable.me.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">Information We Collect</h2>
          <p>
            We may collect information you voluntarily provide through our
            contact form, including your name, email address, company name, and
            message content. We may also collect standard web analytics data
            such as page views and browser type.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">How We Use Your Information</h2>
          <p>
            We use the information we collect to respond to your inquiries,
            improve our services, and communicate with you about our consulting
            offerings. We do not sell your personal information to third parties.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">Contact</h2>
          <p>
            If you have questions about this privacy policy, please contact us
            at{" "}
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
