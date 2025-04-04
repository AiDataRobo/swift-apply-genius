
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift, Copy, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ReferralProgramWidget = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  
  // Mock referral data
  const referralCode = 'SWIFTAPPLY-USER1234';
  const referralLink = `https://swiftapply.com/r/${referralCode}`;
  const creditsEarned = 2;
  const referralsCompleted = 2;
  
  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    toast({
      title: "Copied to clipboard!",
      description: "Referral link copied successfully.",
    });
    
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <Card className="shadow-sm">
      <CardContent className="p-5">
        <div className="flex items-center mb-4">
          <Gift className="h-5 w-5 text-primary mr-2" />
          <h3 className="font-semibold">Refer & Earn Credits</h3>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4">
          Share with friends and colleagues to earn credits for premium features and services.
        </p>
        
        <div className="bg-secondary/50 rounded-md p-3 mb-4">
          <div className="flex justify-between items-center">
            <div className="truncate text-sm mr-2">{referralLink}</div>
            <Button 
              size="sm" 
              variant="outline" 
              className="flex-shrink-0"
              onClick={copyReferralLink}
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
        
        <div className="flex justify-between items-center text-sm">
          <div>
            <span className="text-muted-foreground mr-1">Credits earned:</span>
            <span className="font-medium">{creditsEarned}</span>
          </div>
          <div>
            <span className="text-muted-foreground mr-1">Referrals:</span>
            <span className="font-medium">{referralsCompleted}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReferralProgramWidget;
