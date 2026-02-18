import { useState } from "react";
import { Mail, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import type { FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative pt-32 pb-24">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[400px] bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Get in Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let's discuss your <span className="gradient-text">next move</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Whether you're exploring AI consulting, interested in Blue Chimp, or
            want to learn how data analytics can transform your business — we'd
            love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="p-12 rounded-2xl bg-white/[0.03] border border-cyan-500/20 text-center">
                <CheckCircle2 size={48} className="text-cyan-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  Message Received
                </h3>
                <p className="text-slate-400">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors"
                    placeholder="Acme Inc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    What can we help with?
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-slate-700 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors">
                    <option value="" className="bg-slate-900">Select a topic...</option>
                    <option value="consulting" className="bg-slate-900">AI Consulting</option>
                    <option value="bluechimpo" className="bg-slate-900">Blue Chimp Product</option>
                    <option value="analytics" className="bg-slate-900">Predictive Analytics</option>
                    <option value="automation" className="bg-slate-900">Marketing Automation</option>
                    <option value="other" className="bg-slate-900">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors resize-none"
                    placeholder="Tell us about your project or challenge..."
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-primary-500 text-white font-semibold text-lg hover:from-cyan-400 hover:to-primary-400 transition-all shadow-xl shadow-cyan-500/25"
                >
                  Send Message
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-8">
            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <a
                    href="mailto:hello@findable.me"
                    className="text-slate-400 text-sm hover:text-cyan-400 transition-colors"
                  >
                    hello@findable.me
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-slate-400 text-sm">
                    Remote-first &middot; Available worldwide
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/5 to-primary-500/5 border border-cyan-500/10">
              <h4 className="text-white font-semibold mb-2">
                Looking for Blue Chimp?
              </h4>
              <p className="text-slate-400 text-sm mb-4">
                Our AI-powered lead intelligence platform is available for beta access.
              </p>
              <a
                href="https://blue-chimp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors"
              >
                Visit blue-chimp.com <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
