
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle, Shield } from 'lucide-react';
import AuthSidebar from './AuthSidebar';
import { motion } from 'framer-motion';

interface AuthPageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  isLogin?: boolean;
}

const AuthPageLayout = ({ children, title, subtitle, isLogin = false }: AuthPageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50/50">
      {/* Left side (60%) - Dynamic content section */}
      <AuthSidebar isLogin={isLogin} />
      
      {/* Right side (40%) - Form section */}
      <div className="w-full md:w-2/5 flex flex-col items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-md">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="inline-flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity">
              <FileText className="h-6 w-6 text-primary" />
              <span className="font-display font-bold text-xl">SwiftApply</span>
            </Link>
            <h1 className="text-2xl font-bold">{title}</h1>
            {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
          </motion.div>

          <motion.div 
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {children}
          </motion.div>
          
          <motion.div 
            className="mt-6 flex flex-col items-center space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Shield className="h-3 w-3" />
              <span>100% Secure & Private</span>
            </div>
            
            <div className="flex items-center gap-1 text-xs">
              <CheckCircle className="h-3 w-3 text-green-500" />
              <span>Join 10,000+ professionals using JobOnboard</span>
            </div>
            
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} SwiftApply. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AuthPageLayout;
