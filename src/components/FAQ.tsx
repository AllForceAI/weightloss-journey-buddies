
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
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

  const faqs = [
    {
      question: "What are GLP-1 medications and how do they work?",
      answer: "GLP-1 medications are FDA-approved for weight management. They work by mimicking a hormone called glucagon-like peptide-1 (GLP-1) that targets areas of the brain that regulate appetite and food intake. These medications help you feel full longer, reduce hunger, and can lead to significant weight loss when combined with lifestyle changes."
    },
    {
      question: "Am I eligible for GLP-1 weight loss medication?",
      answer: "Eligibility is determined by our medical providers based on your health profile. Generally, patients with a BMI of 30 or higher (or 27+ with weight-related conditions) may qualify. Our online assessment will help determine if you're a good candidate for our program."
    },
    {
      question: "What results can I expect from the program?",
      answer: "Clinical studies show that patients on GLP-1 medications lose an average of 15% of their body weight within 6-12 months. However, individual results may vary based on your unique biology, adherence to the program, and lifestyle factors."
    },
    {
      question: "Are there any side effects of GLP-1 medications?",
      answer: "Like all medications, GLP-1s may cause side effects, with the most common being mild to moderate gastrointestinal issues such as nausea, vomiting, and diarrhea. These typically improve over time as your body adjusts to the medication. Our doctors will monitor your progress and help manage any side effects."
    },
    {
      question: "How is medication delivered and how often?",
      answer: "Your prescribed medication is delivered directly to your doorstep in discreet packaging. Deliveries are typically monthly but can be adjusted based on your treatment plan. Shipping is always free, and automatic refills ensure you never run out."
    },
    {
      question: "Can I use insurance with your program?",
      answer: "We don't directly bill insurance, but we can provide documentation for you to submit for potential reimbursement. Many insurance plans now cover GLP-1 medications, and our team can help guide you through the process of checking your benefits."
    },
    {
      question: "How long will I need to stay on medication?",
      answer: "The duration of treatment varies for each patient. Some may benefit from shorter courses while others may need longer-term treatment. Our doctors will work with you to determine the optimal treatment length based on your progress and goals."
    },
    {
      question: "What if the medication doesn't work for me?",
      answer: "If you don't see results within the first 30 days, we offer a money-back guarantee. Beyond that period, our medical team will work with you to adjust your treatment plan, which may include trying a different medication or approach."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative">
      <div className="section-container relative z-10">
        <div 
          ref={sectionRef} 
          className="text-center max-w-3xl mx-auto mb-16 staggered-appear"
        >
          <h2 className="inline-block text-sm font-semibold px-3 py-1 rounded-full bg-brand-blue-100 text-brand-blue-800 mb-4">
            Frequently Asked Questions
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 font-display">
            Get Answers to Common Questions
          </h3>
          <p className="text-lg text-gray-700">
            We understand you may have questions about our program and GLP-1 medications. 
            Find answers to the most common questions below.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 border-b border-gray-200 pb-4"
              style={{ 
                opacity: 0,
                animation: 'fade-in-up 0.6s ease-out forwards',
                animationDelay: `${0.2 + index * 0.05}s`
              }}
            >
              <button
                className="flex justify-between items-center w-full text-left py-4 px-2 focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <h4 className="text-lg font-semibold pr-8">{faq.question}</h4>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-brand-blue-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-brand-blue-500" />
                  )}
                </div>
              </button>
              <div 
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-2 pb-4 text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div 
          className="mt-16 text-center"
          style={{ 
            opacity: 0,
            animation: 'fade-in-up 0.6s ease-out forwards',
            animationDelay: '0.6s'
          }}
        >
          <p className="text-lg text-gray-700 mb-6">
            Still have questions? Our medical team is here to help.
          </p>
          <a 
            href="mailto:support@weightsage.com" 
            className="inline-flex items-center text-brand-blue-600 font-semibold hover:text-brand-blue-700 transition-colors"
          >
            Contact Us
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
