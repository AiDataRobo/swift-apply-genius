
import React, { useState, useEffect } from 'react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "After using SwiftApply, I received 4 interview calls in just one week. The AI-optimized resume really made my application stand out!",
      author: "Sarah Johnson",
      role: "Marketing Manager",
      company: "Tech Innovate",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
    },
    {
      quote: "The cover letter generator saved me hours of work and crafted the perfect message for each application. Landed my dream job within a month!",
      author: "Michael Chen",
      role: "Software Engineer",
      company: "CodeSphere",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
    },
    {
      quote: "After 6 months of job searching with no luck, I switched to SwiftApply. Within 2 weeks I had multiple offers to choose from!",
      author: "Emily Rodriguez",
      role: "Project Manager",
      company: "GlobalTech",
      image: "https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setIsAnimating(false);
      }, 500);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index: number) => {
    if (index === currentIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section id="testimonials" className="py-24 bg-accent/5 relative">
      <div className="container section-container">
        <div className="text-center mb-16">
          <h2 className="section-heading">Success Stories</h2>
          <p className="section-subheading mx-auto">
            Hear from job seekers who landed their dream roles with SwiftApply
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div 
            className={`glass-card p-10 rounded-3xl transition-opacity duration-500 ${
              isAnimating ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <div className="flex flex-col items-center text-center">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].author}
                className="w-20 h-20 rounded-full object-cover mb-6 border-4 border-white shadow-md"
              />
              
              <svg className="w-10 h-10 text-primary/20 mb-4" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.722 6.206c-5.945 2.266-10.722 8.09-10.722 13.95 0 5.143 3.249 9.844 8.085 9.844 3.875 0 6.423-2.528 6.423-6.548 0-3.646-2.315-6.843-6.012-6.843-0.182 0-0.449 0.047-0.613 0.093 1.261-1.95 3.757-4.413 6.993-5.65l-4.154-4.846zM24.378 6.206c-5.944 2.266-10.721 8.09-10.721 13.95 0 5.143 3.249 9.844 8.084 9.844 3.876 0 6.424-2.528 6.424-6.548 0-3.646-2.316-6.843-6.013-6.843-0.182 0-0.448 0.047-0.612 0.093 1.26-1.95 3.756-4.413 6.993-5.65l-4.155-4.846z"></path>
              </svg>
              
              <p className="text-xl md:text-2xl italic mb-8 text-foreground/90">
                {testimonials[currentIndex].quote}
              </p>
              
              <div>
                <h4 className="text-lg font-semibold">{testimonials[currentIndex].author}</h4>
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
