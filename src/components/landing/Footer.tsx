
import React from 'react';
import { Link } from 'react-router-dom';
import { ModeToggle } from "@/components/ModeToggle";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  MessageSquare, 
  Shield, 
  CreditCard, 
  LifeBuoy, 
  HelpCircle 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6">JobOnboard</h3>
            <p className="text-slate-400 mb-4">
              Professional resume and career services to help you land your dream job.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/resume-builder" className="text-slate-400 hover:text-white transition-colors">Resume Builder</Link></li>
              <li><Link to="/resume-builder" className="text-slate-400 hover:text-white transition-colors">Cover Letter Builder</Link></li>
              <li><Link to="#" className="text-slate-400 hover:text-white transition-colors">Professional Writing Services</Link></li>
              <li><Link to="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn Profile Optimization</Link></li>
              <li><Link to="#" className="text-slate-400 hover:text-white transition-colors">Career Coaching</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/templates" className="text-slate-400 hover:text-white transition-colors">Resume Templates</Link></li>
              <li><Link to="#" className="text-slate-400 hover:text-white transition-colors">Career Blog</Link></li>
              <li><Link to="#" className="text-slate-400 hover:text-white transition-colors">Resume Examples</Link></li>
              <li><Link to="#" className="text-slate-400 hover:text-white transition-colors">Job Search Tips</Link></li>
              <li><Link to="#" className="text-slate-400 hover:text-white transition-colors">Interview Preparation</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-slate-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="text-slate-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-slate-400 text-sm">
                © 2023 JobOnboard. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center text-slate-400 text-sm">
                <Shield className="h-4 w-4 mr-1 text-green-400" />
                <span>GDPR Compliant</span>
              </div>
              
              <div className="flex items-center text-slate-400 text-sm">
                <CreditCard className="h-4 w-4 mr-1 text-blue-400" />
                <span>Secure Payments</span>
              </div>
              
              <div className="hidden md:block">
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button size="lg" className="rounded-full h-14 w-14 shadow-lg">
          <MessageSquare className="h-6 w-6" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
