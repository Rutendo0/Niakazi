import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Globe, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { FloatingElement, PulsingElement } from "./floating-elements";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden hero-gradient">
      {/* Enhanced atmospheric background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-transparent rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-600/20 to-transparent rounded-full blur-3xl floating-animation" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-br from-cyan-500/15 to-transparent rounded-full blur-2xl floating-animation" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      {/* Enhanced floating elements */}
      <FloatingElement delay={0} duration={6} className="absolute top-20 left-10">
        <div className="w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-xl"></div>
      </FloatingElement>
      <PulsingElement delay={1} className="absolute top-40 right-20">
        <div className="w-40 h-40 bg-gradient-to-br from-purple-400/25 to-pink-400/25 rounded-full blur-2xl pulse-glow"></div>
      </PulsingElement>
      <FloatingElement delay={2} duration={8} className="absolute bottom-20 left-1/4">
        <div className="w-24 h-24 bg-gradient-to-br from-cyan-400/25 to-blue-400/25 rounded-full blur-lg"></div>
      </FloatingElement>
      <PulsingElement delay={0.5} className="absolute top-60 right-1/3">
        <div className="w-20 h-20 bg-gradient-to-br from-indigo-400/30 to-purple-400/30 rounded-full blur-md"></div>
      </PulsingElement>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4" />
              Trusted ICT Solutions Partner
            </motion.div>
            
            {/* Main heading */}
            <div className="space-y-6">
              <motion.h1 
                className="text-6xl md:text-8xl font-bold text-white leading-tight tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.span
                  className="block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Transform Your
                </motion.span>
                <motion.span 
                  className="block text-transparent bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 bg-clip-text shimmer-effect"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  Digital Future
                </motion.span>
                <motion.span
                  className="block text-white/90 font-light text-5xl md:text-6xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  with Innovation
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                Experience enterprise-grade ICT solutions with 24/7 support, cutting-edge technology, and deep industry expertise that transforms your business operations.
              </motion.p>
            </div>
            
            {/* Features highlight */}
            <motion.div 
              className="flex flex-wrap gap-6 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Globe className="w-5 h-5 text-yellow-300" />
                <span className="font-medium">Global Connectivity</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Shield className="w-5 h-5 text-yellow-300" />
                <span className="font-medium">Enterprise Security</span>
              </motion.div>
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="premium-button text-lg px-10 py-5 pulse-glow group"
                >
                  Start Your Project
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Button 
                  onClick={() => scrollToSection('services')}
                  variant="outline"
                  className="glass-effect border-white/30 text-white px-8 py-5 text-lg font-semibold hover:bg-white/10 hover:text-white h-auto rounded-2xl transition-all duration-300"
                >
                  Explore Services
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Hero Image with sophisticated styling */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative z-10">
              {/* Main image */}
              <motion.img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800" 
                alt="Modern data center with advanced networking infrastructure" 
                className="rounded-2xl shadow-2xl w-full h-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating card elements */}
              <motion.div 
                className="absolute -top-6 -left-6 sophisticated-card p-4 max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">99.9% Uptime</p>
                    <p className="text-sm text-gray-600">Guaranteed Reliability</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -right-6 sophisticated-card p-4 max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.0 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">24/7 Support</p>
                    <p className="text-sm text-gray-600">Expert Assistance</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl transform rotate-6 scale-105 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}