import { Building2, GraduationCap, Radio, Rocket, Globe, Briefcase } from "lucide-react";

const sectors = [
  {
    icon: GraduationCap,
    name: "University Advancement",
    description: "Data-driven strategies for alumni engagement, fundraising optimization, and donor lifecycle management.",
  },
  {
    icon: Radio,
    name: "Telecoms",
    description: "Churn prediction, customer segmentation, and usage analytics for telecommunications providers.",
  },
  {
    icon: Rocket,
    name: "Startups",
    description: "Growth analytics, product-market fit analysis, and scalable data infrastructure for early-stage companies.",
  },
  {
    icon: Building2,
    name: "Enterprise",
    description: "End-to-end business intelligence solutions that integrate across departments and data sources.",
  },
  {
    icon: Globe,
    name: "SaaS & Technology",
    description: "Intent-based lead scoring, conversion optimization, and automated pipeline intelligence.",
  },
  {
    icon: Briefcase,
    name: "Professional Services",
    description: "Client analytics, engagement scoring, and market intelligence for service-oriented businesses.",
  },
];

export function ExpertiseSection() {
  return (
    <section id="expertise" className="relative py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Industry Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Deep experience across sectors
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Our expertise spans across diverse industries. Wherever data meets
            decisions, Findable Consulting delivers results.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sectors.map((sector) => (
            <div
              key={sector.name}
              className="group relative p-6 rounded-xl bg-slate-900/60 border border-slate-700/50 hover:border-cyan-500/30 hover:bg-slate-800/50 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/15 transition-colors">
                  <sector.icon size={20} />
                </div>
                <h3 className="text-white font-semibold">{sector.name}</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {sector.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
