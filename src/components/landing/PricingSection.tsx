
import React, { useState } from 'react';
import { Check, X, Info, CircleDollarSign, FileText, PenTool, BadgeCheck, Shield, CalendarClock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Define features for each service type
const features = {
  resumeBuilder: [
    { free: true, premium: true, label: "Access to ATS-Friendly Templates" },
    { free: true, premium: true, label: "Basic Formatting Options" },
    { free: true, premium: true, label: "PDF Export" },
    { free: false, premium: true, label: "All Premium Templates" },
    { free: false, premium: true, label: "Advanced Design Customization" },
    { free: false, premium: true, label: "AI Content Suggestions" },
    { free: false, premium: true, label: "Unlimited Exports (PDF, DOCX)" },
    { free: false, premium: true, label: "Remove Branding" },
  ],
  coverLetter: [
    { free: true, premium: true, label: "Standard Templates" },
    { free: true, premium: true, label: "Basic Formatting" },
    { free: true, premium: true, label: "PDF Export" },
    { free: false, premium: true, label: "All Premium Templates" },
    { free: false, premium: true, label: "Advanced Customization" },
    { free: false, premium: true, label: "AI Content Generation" },
    { free: false, premium: true, label: "Multiple Export Formats" },
    { free: false, premium: true, label: "Matching Resume Designs" },
  ],
  proServices: [
    { basic: true, standard: true, premium: true, label: "Resume Writing" },
    { basic: true, standard: true, premium: true, label: "ATS Optimization" },
    { basic: true, standard: true, premium: true, label: "1-on-1 Expert Consultation" },
    { basic: false, standard: true, premium: true, label: "LinkedIn Profile Optimization" },
    { basic: false, standard: true, premium: true, label: "2 Rounds of Revisions" },
    { basic: false, standard: false, premium: true, label: "Cover Letter Writing" },
    { basic: false, standard: false, premium: true, label: "Priority Support" },
    { basic: false, standard: false, premium: true, label: "7-Day Interview Guarantee" },
  ],
  interviewGuarantee: [
    { standard: true, premium: true, label: "Professionally Written Resume" },
    { standard: true, premium: true, label: "ATS-Optimized Templates" },
    { standard: true, premium: true, label: "Cover Letter" },
    { standard: true, premium: true, label: "LinkedIn Makeover" },
    { standard: true, premium: true, label: "Job Application Assistance" },
    { standard: true, premium: true, label: "Recruiter Outreach" },
    { standard: true, premium: true, label: "2 Interview Coaching Sessions" },
    { standard: true, premium: true, label: "Career Services Platform Access" },
    { standard: true, premium: true, label: "5 Interview Guarantee" },
    { standard: false, premium: true, label: "15 Interview Guarantee" },
  ]
};

const PricingSection = () => {
  const [pricingType, setPricingType] = useState("proServices");
  
  return (
    <section id="pricing" className="py-24 bg-slate-50/50">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-medium text-primary">PRICING PLANS</span>
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Choose the Perfect Plan for Your Career
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Flexible options to fit every budget and career stage
          </motion.p>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <Tabs defaultValue="proServices" className="w-full" value={pricingType} onValueChange={setPricingType}>
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-3xl grid-cols-4 p-1">
                <TabsTrigger value="resumeBuilder" className="text-xs md:text-sm py-2">
                  Resume Builder
                </TabsTrigger>
                <TabsTrigger value="coverLetter" className="text-xs md:text-sm py-2">
                  Cover Letter
                </TabsTrigger>
                <TabsTrigger value="proServices" className="text-xs md:text-sm py-2">
                  Pro Services
                </TabsTrigger>
                <TabsTrigger value="interviewGuarantee" className="text-xs md:text-sm py-2">
                  Interview Guarantee
                </TabsTrigger>
              </TabsList>
            </div>
            
            {/* Resume Builder Plans */}
            <TabsContent value="resumeBuilder" className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Free Plan */}
                <motion.div 
                  className="bg-white rounded-2xl p-8 shadow-md border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gray-100 rounded-full p-2">
                      <FileText className="h-6 w-6 text-gray-600" />
                    </div>
                    <h3 className="text-xl font-bold">Free Plan</h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-6">Basic access with limited templates</p>
                  
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold">₹0</span>
                    <span className="text-muted-foreground ml-2">/forever</span>
                  </div>
                  
                  <Button className="w-full mb-8" asChild>
                    <Link to="/resume-builder">
                      Get Started Now
                    </Link>
                  </Button>
                  
                  <div className="space-y-4">
                    {features.resumeBuilder.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        {feature.free ? (
                          <Check className="h-5 w-5 text-green-500 shrink-0 mr-3" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 shrink-0 mr-3" />
                        )}
                        <span className={!feature.free ? "text-gray-400" : ""}>{feature.label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
                
                {/* Premium Plan */}
                <motion.div 
                  className="bg-white rounded-2xl p-8 shadow-lg border border-primary/20 relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-primary text-white text-xs py-1 px-3 rounded-full font-medium">
                    RECOMMENDED
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary/10 rounded-full p-2">
                      <CircleDollarSign className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Premium Access</h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-6">Full access with all templates and customization</p>
                  
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold">₹299</span>
                    <span className="text-muted-foreground ml-2">/month</span>
                  </div>
                  
                  <Button className="w-full mb-8" asChild>
                    <Link to="/resume-builder">
                      Upgrade to Premium
                    </Link>
                  </Button>
                  
                  <div className="space-y-4">
                    {features.resumeBuilder.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        {feature.premium ? (
                          <Check className="h-5 w-5 text-green-500 shrink-0 mr-3" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 shrink-0 mr-3" />
                        )}
                        <span>{feature.label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </TabsContent>
            
            {/* Cover Letter Builder Plans */}
            <TabsContent value="coverLetter" className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Free Plan */}
                <motion.div 
                  className="bg-white rounded-2xl p-8 shadow-md border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gray-100 rounded-full p-2">
                      <FileText className="h-6 w-6 text-gray-600" />
                    </div>
                    <h3 className="text-xl font-bold">Free Plan</h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-6">Basic access with standard templates</p>
                  
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold">₹0</span>
                    <span className="text-muted-foreground ml-2">/forever</span>
                  </div>
                  
                  <Button className="w-full mb-8" asChild>
                    <Link to="/resume-builder">
                      Get Started Now
                    </Link>
                  </Button>
                  
                  <div className="space-y-4">
                    {features.coverLetter.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        {feature.free ? (
                          <Check className="h-5 w-5 text-green-500 shrink-0 mr-3" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 shrink-0 mr-3" />
                        )}
                        <span className={!feature.free ? "text-gray-400" : ""}>{feature.label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
                
                {/* Premium Plan */}
                <motion.div 
                  className="bg-white rounded-2xl p-8 shadow-lg border border-primary/20 relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-primary text-white text-xs py-1 px-3 rounded-full font-medium">
                    RECOMMENDED
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary/10 rounded-full p-2">
                      <CircleDollarSign className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Premium Access</h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-6">Advanced templates and customization</p>
                  
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold">₹199</span>
                    <span className="text-muted-foreground ml-2">/month</span>
                  </div>
                  
                  <Button className="w-full mb-8" asChild>
                    <Link to="/resume-builder">
                      Upgrade to Premium
                    </Link>
                  </Button>
                  
                  <div className="space-y-4">
                    {features.coverLetter.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        {feature.premium ? (
                          <Check className="h-5 w-5 text-green-500 shrink-0 mr-3" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 shrink-0 mr-3" />
                        )}
                        <span>{feature.label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </TabsContent>
            
            {/* Professional Writing Services */}
            <TabsContent value="proServices" className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Basic Package */}
                <motion.div 
                  className="bg-white rounded-2xl p-6 shadow-md border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gray-100 rounded-full p-2">
                      <FileText className="h-5 w-5 text-gray-600" />
                    </div>
                    <h3 className="text-lg font-bold">Basic Package</h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">Resume Writing & ATS Optimization</p>
                  
                  <div className="flex items-baseline mb-6">
                    <span className="text-3xl font-bold">₹1,499</span>
                    <span className="text-muted-foreground ml-2">one-time</span>
                  </div>
                  
                  <Button variant="outline" className="w-full mb-6">
                    Get Started
                  </Button>
                  
                  <div className="space-y-3">
                    {features.proServices.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        {feature.basic ? (
                          <Check className="h-4 w-4 text-green-500 shrink-0 mr-2" />
                        ) : (
                          <X className="h-4 w-4 text-gray-300 shrink-0 mr-2" />
                        )}
                        <span className={`text-sm ${!feature.basic ? "text-gray-400" : ""}`}>{feature.label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
                
                {/* Standard Package */}
                <motion.div 
                  className="bg-white rounded-2xl p-6 shadow-lg border border-primary/20 relative transform md:scale-105 z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-primary text-white text-xs py-1 px-3 rounded-full font-medium">
                    POPULAR
                  </div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 rounded-full p-2">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold">Standard Package</h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">LinkedIn Optimization + Revisions</p>
                  
                  <div className="flex items-baseline mb-6">
                    <span className="text-3xl font-bold">₹2,999</span>
                    <span className="text-muted-foreground ml-2">one-time</span>
                  </div>
                  
                  <Button className="w-full mb-6">
                    Get Started
                  </Button>
                  
                  <div className="space-y-3">
                    {features.proServices.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        {feature.standard ? (
                          <Check className="h-4 w-4 text-green-500 shrink-0 mr-2" />
                        ) : (
                          <X className="h-4 w-4 text-gray-300 shrink-0 mr-2" />
                        )}
                        <span className={`text-sm ${!feature.standard ? "text-gray-400" : ""}`}>{feature.label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
                
                {/* Premium Package */}
                <motion.div 
                  className="bg-white rounded-2xl p-6 shadow-md border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-500/10 rounded-full p-2">
                      <Shield className="h-5 w-5 text-blue-500" />
                    </div>
                    <h3 className="text-lg font-bold">Premium Package</h3>
                  </div>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <p className="text-sm text-muted-foreground mb-4 flex items-center">
                          Complete Career Package
                          <Info className="h-3 w-3 ml-1" />
                        </p>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs max-w-xs">Includes Resume, Cover Letter, LinkedIn Profile & Interview Guarantee</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <div className="flex items-baseline mb-6">
                    <span className="text-3xl font-bold">₹4,499</span>
                    <span className="text-muted-foreground ml-2">one-time</span>
                  </div>
                  
                  <Button variant="outline" className="w-full mb-6">
                    Get Started
                  </Button>
                  
                  <div className="space-y-3">
                    {features.proServices.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        {feature.premium ? (
                          <Check className="h-4 w-4 text-green-500 shrink-0 mr-2" />
                        ) : (
                          <X className="h-4 w-4 text-gray-300 shrink-0 mr-2" />
                        )}
                        <span className="text-sm">{feature.label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </TabsContent>
            
            {/* Interview Guarantee Package */}
            <TabsContent value="interviewGuarantee" className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Standard Package */}
                <motion.div 
                  className="bg-white rounded-2xl p-8 shadow-md border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-blue-100 rounded-full p-2">
                      <BadgeCheck className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold">Standard Package</h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-6">Comprehensive career support with 5 interview guarantee</p>
                  
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold">₹7,999</span>
                    <span className="text-muted-foreground ml-2">one-time</span>
                  </div>
                  
                  <Button variant="outline" className="w-full mb-8">
                    Get Started
                  </Button>
                  
                  <div className="space-y-4">
                    {features.interviewGuarantee.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        {feature.standard ? (
                          <Check className="h-5 w-5 text-green-500 shrink-0 mr-3" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 shrink-0 mr-3" />
                        )}
                        <span className={!feature.standard ? "text-gray-400" : ""}>{feature.label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
                
                {/* Premium Package */}
                <motion.div 
                  className="bg-white rounded-2xl p-8 shadow-lg border border-primary/20 relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-primary text-white text-xs py-1 px-3 rounded-full font-medium">
                    ULTIMATE
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary/10 rounded-full p-2">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Premium Package</h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-6">Elite career package with 15 interview guarantee</p>
                  
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold">₹14,999</span>
                    <span className="text-muted-foreground ml-2">one-time</span>
                  </div>
                  
                  <Button className="w-full mb-8">
                    Get Started
                  </Button>
                  
                  <div className="space-y-4">
                    {features.interviewGuarantee.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        {feature.premium ? (
                          <Check className="h-5 w-5 text-green-500 shrink-0 mr-3" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 shrink-0 mr-3" />
                        )}
                        <span>{feature.label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground mb-4">Need help choosing? Book a free consultation with our experts</p>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('book-consultation')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <CalendarClock className="mr-2 h-5 w-5" />
              Book a Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
