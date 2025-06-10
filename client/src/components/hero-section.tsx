import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Globe, Shield } from "lucide-react";

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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Elegant gradient background */}
      <div className="absolute inset-0 elegant-gradient"></div>
      
      {/* Floating geometric shapes for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-yellow-300/20 rounded-full blur-lg animate-pulse delay-300"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Trusted ICT Solutions Partner
            </div>
            
            {/* Main heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
                Unlock
                <span className="block text-transparent bg-gradient-to-r from-yellow-300 to-white bg-clip-text">
                  Reliable & Secure
                </span>
                Connectivity
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl">
                Experience enterprise-grade ICT solutions with 24/7 support, cutting-edge technology, and deep industry expertise that transforms your business operations.
              </p>
            </div>
            
            {/* Features highlight */}
            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-yellow-300" />
                <span className="font-medium">Global Connectivity</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-yellow-300" />
                <span className="font-medium">Enterprise Security</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="group bg-white text-gray-900 px-8 py-4 text-lg font-semibold hover:bg-yellow-300 hover:text-gray-900 h-auto rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl elegant-hover"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => scrollToSection('services')}
                variant="outline"
                className="border-2 border-white/30 text-white px-8 py-4 text-lg font-semibold hover:bg-white/10 hover:border-white h-auto rounded-xl backdrop-blur-sm transition-all duration-300"
              >
                Explore Services
              </Button>
            </div>
          </div>
          
          {/* Hero Image with sophisticated styling */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main image */}
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800" 
                alt="Modern data center with advanced networking infrastructure" 
                className="rounded-2xl shadow-2xl w-full h-auto elegant-hover" 
              />
              
              {/* Floating card elements */}
              <div className="absolute -top-6 -left-6 sophisticated-card p-4 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">99.9% Uptime</p>
                    <p className="text-sm text-gray-600">Guaranteed Reliability</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 sophisticated-card p-4 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">24/7 Support</p>
                    <p className="text-sm text-gray-600">Expert Assistance</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl transform rotate-6 scale-105 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
