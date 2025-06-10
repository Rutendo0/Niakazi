import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Wifi, Globe, Zap, Satellite, ArrowRight } from "lucide-react";

const connectivityServices = [
  {
    icon: Globe,
    title: "Dedicated Internet Access",
    description: "High-speed, reliable internet connectivity with guaranteed bandwidth and uptime SLAs for mission-critical business operations.",
    features: ["Scalable bandwidth from 1Mbps to 10Gbps", "99.9% uptime guarantee with SLA", "24/7 technical support and monitoring", "Symmetric upload and download speeds", "Enterprise-grade equipment included"],
    pricing: "Starting from $299/month"
  },
  {
    icon: Wifi,
    title: "Fiber Connectivity", 
    description: "Ultra-fast fiber optic connections delivering superior performance for businesses requiring high-bandwidth applications.",
    features: ["Ultra-low latency < 5ms", "High bandwidth capacity up to 10Gbps", "Redundant fiber paths for reliability", "Future-proof technology investment", "Professional installation and setup"],
    pricing: "Starting from $199/month"
  },
  {
    icon: Zap,
    title: "SD-WAN Solutions",
    description: "Software-defined wide area network solutions that optimize network performance while reducing operational costs.",
    features: ["Centralized network management", "Intelligent traffic routing", "Enhanced security with encryption", "Application performance optimization", "Multi-site connectivity"],
    pricing: "Starting from $149/month"
  },
  {
    icon: Satellite,
    title: "VSAT Services",
    description: "Satellite communication solutions providing reliable connectivity for remote locations and backup services.",
    features: ["Global satellite coverage", "Reliable backup connectivity", "Remote site connectivity solutions", "Disaster recovery capabilities", "Weather-resistant equipment"],
    pricing: "Starting from $399/month"
  }
];

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate", 
  duration: 0.5
};

export default function ConnectivityPage() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen"
    >
      <Navigation />
      
      {/* Hero Section */}
      <section className="gradient-bg text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Connectivity Solutions</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
              Reliable, high-performance connectivity solutions to keep your business connected and productive in today's digital world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Connectivity Services</h2>
            <p className="text-xl text-gray-600">Choose the right connectivity solution for your business needs</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {connectivityServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <Card className="bg-white hover:shadow-xl transition-shadow h-full">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                        <IconComponent className="text-white h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-gray-800">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start text-gray-700">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="border-t pt-4">
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-semibold text-primary">{service.pricing}</span>
                          <button className="flex items-center text-primary font-semibold hover:underline">
                            Learn More <ArrowRight className="ml-1 h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Connectivity?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact our connectivity specialists to design the perfect solution for your business.
            </p>
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Free Consultation
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}