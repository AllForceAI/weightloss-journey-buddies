
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import BookingCalendar from "@/components/BookingCalendar";

interface BookingDrawerProps {
  trigger?: React.ReactNode;
  calComEmbed?: string;
}

const BookingDrawer = ({ trigger, calComEmbed }: BookingDrawerProps) => {
  // Cal.com default embed if not provided
  const defaultCalEmbed = `
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
    <Drawer>
      <DrawerTrigger asChild>
        {trigger || (
          <Button className="w-full bg-white hover:bg-gray-100 text-brand-blue-600 transition-all">
            Schedule Your Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        )}
      </DrawerTrigger>
      <DrawerContent className="p-4 max-h-[85vh] overflow-y-auto">
        <BookingCalendar calComEmbed={calComEmbed || defaultCalEmbed} />
      </DrawerContent>
    </Drawer>
  );
};

export default BookingDrawer;
