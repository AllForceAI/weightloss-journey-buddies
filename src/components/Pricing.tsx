import { useEffect, useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-brand-blue-50 z-0"></div>
      <div className="section-container relative z-10">
        <div 
          ref={sectionRef} 
          className="text-center max-w-3xl mx-auto mb-16 staggered-appear"
        >
          <h2 className="inline-block text-sm font-semibold px-3 py-1 rounded-full bg-brand-blue-100 text-brand-blue-800 mb-4">
            Transparent Pricing
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 font-display">
            Simple, All-Inclusive Pricing
          </h3>
          <p className="text-lg text-gray-700">
            No hidden fees or surprise charges. One monthly payment covers everything you need for your weight loss journey.
          </p>
        </div>
        
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          style={{ 
            opacity: 0,
            animation: 'fade-in-up 0.6s ease-out forwards',
            animationDelay: '0.2s'
          }}
        >
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border border-brand-blue-100">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-2xl font-bold">Monthly Plan</h4>
                <span className="inline-block text-sm font-semibold px-3 py-1 rounded-full bg-brand-blue-100 text-brand-blue-800">
                  Most Flexible
                </span>
              </div>
              <div className="mb-6">
                <span className="text-6xl font-bold text-gray-900">$399</span>
                <span className="text-gray-600 ml-2">/month</span>
              </div>
              <p className="text-gray-700 mb-8">
                Perfect for those who want to try our program without a long-term commitment.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Monthly supply of GLP-1 medication',
                  'Monthly provider consultation',
                  'Unlimited messaging with medical team',
                  'Personalized treatment plan',
                  'Free shipping',
                  'No commitment - cancel anytime'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-brand-green-500" />
                    </div>
                    <span className="ml-3 text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/quiz">
                <Button className="w-full bg-brand-blue-600 hover:bg-brand-blue-700 text-white transition-all">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="bg-brand-blue-600 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl text-white relative">
            <div className="absolute top-0 right-0 bg-brand-green-500 text-white font-semibold px-6 py-1 rounded-bl-lg text-sm">
              SAVE $1,176/YEAR
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-2xl font-bold">Annual Plan</h4>
                <span className="inline-block text-sm font-semibold px-3 py-1 rounded-full bg-white/20 text-white">
                  Best Value
                </span>
              </div>
              <div className="mb-6">
                <span className="text-6xl font-bold">$299</span>
                <span className="ml-2">/month</span>
              </div>
              <p className="text-brand-blue-100 mb-8">
                Our most popular option for committed patients seeking the best value.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'All features in the monthly plan',
                  'Priority access to medical team',
                  'Free quarterly body composition analysis',
                  'Exclusive access to wellness webinars',
                  'Advanced progress tracking tools',
                  '30-day money back guarantee'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-brand-green-300" />
                    </div>
                    <span className="ml-3 text-brand-blue-50">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/quiz">
                <Button className="w-full bg-white text-brand-blue-600 hover:bg-brand-blue-50 transition-all">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div 
          className="mt-16 bg-white p-8 rounded-2xl shadow-md max-w-4xl mx-auto border border-brand-blue-100"
          style={{ 
            opacity: 0,
            animation: 'fade-in-up 0.6s ease-out forwards',
            animationDelay: '0.4s'
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold mb-2">Insurance & Pricing Comparison</h4>
              <p className="text-gray-700">
                Many insurance plans now cover GLP-1 medications. We'll help you navigate coverage options.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="text-center p-4 bg-brand-blue-50 rounded-xl">
                <p className="text-sm text-gray-600 mb-1">Retail Price (without insurance)</p>
                <p className="text-xl font-bold text-brand-blue-800">$1,200-$1,500/month</p>
              </div>
              <div className="text-center p-4 bg-brand-green-50 rounded-xl">
                <p className="text-sm text-gray-600 mb-1">Our Price</p>
                <p className="text-xl font-bold text-brand-green-600">$299-$399/month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
