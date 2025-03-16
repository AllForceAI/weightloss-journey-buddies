
import { useEffect, useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Handle smooth scrolling for hash links
  useEffect(() => {
    // Check if URL has a hash that matches this section
    if (window.location.hash === '#faq') {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const faqs = [
    {
      question: "What are GLP-1 medications and how do they work?",
      answer: "GLP-1 medications mimic a hormone that targets areas of the brain that regulate appetite and food intake. They make you feel fuller faster and reduce hunger cravings, leading to reduced calorie intake and weight loss."
    },
    {
      question: "Are these medications FDA-approved?",
      answer: "Yes, all medications we prescribe are FDA-approved for weight management in adults with certain BMI thresholds or weight-related conditions."
    },
    {
      question: "Who is eligible for the program?",
      answer: "Eligibility typically includes adults with a BMI of 30 or greater, or a BMI of 27 or greater with at least one weight-related condition such as high blood pressure, type 2 diabetes, or high cholesterol."
    },
    {
      question: "How much weight can I expect to lose?",
      answer: "Clinical studies show that patients typically lose 15-20% of their body weight over a 12-month period. Individual results may vary based on lifestyle factors and adherence to the program."
    },
    {
      question: "What is included in the monthly subscription?",
      answer: "Our monthly subscription includes your medication, consultations with healthcare providers, ongoing support, and delivery directly to your door."
    },
    {
      question: "Are there any side effects?",
      answer: "Common side effects may include nausea, diarrhea, vomiting, constipation, and abdominal pain. These typically improve over time as your body adjusts to the medication."
    },
    {
      question: "How long will I need to stay on the medication?",
      answer: "The duration varies by individual. Some patients may need to stay on the medication long-term to maintain weight loss, while others may transition off after reaching their goals."
    },
    {
      question: "Is the consultation with a real doctor?",
      answer: "Yes, all consultations are with licensed healthcare providers who specialize in weight management."
    }
  ];

  return (
    <section id="faq" ref={sectionRef} className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-50 to-white z-0"></div>
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="inline-block text-sm font-semibold px-3 py-1 rounded-full bg-brand-blue-100 text-brand-blue-800 mb-4">
            Common Questions
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 font-display">
            Frequently Asked Questions
          </h3>
          <p className="text-lg text-gray-700">
            Get answers to the most common questions about our weight loss program and GLP-1 medications.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-6 py-4 text-left font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-16 text-center">
          <h4 className="text-xl font-medium mb-4">Still have questions?</h4>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/quiz">
              <Button size="lg" className="bg-brand-blue-500 hover:bg-brand-blue-600 transition-all">
                Start Your Assessment
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-2 border-brand-blue-200 text-brand-blue-700 hover:bg-brand-blue-50 transition-all">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
