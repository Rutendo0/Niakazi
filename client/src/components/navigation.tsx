import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`bg-white sticky top-0 z-50 transition-shadow ${isScrolled ? 'shadow-xl' : 'shadow-lg'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <span className="text-2xl font-bold text-primary cursor-pointer">Niakazi</span>
              </Link>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`text-gray-700 hover:text-primary transition-colors ${location === '/' ? 'text-primary font-semibold' : ''}`}>
              Home
            </Link>
            <div className="relative group">
              <span className="text-gray-700 hover:text-primary transition-colors flex items-center cursor-pointer">
                Solutions
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-1 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/connectivity" className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Connectivity</Link>
                  <Link href="/cloud-services" className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Cloud Services</Link>
                  <Link href="/security" className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Security</Link>
                  <Link href="/hardware" className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Hardware & Software</Link>
                  <Link href="/training" className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Training</Link>
                  <Link href="/value-services" className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Value Added Services</Link>
                </div>
              </div>
            </div>
            <Link href="/industries" className={`text-gray-700 hover:text-primary transition-colors ${location === '/industries' ? 'text-primary font-semibold' : ''}`}>
              Industries
            </Link>
            <Link href="/about" className={`text-gray-700 hover:text-primary transition-colors ${location === '/about' ? 'text-primary font-semibold' : ''}`}>
              About
            </Link>
            <Link href="/contact" className={`text-gray-700 hover:text-primary transition-colors ${location === '/contact' ? 'text-primary font-semibold' : ''}`}>
              Contact
            </Link>
            <Link href="/contact">
              <Button className="bg-primary text-white hover:bg-blue-700">
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
