import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import PageTransition from "@/components/page-transition";
import AnimatedSection from "@/components/animated-section";
import ContactSection from "@/components/contact-section";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
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
                  Contact Us
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Ready to transform your business? Let's discuss your technology needs and create solutions that drive success
                </motion.p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're here to help you achieve your technology goals. Reach out to us through any of these channels.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <AnimatedSection direction="up" delay={0.2}>
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Our Office</h3>
                  <p className="text-gray-600">
                    123 Technology Drive<br />
                    Innovation Park<br />
                    City, State 12345
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.4}>
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Phone</h3>
                  <p className="text-gray-600">
                    Main: +1 (555) 123-4567<br />
                    Support: +1 (555) 123-4568<br />
                    Toll-free: 1-800-NIAKAZI
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.6}>
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Email</h3>
                  <p className="text-gray-600">
                    General: info@niakazi.com<br />
                    Sales: sales@niakazi.com<br />
                    Support: support@niakazi.com
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.8}>
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Business Hours</h3>
                  <p className="text-gray-600">
                    Mon - Fri: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 2:00 PM<br />
                    24/7 Emergency Support
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactSection />

        {/* Map Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
              <p className="text-xl text-gray-600">
                Located in the heart of the technology district
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                <div className="h-96 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-600 text-lg">Interactive Map Coming Soon</p>
                    <p className="text-gray-500">123 Technology Drive, Innovation Park</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection direction="up">
              <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Don't wait to transform your business. Contact us today for a free consultation 
                and discover how our technology solutions can drive your success.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Schedule a Consultation
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