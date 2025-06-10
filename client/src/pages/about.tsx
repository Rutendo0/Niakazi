import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import PageTransition from "@/components/page-transition";
import AnimatedSection from "@/components/animated-section";
import { motion } from "framer-motion";
import { Users, Target, Lightbulb, Award, Building, Clock } from "lucide-react";

export default function AboutPage() {
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
                  About Niakazi
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Pioneering technology solutions that transform businesses and drive innovation across industries
                </motion.p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection direction="left">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Founded with a vision to bridge the gap between cutting-edge technology and business success, 
                    Niakazi has been at the forefront of digital transformation for over a decade. We specialize in 
                    delivering comprehensive IT solutions that empower organizations to thrive in an increasingly 
                    connected world.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our expertise spans across connectivity solutions, cloud services, cybersecurity, and enterprise 
                    software development. We pride ourselves on understanding each client's unique challenges and 
                    delivering tailored solutions that drive measurable results.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection direction="right">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                      <div className="text-gray-600">Projects Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                      <div className="text-gray-600">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
                      <div className="text-gray-600">Happy Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                      <div className="text-gray-600">Support</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Foundation</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built on strong principles that guide everything we do
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection direction="up" delay={0.2}>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To empower businesses with innovative technology solutions that drive growth, 
                    efficiency, and competitive advantage in the digital age.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.4}>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be the leading technology partner that transforms how businesses operate, 
                    connect, and succeed in an interconnected world.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.6}>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Innovation, integrity, excellence, and client success drive every decision we make 
                    and every solution we deliver.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the experts driving innovation and excellence at Niakazi
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection direction="up" delay={0.2}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="h-64 bg-gradient-to-br from-blue-400 to-blue-600"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">John Smith</h3>
                    <p className="text-blue-600 font-medium mb-3">Chief Executive Officer</p>
                    <p className="text-gray-600 text-sm">
                      15+ years of experience leading technology transformations across Fortune 500 companies.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.4}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="h-64 bg-gradient-to-br from-green-400 to-green-600"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Johnson</h3>
                    <p className="text-green-600 font-medium mb-3">Chief Technology Officer</p>
                    <p className="text-gray-600 text-sm">
                      Expert in cloud architecture and cybersecurity with 12+ years in enterprise solutions.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.6}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="h-64 bg-gradient-to-br from-purple-400 to-purple-600"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Michael Brown</h3>
                    <p className="text-purple-600 font-medium mb-3">Head of Operations</p>
                    <p className="text-gray-600 text-sm">
                      Specialized in project management and client relations with a track record of 98% client satisfaction.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Niakazi</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine technical expertise with business acumen to deliver solutions that matter
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedSection direction="up" delay={0.2}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Team</h3>
                  <p className="text-gray-600">
                    Certified professionals with deep expertise in the latest technologies and industry best practices.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.4}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Track Record</h3>
                  <p className="text-gray-600">
                    Successfully delivered 500+ projects across various industries with exceptional results.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.6}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
                  <p className="text-gray-600">
                    Round-the-clock support and maintenance to ensure your systems run smoothly at all times.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}