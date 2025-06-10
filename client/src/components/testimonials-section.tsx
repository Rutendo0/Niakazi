import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import AnimatedSection from "./animated-section";

const testimonials = [
  {
    content: "Niakazi transformed our entire IT infrastructure. Their cloud migration service was seamless and improved our efficiency by 40%.",
    author: "David Wilson",
    role: "CEO, Tech Corp",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
  },
  {
    content: "Outstanding cybersecurity implementation. We feel completely secure knowing our data is protected by their advanced solutions.",
    author: "Rachel Green",
    role: "Finance Director, SecureCorp",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
  },
  {
    content: "Their 24/7 support team is incredible. Any technical issue is resolved quickly and professionally. Highly recommend!",
    author: "Mark Thompson",
    role: "Operations Manager, InnovateCo",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl floating-animation" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <motion.div 
            className="inline-flex items-center gap-2 sophisticated-card bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-3 rounded-full text-blue-700 text-sm font-medium mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Star className="w-4 h-4" />
            Client Success Stories
          </motion.div>
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            What Our Clients Say
            <span className="block text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text shimmer-effect">
              About Our Solutions
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Trusted by businesses across industries to deliver exceptional technology solutions
          </motion.p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Card className="interactive-card group h-full border-0 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Quote className="w-8 h-8 text-blue-500/50" />
                </div>
                <CardContent className="p-8 relative">
                  <div className="flex items-center mb-6">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.1 + 0.5 }}
                        >
                          <Star className="h-5 w-5 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg font-light">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={testimonial.image}
                        alt={`${testimonial.author} - ${testimonial.role}`}
                        className="w-16 h-16 rounded-full mr-4 object-cover shadow-lg ring-2 ring-blue-100" 
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors duration-300">
                        {testimonial.author}
                      </div>
                      <div className="text-gray-500 font-medium">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
