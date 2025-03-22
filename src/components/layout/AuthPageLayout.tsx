
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

interface AuthPageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const AuthPageLayout = ({ children, title, subtitle }: AuthPageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-slate-50/50">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <FileText className="h-6 w-6 text-primary" />
            <span className="font-display font-bold text-xl">SwiftApply</span>
          </Link>
          <h1 className="text-2xl font-bold">{title}</h1>
          {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          {children}
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SwiftApply. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPageLayout;
