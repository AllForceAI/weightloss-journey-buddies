import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const HeroSection = () => {
  const treatments = [{
    action: "Lose",
    focus: "weight",
    tagline: "Proven GLP-1 treatments for real results.",
    image: "https://images.unsplash.com/photo-1511909525232-61113c912358?q=80&w=2070&auto=format&fit=crop",
    alt: "Weight loss medication represented by measuring tape"
  }, {
    action: "Boost",
    focus: "energy",
    tagline: "Feel more active and focused with expert-backed care.",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2070&auto=format&fit=crop",
    alt: "Person with raised arms showing energy and vitality"
  }, {
    action: "Improve",
    focus: "health",
    tagline: "Personalized treatment for sustainable well-being.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
    alt: "Woman checking blood pressure for health improvement"
  }];
  
  return (
    <div className="relative py-12 md:py-24 overflow-hidden bg-white">
      {/* Top benefits bar */}
      <div className="hidden lg:flex items-center justify-between max-w-7xl mx-auto px-6 py-3 text-sm text-gray-600 border-b">
        <div className="flex items-center">
          <span>100% online</span>
        </div>
        <div className="flex items-center">
          <span>Personalized treatment</span>
        </div>
        <div className="flex items-center">
          <span>US-Sourced medications</span>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight">
            Your Guide to <br className="hidden md:block" />
            <span className="text-brand-blue-600">GLP-1 Weight Loss Treatments</span>
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Learn how FDA-approved GLP-1 medications work and find out if they’re the right choice for you.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/quiz">
              <Button className="text-lg py-6 px-8 bg-brand-blue-600 hover:bg-brand-blue-700">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Treatment options grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {treatments.map((treatment, index) => (
            <Link to="/quiz" key={index} className="group bg-brand-blue-50 rounded-xl p-8 flex flex-col justify-between h-64 transition-all hover:shadow-md relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-medium mb-1">
                  <span>{treatment.action}</span>{' '}
                  <span className="text-brand-blue-600">{treatment.focus}</span>
                </h3>
                <p className="text-gray-600 mb-6">
                  {treatment.tagline}
                </p>
                <div className="flex items-center text-brand-blue-600 font-medium">
                  <span>Start now</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
              
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-70 transition-transform group-hover:scale-110">
                <img 
                  src={treatment.image} 
                  alt={treatment.alt} 
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
