import { Shield, Clock, Network, Award } from "lucide-react";

const features = [
  {
    icon: Network,
    title: "Route Diversity",
    description: "Multiple network paths ensure maximum uptime and reliability for your business operations."
  },
  {
    icon: Clock,
    title: "Quick Turnaround Time",
    description: "Rapid deployment and implementation with minimal disruption to your business."
  },
  {
    icon: Shield,
    title: "24hr Network Monitoring",
    description: "Round-the-clock surveillance and proactive monitoring of your IT infrastructure."
  },
  {
    icon: Award,
    title: "15+ Years of Experience",
    description: "Over a decade of proven expertise in delivering enterprise IT solutions."
  }
];

export default function KeyFeaturesSection() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Niakazi?</h2>
          <p className="text-xl text-blue-100">Unlock reliable and secure connectivity for your business</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}