import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Database, Shield, Server } from "lucide-react";

const cloudServices = [
  {
    icon: Server,
    title: "Co-Location Services",
    description: "Secure data center facilities with enterprise-grade infrastructure and 24/7 monitoring.",
    features: ["Tier 3 data centers", "Physical security", "Power redundancy", "Climate control"]
  },
  {
    icon: Cloud,
    title: "Microsoft Azure",
    description: "Complete Azure cloud solutions including migration, deployment, and ongoing management.",
    features: ["Cloud migration", "Virtual machines", "Storage solutions", "Backup & recovery"]
  },
  {
    icon: Database,
    title: "Microsoft 365",
    description: "Full Microsoft 365 deployment and management for enhanced productivity and collaboration.",
    features: ["Email & calendar", "Office applications", "Teams collaboration", "SharePoint & OneDrive"]
  },
  {
    icon: Shield,
    title: "Oracle Cloud Infrastructure",
    description: "Enterprise-grade Oracle cloud services for mission-critical applications and databases.",
    features: ["Database services", "Compute instances", "Enterprise applications", "High availability"]
  },
  {
    icon: Server,
    title: "Virtual Private Server",
    description: "Scalable VPS solutions with dedicated resources and full administrative control.",
    features: ["Dedicated resources", "Root access", "Custom configurations", "Scalable performance"]
  },
  {
    icon: Database,
    title: "Storage Area Network",
    description: "High-performance SAN solutions for centralized storage and data management.",
    features: ["Centralized storage", "High IOPS", "Data redundancy", "Backup integration"]
  }
];

export default function CloudServicesSection() {
  return (
    <section id="cloud" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Cloud Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive cloud solutions to modernize your infrastructure and enhance business agility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cloudServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700 text-sm">
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