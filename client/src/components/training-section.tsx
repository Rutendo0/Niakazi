import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, BookOpen, Award } from "lucide-react";

const trainingServices = [
  {
    icon: GraduationCap,
    title: "ICT Professional Training",
    description: "Comprehensive technical training programs to enhance your team's IT skills and expertise.",
    features: ["Cisco certification training", "Microsoft certification paths", "CompTIA training programs", "Hands-on lab sessions"]
  },
  {
    icon: Users,
    title: "Corporate Training",
    description: "Customized training solutions designed specifically for your organization's needs.",
    features: ["Custom curriculum development", "On-site training delivery", "Team skill assessments", "Progress tracking"]
  },
  {
    icon: BookOpen,
    title: "E-Learning Solutions",
    description: "Online learning platforms and digital training resources for flexible skill development.",
    features: ["Interactive online courses", "Self-paced learning", "Virtual labs", "Progress analytics"]
  },
  {
    icon: Award,
    title: "Certification Programs",
    description: "Industry-recognized certification preparation and examination services.",
    features: ["Exam preparation", "Practice tests", "Study materials", "Certification tracking"]
  }
];

export default function TrainingSection() {
  return (
    <section id="training" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Training & Development</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empower your team with comprehensive IT training programs and professional development opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {trainingServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
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