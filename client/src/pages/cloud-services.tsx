import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Database, Shield, Server, ArrowRight } from "lucide-react";

const cloudServices = [
  {
    icon: Server,
    title: "Co-Location Services",
    description: "Secure, enterprise-grade data center facilities with redundant power, cooling, and connectivity for your critical infrastructure.",
    features: ["Tier 3 data center facilities", "99.9% uptime guarantee", "24/7 physical security", "Redundant power systems", "Climate-controlled environment"],
    pricing: "Starting from $199/month"
  },
  {
    icon: Cloud,
    title: "Microsoft Azure",
    description: "Complete Azure cloud solutions including migration, deployment, optimization, and ongoing management services.",
    features: ["Cloud migration services", "Virtual machine deployment", "Azure storage solutions", "Backup and disaster recovery", "Cost optimization consulting"],
    pricing: "Pay-as-you-use model"
  },
  {
    icon: Database,
    title: "Microsoft 365",
    description: "Full Microsoft 365 deployment, configuration, and management for enhanced productivity and seamless collaboration.",
    features: ["Exchange Online email", "Teams collaboration platform", "SharePoint document management", "OneDrive cloud storage", "Office applications suite"],
    pricing: "Starting from $6/user/month"
  },
  {
    icon: Shield,
    title: "Oracle Cloud Infrastructure",
    description: "Enterprise-grade Oracle cloud services optimized for mission-critical applications and high-performance databases.",
    features: ["Oracle database services", "High-performance compute", "Enterprise application hosting", "Advanced analytics", "Autonomous database options"],
    pricing: "Custom enterprise pricing"
  },
  {
    icon: Server,
    title: "Virtual Private Server",
    description: "Scalable VPS solutions with dedicated resources, full administrative control, and enterprise-grade performance.",
    features: ["Dedicated CPU and RAM", "Full root access", "Custom OS configurations", "Scalable storage options", "24/7 monitoring included"],
    pricing: "Starting from $49/month"
  },
  {
    icon: Database,
    title: "Storage Area Network",
    description: "High-performance SAN solutions providing centralized storage management with enterprise-grade reliability.",
    features: ["Centralized storage management", "High IOPS performance", "RAID redundancy", "Automated backup systems", "Scalable capacity"],
    pricing: "Starting from $299/month"
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

export default function CloudServicesPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Cloud Services</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
              Comprehensive cloud solutions to modernize your infrastructure, enhance scalability, and drive business innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cloud Infrastructure Solutions</h2>
            <p className="text-xl text-gray-600">Scalable, secure, and reliable cloud services for modern businesses</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => {
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
                      <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-gray-800">Features:</h4>
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

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Cloud Services?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Enterprise-Grade Security</h3>
                    <p className="text-gray-600">Advanced security measures and compliance certifications</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">99.9% Uptime SLA</h3>
                    <p className="text-gray-600">Guaranteed availability with robust infrastructure</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">24/7 Expert Support</h3>
                    <p className="text-gray-600">Round-the-clock technical assistance and monitoring</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Scalable Solutions</h3>
                    <p className="text-gray-600">Easily scale resources up or down based on demand</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Cloud infrastructure visualization" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}