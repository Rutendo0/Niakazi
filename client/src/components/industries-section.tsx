import { Card, CardContent } from "@/components/ui/card";
import { Building2, Factory, GraduationCap, Heart, Landmark, ShoppingCart } from "lucide-react";

const industries = [
  {
    icon: Building2,
    title: "Financial Services",
    description: "Secure and compliant IT solutions for banks, insurance companies, and financial institutions.",
    solutions: ["Core banking systems", "Payment processing", "Risk management", "Regulatory compliance"]
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Industrial automation and digital transformation solutions for manufacturing operations.",
    solutions: ["ERP systems", "Supply chain management", "IoT integration", "Quality control systems"]
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Educational technology solutions for schools, universities, and training institutions.",
    solutions: ["Learning management systems", "Student information systems", "Digital classrooms", "Campus networks"]
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "HIPAA-compliant healthcare IT solutions for hospitals, clinics, and medical practices.",
    solutions: ["Electronic health records", "Medical imaging systems", "Telemedicine platforms", "Patient portals"]
  },
  {
    icon: Landmark,
    title: "Government",
    description: "Secure government IT infrastructure and citizen services digital transformation.",
    solutions: ["E-government platforms", "Citizen portals", "Data security", "Digital identity management"]
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-commerce",
    description: "Digital commerce solutions and retail technology for modern customer experiences.",
    solutions: ["E-commerce platforms", "POS systems", "Inventory management", "Customer analytics"]
  }
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Transforming Industries</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver specialized IT solutions across various industries, understanding unique challenges and requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <Card key={index} className="bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{industry.title}</h3>
                  <p className="text-gray-600 mb-6">{industry.description}</p>
                  <ul className="space-y-2">
                    {industry.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="flex items-center text-gray-700 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {solution}
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