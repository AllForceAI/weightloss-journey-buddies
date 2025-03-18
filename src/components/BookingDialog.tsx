
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import BookingCalendar from "@/components/BookingCalendar";

interface BookingDialogProps {
  trigger?: React.ReactNode;
}

const BookingDialog = ({ trigger }: BookingDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="w-full bg-white hover:bg-gray-100 text-brand-blue-600 transition-all">
            Schedule Your Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <BookingCalendar />
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
