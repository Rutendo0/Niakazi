import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">Niakazi</div>
            <p className="text-gray-400 mb-4">
              Professional IT solutions that drive business growth and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#connectivity" className="hover:text-white transition-colors">Connectivity</a></li>
              <li><a href="#cloud" className="hover:text-white transition-colors">Cloud Services</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="#hardware" className="hover:text-white transition-colors">Hardware & Software</a></li>
              <li><a href="#training" className="hover:text-white transition-colors">Training</a></li>
              <li><a href="#value-services" className="hover:text-white transition-colors">Value Added Services</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Business District</li>
              <li>Tech City, TC 12345</li>
              <li>+1 (555) 123-4567</li>
              <li>info@niakazi.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Niakazi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
