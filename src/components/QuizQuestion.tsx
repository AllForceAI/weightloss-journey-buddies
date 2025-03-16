
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface QuizQuestionProps {
  question: string;
  options: string[];
  currentStep: number;
  totalSteps: number;
  onNext: (answer: string) => void;
  onPrevious: () => void;
}

const QuizQuestion = ({ 
  question, 
  options, 
  currentStep,
  totalSteps,
  onNext,
  onPrevious
}: QuizQuestionProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [animateIn, setAnimateIn] = useState(false);
  
  useEffect(() => {
    setAnimateIn(true);
    return () => setAnimateIn(false);
  }, [question]);
  
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };
  
  const handleNext = () => {
    if (selectedOption) {
      setAnimateIn(false);
      setTimeout(() => {
        onNext(selectedOption);
        setSelectedOption(null);
      }, 300);
    }
  };
  
  const handlePrevious = () => {
    setAnimateIn(false);
    setTimeout(() => {
      onPrevious();
      setSelectedOption(null);
    }, 300);
  };

  return (
    <div className={`transition-all duration-300 ${animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="mb-8">
        <div className="w-full bg-gray-200 h-2 rounded-full mb-2">
          <div 
            className="bg-brand-blue-500 h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-500 text-right">
          Question {currentStep} of {totalSteps}
        </p>
      </div>
      
      <h3 className="text-2xl font-bold mb-8">{question}</h3>
      
      <div className="space-y-4 mb-8">
        {options.map((option, index) => (
          <button
            key={index}
            className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
              selectedOption === option 
                ? 'border-brand-blue-500 bg-brand-blue-50' 
                : 'border-gray-200 hover:border-brand-blue-200'
            }`}
            onClick={() => handleOptionClick(option)}
          >
            <span className="font-medium">{option}</span>
          </button>
        ))}
      </div>
      
      <div className="flex justify-between">
        {currentStep > 1 ? (
          <Button 
            variant="outline" 
            onClick={handlePrevious}
            className="flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
        ) : (
          <div></div>
        )}
        
        <Button 
          onClick={handleNext} 
          disabled={!selectedOption}
          className={`bg-brand-blue-500 hover:bg-brand-blue-600 transition-all ${!selectedOption ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Next
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default QuizQuestion;
