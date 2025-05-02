
import React from 'react';
import { FileText, Code, GraduationCap, LayoutDashboard } from "lucide-react";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Make Your Resume Stand Out</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Our platform provides all the tools you need to create an ATS-optimized resume that gets noticed.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="flex flex-col items-center space-y-2">
            <FileText className="h-10 w-10 text-primary" />
            <h3 className="text-lg font-semibold">Easy to Use</h3>
            <p className="text-muted-foreground text-sm text-center">
              Intuitive interface for quick resume creation.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Code className="h-10 w-10 text-primary" />
            <h3 className="text-lg font-semibold">ATS Optimized</h3>
            <p className="text-muted-foreground text-sm text-center">
              Ensure your resume passes through Applicant Tracking Systems.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <GraduationCap className="h-10 w-10 text-primary" />
            <h3 className="text-lg font-semibold">Professional</h3>
            <p className="text-muted-foreground text-sm text-center">
              Create a resume that highlights your skills and experience.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <LayoutDashboard className="h-10 w-10 text-primary" />
            <h3 className="text-lg font-semibold">Keyword Analysis</h3>
            <p className="text-muted-foreground text-sm text-center">
              Detect missing keywords to improve your job application success.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Choose from Multiple ATS-Friendly Templates</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            <div className="relative aspect-[3/4] bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <img src="/lovable-uploads/632f7133-bba3-48c3-abfb-99add820f62b.png" alt="Modern Template" className="w-full h-full object-cover object-top" />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                <h4 className="font-medium">Modern Professional</h4>
                <p className="text-sm text-white/80">Clean and professional layout</p>
              </div>
            </div>
            <div className="relative aspect-[3/4] bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <img src="/lovable-uploads/632f7133-bba3-48c3-abfb-99add820f62b.png" alt="Creative Template" className="w-full h-full object-cover object-top" />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                <h4 className="font-medium">ATS Optimized</h4>
                <p className="text-sm text-white/80">Pass screening systems easily</p>
              </div>
            </div>
            <div className="relative aspect-[3/4] bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <img src="/lovable-uploads/632f7133-bba3-48c3-abfb-99add820f62b.png" alt="Minimal Template" className="w-full h-full object-cover object-top" />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                <h4 className="font-medium">Minimal Professional</h4>
                <p className="text-sm text-white/80">Simple design for maximum impact</p>
              </div>
            </div>
          </div>
          <Link to="/templates">
            <Button className="gap-2 group">
              Browse All Templates
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
