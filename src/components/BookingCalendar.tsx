
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Video, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface BookingCalendarProps {
  calComEmbed?: string;
}

const BookingCalendar = ({ calComEmbed }: BookingCalendarProps) => {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [consultationType, setConsultationType] = useState<'video' | 'chat'>('video');
  
  // If cal.com embed is provided, render it
  if (calComEmbed) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        <h3 className="text-2xl font-bold mb-6 font-display">Schedule Your Consultation</h3>
        <div 
          className="cal-embed-container" 
          dangerouslySetInnerHTML={{ __html: calComEmbed }} 
        />
      </div>
    );
  }
  
  // Generate next 7 days for the calendar
  const generateDates = () => {
    const dates = [];
    const now = new Date();
    for (let i = 1; i <= 7; i++) {
      const date = new Date();
      date.setDate(now.getDate() + i);
      dates.push(date);
    }
    return dates;
  };
  
  // Generate time slots
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 17; hour++) {
      const hourFormatted = hour > 12 ? hour - 12 : hour;
      const ampm = hour >= 12 ? 'PM' : 'AM';
      slots.push(`${hourFormatted}:00 ${ampm}`);
      if (hour !== 17) {
        slots.push(`${hourFormatted}:30 ${ampm}`);
      }
    }
    return slots;
  };
  
  const dates = generateDates();
  const timeSlots = generateTimeSlots();
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short',
      month: 'short', 
      day: 'numeric'
    });
  };
  
  const handleBooking = () => {
    toast({
      title: "Consultation Booked",
      description: `Your consultation is scheduled for ${selectedDate} at ${selectedTime}`,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold mb-6 font-display">Schedule Your Consultation</h3>
      
      <div className="mb-8">
        <h4 className="text-lg font-semibold mb-4">Select Consultation Type</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            className={`p-4 rounded-lg border-2 transition-all flex items-center ${
              consultationType === 'video' 
                ? 'border-brand-blue-500 bg-brand-blue-50' 
                : 'border-gray-200 hover:border-brand-blue-200'
            }`}
            onClick={() => setConsultationType('video')}
          >
            <Video className="h-5 w-5 mr-3 text-brand-blue-600" />
            <div className="text-left">
              <span className="font-medium block">Video Consultation</span>
              <span className="text-sm text-gray-600">Face-to-face with provider</span>
            </div>
          </button>
          
          <button
            className={`p-4 rounded-lg border-2 transition-all flex items-center ${
              consultationType === 'chat' 
                ? 'border-brand-blue-500 bg-brand-blue-50' 
                : 'border-gray-200 hover:border-brand-blue-200'
            }`}
            onClick={() => setConsultationType('chat')}
          >
            <MessageSquare className="h-5 w-5 mr-3 text-brand-blue-600" />
            <div className="text-left">
              <span className="font-medium block">Asynchronous Chat</span>
              <span className="text-sm text-gray-600">Message with provider</span>
            </div>
          </button>
        </div>
      </div>
      
      <div className="mb-8">
        <h4 className="text-lg font-semibold mb-4 flex items-center">
          <Calendar className="h-5 w-5 mr-2 text-brand-blue-600" />
          Select Date
        </h4>
        <div className="grid grid-cols-3 sm:grid-cols-7 gap-2">
          {dates.map((date, i) => (
            <button
              key={i}
              className={`p-3 rounded-lg border transition-all ${
                selectedDate === formatDate(date)
                  ? 'border-brand-blue-500 bg-brand-blue-50'
                  : 'border-gray-200 hover:border-brand-blue-200'
              }`}
              onClick={() => setSelectedDate(formatDate(date))}
            >
              <span className="block text-sm text-gray-600">{date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
              <span className="block text-lg font-semibold">{date.getDate()}</span>
              <span className="block text-sm">{date.toLocaleDateString('en-US', { month: 'short' })}</span>
            </button>
          ))}
        </div>
      </div>
      
      {selectedDate && (
        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-4 flex items-center">
            <Clock className="h-5 w-5 mr-2 text-brand-blue-600" />
            Select Time
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {timeSlots.map((time, i) => (
              <button
                key={i}
                className={`p-3 rounded-lg border transition-all ${
                  selectedTime === time
                    ? 'border-brand-blue-500 bg-brand-blue-50'
                    : 'border-gray-200 hover:border-brand-blue-200'
                }`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}
      
      <Button 
        className="w-full bg-brand-blue-500 hover:bg-brand-blue-600 py-6 text-lg"
        disabled={!selectedDate || !selectedTime}
        onClick={handleBooking}
      >
        Confirm Booking
      </Button>
      
      <p className="text-sm text-gray-600 mt-4 text-center">
        You'll receive a confirmation email with details and any pre-consultation forms.
      </p>
    </div>
  );
};

export default BookingCalendar;
