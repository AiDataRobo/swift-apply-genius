
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface HeroFeatureItemProps {
  text: string;
}

const HeroFeatureItem: React.FC<HeroFeatureItemProps> = ({ text }) => {
  return (
    <div className="flex items-center text-sm">
      <CheckCircle className="h-4 w-4 text-primary mr-2" />
      <span>{text}</span>
    </div>
  );
};

export default HeroFeatureItem;
