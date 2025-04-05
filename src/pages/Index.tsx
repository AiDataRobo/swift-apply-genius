
import React, { useEffect } from 'react';
import NavBar from '@/components/landing/NavBar';
import HeroSection from '@/components/landing/HeroSection';
import WhyChooseUsSection from '@/components/landing/WhyChooseUsSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import PricingSection from '@/components/landing/PricingSection';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';
import FreeConsultationSection from '@/components/landing/FreeConsultationSection';
import FloatingBookButton from '@/components/booking/FloatingBookButton';
import { useToast } from "@/hooks/use-toast";
import ExploreITCareerPathsSection from '@/components/landing/ExploreITCareerPathsSection';

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    const initAnimations = () => {
      const appearElements = document.querySelectorAll('.appear-on-scroll');

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
            }
          });
        },
        { threshold: 0.1 }
      );

      appearElements.forEach((el) => {
        observer.observe(el);
      });
    };

    initAnimations();

    // Welcome toast with improved message
    setTimeout(() => {
      toast({
        title: "Welcome to EnhanceResume",
        description: "Create your perfect resume in minutes with our AI-powered tools",
        duration: 5000,
      });
    }, 2000);

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, [toast]);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <NavBar />
      <main>
        <section className="section-hero">
          <HeroSection />
        </section>
        <section className="section-why-choose-us">
          <WhyChooseUsSection />
        </section>
        <section className="section-how-it-works">
          <HowItWorksSection />
        </section>
        <section id="it-career-paths" className="section-it-career-paths bg-gradient-to-b from-white to-slate-50">
          <ExploreITCareerPathsSection />
        </section>
        <section className="section-testimonials">
          <TestimonialsSection />
        </section>
        <section className="section-pricing">
          <PricingSection />
        </section>
        <section className="section-free-consultation">
          <FreeConsultationSection />
        </section>
        <section className="section-cta">
          <CTASection />
        </section>
      </main>
      <Footer />
      <FloatingBookButton />
    </div>
  );
};

export default Index;
