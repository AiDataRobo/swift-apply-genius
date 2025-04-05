
import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

interface ProtectedAdminRouteProps {
  children: React.ReactNode;
}

const ProtectedAdminRoute = ({ children }: ProtectedAdminRouteProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean | null>(null);

  useEffect(() => {
    // Check if admin is logged in
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    setIsAuthenticated(isAdmin);
    
    if (!isAdmin) {
      toast({
        title: "Access denied",
        description: "You must be an administrator to view this page",
        variant: "destructive",
      });
    }
  }, [toast]);

  // Show loading state while checking authentication
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  // Render children if authenticated
  return <>{children}</>;
};

export default ProtectedAdminRoute;
