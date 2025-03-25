
import React, { useState } from 'react';
import { Star, ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
  linkedIn?: string;
}

interface BeforeAfterSample {
  id: number;
  title: string;
  industry: string;
  before: string;
  after: string;
}

const TestimonialsSection = () => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [activeSampleIndex, setActiveSampleIndex] = useState(0);
  
  // Sample testimonial data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Manager",
      company: "Tech Solutions Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&auto=format&fit=crop",
      quote: "Using the AI resume builder completely transformed my job search. I got 3 interviews within a week after updating my resume!",
      rating: 5,
      linkedIn: "https://linkedin.com/"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Software Engineer",
      company: "Innovate Systems",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop",
      quote: "I was struggling with my resume until I worked with their professional resume writer. The result was far beyond my expectations.",
      rating: 5,
      linkedIn: "https://linkedin.com/"
    },
    {
      id: 3,
      name: "Emily Davis",
      position: "HR Specialist",
      company: "Global Enterprises",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=256&h=256&auto=format&fit=crop",
      quote: "As someone who reviews resumes professionally, I was impressed by how ATS-friendly my new resume was. Landed my dream job within a month!",
      rating: 4,
      linkedIn: "https://linkedin.com/"
    }
  ];
  
  // Sample before/after resume examples
  const beforeAfterSamples: BeforeAfterSample[] = [
    {
      id: 1,
      title: "Finance Professional Resume",
      industry: "Banking",
      before: "https://images.unsplash.com/photo-1586282391129-76a6df230234?q=80&w=1000&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1589330694146-1b5577d6aa2f?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "IT Specialist Resume",
      industry: "Technology",
      before: "https://images.unsplash.com/photo-1575708249597-46c8a47c4c8e?q=80&w=1000&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1626300289976-287ca3f73a9a?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Marketing Coordinator Resume",
      industry: "Marketing",
      before: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1000&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1599488115953-4317d33b098a?q=80&w=1000&auto=format&fit=crop"
    }
  ];
  
  const nextTestimonial = () => {
    setActiveTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const nextSample = () => {
    setActiveSampleIndex((prev) => (prev + 1) % beforeAfterSamples.length);
  };
  
  const prevSample = () => {
    setActiveSampleIndex((prev) => (prev - 1 + beforeAfterSamples.length) % beforeAfterSamples.length);
  };
  
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
      />
    ));
  };
  
  return (
    <section id="testimonials" className="py-24 bg-slate-50/50">
      <div className="container max-w-7xl mx-auto px-6">
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
            className="section-heading mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Real Results from Real People
          </motion.h2>
          <motion.p 
            className="section-subheading mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            See how our tools have helped thousands land their dream jobs
          </motion.p>
        </div>
        
        {/* Trust Metrics */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-3xl font-bold text-primary mb-1">500,000+</h3>
            <p className="text-sm text-muted-foreground">Resumes Created</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-3xl font-bold text-primary mb-1">4.9/5</h3>
            <p className="text-sm text-muted-foreground">Customer Rating</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-3xl font-bold text-primary mb-1">86%</h3>
            <p className="text-sm text-muted-foreground">Interview Success Rate</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-3xl font-bold text-primary mb-1">120+</h3>
            <p className="text-sm text-muted-foreground">Expert Resume Writers</p>
          </div>
        </motion.div>
        
        {/* Before & After Samples */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-10">Before & After Resume Transformations</h3>
          
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeSampleIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <div className="flex flex-col">
                  <div className="bg-white border border-gray-200 rounded-t-lg p-4">
                    <h4 className="font-medium">Before</h4>
                  </div>
                  <div className="relative aspect-[3/4] w-full bg-white shadow rounded-b-lg overflow-hidden">
                    <img 
                      src={beforeAfterSamples[activeSampleIndex].before} 
                      alt="Before resume example" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-red-500/10 flex items-center justify-center">
                      <div className="bg-white/80 px-4 py-2 rounded-lg text-red-600 font-medium text-sm">
                        Needs Improvement
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <div className="bg-white border border-gray-200 rounded-t-lg p-4">
                    <h4 className="font-medium">After</h4>
                  </div>
                  <div className="relative aspect-[3/4] w-full bg-white shadow rounded-b-lg overflow-hidden">
                    <img 
                      src={beforeAfterSamples[activeSampleIndex].after} 
                      alt="After resume example" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-green-500/10 flex items-center justify-center">
                      <div className="bg-white/80 px-4 py-2 rounded-lg text-green-600 font-medium text-sm">
                        <CheckCircle className="h-4 w-4 inline mr-1" />
                        Optimized & Professional
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="absolute -left-4 md:-left-10 top-1/2 transform -translate-y-1/2">
              <Button 
                size="icon" 
                variant="outline" 
                className="rounded-full" 
                onClick={prevSample}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="absolute -right-4 md:-right-10 top-1/2 transform -translate-y-1/2">
              <Button 
                size="icon" 
                variant="outline" 
                className="rounded-full" 
                onClick={nextSample}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="mt-8 flex justify-center gap-2">
              {beforeAfterSamples.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === activeSampleIndex ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  onClick={() => setActiveSampleIndex(index)}
                />
              ))}
            </div>
            
            <div className="text-center mt-4 text-sm text-muted-foreground">
              <p>{beforeAfterSamples[activeSampleIndex].title} - {beforeAfterSamples[activeSampleIndex].industry} Industry</p>
            </div>
          </div>
        </motion.div>
        
        {/* User Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-10">What Our Users Say</h3>
          
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonialIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-md p-8 md:p-10"
              >
                <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                  <img 
                    src={testimonials[activeTestimonialIndex].image} 
                    alt={testimonials[activeTestimonialIndex].name} 
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex mb-2">
                      {renderStars(testimonials[activeTestimonialIndex].rating)}
                    </div>
                    <h4 className="font-bold text-lg">{testimonials[activeTestimonialIndex].name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[activeTestimonialIndex].position} at {testimonials[activeTestimonialIndex].company}
                    </p>
                    {testimonials[activeTestimonialIndex].linkedIn && (
                      <a 
                        href={testimonials[activeTestimonialIndex].linkedIn} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline"
                      >
                        View LinkedIn Profile
                      </a>
                    )}
                  </div>
                </div>
                <blockquote className="text-lg italic text-gray-700">
                  "{testimonials[activeTestimonialIndex].quote}"
                </blockquote>
              </motion.div>
            </AnimatePresence>
            
            <div className="absolute -left-4 md:-left-10 top-1/2 transform -translate-y-1/2">
              <Button 
                size="icon" 
                variant="outline" 
                className="rounded-full" 
                onClick={prevTestimonial}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="absolute -right-4 md:-right-10 top-1/2 transform -translate-y-1/2">
              <Button 
                size="icon" 
                variant="outline" 
                className="rounded-full" 
                onClick={nextTestimonial}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="mt-8 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === activeTestimonialIndex ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  onClick={() => setActiveTestimonialIndex(index)}
                />
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Logos */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground mb-6">Our users have been hired at leading companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
            {/* Add company logos here */}
            <div className="h-8">
              <svg className="h-full w-auto" viewBox="0 0 124 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34Z" fill="#0A66C2"/>
                <path d="M7.33016 13.1692H11.3027V27.0213H7.33016V13.1692ZM9.31642 5.35568C10.6109 5.35568 11.6596 6.4044 11.6596 7.69891C11.6596 8.99342 10.6109 10.0421 9.31642 10.0421C8.02191 10.0421 6.97318 8.99342 6.97318 7.69891C6.97318 6.4044 8.02191 5.35568 9.31642 5.35568" fill="white"/>
                <path d="M14.0626 13.1692H17.8885V14.9088H17.9458C18.4597 13.897 19.8684 12.8122 22.0127 12.8122C26.0282 12.8122 26.8561 15.4938 26.8561 19.0483V27.0213H22.8835V19.9908C22.8835 18.4105 22.8548 16.3551 20.6532 16.3551C18.4229 16.3551 17.991 18.0947 17.991 19.8913V27.0213H14.0626V13.1692Z" fill="white"/>
              </svg>
            </div>
            <div className="h-8">
              <svg className="h-full w-auto" viewBox="0 0 132 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.9906 15.4429C47.9906 16.0062 47.9033 16.5041 47.7287 16.9365C47.5541 17.3689 47.3142 17.7358 47.0091 18.037C46.704 18.3382 46.3335 18.5675 45.8976 18.7247C45.4618 18.882 44.975 18.9606 44.4373 18.9606C43.8996 18.9606 43.4129 18.882 42.977 18.7247C42.5412 18.5675 42.1706 18.3382 41.8655 18.037C41.5604 17.7358 41.3187 17.3689 41.1404 16.9365C40.9621 16.5041 40.873 16.0062 40.873 15.4429C40.873 14.8797 40.9621 14.3818 41.1404 13.9494C41.3187 13.517 41.5604 13.1501 41.8655 12.8489C42.1706 12.5477 42.5412 12.3183 42.977 12.1611C43.4129 12.0039 43.8996 11.9252 44.4373 11.9252C44.975 11.9252 45.4618 12.0039 45.8976 12.1611C46.3335 12.3183 46.704 12.5477 47.0091 12.8489C47.3142 13.1501 47.5541 13.517 47.7287 13.9494C47.9033 14.3818 47.9906 14.8797 47.9906 15.4429Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="h-8">
              <svg className="h-full w-auto" viewBox="0 0 132 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M68.4064 20.7893V23.295H63.6429V20.7893H68.4064ZM63.7994 27.9448C63.7994 26.8123 64.002 25.8094 64.407 24.9362C64.8121 24.063 65.4042 23.3895 66.1833 22.9156C66.9624 22.4417 67.8738 22.2049 68.9175 22.2049C69.7877 22.2049 70.5373 22.3598 71.1663 22.6698C71.7952 22.9798 72.2873 23.3596 72.6424 23.8093V22.4898H77.0222V34.8333H72.6424V33.5138C72.2768 33.9634 71.7783 34.3433 71.1468 34.6533C70.5153 34.9632 69.7636 35.1182 68.8915 35.1182C67.859 35.1182 66.9551 34.8851 66.1796 34.419C65.404 33.9528 64.8139 33.283 64.407 32.4098C64.002 31.5366 63.7994 30.5299 63.7994 29.3925V27.9448Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
