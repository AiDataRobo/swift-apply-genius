
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Aditya Sharma",
      role: "Software Engineer",
      image: "/placeholder.svg",
      company: "Google",
      text: "I was struggling to get interview calls despite having good experience. After using EnhanceResume's professional writing service, I started getting calls from top tech companies. Landed a role at Google within 3 weeks!",
      outcome: "Landed job at Google in 3 weeks",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "Marketing Manager",
      image: "/placeholder.svg",
      company: "Microsoft",
      text: "The resume writing service transformed my career documents completely. The writer highlighted achievements I didn't even think were significant. Received 4 interview calls within the first week of using my new resume.",
      outcome: "4 interviews in the first week",
      rating: 5,
    },
    {
      name: "Rahul Verma",
      role: "Product Manager",
      image: "/placeholder.svg",
      company: "Amazon",
      text: "I was skeptical about paying for a professional resume service, but it was worth every rupee. My interview rate went from 0 to 6 in just two weeks, ending my 3-month job search drought.",
      outcome: "Ended 3-month job search drought",
      rating: 5,
    },
    {
      name: "Anjali Singh",
      role: "HR Director",
      image: "/placeholder.svg",
      company: "Deloitte",
      text: "As someone who reviews resumes professionally, I wanted expert help with my own. The writer captured my achievements perfectly and presented them in a way that resonated with hiring managers. Incredible service!",
      outcome: "Promoted to HR Director",
      rating: 5,
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];
  
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how our professional resume writing services have transformed careers
          </p>
        </div>
        
        <div className="mb-16">
          <div className="flex justify-center mb-10">
            <div className="bg-primary/5 rounded-xl px-6 py-4 inline-flex items-center">
              <Star className="text-amber-500 h-5 w-5 mr-2" />
              <span className="text-base font-medium">87% of clients saw more interview calls within 2 weeks</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold">What Our Clients Say</h3>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                className="rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-6 h-full flex flex-col">
                  <div className="absolute -top-3 -left-3">
                    <Quote className="h-10 w-10 text-primary/20" />
                  </div>
                  
                  <div className="flex items-center mb-4 mt-3">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-3">
                    {Array(testimonial.rating).fill(0).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  
                  <div className="flex-grow">
                    <p className="text-muted-foreground">{testimonial.text}</p>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-sm font-medium text-primary">
                      🚀 {testimonial.outcome}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 bg-gray-50 rounded-xl p-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="flex">
              {Array(5).fill(0).map((_, i) => (
                <Star key={i} className="h-6 w-6 text-amber-500 fill-amber-500" />
              ))}
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">4.8/5 average satisfaction rating</h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Based on 1,200+ verified client reviews across Google, Trustpilot and our internal feedback system
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
