import { Target, TrendingUp, Users, Zap } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Data-Driven Strategy",
    description:
      "We mine your data to uncover patterns that lead to new opportunities and competitive advantages.",
  },
  {
    icon: TrendingUp,
    title: "Growth Acceleration",
    description:
      "Drive business growth through advanced data analytics, predictive modeling, and marketing optimization.",
  },
  {
    icon: Users,
    title: "Customer Intelligence",
    description:
      "Enhance customer engagement by understanding lifetime value, churn risk, and purchase intent.",
  },
  {
    icon: Zap,
    title: "AI Integration",
    description:
      "Leverage artificial intelligence to revolutionize your business operations from analytics to automation.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header - centered */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-3">
            About Findable
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Business intelligence that moves the needle
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Our expertise spans across various sectors, including University
            Advancement, Telecoms, Startups, and more. We pride ourselves on our
            ability to enhance customer engagement and drive business growth
            through advanced data analytics and marketing strategies.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group relative p-7 rounded-2xl bg-slate-900/60 border border-slate-700/50 hover:border-cyan-500/30 hover:bg-slate-800/50 transition-all"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/15 transition-all">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
