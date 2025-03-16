
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
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

  // Handle smooth scrolling for hash links
  useEffect(() => {
    // Check if URL has a hash that matches this section
    if (window.location.hash === '#how-it-works') {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Check Eligibility',
      description: 'Complete our short online assessment to see if GLP-1 medications are right for you.',
      icon: (
        <svg className="w-10 h-10 text-brand-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Doctor Consultation',
      description: 'Connect with a licensed physician who will evaluate your needs and create a personalized plan.',
      icon: (
        <svg className="w-10 h-10 text-brand-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Medication Delivery',
      description: 'Your prescribed medication is delivered to your door in discreet packaging, with free shipping.',
      icon: (
        <svg className="w-10 h-10 text-brand-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      number: '04',
      title: 'Ongoing Support',
      description: 'Benefit from regular check-ins with your doctor and our support team as you progress on your journey.',
      icon: (
        <svg className="w-10 h-10 text-brand-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" ref={sectionRef} className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-brand-blue-50 z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="inline-block text-sm font-semibold px-3 py-1 rounded-full bg-brand-blue-100 text-brand-blue-800 mb-4">
            Simple Process
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 font-display">
            How Our Weight Loss Program Works
          </h3>
          <p className="text-lg text-gray-700">
            We've simplified the process to make your weight loss journey seamless and convenient, 
            all from the comfort of your home.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="p-8">
                <div className="bg-brand-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                <span className="text-sm font-bold text-brand-blue-500 mb-3 block">
                  {step.number}
                </span>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div 
          className="mt-16 p-8 bg-brand-blue-600 rounded-2xl text-white text-center max-w-4xl mx-auto"
        >
          <h4 className="text-2xl font-bold mb-4">Ready to Begin Your Transformation?</h4>
          <p className="mb-6 text-brand-blue-100">
            Our medical team is ready to help you achieve lasting weight loss with the latest science-backed medications.
          </p>
          <Link to="/quiz" 
            className="inline-block bg-white text-brand-blue-600 font-semibold px-8 py-3 rounded-lg transition-all hover:bg-brand-blue-50 shadow-lg hover:shadow-xl"
          >
            Start Your Assessment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
