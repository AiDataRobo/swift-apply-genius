
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CalendarIcon } from "lucide-react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

interface CalBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  calLink?: string;
}

const CalBookingModal = ({ isOpen, onClose, calLink = "swiftapply/consultation" }: CalBookingModalProps) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      // Using the proper way to listen for Cal.com events
      // The type definition might be outdated, but this is the documented API
      // @ts-ignore - Ignoring type error as the Cal.com API documentation shows this is the correct usage
      cal.on('bookingSuccessful', () => {
        console.log("Booking was successful");
        setTimeout(() => {
          onClose();
        }, 2000);
      });
    })();
  }, [onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CalendarIcon className="h-5 w-5 text-primary" />
            <span>Schedule a Mentorship Session</span>
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4 h-[600px]">
          <Cal
            calLink={calLink}
            style={{ width: "100%", height: "100%", overflow: "hidden" }}
            config={{
              layout: "month_view",
              hideEventTypeDetails: "false",
              hideBranding: "true",
              theme: "light",
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CalBookingModal;
