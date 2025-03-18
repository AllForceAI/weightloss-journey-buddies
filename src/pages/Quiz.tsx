
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuizQuestion from '@/components/QuizQuestion';
import QuizResult from '@/components/QuizResult';

const Quiz = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  const quizQuestions = [
    {
      id: 'weight_goal',
      question: 'What is your primary weight loss goal?',
      options: [
        'Lose 10-20 pounds',
        'Lose 20-50 pounds',
        'Lose 50+ pounds',
        'Maintain current weight'
      ]
    },
    {
      id: 'height',
      question: 'What is your height?',
      options: [
        "5'0\" - 5'3\"",
        "5'4\" - 5'7\"",
        "5'8\" - 5'11\"",
        "6'0\" or taller"
      ]
    },
    {
      id: 'weight',
      question: 'What is your current weight?',
      options: [
        '100-150 lbs',
        '151-200 lbs',
        '201-250 lbs',
        '251+ lbs'
      ]
    },
    {
      id: 'previous_attempts',
      question: 'Have you tried weight loss programs before?',
      options: [
        'Yes, multiple programs without success',
        'Yes, with some success but gained back',
        'Yes, with limited success',
        'No, this is my first attempt'
      ]
    },
    {
      id: 'health_conditions',
      question: 'Do you have any of the following health conditions?',
      options: [
        'Diabetes or prediabetes',
        'High blood pressure',
        'Sleep apnea or other sleep disorders',
        'None of the above'
      ]
    },
    {
      id: 'medications',
      question: 'Are you currently taking any prescription medications?',
      options: [
        'Yes, for diabetes',
        'Yes, for blood pressure',
        'Yes, for other conditions',
        'No, I don\'t take any prescription medications'
      ]
    },
    {
      id: 'lifestyle',
      question: 'How would you describe your current lifestyle?',
      options: [
        'Sedentary (little to no exercise)',
        'Lightly active (light exercise 1-3 days/week)',
        'Moderately active (moderate exercise 3-5 days/week)',
        'Very active (intense exercise 6-7 days/week)'
      ]
    }
  ];
  
  const handleNext = (answer: string) => {
    setAnswers({
      ...answers,
      [quizQuestions[currentStep - 1].id]: answer
    });
    
    if (currentStep < quizQuestions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setQuizCompleted(true);
      // Add query param to URL to indicate quiz completion
      navigate('/quiz?completed=true', { replace: true });
    }
  };
  
  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          {!quizCompleted ? (
            <div className="bg-white rounded-xl shadow-lg p-8">
              {currentStep <= quizQuestions.length && (
                <QuizQuestion
                  question={quizQuestions[currentStep - 1].question}
                  options={quizQuestions[currentStep - 1].options}
                  currentStep={currentStep}
                  totalSteps={quizQuestions.length}
                  onNext={handleNext}
                  onPrevious={handlePrevious}
                />
              )}
            </div>
          ) : (
            <QuizResult answers={answers} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Quiz;
