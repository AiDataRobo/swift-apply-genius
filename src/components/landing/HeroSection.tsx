
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, FileText, Zap, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const popIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 0.8
      }
    }
  };

  const shimmer = {
    hidden: { opacity: 0.3 },
    visible: { 
      opacity: 1,
      transition: { 
        repeat: Infinity, 
        repeatType: "reverse" as const, 
        duration: 1.5 
      }
    }
  };

  return (
    <motion.section 
      ref={heroRef} 
      className="min-h-screen relative flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <motion.div className="absolute top-1/4 left-1/4 w-60 h-60 bg-primary/10 rounded-full blur-3xl parallax-element" data-speed="0.05" variants={fadeInUp} />
      <motion.div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl parallax-element" data-speed="0.08" variants={fadeInUp} />
      
      {/* Decorative elements */}
      <motion.div className="absolute top-1/4 right-[15%] w-24 h-24 opacity-20 parallax-element" data-speed="0.12" variants={fadeInUp}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M26.6,-44.1C35.1,-35.9,43,-28.8,46.9,-19.8C50.8,-10.8,50.8,0.1,48.9,11.1C47,22.1,43.2,33.1,35.3,42.5C27.4,51.9,15.5,59.6,3.4,56.2C-8.7,52.9,-20.8,38.4,-28.2,27.5C-35.6,16.5,-38.3,9.2,-38.3,0C-38.2,-9.1,-35.5,-18.1,-29.6,-26.4C-23.7,-34.6,-14.7,-42.1,-4.3,-37.8C6.1,-33.5,18,-52.3,26.6,-44.1Z" transform="translate(100 100)" />
        </svg>
      </motion.div>
      
      <motion.div className="absolute bottom-1/3 left-[10%] w-32 h-32 opacity-30 parallax-element" data-speed="0.1" variants={fadeInUp}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M45.7,-56.5C58.9,-47.8,69.2,-33.1,72.7,-16.8C76.2,-0.4,73.1,17.6,63.9,30.9C54.7,44.1,39.5,52.5,24.1,57.4C8.6,62.3,-7,63.7,-20.6,58.6C-34.1,53.5,-45.5,42,-54.6,27.7C-63.7,13.5,-70.3,-3.6,-66.9,-18.1C-63.5,-32.6,-50.1,-44.6,-36.1,-53.1C-22.1,-61.5,-7.5,-66.4,7.5,-74.1C22.5,-81.9,32.5,-65.3,45.7,-56.5Z" transform="translate(100 100)" />
        </svg>
      </motion.div>
      
      <div className="container max-w-7xl text-center relative z-10">
        <motion.div 
          className="inline-flex items-center px-4 py-2 bg-foreground/5 rounded-full mb-6"
          variants={popIn}
        >
          <span className="text-xs font-medium text-primary mr-2">NEW</span>
          <span className="text-xs font-medium">AI-Powered Resume Generator</span>
          <motion.span variants={shimmer} className="ml-2">
            <Sparkles className="h-3 w-3 text-primary" />
          </motion.span>
        </motion.div>
        
        <motion.h1 
          className="section-heading mb-6 mx-auto max-w-4xl"
          variants={fadeInUp}
        >
          Create Your Perfect <span className="text-primary">Resume & Cover Letter</span> in Seconds with AI!
          <motion.span 
            className="inline-block ml-2" 
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 10, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 5 }}
          >
            <Zap className="inline-block h-8 w-8 text-primary" />
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="section-subheading mx-auto"
          variants={fadeInUp}
        >
          Land your dream job with AI-powered, ATS-optimized resumes and cover letters—designed to impress recruiters.
        </motion.p>
        
        <motion.div 
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={fadeInUp}
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button className="glass-button text-base py-6 px-8 rounded-xl w-full sm:w-auto group relative overflow-hidden" asChild>
              <Link to="/resume-builder">
                <span className="relative z-10 flex items-center">
                  Get Started for Free
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <motion.span 
                  className="absolute inset-0 bg-primary/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 1 }}
                />
              </Link>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button variant="outline" className="text-base py-6 px-8 rounded-xl w-full sm:w-auto">
              <FileText className="mr-2 h-5 w-5" />
              See Examples
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-12 flex flex-col items-center"
          variants={fadeInUp}
        >
          <div className="text-sm text-muted-foreground mb-4">Trusted by 10,000+ Job Seekers</div>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <motion.div 
              className="h-8 opacity-70 hover:opacity-100 transition-opacity duration-300"
              whileHover={{ y: -3 }}
            >
              <svg className="h-full w-auto" viewBox="0 0 124 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34Z" fill="#0A66C2"/>
                <path d="M7.33016 13.1692H11.3027V27.0213H7.33016V13.1692ZM9.31642 5.35568C10.6109 5.35568 11.6596 6.4044 11.6596 7.69891C11.6596 8.99342 10.6109 10.0421 9.31642 10.0421C8.02191 10.0421 6.97318 8.99342 6.97318 7.69891C6.97318 6.4044 8.02191 5.35568 9.31642 5.35568" fill="white"/>
                <path d="M14.0626 13.1692H17.8885V14.9088H17.9458C18.4597 13.897 19.8684 12.8122 22.0127 12.8122C26.0282 12.8122 26.8561 15.4938 26.8561 19.0483V27.0213H22.8835V19.9908C22.8835 18.4105 22.8548 16.3551 20.6532 16.3551C18.4229 16.3551 17.991 18.0947 17.991 19.8913V27.0213H14.0626V13.1692Z" fill="white"/>
              </svg>
            </motion.div>
            <motion.div 
              className="h-8 opacity-70 hover:opacity-100 transition-opacity duration-300"
              whileHover={{ y: -3 }}
            >
              <svg className="h-full w-auto" viewBox="0 0 132 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.9906 15.4429C47.9906 16.0062 47.9033 16.5041 47.7287 16.9365C47.5541 17.3689 47.3142 17.7358 47.0091 18.037C46.704 18.3382 46.3335 18.5675 45.8976 18.7247C45.4618 18.882 44.975 18.9606 44.4373 18.9606C43.8996 18.9606 43.4129 18.882 42.977 18.7247C42.5412 18.5675 42.1706 18.3382 41.8655 18.037C41.5604 17.7358 41.3187 17.3689 41.1404 16.9365C40.9621 16.5041 40.873 16.0062 40.873 15.4429C40.873 14.8797 40.9621 14.3818 41.1404 13.9494C41.3187 13.517 41.5604 13.1501 41.8655 12.8489C42.1706 12.5477 42.5412 12.3183 42.977 12.1611C43.4129 12.0039 43.8996 11.9252 44.4373 11.9252C44.975 11.9252 45.4618 12.0039 45.8976 12.1611C46.3335 12.3183 46.704 12.5477 47.0091 12.8489C47.3142 13.1501 47.5541 13.517 47.7287 13.9494C47.9033 14.3818 47.9906 14.8797 47.9906 15.4429ZM47.3415 20.7893V34.8333H41.5222V20.7893H47.3415ZM62.1884 27.8131C62.1884 28.1962 62.166 28.5913 62.1212 28.9983H53.4802C53.5474 29.9371 53.8356 30.655 54.345 31.1518C54.8544 31.6486 55.4958 31.8971 56.2692 31.8971C57.3327 31.8971 58.0534 31.4003 58.4315 30.4067H61.8999C61.6395 31.3456 61.2041 32.173 60.5937 32.889C59.9833 33.605 59.2387 34.1693 58.3597 34.5819C57.4808 34.9945 56.5105 35.2008 55.4487 35.2008C54.1506 35.2008 52.9951 34.9318 51.9821 34.3938C50.9691 33.8559 50.1726 33.0757 49.5928 32.0533C49.0129 31.0309 48.723 29.8008 48.723 28.3629C48.723 26.925 49.0111 25.6949 49.5873 24.6725C50.1635 23.65 50.9582 22.8699 51.9712 22.3319C52.9842 21.7939 54.1433 21.5249 55.4487 21.5249C56.7093 21.5249 57.8338 21.7865 58.8225 22.3097C59.8111 22.8329 60.5902 23.5831 61.1598 24.5603C61.7294 25.5375 62.0147 26.6886 62.1195 28.0221L62.1884 27.8131ZM57.3672 26.6028C57.3672 25.7932 57.1003 25.145 56.5663 24.6582C56.0323 24.1714 55.3637 23.9279 54.5607 23.9279C53.7922 23.9279 53.1399 24.1641 52.6041 24.6363C52.0683 25.1086 51.7347 25.7642 51.6033 26.6028H57.3672ZM68.4064 20.7893V23.295H63.6429V20.7893H68.4064ZM63.7994 27.9448C63.7994 26.8123 64.002 25.8094 64.407 24.9362C64.8121 24.063 65.4042 23.3895 66.1833 22.9156C66.9624 22.4417 67.8738 22.2049 68.9175 22.2049C69.7877 22.2049 70.5373 22.3598 71.1663 22.6698C71.7952 22.9798 72.2873 23.3596 72.6424 23.8093V22.4898H77.0222V34.8333H72.6424V33.5138C72.2768 33.9634 71.7783 34.3433 71.1468 34.6533C70.5153 34.9632 69.7636 35.1182 68.8915 35.1182C67.859 35.1182 66.9551 34.8851 66.1796 34.419C65.404 33.9528 64.8139 33.283 64.407 32.4098C64.002 31.5366 63.7994 30.5299 63.7994 29.3925V27.9448ZM72.6424 29.3671C72.6424 28.5389 72.3968 27.8858 71.9056 27.4074C71.4143 26.929 70.8211 26.6898 70.1259 26.6898C69.4307 26.6898 68.8357 26.929 68.3408 27.4074C67.8458 27.8858 67.5984 28.5389 67.5984 29.3671C67.5984 30.1953 67.8458 30.8484 68.3408 31.3268C68.8357 31.8053 69.4307 32.0444 70.1259 32.0444C70.8211 32.0444 71.4143 31.8053 71.9056 31.3268C72.3968 30.8484 72.6424 30.1953 72.6424 29.3671ZM78.5923 15.4429C78.5923 16.0062 78.5051 16.5041 78.3304 16.9365C78.1558 17.3689 77.9159 17.7358 77.6108 18.037C77.3057 18.3382 76.9352 18.5675 76.4993 18.7247C76.0635 18.882 75.5767 18.9606 75.039 18.9606C74.5014 18.9606 74.0146 18.882 73.5787 18.7247C73.1429 18.5675 72.7724 18.3382 72.4673 18.037C72.1622 17.7358 71.9204 17.3689 71.7422 16.9365C71.5639 16.5041 71.4747 16.0062 71.4747 15.4429C71.4747 14.8797 71.5639 14.3818 71.7422 13.9494C71.9204 13.517 72.1622 13.1501 72.4673 12.8489C72.7724 12.5477 73.1429 12.3183 73.5787 12.1611C74.0146 12.0039 74.5014 11.9252 75.039 11.9252C75.5767 11.9252 76.0635 12.0039 76.4993 12.1611C76.9352 12.3183 77.3057 12.5477 77.6108 12.8489C77.9159 13.1501 78.1558 13.517 78.3304 13.9494C78.5051 14.3818 78.5923 14.8797 78.5923 15.4429ZM77.9432 20.7893V34.8333H72.124V20.7893H77.9432ZM79.4838 27.9448C79.4838 26.7906 79.679 25.7692 80.0692 24.8802C80.4594 23.9912 80.9943 23.2476 81.6739 22.6494C82.3534 22.0512 83.1325 21.5953 84.0115 21.2817C84.8904 20.968 85.8212 20.8112 86.8044 20.8112C88.2254 20.8112 89.4723 21.1248 90.5454 21.7525C91.6184 22.3803 92.4231 23.3078 92.9597 24.535H88.5322C88.1541 23.7957 87.5594 23.4264 86.748 23.4264C86.0304 23.4264 85.4535 23.6906 85.0175 24.219C84.5817 24.7474 84.3637 25.5088 84.3637 26.5034C84.3637 27.4979 84.5817 28.2595 85.0175 28.78" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
