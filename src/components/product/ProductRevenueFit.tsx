import { useState } from "react";
import { Phone, Settings, Rocket, Globe } from "lucide-react";

const roles = [
  {
    id: "sales",
    icon: Phone,
    label: "Sales",
    headline: "Sell Warmer. Close Faster.",
    description:
      "Cold leads waste your best reps. Warm introductions shorten every deal.",
    outcomes: [
      "See which accounts are actively buying",
      "Identify who in your network can make the intro",
      "Reach out with timing and context",
    ],
    result: "More replies. Shorter cycles. Fewer dead-end calls.",
  },
  {
    id: "revops",
    icon: Settings,
    label: "RevOps",
    headline: "Fix the Top of the Funnel Without Adding Noise",
    description:
      "More leads don't fix revenue problems. Better signals do.",
    outcomes: [
      "Score real buying intent from visitor behavior",
      "Enrich accounts with relationship proximity",
      "Route leads based on who should sell",
    ],
    result: "Higher conversion rates. Cleaner attribution.",
  },
  {
    id: "founder",
    icon: Rocket,
    label: "Founders",
    headline: "Win Deals Before You Can Afford a Sales Team",
    description:
      "Your unfair advantage isn't headcount. It's trust.",
    outcomes: [
      "See which companies are quietly evaluating you",
      "Surface warm paths through advisors and customers",
      "Ask for intros at exactly the right moment",
    ],
    result: "Early traction. Faster validation.",
  },
  {
    id: "universal",
    icon: Globe,
    label: "Universal",
    headline: "Your Network Is Bigger Than You Think",
    description:
      "Every customer, advisor, and partner hides a buying path.",
    outcomes: [
      "Identify who's visiting",
      "Understand who's buying",
      "Activate trusted introductions",
    ],
    result: "Fewer cold starts. More closed deals.",
  },
];

export function ProductRevenueFit() {
  const [activeRole, setActiveRole] = useState("sales");
  const active = roles.find((r) => r.id === activeRole) ?? roles[0];

  return (
    <section className="relative py-20 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Built for Every Revenue Role
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Whether you're closing deals, optimizing funnels, or building from scratch
          </h2>
        </div>

        {/* Role Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => setActiveRole(role.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeRole === role.id
                  ? "bg-cyan-500/10 border border-cyan-500/30 text-cyan-400"
                  : "bg-slate-900/60 border border-slate-700/50 text-slate-400 hover:text-white hover:border-slate-600"
              }`}
            >
              <role.icon size={16} />
              {role.label}
            </button>
          ))}
        </div>

        {/* Active Role Content */}
        <div className="max-w-3xl mx-auto">
          <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/60 border border-slate-700/50">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {active.headline}
            </h3>
            <p className="text-slate-400 text-lg mb-8">
              {active.description}
            </p>

            <ul className="space-y-4 mb-8">
              {active.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  </span>
                  <span className="text-slate-300">{outcome}</span>
                </li>
              ))}
            </ul>

            <div className="px-5 py-3 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
              <p className="text-cyan-400 font-medium">
                Outcome: {active.result}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
