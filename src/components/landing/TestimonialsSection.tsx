
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Briefcase, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Aditya S.",
    position: "Software Engineer",
    company: "Microsoft",
    testimonial: "EnhanceResume helped me craft a perfect tech resume that highlighted my skills in the best way. I landed my dream job at Microsoft within 3 weeks!",
    rating: 5,
    achievement: "Landed job in 3 weeks",
    image: "/lovable-uploads/632f7133-bba3-48c3-abfb-99add820f62b.png"
  },
  {
    name: "Priya M.",
    position: "Marketing Manager",
    company: "Amazon",
    testimonial: "After using EnhanceResume's professional writing service, I received more interview calls in one week than I had in the previous three months!",
    rating: 5,
    achievement: "6 interviews in 1 week",
    image: null
  },
  {
    name: "Rahul K.",
    position: "Data Scientist",
    company: "IBM",
    testimonial: "The ATS optimization feature is game-changing. My resume finally started getting past applicant tracking systems, and I secured a role at IBM!",
    rating: 5,
    achievement: "20+ callbacks",
    image: "/lovable-uploads/632f7133-bba3-48c3-abfb-99add820f62b.png"
  },
  {
    name: "Neha P.",
    position: "HR Specialist",
    company: "Adobe",
    testimonial: "As someone who reviews resumes for a living, I was impressed by the quality and professionalism of EnhanceResume. Now I recommend it to all job seekers!",
    rating: 5,
    achievement: "Career change success",
    image: null
  }
];

const TestimonialsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };
  
  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? Math.ceil(testimonials.length / 3) - 1 : prev - 1));
  };
  
  const visibleTestimonials = testimonials.slice(activeSlide * 3, activeSlide * 3 + 3);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-medium text-primary">SUCCESS STORIES</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            What Our Customers Are Saying
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join thousands of satisfied job seekers who've transformed their careers with EnhanceResume
          </motion.p>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border-slate-100">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center">
                        <Avatar className="h-12 w-12 mr-4 border-2 border-primary/10">
                          {testimonial.image ? (
                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          ) : (
                            <AvatarFallback className="bg-primary/10 text-primary">
                              {testimonial.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          )}
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.position} at {testimonial.company}</p>
                        </div>
                      </div>
                      <div>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-100">
                          <Briefcase className="h-3 w-3 mr-1" />
                          {testimonial.achievement}
                        </Badge>
                      </div>
                    </div>

                    <div className="mb-4 flex-grow">
                      <div className="relative">
                        <Quote className="absolute -left-2 -top-2 h-6 w-6 text-slate-200 rotate-180" />
                        <p className="italic text-slate-600 pl-6">{testimonial.testimonial}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center mt-auto">
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-xs text-slate-500 ml-2">Verified Review</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {/* Carousel Navigation */}
          {testimonials.length > 3 && (
            <div className="flex justify-center mt-8 gap-4">
              <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl border border-slate-200">
            {/* Video testimonial embed (placeholder) */}
            <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
              <div className="text-center">
                <Play className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-lg font-medium">Watch Rahul's Success Story</p>
                <p className="text-sm text-muted-foreground">From job hunting for 3 months to landing a role at IBM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
