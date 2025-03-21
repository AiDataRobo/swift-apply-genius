
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add('animate-fade-in');
    }
    
    // Add parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const heroElement = heroRef.current;
      const heroChildren = heroElement.querySelectorAll('.parallax-element');
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      heroChildren.forEach((element) => {
        const el = element as HTMLElement;
        const speed = parseFloat(el.getAttribute('data-speed') || '0.05');
        const moveX = (x - 0.5) * speed * 50;
        const moveY = (y - 0.5) * speed * 50;
        
        el.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="min-h-screen relative flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl parallax-element" data-speed="0.05" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl parallax-element" data-speed="0.08" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl parallax-element" data-speed="0.06" />
      <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl parallax-element" data-speed="0.07" />
      
      <div className="container max-w-7xl text-center relative z-10">
        <div className="inline-flex items-center px-4 py-2 bg-foreground/5 rounded-full mb-6 animate-fade-in neon-border" style={{ animationDelay: '0.3s' }}>
          <span className="text-xs font-medium text-accent mr-2">NEW</span>
          <span className="text-xs font-medium">AI-Powered Resume Generator</span>
        </div>
        
        <h1 className="section-heading mb-6 mx-auto max-w-4xl animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          Create Your Perfect <span className="neon-text">Resume & Cover Letter</span> in Seconds with AI!
        </h1>
        
        <p className="section-subheading mx-auto animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          Land your dream job with AI-powered, ATS-optimized resumes and cover letters—designed to impress recruiters.
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <Button className="neon-button text-base py-6 px-8 rounded-xl w-full sm:w-auto">
            Get Started for Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button variant="outline" className="text-base py-6 px-8 rounded-xl w-full sm:w-auto border-accent/50 text-accent hover:bg-accent/10">
            See Examples
          </Button>
        </div>
        
        <div className="mt-12 flex flex-col items-center animate-fade-in" style={{ animationDelay: '1.1s' }}>
          <div className="text-sm text-muted-foreground mb-4">Trusted by 10,000+ Job Seekers</div>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="h-8 opacity-50 hover:opacity-70 transition-opacity">
              <svg className="h-full w-auto" viewBox="0 0 124 34" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34Z" fill="#0A66C2"/>
                <path d="M7.33016 13.1692H11.3027V27.0213H7.33016V13.1692ZM9.31642 5.35568C10.6109 5.35568 11.6596 6.4044 11.6596 7.69891C11.6596 8.99342 10.6109 10.0421 9.31642 10.0421C8.02191 10.0421 6.97318 8.99342 6.97318 7.69891C6.97318 6.4044 8.02191 5.35568 9.31642 5.35568" fill="white"/>
                <path d="M14.0626 13.1692H17.8885V14.9088H17.9458C18.4597 13.897 19.8684 12.8122 22.0127 12.8122C26.0282 12.8122 26.8561 15.4938 26.8561 19.0483V27.0213H22.8835V19.9908C22.8835 18.4105 22.8548 16.3551 20.6532 16.3551C18.4229 16.3551 17.991 18.0947 17.991 19.8913V27.0213H14.0626V13.1692Z" fill="white"/>
              </svg>
            </div>
            <div className="h-8 opacity-50 hover:opacity-70 transition-opacity">
              <svg className="h-full w-auto" viewBox="0 0 132 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.9906 15.4429C47.9906 16.0062 47.9033 16.5041 47.7287 16.9365C47.5541 17.3689 47.3142 17.7358 47.0091 18.037C46.704 18.3382 46.3335 18.5675 45.8976 18.7247C45.4618 18.882 44.975 18.9606 44.4373 18.9606C43.8996 18.9606 43.4129 18.882 42.977 18.7247C42.5412 18.5675 42.1706 18.3382 41.8655 18.037C41.5604 17.7358 41.3187 17.3689 41.1404 16.9365C40.9621 16.5041 40.873 16.0062 40.873 15.4429C40.873 14.8797 40.9621 14.3818 41.1404 13.9494C41.3187 13.517 41.5604 13.1501 41.8655 12.8489C42.1706 12.5477 42.5412 12.3183 42.977 12.1611C43.4129 12.0039 43.8996 11.9252 44.4373 11.9252C44.975 11.9252 45.4618 12.0039 45.8976 12.1611C46.3335 12.3183 46.704 12.5477 47.0091 12.8489C47.3142 13.1501 47.5541 13.517 47.7287 13.9494C47.9033 14.3818 47.9906 14.8797 47.9906 15.4429ZM47.3415 20.7893V34.8333H41.5222V20.7893H47.3415ZM62.1884 27.8131C62.1884 28.1962 62.166 28.5913 62.1212 28.9983H53.4802C53.5474 29.9371 53.8356 30.655 54.345 31.1518C54.8544 31.6486 55.4958 31.8971 56.2692 31.8971C57.3327 31.8971 58.0534 31.4003 58.4315 30.4067H61.8999C61.6395 31.3456 61.2041 32.173 60.5937 32.889C59.9833 33.605 59.2387 34.1693 58.3597 34.5819C57.4808 34.9945 56.5105 35.2008 55.4487 35.2008C54.1506 35.2008 52.9951 34.9318 51.9821 34.3938C50.9691 33.8559 50.1726 33.0757 49.5928 32.0533C49.0129 31.0309 48.723 29.8008 48.723 28.3629C48.723 26.925 49.0111 25.6949 49.5873 24.6725C50.1635 23.65 50.9582 22.8699 51.9712 22.3319C52.9842 21.7939 54.1433 21.5249 55.4487 21.5249C56.7093 21.5249 57.8338 21.7865 58.8225 22.3097C59.8111 22.8329 60.5902 23.5831 61.1598 24.5603C61.7294 25.5375 62.0147 26.6886 62.1195 28.0221L62.1884 27.8131ZM57.3672 26.6028C57.3672 25.7932 57.1003 25.145 56.5663 24.6582C56.0323 24.1714 55.3637 23.9279 54.5607 23.9279C53.7922 23.9279 53.1399 24.1641 52.6041 24.6363C52.0683 25.1086 51.7347 25.7642 51.6033 26.6028H57.3672Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
