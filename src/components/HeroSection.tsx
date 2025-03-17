import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
const HeroSection = () => {
  const treatments = [{
    action: "Lose",
    focus: "weight",
    image: "/lovable-uploads/4356675f-6fb1-49ab-903a-a0bc94d396f9.png",
    alt: "Weight loss medication"
  }, {
    action: "Improve",
    focus: "health",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2070&auto=format&fit=crop",
    alt: "Health improvement"
  }, {
    action: "Boost",
    focus: "energy",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop",
    alt: "Energy boost"
  }];
  return <div className="relative py-12 md:py-24 overflow-hidden bg-white">
      {/* Top benefits bar */}
      <div className="hidden lg:flex items-center justify-between max-w-7xl mx-auto px-6 py-3 text-sm text-gray-600 border-b">
        <div className="flex items-center">
          <span>
        </span>
        </div>
        <div className="flex items-center">
          <span>100% online</span>
        </div>
        <div className="flex items-center">
          <span>Personalized treatment</span>
        </div>
        <div className="flex items-center">
          <span>US-Sourced medications</span>
        </div>
        <div className="flex items-center">
          <span>
        </span>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight">
            Medical Weight Loss <br className="hidden md:block" />
            <span className="text-brand-blue-600">That Actually Works</span>
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Access FDA-approved GLP-1 medications online with ongoing care from weight loss specialists.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/quiz">
              <Button className="text-lg py-6 px-8 bg-brand-blue-600 hover:bg-brand-blue-700">
                Start GLP-1 Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/blog">
              <Button variant="outline" className="text-lg py-6 px-8">
                Visit Our Blog
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Treatment options grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {treatments.map((treatment, index) => <Link to="/quiz" key={index} className="group bg-brand-blue-50 rounded-xl p-8 flex flex-col justify-between h-64 transition-all hover:shadow-md relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-medium mb-1">
                  <span>{treatment.action}</span>{' '}
                  <span className="text-brand-blue-600">{treatment.focus}</span>
                </h3>
                <p className="text-gray-600 mb-6">
                  GLP-1 medications that work
                </p>
                <div className="flex items-center text-brand-blue-600 font-medium">
                  <span>Start now</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
              
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-70 transition-transform group-hover:scale-110">
                
              </div>
            </Link>)}
        </div>
      </div>
    </div>;
};
export default HeroSection;