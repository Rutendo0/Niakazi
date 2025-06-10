import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });

  const submitContactForm = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. We will get back to you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        service: "",
        message: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please check all fields and try again.",
        variant: "destructive"
      });
      console.error("Contact form error:", error);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || 
        !formData.company || !formData.service || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to submit the form.",
        variant: "destructive"
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email format",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    submitContactForm.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 gradient-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300">Ready to transform your business? Let's discuss your IT needs.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-white">First Name</Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-accent"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-white">Last Name</Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-accent"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-accent"
                    placeholder="john@company.com"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="company" className="text-white">Company</Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-accent"
                    placeholder="Your Company"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="service" className="text-white">Service Needed</Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger className="bg-gray-700 border-gray-600 text-white focus:border-accent">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="connectivity">Connectivity Solutions</SelectItem>
                      <SelectItem value="dedicated-internet">Dedicated Internet Access</SelectItem>
                      <SelectItem value="fiber">Fiber Connectivity</SelectItem>
                      <SelectItem value="sdwan">SD-WAN Solutions</SelectItem>
                      <SelectItem value="vsat">VSAT Services</SelectItem>
                      <SelectItem value="cloud-services">Cloud Services</SelectItem>
                      <SelectItem value="microsoft-azure">Microsoft Azure</SelectItem>
                      <SelectItem value="microsoft-365">Microsoft 365</SelectItem>
                      <SelectItem value="oracle-cloud">Oracle Cloud Infrastructure</SelectItem>
                      <SelectItem value="security">Security Solutions</SelectItem>
                      <SelectItem value="penetration-testing">Vulnerability Assessment & Penetration Testing</SelectItem>
                      <SelectItem value="endpoint-security">Endpoint Security</SelectItem>
                      <SelectItem value="hardware-software">Hardware & Software</SelectItem>
                      <SelectItem value="training">Training & Development</SelectItem>
                      <SelectItem value="managed-services">Managed Services</SelectItem>
                      <SelectItem value="consulting">IT Consulting</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-accent"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={submitContactForm.isPending}
                  className="w-full bg-accent text-white py-4 text-lg font-semibold hover:bg-blue-600 h-auto"
                >
                  {submitContactForm.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-gray-300">123 Business District<br />Tech City, TC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-300">info@niakazi.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Business Hours</h4>
                    <p className="text-gray-300">Mon - Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Facebook className="text-white h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Twitter className="text-white h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Linkedin className="text-white h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Instagram className="text-white h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
