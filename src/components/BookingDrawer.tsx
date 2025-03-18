
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import BookingCalendar from "@/components/BookingCalendar";

interface BookingDrawerProps {
  trigger?: React.ReactNode;
}

const BookingDrawer = ({ trigger }: BookingDrawerProps) => {
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
        <BookingCalendar />
      </DrawerContent>
    </Drawer>
  );
};

export default BookingDrawer;
