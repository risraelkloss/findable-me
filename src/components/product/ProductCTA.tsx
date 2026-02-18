import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";

export function ProductCTA() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative rounded-3xl overflow-hidden border border-slate-700/50">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-cyan-950/30 to-slate-900" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

          <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Stop Chasing Leads.
              <br />
              <span className="gradient-text">Start Opening Doors.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              BlueChimp turns intent and relationships into revenue. See how
              AI-powered lead intelligence can transform your sales pipeline.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://blue-chimp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold text-lg hover:from-cyan-400 hover:to-cyan-500 transition-all shadow-xl shadow-cyan-500/25"
              >
                Get Started with Blue Chimp
                <ExternalLink size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-slate-600 text-slate-200 font-medium text-lg hover:bg-slate-800 hover:border-slate-500 hover:text-white transition-all"
              >
                Talk to Our Team
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <p className="mt-6 text-slate-500 text-sm">
              Blue Chimp is a product of Findable LLC
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
