
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ravi Kumar',
      position: 'Software Engineer',
      company: 'Google',
      text: "With SwiftApply's help, I improved my resume and landed interviews at 3 top tech companies. Their AI suggestions were surprisingly accurate!",
      rating: 5,
      avatar: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'Priya Singh',
      position: 'Product Manager',
      company: 'Amazon',
      text: "The Interview Guarantee Package was worth every penny. I got 7 interview calls in two weeks after struggling for months on my own.",
      rating: 5,
      avatar: '/placeholder.svg'
    },
    {
      id: 3,
      name: 'Ajay Verma',
      position: 'Data Scientist',
      company: 'Microsoft',
      text: "The LinkedIn optimization service helped me get noticed by recruiters. I received 5 connection requests from hiring managers in the first week!",
      rating: 4,
      avatar: '/placeholder.svg'
    }
  ];
  
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Success Stories</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-5">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position} at {testimonial.company}
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <Quote className="h-6 w-6 text-primary/20 absolute -left-1 -top-1" />
                <p className="text-sm pl-5">"{testimonial.text}"</p>
              </div>
              
              <div className="flex mt-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
