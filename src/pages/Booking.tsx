
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingCalendar from '@/components/BookingCalendar';

const Booking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Cal.com embed HTML
  // You can replace this with your own Cal.com embed code
  const calComEmbed = `
    <!-- Cal element -->
    <cal-inline-widget calLink="your-cal-link"></cal-inline-widget>
    
    <!-- Cal script -->
    <script>
      (function (C, A, L) {
        let p = function (a, ar) {
          a.q.push(ar);
        };
        let d = C.document;
        C.Cal =
          C.Cal ||
          function () {
            let cal = C.Cal;
            let ar = arguments;
            if (!cal.loaded) {
              cal.ns = {};
              cal.q = cal.q || [];
              d.head.appendChild(d.createElement("script")).src = A;
              cal.loaded = true;
            }
            if (ar[0] === L) {
              const api = function () {
                p(api, arguments);
              };
              const namespace = ar[1];
              api.q = api.q || [];
              typeof namespace === "string"
                ? (cal.ns[namespace] = api) && p(api, ar)
                : p(cal, ar);
              return;
            }
            p(cal, ar);
          };
      })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init");
    </script>
  `;

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
          
          <BookingCalendar calComEmbed={calComEmbed} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
