import {
  Brain,
  BarChart3,
  ShieldAlert,
  LineChart,
  Settings2,
  Network,
  Share2,
  Bot,
} from "lucide-react";

const primaryServices = [
  {
    icon: Brain,
    title: "AI-based Purchase Intent",
    description:
      "Identify when prospects are ready to buy using advanced machine learning models that analyze behavioral signals and engagement patterns.",
  },
  {
    icon: BarChart3,
    title: "Customer Lifetime Value Analysis",
    description:
      "Understand the long-term value of your customers, enabling informed decisions about retention and acquisition strategies that maximize ROI.",
  },
  {
    icon: ShieldAlert,
    title: "Churn Risk Analysis",
    description:
      "Identify patterns and predictors of customer churn so you can implement effective retention strategies before it's too late.",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description:
      "Utilize advanced algorithms to forecast future trends and behaviors, optimizing your business strategies with data-driven confidence.",
  },
  {
    icon: Settings2,
    title: "Marketing Automation",
    description:
      "Streamline your marketing processes through intelligent automation, enhancing efficiency and effectiveness across every campaign.",
  },
];

const supportingServices = [
  {
    icon: Network,
    title: "Correlative Sales Analysis",
    description:
      "Mine your sales data to uncover hidden patterns that lead to new revenue opportunities.",
  },
  {
    icon: Share2,
    title: "Social Media Monitoring",
    description:
      "Analyze and leverage social channels to connect with key individuals and drive engagement.",
  },
  {
    icon: Bot,
    title: "AI Strategy & Integration",
    description:
      "Learn how AI can revolutionize your operations, from predictive analytics to customer service automation.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 sm:py-24">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-3">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Primary Services
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            From predicting customer behavior to automating your marketing pipeline,
            our core services are designed to unlock growth at every stage.
          </p>
        </div>

        {/* Primary Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {primaryServices.map((service) => (
            <div
              key={service.title}
              className="group relative p-7 rounded-2xl bg-slate-900/60 border border-slate-700/50 hover:border-cyan-500/30 hover:bg-slate-800/50 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5">
                <service.icon size={24} className="text-cyan-400" />
              </div>

              <h3 className="text-white font-semibold text-lg mb-3">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Supporting Services */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Supporting Services
          </h3>
          <p className="text-slate-400 leading-relaxed">
            In addition to our primary offerings, we provide a range of supporting
            services designed to maximize your business potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {supportingServices.map((service) => (
            <div
              key={service.title}
              className="p-6 rounded-xl bg-slate-900/60 border border-slate-700/50 hover:border-cyan-500/30 hover:bg-slate-800/50 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                <service.icon size={18} className="text-cyan-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">{service.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
