import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Shield, Settings, Database, Network, Smartphone, ArrowRight, Zap } from "lucide-react";

const services = [
  {
    icon: Network,
    title: "Connectivity Solutions",
    description: "Enterprise-grade internet access, fiber connectivity, SD-WAN, and VSAT solutions for seamless global business operations.",
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Microsoft Azure, Office 365, Oracle Cloud, VPS, and co-location services for scalable, reliable infrastructure.",
    gradient: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Advanced cybersecurity including vulnerability testing, endpoint protection, and 24/7 security monitoring.",
    gradient: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600"
  },
  {
    icon: Database,
    title: "Hardware & Software",
    description: "Enterprise hardware procurement, software licensing, and complete system integration for optimal performance.",
    gradient: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600"
  },
  {
    icon: Settings,
    title: "Training & Managed Services",
    description: "Professional IT training, certification programs, and comprehensive managed service solutions.",
    gradient: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-600"
  },
  {
    icon: Smartphone,
    title: "Value Added Services",
    description: "Strategic IT consulting, system integration, technical support, and technology advisory services.",
    gradient: "from-yellow-500 to-amber-500",
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-600"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full -translate-x-48 -translate-y-48 opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full translate-x-48 translate-y-48 opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full text-blue-700 text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Enterprise Solutions
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your Business with
            <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Advanced IT Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover comprehensive technology services designed to optimize operations, enhance security, and drive sustainable growth for your organization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group sophisticated-card elegant-hover border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300 group">
                    Explore Solution
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-900">Ready to transform your business?</p>
              <p className="text-gray-600 text-sm">Let's discuss your technology needs today</p>
            </div>
            <button className="ml-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 elegant-hover">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
