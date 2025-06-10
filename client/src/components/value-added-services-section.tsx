import { Card, CardContent } from "@/components/ui/card";
import { Headphones, Wrench, BarChart3, Zap } from "lucide-react";

const valueAddedServices = [
  {
    icon: Headphones,
    title: "Managed Services",
    description: "Complete IT infrastructure management allowing you to focus on core business activities.",
    features: ["24/7 monitoring & support", "Proactive maintenance", "Performance optimization", "Service level agreements"]
  },
  {
    icon: Wrench,
    title: "Technical Support",
    description: "Expert technical assistance and troubleshooting services for all your IT systems.",
    features: ["Remote diagnostics", "On-site support", "Emergency response", "Knowledge base access"]
  },
  {
    icon: BarChart3,
    title: "IT Consulting",
    description: "Strategic IT consulting to align technology with your business objectives and growth plans.",
    features: ["Technology roadmaps", "Digital transformation", "IT strategy development", "Risk assessment"]
  },
  {
    icon: Zap,
    title: "System Integration",
    description: "Seamless integration of diverse systems and applications for improved operational efficiency.",
    features: ["Legacy system integration", "API development", "Data migration", "Workflow automation"]
  }
];

export default function ValueAddedServicesSection() {
  return (
    <section id="value-services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Value Added Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Additional services that enhance your IT capabilities and maximize your technology investments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {valueAddedServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
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