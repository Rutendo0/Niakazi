import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.nav 
      className={`${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-xl' : 'bg-white/90 backdrop-blur-sm'} sticky top-0 z-50 border-b border-gray-200/50`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <motion.div 
                  className="flex items-center gap-2 cursor-pointer group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Sparkles className="w-4 h-4 text-white" />
                  </motion.div>
                  <span className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Niakazi</span>
                </motion.div>
              </Link>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Link href="/" className={`text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium ${location === '/' ? 'text-blue-600 font-semibold' : ''}`}>
                Home
              </Link>
            </motion.div>
            <div className="relative group">
              <span className="text-gray-700 hover:text-blue-600 transition-all duration-300 flex items-center cursor-pointer font-medium">
                Solutions
                <motion.svg 
                  className="ml-1 w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ rotate: 0 }}
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </span>
              <motion.div 
                className="absolute top-full left-0 bg-white/95 backdrop-blur-lg shadow-2xl rounded-xl mt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-200/50"
                initial={{ y: 10, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="py-3">
                  <Link href="/connectivity" className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 font-medium">Connectivity Solutions</Link>
                  <Link href="/cloud-services" className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 font-medium">Cloud Services</Link>
                  <Link href="/security" className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 font-medium">Security Solutions</Link>
                  <Link href="/hardware" className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 font-medium">Hardware & Software</Link>
                  <Link href="/training" className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 font-medium">Training Programs</Link>
                  <Link href="/value-services" className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 font-medium">Value Added Services</Link>
                </div>
              </motion.div>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Link href="/industries" className={`text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium ${location === '/industries' ? 'text-blue-600 font-semibold' : ''}`}>
                Industries
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Link href="/about" className={`text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium ${location === '/about' ? 'text-blue-600 font-semibold' : ''}`}>
                About
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Link href="/contact" className={`text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium ${location === '/contact' ? 'text-blue-600 font-semibold' : ''}`}>
                Contact
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/get-quote">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 px-6 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Quote
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.div
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 180 }}
                      exit={{ rotate: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 180 }}
                      animate={{ rotate: 0 }}
                      exit={{ rotate: 180 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-white/95 backdrop-blur-lg border-t shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div 
              className="px-2 pt-2 pb-3 space-y-1"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Link href="/" onClick={closeMenu} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">
                Home
              </Link>
              <div className="border-b border-gray-100 my-2"></div>
              <div className="text-xs font-semibold text-gray-500 px-3 py-1 uppercase tracking-wide">Solutions</div>
              <Link href="/connectivity" onClick={closeMenu} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg text-sm transition-all duration-200">
                Connectivity
              </Link>
              <Link href="/cloud-services" onClick={closeMenu} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg text-sm transition-all duration-200">
                Cloud Services
              </Link>
              <Link href="/security" onClick={closeMenu} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg text-sm transition-all duration-200">
                Security
              </Link>
              <Link href="/hardware" onClick={closeMenu} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg text-sm transition-all duration-200">
                Hardware & Software
              </Link>
              <Link href="/training" onClick={closeMenu} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg text-sm transition-all duration-200">
                Training
              </Link>
              <Link href="/value-services" onClick={closeMenu} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg text-sm transition-all duration-200">
                Value Added Services
              </Link>
              <div className="border-b border-gray-100 my-2"></div>
              <Link href="/industries" onClick={closeMenu} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">
                Industries
              </Link>
              <Link href="/about" onClick={closeMenu} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">
                About
              </Link>
              <Link href="/contact" onClick={closeMenu} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">
                Contact
              </Link>
              <div className="px-3 pt-3">
                <Link href="/get-quote" onClick={closeMenu}>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 rounded-xl transition-all duration-300">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}