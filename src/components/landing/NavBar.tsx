
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { FileText, Menu, X, FileCheck, Star, DollarSign, Users, MessageSquare } from "lucide-react";
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container max-w-7xl flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            <span className="font-display font-bold text-xl">SwiftApply</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/resume-templates" className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1">
            <FileText className="h-4 w-4" />
            <span>Resume Templates</span>
          </Link>
          <Link to="/cover-letter-templates" className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1">
            <FileCheck className="h-4 w-4" />
            <span>Cover Letter</span>
          </Link>
          <Link to="#testimonials" className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1">
            <Star className="h-4 w-4" />
            <span>Testimonials</span>
          </Link>
          <Link to="#pricing" className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1">
            <DollarSign className="h-4 w-4" />
            <span>Pricing</span>
          </Link>
          <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>About</span>
          </Link>
          <Link to="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1">
            <MessageSquare className="h-4 w-4" />
            <span>Contact</span>
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link to="/login" className="hidden md:inline-flex">
            <Button variant="ghost">
              Log in
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="glass-button">
              Get Started
            </Button>
          </Link>
          
          <button 
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t mt-3 py-4">
          <div className="container space-y-3">
            <Link 
              to="/resume-templates" 
              className="flex items-center gap-2 py-2 text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FileText className="h-4 w-4" />
              <span>Resume Templates</span>
            </Link>
            <Link 
              to="/cover-letter-templates" 
              className="flex items-center gap-2 py-2 text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FileCheck className="h-4 w-4" />
              <span>Cover Letter</span>
            </Link>
            <Link 
              to="#testimonials" 
              className="flex items-center gap-2 py-2 text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Star className="h-4 w-4" />
              <span>Testimonials</span>
            </Link>
            <Link 
              to="#pricing" 
              className="flex items-center gap-2 py-2 text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <DollarSign className="h-4 w-4" />
              <span>Pricing</span>
            </Link>
            <Link 
              to="/about" 
              className="flex items-center gap-2 py-2 text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Users className="h-4 w-4" />
              <span>About</span>
            </Link>
            <Link 
              to="/contact" 
              className="flex items-center gap-2 py-2 text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <MessageSquare className="h-4 w-4" />
              <span>Contact</span>
            </Link>
            <div className="pt-3 border-t">
              <Link 
                to="/login" 
                className="block py-2 text-foreground hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
