import { Card, CardContent } from "@/components/ui/card";
import { Shield, Eye, Lock, AlertTriangle } from "lucide-react";

const securityServices = [
  {
    icon: Eye,
    title: "Vulnerability Assessment & Penetration Testing",
    description: "Comprehensive security assessments to identify and address potential vulnerabilities in your systems.",
    features: ["Network security testing", "Application security", "Infrastructure assessment", "Compliance reporting"]
  },
  {
    icon: Shield,
    title: "Cyber Security Awareness Training",
    description: "Employee training programs to build a strong security culture within your organization.",
    features: ["Phishing simulation", "Security best practices", "Incident response training", "Regular updates"]
  },
  {
    icon: Lock,
    title: "Endpoint Security",
    description: "Advanced endpoint protection to secure all devices connected to your network.",
    features: ["Antivirus & anti-malware", "Device encryption", "Access control", "Real-time monitoring"]
  },
  {
    icon: AlertTriangle,
    title: "Security Operations Center",
    description: "24/7 security monitoring and incident response services to protect your business.",
    features: ["Threat detection", "Incident response", "Security analytics", "Compliance monitoring"]
  }
];

export default function SecuritySection() {
  return (
    <section id="security" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Security Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions to protect your business from evolving threats.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {securityServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}