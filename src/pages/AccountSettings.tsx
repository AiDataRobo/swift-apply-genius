
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { ModeToggle } from '@/components/ModeToggle';
import { SidebarProvider } from '@/components/ui/sidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import UserSettings from '@/components/dashboard/UserSettings';

const AccountSettings = () => {
  const { user, isLoading } = useAuth();

  // While checking auth status, show loading state
  if (isLoading) {
    return <div className="flex h-screen items-center justify-center">
      <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
    </div>;
  }

  // If not logged in, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Mock user data - in a real app, this would come from user context
  const mockUser = {
    name: user?.user_metadata?.full_name || "User",
    email: user?.email || "",
    isPremium: false
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SidebarProvider>
        <div className="flex flex-1 w-full overflow-hidden">
          <DashboardSidebar user={mockUser} />
          
          <div className="flex-1 flex flex-col min-h-screen overflow-auto">
            <DashboardHeader user={mockUser} />
            
            <main className="flex-grow p-4 md:p-6 overflow-y-auto">
              <div className="container mx-auto max-w-4xl">
                <UserSettings user={mockUser} />
              </div>
            </main>
          </div>
        </div>
      </SidebarProvider>
      
      <div className="fixed bottom-4 right-4">
        <ModeToggle />
      </div>
    </div>
  );
};

export default AccountSettings;
