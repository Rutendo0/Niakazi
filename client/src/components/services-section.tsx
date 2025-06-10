import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Shield, Settings, Database, Network, Smartphone } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services to modernize your business operations."
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your business from cyber threats and data breaches."
  },
  {
    icon: Settings,
    title: "IT Support",
    description: "24/7 technical support and maintenance to keep your systems running smoothly."
  },
  {
    icon: Database,
    title: "Data Management",
    description: "Advanced data analytics and database management solutions for informed decision-making."
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    description: "Design and implementation of robust network infrastructure for optimal connectivity."
  },
  {
    icon: Smartphone,
    title: "Digital Transformation",
    description: "Strategic technology adoption to modernize business processes and improve efficiency."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our IT Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive technology services designed to optimize your business operations and drive growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <button className="text-primary font-semibold hover:underline">
                    Learn More →
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
