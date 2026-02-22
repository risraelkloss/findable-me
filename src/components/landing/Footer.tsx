import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-primary-500 flex items-center justify-center text-white font-bold text-sm">
                F
              </div>
              <span className="text-lg font-semibold text-white">
                Findable
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Transforming business intelligence into actionable insights through advanced AI and data analytics.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Purchase Intent AI",
                "CLV Analysis",
                "Churn Risk Analysis",
                "Predictive Analytics",
                "Marketing Automation",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/#services"
                    className="text-slate-400 text-sm hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Products
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/blue-chimp"
                  className="text-slate-400 text-sm hover:text-cyan-400 transition-colors"
                >
                  Blue Chimp Platform
                </Link>
              </li>
              <li>
                <a
                  href="https://blue-chimp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 text-sm hover:text-cyan-400 transition-colors"
                >
                  Blue Chimp App &rarr;
                </a>
              </li>
            </ul>

            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 mt-8">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/contact"
                  className="text-slate-400 text-sm hover:text-cyan-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-slate-400 text-sm hover:text-cyan-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-slate-400 text-sm hover:text-cyan-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Ready to Get Started?
            </h4>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Let us help you unlock the power of AI-driven business intelligence.
            </p>
            <div className="flex flex-col items-start gap-4">
              <Link
                to="/contact"
                className="inline-flex px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-primary-500 text-white text-sm font-semibold hover:from-cyan-400 hover:to-primary-400 transition-all shadow-lg shadow-cyan-500/20"
              >
                Schedule Consultation
              </Link>
              <img
                src="/Zapier_Silver_Solution_Partner.png"
                alt="Zapier Silver Solution Partner"
                className="h-14 w-auto"
              />
            </div>
          </div>
        </div>

        <div className="section-divider mt-12 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Findable LLC. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            Makers of{" "}
            <a
              href="https://blue-chimp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Blue Chimp
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
