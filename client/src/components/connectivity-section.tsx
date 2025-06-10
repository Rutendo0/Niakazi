import { Card, CardContent } from "@/components/ui/card";
import { Wifi, Globe, Zap, Satellite } from "lucide-react";

const connectivityServices = [
  {
    icon: Globe,
    title: "Dedicated Internet Access",
    description: "High-speed, reliable internet connectivity with guaranteed bandwidth and uptime SLAs.",
    features: ["Scalable bandwidth", "99.9% uptime guarantee", "24/7 technical support", "Symmetric speeds"]
  },
  {
    icon: Wifi,
    title: "Fiber Connectivity",
    description: "Ultra-fast fiber optic connections for businesses requiring high-performance networking.",
    features: ["Low latency", "High bandwidth capacity", "Redundant connections", "Future-proof technology"]
  },
  {
    icon: Zap,
    title: "SD-WAN Solutions",
    description: "Software-defined wide area network solutions for optimized network performance.",
    features: ["Centralized management", "Cost optimization", "Enhanced security", "Application prioritization"]
  },
  {
    icon: Satellite,
    title: "VSAT Services",
    description: "Satellite communication solutions for remote locations and backup connectivity.",
    features: ["Global coverage", "Reliable backup", "Remote site connectivity", "Disaster recovery"]
  }
];

export default function ConnectivitySection() {
  return (
    <section id="connectivity" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Connectivity Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Robust and reliable connectivity solutions to keep your business connected and productive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {connectivityServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}