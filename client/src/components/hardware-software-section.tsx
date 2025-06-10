import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Cpu, HardDrive, Smartphone } from "lucide-react";

const hardwareSoftwareServices = [
  {
    icon: Monitor,
    title: "ICT Hardware",
    description: "Complete range of enterprise-grade hardware solutions including servers, workstations, and networking equipment.",
    features: ["Servers & workstations", "Networking equipment", "Storage systems", "Enterprise laptops"]
  },
  {
    icon: Cpu,
    title: "Software Solutions",
    description: "Licensed software packages and custom application development for business optimization.",
    features: ["Enterprise software licensing", "Custom application development", "System integration", "Software maintenance"]
  },
  {
    icon: HardDrive,
    title: "Data Center Equipment",
    description: "Professional data center hardware including racks, UPS systems, and cooling solutions.",
    features: ["Server racks & cabinets", "UPS & power systems", "Cooling solutions", "Cable management"]
  },
  {
    icon: Smartphone,
    title: "Mobile Device Management",
    description: "Complete mobile device lifecycle management including procurement, deployment, and support.",
    features: ["Device procurement", "Mobile security", "App management", "Device lifecycle"]
  }
];

export default function HardwareSoftwareSection() {
  return (
    <section id="hardware" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Hardware & Software</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade hardware and software solutions to power your business operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {hardwareSoftwareServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
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