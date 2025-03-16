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
          <span>Personalized to your needs</span>
        </div>
        <div className="flex items-center">
          <span>Ongoing support</span>
        </div>
        <div className="flex items-center">
          <span>US-Sourced medications</span>
        </div>
        <div className="flex items-center">
          <span>
        </span>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16 md:mt-24">
        {/* Main headline */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight tracking-tight text-brand-blue-700 font-display">
            <span className="text-brand-blue-500">Transform</span> your life
            <br />
            <span className="text-brand-blue-800">personalized to you</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Medically supervised weight loss with GLP-1 medications starts here
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quiz">
              <Button size="lg" className="text-base px-8 py-6 bg-brand-blue-500 hover:bg-brand-blue-600 transition-all shadow-lg hover:shadow-xl">
                Start Your Journey
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
                  <span className="text-brand-blue-500">{treatment.focus}</span>
                </h3>
              </div>
              
              <div className="relative z-10 flex items-center justify-between mt-auto">
                <span className="sr-only">Learn more</span>
                <div className="bg-white rounded-full p-2 group-hover:bg-brand-blue-500 transition-colors">
                  <ArrowRight className="h-5 w-5 text-brand-blue-500 group-hover:text-white transition-colors" />
                </div>
              </div>
              
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-70 transition-transform group-hover:scale-110">
                <img src={treatment.image} alt={treatment.alt} className="w-full h-full object-contain" />
              </div>
            </Link>)}
        </div>
      </div>
    </div>;
};
export default HeroSection;