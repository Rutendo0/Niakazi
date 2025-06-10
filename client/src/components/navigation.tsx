import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-xl' : 'bg-white/90 backdrop-blur-sm'} sticky top-0 z-50 transition-all duration-300 border-b border-gray-200/50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <div className="flex items-center gap-2 cursor-pointer group">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Niakazi</span>
                </div>
              </Link>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium ${location === '/' ? 'text-blue-600 font-semibold' : ''}`}>
              Home
            </Link>
            <div className="relative group">
              <span className="text-gray-700 hover:text-blue-600 transition-all duration-300 flex items-center cursor-pointer font-medium">
                Solutions
                <svg className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <div className="absolute top-full left-0 bg-white/95 backdrop-blur-lg shadow-2xl rounded-xl mt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-200/50">
                <div className="py-3">
                  <Link href="/connectivity" className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 font-medium">Connectivity Solutions</Link>
                  <Link href="/cloud-services" className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 font-medium">Cloud Services</Link>
                  <Link href="/security" className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 font-medium">Security Solutions</Link>
                  <Link href="/hardware" className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 font-medium">Hardware & Software</Link>
                  <Link href="/training" className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 font-medium">Training Programs</Link>
                  <Link href="/value-services" className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 font-medium">Value Added Services</Link>
                </div>
              </div>
            </div>
            <Link href="/industries" className={`text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium ${location === '/industries' ? 'text-blue-600 font-semibold' : ''}`}>
              Industries
            </Link>
            <Link href="/about" className={`text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium ${location === '/about' ? 'text-blue-600 font-semibold' : ''}`}>
              About
            </Link>
            <Link href="/contact" className={`text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium ${location === '/contact' ? 'text-blue-600 font-semibold' : ''}`}>
              Contact
            </Link>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 px-6 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 elegant-hover">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" onClick={closeMenu} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary">
              Home
            </Link>
            <div className="border-b border-gray-100 my-2"></div>
            <div className="text-xs font-semibold text-gray-500 px-3 py-1 uppercase tracking-wide">Solutions</div>
            <Link href="/connectivity" onClick={closeMenu} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-primary text-sm">
              Connectivity
            </Link>
            <Link href="/cloud-services" onClick={closeMenu} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-primary text-sm">
              Cloud Services
            </Link>
            <Link href="/security" onClick={closeMenu} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-primary text-sm">
              Security
            </Link>
            <Link href="/hardware" onClick={closeMenu} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-primary text-sm">
              Hardware & Software
            </Link>
            <Link href="/training" onClick={closeMenu} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-primary text-sm">
              Training
            </Link>
            <Link href="/value-services" onClick={closeMenu} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-primary text-sm">
              Value Added Services
            </Link>
            <div className="border-b border-gray-100 my-2"></div>
            <Link href="/industries" onClick={closeMenu} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary">
              Industries
            </Link>
            <Link href="/about" onClick={closeMenu} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary">
              About
            </Link>
            <Link href="/contact" onClick={closeMenu} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary">
              Contact
            </Link>
            <div className="px-3 pt-3">
              <Link href="/contact" onClick={closeMenu}>
                <Button className="w-full bg-primary text-white hover:bg-blue-700">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
