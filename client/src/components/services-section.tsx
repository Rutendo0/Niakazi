import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Shield, Settings, Database, Network, Smartphone, ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./animated-section";

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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section id="services" className="py-32 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-40 left-10 w-80 h-80 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl floating-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-2xl floating-animation" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-24">
          <motion.div 
            className="inline-flex items-center gap-2 sophisticated-card bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-3 rounded-full text-blue-700 text-sm font-medium mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Zap className="w-4 h-4" />
            Enterprise Solutions
          </motion.div>
          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Transform Your Business with
            <motion.span 
              className="block text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text shimmer-effect"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Advanced IT Solutions
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Discover comprehensive technology services designed to optimize operations, enhance security, and drive sustainable growth for your organization.
          </motion.p>
        </AnimatedSection>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="group sophisticated-card border-0 bg-white/80 backdrop-blur-sm h-full">
                  <CardContent className="p-8 h-full flex flex-col">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <IconComponent className="text-white h-8 w-8" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
                      {service.description}
                    </p>
                    <motion.button 
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300 group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      Explore Solution
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to action */}
        <AnimatedSection className="text-center mt-16" delay={0.8}>
          <motion.div 
            className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center"
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
            >
              <Zap className="w-6 h-6 text-white" />
            </motion.div>
            <div className="text-left">
              <p className="font-semibold text-gray-900">Ready to transform your business?</p>
              <p className="text-gray-600 text-sm">Let's discuss your technology needs today</p>
            </div>
            <motion.button 
              className="ml-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}