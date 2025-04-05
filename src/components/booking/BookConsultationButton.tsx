
import React, { useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";
import { Button, ButtonProps } from '@/components/ui/button';

interface BookConsultationButtonProps extends Omit<ButtonProps, 'children'> {
  children?: React.ReactNode;
  className?: string;
  link?: string;
}

const BookConsultationButton: React.FC<BookConsultationButtonProps> = ({ 
  children = "Book Consultation", 
  className,
  link = "vishal17/expertcareeradvice",
  ...props 
}) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "expertcareeradvice" });
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  return (
    <Button
      data-cal-namespace="expertcareeradvice"
      data-cal-link={link}
      data-cal-config='{"layout":"month_view","theme":"light"}'
      className={className}
      {...props}
    >
      {children}
    </Button>
  );
};

export default BookConsultationButton;
