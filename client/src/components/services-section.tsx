import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Shield, Settings, Database, Network, Smartphone } from "lucide-react";

const services = [
  {
    icon: Network,
    title: "Connectivity",
    description: "Reliable internet access, fiber connectivity, SD-WAN, and VSAT solutions for seamless business operations."
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Microsoft Azure, Office 365, Oracle Cloud, VPS, and co-location services for scalable infrastructure."
  },
  {
    icon: Shield,
    title: "Security",
    description: "Comprehensive cybersecurity including vulnerability testing, endpoint security, and 24/7 monitoring."
  },
  {
    icon: Database,
    title: "Hardware & Software",
    description: "Enterprise-grade hardware procurement, software licensing, and complete system integration services."
  },
  {
    icon: Settings,
    title: "Training & Managed Services",
    description: "Professional IT training, certification programs, and complete managed service solutions."
  },
  {
    icon: Smartphone,
    title: "Value Added Services",
    description: "IT consulting, system integration, technical support, and strategic technology advisory services."
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
