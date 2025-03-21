
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  rating: number;
}

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex space-x-1 my-3">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`h-4 w-4 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
        />
      ))}
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "After using SwiftApply, I received 4 interview calls in just one week. The AI-optimized resume really made my application stand out!",
      author: "Sarah Johnson",
      role: "Marketing Manager",
      company: "Tech Innovate",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
      rating: 5
    },
    {
      quote: "The cover letter generator saved me hours of work and crafted the perfect message for each application. Landed my dream job within a month!",
      author: "Michael Chen",
      role: "Software Engineer",
      company: "CodeSphere",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
      rating: 5
    },
    {
      quote: "After 6 months of job searching with no luck, I switched to SwiftApply. Within 2 weeks I had multiple offers to choose from!",
      author: "Emily Rodriguez",
      role: "Project Manager",
      company: "GlobalTech",
      image: "https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
      rating: 5
    },
    {
      quote: "The templates are professional and modern. I've tried other tools but SwiftApply is by far the most intuitive and effective.",
      author: "James Wilson",
      role: "Account Executive",
      company: "SalesPro",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
      rating: 4
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-50/50 relative">
      <div className="container section-container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full mb-4">
            <span className="text-xs font-medium text-primary">SUCCESS STORIES</span>
          </div>
          <h2 className="section-heading">Hear from Job Seekers Who Found Success</h2>
          <p className="section-subheading mx-auto">
            Thousands of professionals have landed their dream jobs with SwiftApply
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${0.2 * index}s` }}>
              <CardContent className="p-8">
                <StarRating rating={testimonial.rating} />
                
                <div className="mb-6">
                  <p className="text-lg text-foreground/90 italic">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white shadow-sm"
                  />
                  <div>
                    <h4 className="text-base font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 max-w-3xl mx-auto py-6 px-8 bg-white rounded-2xl shadow-md">
            <div className="flex gap-4 items-center">
              <div className="flex -space-x-4">
                {testimonials.map((testimonial, index) => (
                  <img 
                    key={index}
                    src={testimonial.image} 
                    alt="User" 
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
                <span className="font-semibold text-lg ml-1">4.9/5</span>
                <span className="text-muted-foreground ml-2 text-sm">(1,200+ reviews)</span>
              </div>
            </div>
            <div className="h-12 w-px bg-slate-200 hidden sm:block"></div>
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Join thousands of satisfied job seekers</p>
              <p className="text-muted-foreground text-sm">Create your professional resume today</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
