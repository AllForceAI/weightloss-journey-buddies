
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    
    // If we're not on the homepage, navigate to the homepage with the hash
    if (location.pathname !== '/') {
      return; // The Link component will handle the navigation
    }
    
    // If we're already on the homepage, scroll to the section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="font-display font-bold text-2xl text-brand-blue-600">GLPONE.com</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-brand-blue-500 transition-colors font-medium">
              Home
            </Link>
            <Link 
              to="/#how-it-works" 
              className="text-gray-700 hover:text-brand-blue-500 transition-colors font-medium"
              onClick={() => scrollToSection('how-it-works')}
            >
              How It Works
            </Link>
            <Link 
              to="/#faq" 
              className="text-gray-700 hover:text-brand-blue-500 transition-colors font-medium"
              onClick={() => scrollToSection('faq')}
            >
              FAQ
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-brand-blue-500 transition-colors font-medium"
            >
              Contact
            </Link>
            <div className="flex items-center space-x-4">
              <a 
                href="tel:+18005551234" 
                className="flex items-center text-brand-blue-600 font-medium"
              >
                <Phone size={16} className="mr-2" />
                (800) 555-1234
              </a>
              <Link to="/quiz">
                <Button className="bg-brand-blue-500 hover:bg-brand-blue-600 transition-all shadow-md hover:shadow-lg">
                  Start Your Journey
                </Button>
              </Link>
            </div>
          </nav>
          
          <div className="md:hidden">
            <button 
              className="text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <Link 
              to="/" 
              className="block py-3 text-gray-700 font-medium border-b border-gray-100"
            >
              Home
            </Link>
            <Link 
              to="/#how-it-works" 
              className="block py-3 text-gray-700 font-medium border-b border-gray-100"
              onClick={() => scrollToSection('how-it-works')}
            >
              How It Works
            </Link>
            <Link 
              to="/#faq" 
              className="block py-3 text-gray-700 font-medium border-b border-gray-100"
              onClick={() => scrollToSection('faq')}
            >
              FAQ
            </Link>
            <Link 
              to="/contact" 
              className="block py-3 text-gray-700 font-medium border-b border-gray-100"
            >
              Contact
            </Link>
            <a 
              href="tel:+18005551234" 
              className="flex items-center py-3 text-brand-blue-600 font-medium border-b border-gray-100"
            >
              <Phone size={16} className="mr-2" />
              (800) 555-1234
            </a>
            <Link to="/quiz" className="block">
              <Button className="w-full bg-brand-blue-500 hover:bg-brand-blue-600 transition-all">
                Start Your Journey
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
