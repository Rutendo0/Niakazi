import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import PageTransition from "@/components/page-transition";
import AnimatedSection from "@/components/animated-section";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Calculator, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  FileText,
  Star
} from "lucide-react";

const quoteFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  industry: z.string().min(1, "Please select an industry"),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select a timeline"),
  description: z.string().min(20, "Please provide at least 20 characters describing your project"),
  services: z.array(z.string()).min(1, "Please select at least one service"),
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

const services = [
  { id: "connectivity", label: "Connectivity Solutions" },
  { id: "cloud", label: "Cloud Services" },
  { id: "security", label: "Cybersecurity" },
  { id: "software", label: "Custom Software Development" },
  { id: "hardware", label: "Hardware Solutions" },
  { id: "training", label: "Training & Support" },
  { id: "consulting", label: "IT Consulting" },
  { id: "maintenance", label: "Maintenance & Support" },
];

export default function GetQuotePage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      phone: "",
      industry: "",
      projectType: "",
      budget: "",
      timeline: "",
      description: "",
      services: [],
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    try {
      // Here you would typically send the data to your backend
      console.log("Quote form data:", data);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting quote:", error);
    }
  };

  if (isSubmitted) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <div className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-2xl mx-auto px-4 text-center">
              <AnimatedSection direction="up">
                <div className="bg-white rounded-2xl shadow-xl p-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </motion.div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">Quote Request Submitted!</h1>
                  <p className="text-xl text-gray-600 mb-8">
                    Thank you for your interest in our services. We've received your quote request 
                    and our team will review it carefully. You can expect to hear from us within 24 hours.
                  </p>
                  <div className="bg-blue-50 rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">What happens next?</h3>
                    <ul className="text-blue-800 space-y-2 text-left">
                      <li className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        Our team will review your requirements within 24 hours
                      </li>
                      <li className="flex items-center">
                        <FileText className="w-4 h-4 mr-2" />
                        We'll prepare a detailed proposal tailored to your needs
                      </li>
                      <li className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-2" />
                        You'll receive a comprehensive quote with transparent pricing
                      </li>
                    </ul>
                  </div>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
                  >
                    Submit Another Quote
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
          <Footer />
        </div>
      </PageTransition>
    );
  }

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
                  Get Your Quote
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Tell us about your project and receive a detailed proposal with transparent pricing within 24 hours
                </motion.p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Quote Process */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple Quote Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Getting a quote is easy and transparent. Follow these simple steps to get started.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <AnimatedSection direction="up" delay={0.2}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">1. Tell Us About Your Project</h3>
                  <p className="text-gray-600">
                    Fill out our detailed form with your project requirements, timeline, and budget preferences.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.4}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">2. We Analyze Your Needs</h3>
                  <p className="text-gray-600">
                    Our experts review your requirements and design a solution tailored to your specific needs.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.6}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">3. Receive Your Proposal</h3>
                  <p className="text-gray-600">
                    Get a comprehensive proposal with detailed scope, timeline, and transparent pricing.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Request Your Quote</h2>
              <p className="text-xl text-gray-600">
                Please provide detailed information about your project to help us create an accurate quote
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    {/* Contact Information */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="+1 (555) 123-4567" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem className="md:col-span-2">
                              <FormLabel>Company</FormLabel>
                              <FormControl>
                                <Input placeholder="Your Company Name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Project Details */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Details</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="industry"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Industry</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select your industry" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="healthcare">Healthcare</SelectItem>
                                  <SelectItem value="finance">Financial Services</SelectItem>
                                  <SelectItem value="education">Education</SelectItem>
                                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                                  <SelectItem value="retail">Retail & E-commerce</SelectItem>
                                  <SelectItem value="logistics">Logistics & Transportation</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="projectType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Project Type</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select project type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="new-implementation">New Implementation</SelectItem>
                                  <SelectItem value="system-upgrade">System Upgrade</SelectItem>
                                  <SelectItem value="migration">Migration Project</SelectItem>
                                  <SelectItem value="integration">System Integration</SelectItem>
                                  <SelectItem value="consulting">Consulting Only</SelectItem>
                                  <SelectItem value="maintenance">Maintenance & Support</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="budget"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Budget Range</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select budget range" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="under-25k">Under $25,000</SelectItem>
                                  <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                                  <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                                  <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                                  <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                                  <SelectItem value="over-500k">Over $500,000</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="timeline"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Desired Timeline</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select timeline" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="asap">ASAP</SelectItem>
                                  <SelectItem value="1-3-months">1-3 months</SelectItem>
                                  <SelectItem value="3-6-months">3-6 months</SelectItem>
                                  <SelectItem value="6-12-months">6-12 months</SelectItem>
                                  <SelectItem value="over-12-months">Over 12 months</SelectItem>
                                  <SelectItem value="flexible">Flexible</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Services */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Services Needed</h3>
                      <FormField
                        control={form.control}
                        name="services"
                        render={() => (
                          <FormItem>
                            <FormLabel>Select all services that apply to your project</FormLabel>
                            <div className="grid md:grid-cols-2 gap-4 mt-4">
                              {services.map((service) => (
                                <FormField
                                  key={service.id}
                                  control={form.control}
                                  name="services"
                                  render={({ field }) => (
                                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(service.id)}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([...field.value, service.id])
                                              : field.onChange(
                                                  field.value?.filter(
                                                    (value) => value !== service.id
                                                  )
                                                );
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        {service.label}
                                      </FormLabel>
                                    </FormItem>
                                  )}
                                />
                              ))}
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Project Description */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Description</h3>
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Describe your project in detail</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Please provide detailed information about your project requirements, current challenges, desired outcomes, and any specific technical needs..."
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-8 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                        disabled={form.formState.isSubmitting}
                      >
                        {form.formState.isSubmitting ? "Submitting..." : "Get My Quote"}
                      </Button>
                    </motion.div>
                  </form>
                </Form>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}