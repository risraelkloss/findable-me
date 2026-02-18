import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative rounded-3xl overflow-hidden border border-slate-700/50">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-primary-500/10" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

          <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to transform your
              <br />
              <span className="gradient-text">business intelligence?</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you need predictive analytics, customer intelligence, or a
              full AI strategy, we're here to help you make data-driven decisions
              that drive real growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-primary-500 text-white font-semibold text-lg hover:from-cyan-400 hover:to-primary-400 transition-all shadow-xl shadow-cyan-500/25"
              >
                Schedule a Consultation
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <a
                href="https://blue-chimp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-slate-600 text-slate-200 font-medium text-lg hover:bg-slate-800 hover:border-slate-500 hover:text-white transition-all"
              >
                Try Blue Chimp
                <ExternalLink size={18} />
              </a>
            </div>

            <p className="mt-8 text-slate-500 text-sm">
              No commitment required. Let's start a conversation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
