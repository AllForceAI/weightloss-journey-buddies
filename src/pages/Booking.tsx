
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingCalendar from '@/components/BookingCalendar';

const Booking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-display">Schedule Your Consultation</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose a convenient time to speak with one of our medical providers about your weight loss journey.
            </p>
          </div>
          
          <BookingCalendar />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
