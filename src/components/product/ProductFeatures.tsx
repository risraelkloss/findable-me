import { Crosshair, GitBranch, Handshake } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Crosshair,
    title: "Capture Intent",
    description:
      "Identify real buying signals from website behavior. Know which accounts are actively evaluating your solution.",
    color: "from-cyan-500 to-cyan-400",
  },
  {
    number: "2",
    icon: GitBranch,
    title: "Map Relationships",
    description:
      "Connect accounts to people you already trust. Surface warm paths through advisors, customers, and partners.",
    color: "from-primary-500 to-primary-400",
  },
  {
    number: "3",
    icon: Handshake,
    title: "Activate Introductions",
    description:
      "Route warm paths to the right seller automatically. Ask for intros at exactly the right moment.",
    color: "from-indigo-500 to-indigo-400",
  },
];

export function ProductFeatures() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            From intent to introduction in three steps
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.title} className="relative">
              <div className="relative p-8 rounded-2xl bg-slate-900/60 border border-slate-700/50 hover:border-cyan-500/30 transition-all group">
                {/* Step icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-105 transition-transform`}>
                  <step.icon size={28} className="text-white" />
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <span className="text-cyan-400/50 font-bold text-sm">
                    STEP {step.number}
                  </span>
                </div>

                <h3 className="text-white font-semibold text-xl mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
