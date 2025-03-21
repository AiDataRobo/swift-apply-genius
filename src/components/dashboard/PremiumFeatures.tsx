
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, AlertCircle, Sparkles, Zap, Star, Lock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface PremiumFeaturesProps {
  user: {
    name: string;
    email: string;
    isPremium: boolean;
  };
}

const PremiumFeatures = ({ user }: PremiumFeaturesProps) => {
  const features = [
    {
      title: 'Advanced ATS Analysis',
      description: 'Get detailed insights on how your resume performs against ATS systems',
      icon: <CheckCircle className="h-5 w-5 text-primary" />,
      isPremium: true,
    },
    {
      title: 'AI Content Enhancement',
      description: 'Advanced AI tools to improve your resume content and language',
      icon: <Sparkles className="h-5 w-5 text-primary" />,
      isPremium: true,
    },
    {
      title: 'Premium Templates',
      description: 'Access to 50+ premium templates designed by HR professionals',
      icon: <Star className="h-5 w-5 text-primary" />,
      isPremium: true,
    },
    {
      title: 'Unlimited Documents',
      description: 'Create unlimited resumes and cover letters for different job applications',
      icon: <Zap className="h-5 w-5 text-primary" />,
      isPremium: true,
    },
  ];
  
  const plans = [
    {
      name: 'Monthly',
      price: '$9.99',
      period: 'per month',
      features: [
        'All premium features',
        'Cancel anytime',
        'Priority support',
      ],
      popular: false,
      cta: 'Subscribe Monthly',
    },
    {
      name: 'Annual',
      price: '$79.99',
      period: 'per year',
      features: [
        'All premium features',
        'Save 33% compared to monthly',
        'Priority support',
      ],
      popular: true,
      cta: 'Subscribe Yearly',
    },
  ];
  
  return (
    <div className="space-y-8">
      <div className="text-center max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Upgrade to Premium</h2>
        <p className="text-muted-foreground mb-6">
          Unlock advanced features to maximize your job search success with AI-powered tools.
        </p>
      </div>
      
      {/* Features Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Card key={index} className={`transition-all ${user.isPremium ? 'bg-background' : 'bg-secondary/20'}`}>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  {feature.icon}
                </div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
                
                {!user.isPremium && feature.isPremium && (
                  <div className="mt-4 flex items-center">
                    <Lock className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Premium Feature</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Free vs Premium Comparison */}
      {!user.isPremium && (
        <>
          <div className="grid gap-6 md:grid-cols-2 mt-12">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative overflow-hidden ${plan.popular ? 'border-primary shadow-md' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <Badge variant="default" className="rounded-none rounded-bl-lg">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardContent className="pt-6">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold">{plan.name}</h3>
                    <div className="mt-2">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            <p>Need help choosing? <a href="#" className="text-primary hover:underline">Contact our support team</a></p>
          </div>
        </>
      )}
      
      {/* Current Subscription (if premium) */}
      {user.isPremium && (
        <div className="max-w-xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-2">You're on Premium!</h3>
                <p className="text-muted-foreground mb-6">
                  You have access to all premium features. Your subscription renews on January 15, 2024.
                </p>
                
                <div className="flex gap-4 justify-center">
                  <Button variant="outline">Manage Subscription</Button>
                  <Button variant="default">View Premium Features</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default PremiumFeatures;
