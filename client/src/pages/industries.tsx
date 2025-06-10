import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import PageTransition from "@/components/page-transition";
import AnimatedSection from "@/components/animated-section";
import { motion } from "framer-motion";
import { 
  Building2, 
  Heart, 
  GraduationCap, 
  Factory, 
  ShoppingCart, 
  Banknote,
  Truck,
  Shield,
  Cpu,
  Zap,
  ArrowRight
} from "lucide-react";

const industries = [
  {
    icon: Heart,
    title: "Healthcare",
    description: "Advanced healthcare IT solutions including EHR systems, telemedicine platforms, and medical device integration.",
    features: ["Electronic Health Records", "Telemedicine Solutions", "Medical IoT Integration", "HIPAA Compliance"],
    color: "from-red-500 to-red-600"
  },
  {
    icon: Banknote,
    title: "Financial Services",
    description: "Secure banking and financial technology solutions with robust security and compliance frameworks.",
    features: ["Digital Banking Platforms", "Payment Processing", "Risk Management", "Regulatory Compliance"],
    color: "from-green-500 to-green-600"
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Educational technology solutions that enhance learning experiences and streamline administrative processes.",
    features: ["Learning Management Systems", "Student Information Systems", "Virtual Classrooms", "Assessment Tools"],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Industry 4.0 solutions including IoT integration, automation systems, and supply chain optimization.",
    features: ["Industrial IoT", "Automation Systems", "Quality Management", "Supply Chain Integration"],
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-commerce",
    description: "Comprehensive retail solutions from e-commerce platforms to inventory management and customer analytics.",
    features: ["E-commerce Platforms", "Inventory Management", "Customer Analytics", "POS Systems"],
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Truck,
    title: "Logistics & Transportation",
    description: "Smart logistics solutions including fleet management, route optimization, and real-time tracking systems.",
    features: ["Fleet Management", "Route Optimization", "Real-time Tracking", "Warehouse Management"],
    color: "from-indigo-500 to-indigo-600"
  }
];

export default function IndustriesPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" delay={0.2}>
              <div className="text-center">
                <motion.h1 
                  className="text-5xl md:text-6xl font-bold mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Industries We Serve
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Delivering specialized technology solutions tailored to meet the unique challenges of every industry
                </motion.p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Industries Overview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Expertise Across Sectors</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our deep industry knowledge combined with cutting-edge technology delivers solutions that drive real business value
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <AnimatedSection key={industry.title} direction="up" delay={0.2 * (index + 1)}>
                  <motion.div 
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`h-2 bg-gradient-to-r ${industry.color}`}></div>
                    <div className="p-8">
                      <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-full flex items-center justify-center mb-6`}>
                        <industry.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{industry.description}</p>
                      <ul className="space-y-2 mb-6">
                        {industry.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className={`w-2 h-2 bg-gradient-to-r ${industry.color} rounded-full mr-3`}></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <motion.button 
                        className="w-full bg-gray-50 hover:bg-gray-100 text-gray-900 py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </motion.button>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Key Capabilities */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Cross-Industry Capabilities</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Core technologies and expertise that we apply across all industries
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatedSection direction="up" delay={0.2}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cybersecurity</h3>
                  <p className="text-gray-600">
                    Advanced security frameworks protecting your business data and operations across all platforms.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.4}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cpu className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">AI & Analytics</h3>
                  <p className="text-gray-600">
                    Machine learning and data analytics solutions that turn your data into actionable insights.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.6}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Migration</h3>
                  <p className="text-gray-600">
                    Seamless cloud adoption strategies that modernize your infrastructure and reduce costs.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.8}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Automation</h3>
                  <p className="text-gray-600">
                    Process automation solutions that increase efficiency and reduce operational overhead.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real results from our industry-specific solutions
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection direction="up" delay={0.2}>
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
                    <div className="text-gray-600">Cost Reduction</div>
                  </div>
                  <p className="text-gray-600 text-center">
                    Healthcare provider reduced operational costs through our integrated EHR and telemedicine platform.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.4}>
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-green-600 mb-2">60%</div>
                    <div className="text-gray-600">Faster Processing</div>
                  </div>
                  <p className="text-gray-600 text-center">
                    Financial institution improved transaction processing speed with our modern banking platform.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.6}>
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-purple-600 mb-2">25%</div>
                    <div className="text-gray-600">Revenue Growth</div>
                  </div>
                  <p className="text-gray-600 text-center">
                    Manufacturing company increased revenue through our IoT and automation solutions.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection direction="up">
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Industry?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how our industry-specific solutions can address your unique challenges 
                and drive measurable results for your business.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Get Industry-Specific Solutions
                </button>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}