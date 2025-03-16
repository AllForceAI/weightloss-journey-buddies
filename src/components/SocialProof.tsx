
import { useEffect, useRef } from 'react';

const SocialProof = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const testimonials = [
    {
      name: "Sarah M.",
      age: 42,
      weight_loss: "38 lbs",
      time_frame: "6 months",
      quote: "After years of struggling with diets that never worked, the GLP-1 program changed everything. The regular check-ins with my doctor kept me accountable.",
      image_url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=388&auto=format&fit=crop"
    },
    {
      name: "Michael T.",
      age: 51,
      weight_loss: "45 lbs",
      time_frame: "8 months",
      quote: "I was skeptical at first, but the results speak for themselves. Not only did I lose weight, but my energy levels have improved dramatically.",
      image_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=387&auto=format&fit=crop"
    },
    {
      name: "Jennifer L.",
      age: 38,
      weight_loss: "32 lbs",
      time_frame: "5 months",
      quote: "The convenience of having medications delivered to my door and virtual doctor visits made this so much easier than any other program I've tried.",
      image_url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=371&auto=format&fit=crop"
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative bg-brand-blue-50">
      <div className="container mx-auto px-6">
        <div 
          ref={sectionRef} 
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="inline-block text-sm font-semibold px-3 py-1 rounded-full bg-brand-green-100 text-brand-green-800 mb-4">
            Real Results
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 font-display">
            Transformations from Our Patients
          </h3>
          <p className="text-lg text-gray-700">
            Members lose an average of 15% of their body weight within 6 months on our program.
            See how GLP-1 medications have changed lives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="h-60 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img 
                  src={testimonial.image_url} 
                  alt={testimonial.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
                <div className="absolute bottom-4 left-6 z-20 flex items-center">
                  <div className="bg-brand-green-500 text-white font-bold rounded-lg px-4 py-2 text-sm">
                    Lost {testimonial.weight_loss}
                  </div>
                  <div className="bg-white text-brand-blue-600 font-bold rounded-lg px-4 py-2 text-sm ml-3">
                    {testimonial.time_frame}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}, {testimonial.age}</h4>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.quote}"</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div 
          className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 bg-white p-8 rounded-2xl shadow-md"
        >
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold mb-2">Results You Can Expect</h4>
            <p className="text-gray-700 max-w-xl">
              GLP-1 medications are clinically proven to help patients lose significant weight and keep it off, 
              when combined with lifestyle changes.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-brand-blue-50 p-6 rounded-xl shadow-md text-center">
              <span className="text-3xl font-bold text-brand-blue-600 block">15%</span>
              <span className="text-gray-700 text-sm">Average Weight Loss</span>
            </div>
            <div className="bg-brand-blue-50 p-6 rounded-xl shadow-md text-center">
              <span className="text-3xl font-bold text-brand-blue-600 block">94%</span>
              <span className="text-gray-700 text-sm">Patient Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
