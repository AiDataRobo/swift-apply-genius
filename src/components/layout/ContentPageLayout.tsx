
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContentPageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const ContentPageLayout = ({ children, title, subtitle }: ContentPageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="py-4 border-b bg-white">
        <div className="container max-w-7xl flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            <span className="font-display font-bold text-xl">SwiftApply</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost" className="hidden md:inline-flex">
                Log in
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="glass-button">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Page title section */}
      <div className="bg-slate-50/50 py-12 border-b">
        <div className="container max-w-7xl">
          <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
          {subtitle && <p className="text-lg text-muted-foreground mt-3 max-w-2xl">{subtitle}</p>}
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 py-16">
        <div className="container max-w-7xl">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-slate-50/50 border-t">
        <div className="container max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="flex items-center gap-2 mb-4">
                <FileText className="h-5 w-5 text-primary" />
                <span className="font-display font-bold text-lg">SwiftApply</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                AI-powered resume and cover letter builder to help you land your dream job.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link to="/#features" className="text-sm text-muted-foreground hover:text-primary">Features</Link></li>
                <li><Link to="/#how-it-works" className="text-sm text-muted-foreground hover:text-primary">How it Works</Link></li>
                <li><Link to="/#pricing" className="text-sm text-muted-foreground hover:text-primary">Pricing</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
                <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t">
            <p className="text-sm text-muted-foreground text-center">
              &copy; {new Date().getFullYear()} SwiftApply. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContentPageLayout;
