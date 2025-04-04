
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Star, Award, Zap, CreditCard, ChevronRight } from 'lucide-react';
import { Player } from '@lottiefiles/react-lottie-player';

interface PricingPlansSectionProps {
  user: {
    name: string;
    email: string;
    isPremium: boolean;
  };
}

const PricingPlansSection = ({ user }: PricingPlansSectionProps) => {
  const [duration, setDuration] = useState<'monthly' | 'yearly'>('monthly');
  
  const plans = [
    {
      name: 'Free',
      price: {
        monthly: '₹0',
        yearly: '₹0'
      },
      features: [
        'Basic resume templates',
        'Create up to 3 resumes',
        'Limited ATS checks',
        'Standard support'
      ],
      cta: 'Current Plan',
      disabled: true,
      animation: '/animations/resume-review.json'
    },
    {
      name: 'Premium',
      price: {
        monthly: '₹599',
        yearly: '₹4,999'
      },
      priceSubtext: {
        yearly: 'Save ₹2,189 annually'
      },
      features: [
        'All premium templates',
        'Unlimited resumes & cover letters',
        'Advanced ATS optimization',
        'AI-powered content suggestions',
        'Priority support',
        'Job tracking tools'
      ],
      cta: 'Upgrade Now',
      popular: true,
      disabled: user.isPremium,
      animation: '/animations/resume-review.json'
    },
    {
      name: 'Professional',
      price: {
        monthly: '₹1,499',
        yearly: '₹14,999'
      },
      priceSubtext: {
        yearly: 'Save ₹2,989 annually'
      },
      features: [
        'Everything in Premium',
        'Professional resume review',
        'LinkedIn profile optimization',
        '3 interview guarantees',
        'Direct recruiter connections',
        '1-on-1 career coaching'
      ],
      cta: 'Go Pro',
      disabled: false,
      animation: '/animations/resume-review.json'
    }
  ];
  
  return (
    <div className="space-y-4" id="pricing">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Subscription Plans</h2>
        
        <div className="flex items-center bg-secondary rounded-full p-1">
          <Button 
            variant={duration === 'monthly' ? 'default' : 'ghost'}
            size="sm"
            className="rounded-full text-xs h-8"
            onClick={() => setDuration('monthly')}
          >
            Monthly
          </Button>
          <Button 
            variant={duration === 'yearly' ? 'default' : 'ghost'}
            size="sm"
            className="rounded-full text-xs h-8"
            onClick={() => setDuration('yearly')}
          >
            Yearly
            <Badge variant="outline" className="ml-1 h-5 bg-green-100 text-green-800 hover:bg-green-100">Save 30%</Badge>
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((plan, index) => {
          const isCurrentPlan = (plan.name === 'Free' && !user.isPremium) || 
                              (plan.name === 'Premium' && user.isPremium);
          
          return (
            <Card 
              key={index} 
              className={`transition-all ${
                plan.popular 
                  ? 'border-primary/50 shadow-lg' 
                  : 'border-border hover:border-primary/30'
              } ${isCurrentPlan ? 'bg-primary/5' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <Badge variant="default" className="rounded-bl-lg rounded-tr-lg">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardContent className="p-6">
                <div className="h-16 w-16 mx-auto mb-4">
                  <Player
                    src={plan.animation}
                    className="w-full h-full"
                    loop
                    autoplay
                  />
                </div>
                
                <h3 className="text-xl font-bold text-center">{plan.name}</h3>
                
                <div className="text-center my-4">
                  <div className="flex items-end justify-center">
                    <span className="text-3xl font-bold">{plan.price[duration]}</span>
                    <span className="text-muted-foreground ml-1 mb-1 text-sm">{duration === 'monthly' ? '/month' : '/year'}</span>
                  </div>
                  
                  {plan.priceSubtext && plan.priceSubtext[duration] && (
                    <p className="text-sm text-green-600 mt-1">{plan.priceSubtext[duration]}</p>
                  )}
                </div>
                
                <div className="space-y-3 mt-6">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full mt-6 ${isCurrentPlan ? 'bg-primary/80' : ''}`}
                  disabled={plan.disabled}
                >
                  {isCurrentPlan ? (
                    <>
                      <CreditCard className="mr-2 h-4 w-4" />
                      Current Plan
                    </>
                  ) : (
                    <>
                      {plan.cta}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default PricingPlansSection;
