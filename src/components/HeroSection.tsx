
import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    // If we're already on the homepage, scroll to the section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-brand-blue-50 to-brand-green-50 z-0"></div>
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-brand-blue-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-brand-green-300/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 z-10">
        <div 
          ref={heroRef} 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center staggered-appear"
        >
          <div className="space-y-8">
            <div>
              <h2 className="inline-block text-sm font-semibold px-3 py-1 rounded-full bg-brand-blue-100 text-brand-blue-800 mb-4 animate-fade-in-up">
                Medical Weight Loss Program
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 font-display animate-fade-in-up">
                Transform Your Life With Modern Weight Loss Medicine
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl animate-fade-in-up">
                Access the same GLP-1 medications that help people lose 15% of their body weight on average. 
                Convenient, affordable, and doctor-supervised.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <Link to="/quiz">
                <Button size="lg" className="text-base px-8 py-6 bg-brand-blue-500 hover:bg-brand-blue-600 transition-all shadow-lg hover:shadow-xl">
                  Check Your Eligibility
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link 
                to="/#how-it-works" 
                onClick={(e) => {
                  if (location.pathname === '/') {
                    e.preventDefault();
                    scrollToSection('how-it-works');
                  }
                }}
              >
                <Button variant="outline" size="lg" className="text-base px-8 py-6 border-2 border-brand-blue-200 text-brand-blue-700 hover:bg-brand-blue-50 transition-all">
                  Learn How It Works
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6 animate-fade-in-up">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-brand-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-700">FDA-Approved Medications</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-brand-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-700">Doctor Supervised</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-brand-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-700">Guaranteed Results</p>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in-up hidden lg:block">
            <div className="w-full h-full absolute -top-4 -left-4 bg-brand-blue-100 rounded-2xl transform rotate-3"></div>
            <div className="glass-card rounded-2xl p-4 relative z-10">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-96 bg-gradient-to-r from-brand-blue-50 to-brand-blue-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="mb-6">
                        <div className="inline-block p-3 bg-brand-blue-500 text-white rounded-full">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-1 text-gray-800">Limited Time Offer</h3>
                      <p className="text-brand-blue-700 mb-6">First month discount for new patients</p>
                      <div className="flex justify-center mb-4">
                        <div className="relative">
                          <div className="absolute -inset-1 bg-brand-blue-100 blur-sm"></div>
                          <div className="relative bg-white rounded-xl shadow-sm px-6 py-4">
                            <span className="text-xl text-gray-500 line-through">$399</span>
                            <span className="text-4xl font-bold text-brand-blue-600 ml-3">$299</span>
                            <span className="text-gray-600 ml-1 text-lg">/month</span>
                          </div>
                        </div>
                      </div>
                      <Link to="/quiz">
                        <Button size="lg" className="w-full bg-brand-blue-500 hover:bg-brand-blue-600 transition-all shadow-md hover:shadow-lg">
                          Claim Discount
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center bg-white">
                  <p className="text-sm text-gray-500">Offer valid for a limited time only. Terms apply.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
