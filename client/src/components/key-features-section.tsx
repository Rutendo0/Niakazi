import { Shield, Clock, Network, Award, TrendingUp, Users } from "lucide-react";

const features = [
  {
    icon: Network,
    title: "Route Diversity",
    description: "Multiple network paths ensure maximum uptime and reliability for your business operations.",
    stat: "99.9%",
    statLabel: "Uptime"
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Rapid deployment and implementation with minimal disruption to your business.",
    stat: "24hrs",
    statLabel: "Deployment"
  },
  {
    icon: Shield,
    title: "24/7 Monitoring",
    description: "Round-the-clock surveillance and proactive monitoring of your IT infrastructure.",
    stat: "24/7",
    statLabel: "Support"
  },
  {
    icon: Award,
    title: "15+ Years Experience",
    description: "Over a decade of proven expertise in delivering enterprise IT solutions.",
    stat: "15+",
    statLabel: "Years"
  }
];

export default function KeyFeaturesSection() {
  return (
    <section className="py-32 hero-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl floating-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-cyan-500/15 to-blue-500/15 rounded-full blur-2xl floating-animation" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 glass-effect px-6 py-3 rounded-full text-white/90 text-sm font-medium mb-8">
            <TrendingUp className="w-4 h-4" />
            Excellence in Every Detail
          </div>
          <h2 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            Why Industry Leaders
            <span className="block text-transparent bg-gradient-to-r from-cyan-200 via-yellow-200 to-pink-200 bg-clip-text shimmer-effect">
              Choose Niakazi
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light">
            Experience unmatched reliability, expertise, and innovation that transforms your business infrastructure into a competitive advantage.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="group text-center">
                <div className="interactive-card glass-effect border-white/20 p-10 h-full">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl pulse-glow">
                    <IconComponent className="text-white h-12 w-12" />
                  </div>
                  <div className="mb-8">
                    <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-200 to-yellow-200 bg-clip-text mb-2">{feature.stat}</div>
                    <div className="text-sm text-white/60 uppercase tracking-wider font-medium">{feature.statLabel}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-6 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-cyan-200 group-hover:to-yellow-200 transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed font-light">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <div className="sophisticated-card bg-white/10 backdrop-blur-sm border-white/20 max-w-4xl mx-auto p-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white"></div>
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">Trusted by 500+ Organizations</p>
                <p className="text-white/60 text-sm">Across Africa and beyond</p>
              </div>
            </div>
            <blockquote className="text-xl text-white/90 italic leading-relaxed">
              "Niakazi transformed our IT infrastructure with their expertise and reliability. The 24/7 support and proactive monitoring give us complete peace of mind."
            </blockquote>
            <div className="mt-4 text-yellow-300 font-medium">Enterprise Client, Kenya</div>
          </div>
        </div>
      </div>
    </section>
  );
}