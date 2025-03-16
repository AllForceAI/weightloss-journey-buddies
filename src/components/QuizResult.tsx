
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

interface QuizResultProps {
  answers: Record<string, string>;
}

const QuizResult = ({ answers }: QuizResultProps) => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Calculate BMI if height and weight are provided
  let bmi = null;
  if (answers.height && answers.weight) {
    // Convert height range to average height in cm
    let heightInCm: number;
    switch (answers.height) {
      case "5'0\" - 5'3\"":
        heightInCm = 160; // Average of 5'1" in cm
        break;
      case "5'4\" - 5'7\"":
        heightInCm = 170; // Average of 5'5.5" in cm
        break;
      case "5'8\" - 5'11\"":
        heightInCm = 180; // Average of 5'9.5" in cm
        break;
      case "6'0\" or taller":
        heightInCm = 190; // Average of 6'2" in cm
        break;
      default:
        heightInCm = 170; // Default fallback
    }
    
    // Convert weight range to average weight in kg
    let weightInKg: number;
    switch (answers.weight) {
      case "100-150 lbs":
        weightInKg = 56.7; // Average of 125 lbs in kg
        break;
      case "151-200 lbs":
        weightInKg = 79.4; // Average of 175 lbs in kg
        break;
      case "201-250 lbs":
        weightInKg = 102.1; // Average of 225 lbs in kg
        break;
      case "251+ lbs":
        weightInKg = 124.7; // Average of 275 lbs in kg
        break;
      default:
        weightInKg = 79.4; // Default fallback
    }
    
    // Calculate BMI: weight (kg) / (height (m))²
    const heightInMeters = heightInCm / 100;
    bmi = (weightInKg / (heightInMeters * heightInMeters)).toFixed(1);
  }
  
  return (
    <div className={`transition-all duration-500 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-green-100 text-brand-green-600 rounded-full mb-6">
          <Check className="h-10 w-10" />
        </div>
        <h2 className="text-3xl font-bold mb-4 font-display">
          You're Eligible for Our Program!
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Based on your answers, you're a good candidate for our GLP-1 weight loss program. 
          The next step is to schedule a consultation with one of our medical providers.
        </p>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8 max-w-2xl mx-auto">
        <h3 className="text-xl font-bold mb-6">Your Assessment Summary</h3>
        
        {bmi && (
          <div className="mb-6 p-4 bg-brand-blue-50 rounded-lg">
            <div className="flex justify-between items-center">
              <p className="font-medium">Your BMI</p>
              <p className="text-xl font-bold">{bmi}</p>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
              <div 
                className={`h-2 rounded-full ${
                  parseFloat(bmi) > 30 
                    ? 'bg-brand-green-500' 
                    : parseFloat(bmi) > 25 
                    ? 'bg-yellow-500' 
                    : 'bg-blue-500'
                }`}
                style={{ width: `${Math.min(parseFloat(bmi) / 40 * 100, 100)}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>18.5</span>
              <span>25</span>
              <span>30</span>
              <span>40</span>
            </div>
          </div>
        )}
        
        <div className="space-y-4">
          {Object.entries(answers).map(([question, answer], index) => (
            <div key={index} className="flex justify-between py-2 border-b border-gray-100">
              <p className="text-gray-600">{question}</p>
              <p className="font-medium">{answer}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-brand-blue-600 text-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
        <h3 className="text-xl font-bold mb-4">What's Next?</h3>
        <p className="mb-6">
          Schedule a consultation with one of our providers to discuss your weight loss goals and 
          determine the best treatment plan for you.
        </p>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <Check className="h-5 w-5 text-brand-green-300" />
            </div>
            <p className="ml-3 text-brand-blue-50">
              Consultation takes approximately 15-20 minutes
            </p>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <Check className="h-5 w-5 text-brand-green-300" />
            </div>
            <p className="ml-3 text-brand-blue-50">
              No obligation to proceed with treatment
            </p>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <Check className="h-5 w-5 text-brand-green-300" />
            </div>
            <p className="ml-3 text-brand-blue-50">
              Same-day approval possible for eligible patients
            </p>
          </div>
        </div>
        
        <Link to="/">
          <Button className="w-full bg-white hover:bg-gray-100 text-brand-blue-600 transition-all">
            Schedule Your Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default QuizResult;
