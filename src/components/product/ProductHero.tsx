import { ExternalLink, Sparkles } from "lucide-react";

export function ProductHero() {
  return (
    <section className="relative pt-28 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-br from-cyan-500/15 via-primary-500/10 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8">
          <Sparkles size={16} />
          A Product of Findable LLC
        </div>

        {/* Logo area */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center border border-cyan-400/30">
            <span className="text-white font-bold text-xl">BC</span>
          </div>
          <span className="text-3xl sm:text-4xl font-bold text-white">BlueChimp</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          <span className="gradient-text">Relevance Builds Trust.</span>
          <br />
          <span className="text-white">Trust Builds Dealflow.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-4">
          Stop spamming inboxes. Start trusted conversations.
        </p>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10">
          BlueChimp connects buying intent with trusted relationships so the
          right people open doors at the right moment.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://blue-chimp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold text-lg hover:from-cyan-400 hover:to-cyan-500 transition-all shadow-xl shadow-cyan-500/25"
          >
            Request Beta Access
            <ExternalLink size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <p className="mt-4 text-slate-500 text-sm">
          No credit card required &middot; Setup in minutes
        </p>
      </div>
    </section>
  );
}
