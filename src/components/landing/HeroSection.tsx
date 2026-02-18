import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-br from-cyan-500/10 via-primary-500/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center pt-28 pb-12">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-slate-700/60 text-cyan-400 text-sm font-medium mb-8">
          <Sparkles size={16} />
          AI-Powered Business Intelligence
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          <span className="gradient-text">Transform Data</span>
          <br />
          <span className="text-white">Into Strategic Advantage</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          At Findable Consulting, we specialize in transforming business intelligence
          into actionable insights. From predictive analytics to AI-driven customer
          engagement, we help organizations make smarter decisions faster.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-primary-500 text-white font-semibold text-lg hover:from-cyan-400 hover:to-primary-400 transition-all shadow-xl shadow-cyan-500/25"
          >
            Schedule a Consultation
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/blue-chimp"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-slate-600 text-slate-200 font-medium text-lg hover:bg-slate-800 hover:border-slate-500 hover:text-white transition-all"
          >
            Explore Blue Chimp
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-slate-500 text-sm">
          {[
            "University Advancement",
            "Telecoms",
            "Startups",
            "Enterprise",
          ].map((sector) => (
            <span key={sector} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50" />
              {sector}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
