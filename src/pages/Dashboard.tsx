
import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ModeToggle } from '@/components/ModeToggle';
import { SidebarProvider } from '@/components/ui/sidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import WelcomeSection from '@/components/dashboard/WelcomeSection';
import DocumentManager from '@/components/dashboard/DocumentManager';
import AIAssistantPanel from '@/components/dashboard/AIAssistantPanel';
import JobTracker from '@/components/dashboard/JobTracker';
import TemplateLibrary from '@/components/dashboard/TemplateLibrary';
import UserSettings from '@/components/dashboard/UserSettings';
import QuickActionsSection from '@/components/dashboard/QuickActionsSection';
import ProgressTrackerWidget from '@/components/dashboard/ProgressTrackerWidget';
import PricingPlansSection from '@/components/dashboard/PricingPlansSection';
import ProfessionalServicesSection from '@/components/dashboard/ProfessionalServicesSection';
import ResumeScoreWidget from '@/components/dashboard/ResumeScoreWidget';
import ReferralProgramWidget from '@/components/dashboard/ReferralProgramWidget';
import TestimonialsSection from '@/components/dashboard/TestimonialsSection';
import UpcomingFeaturesWidget from '@/components/dashboard/UpcomingFeaturesWidget';
import { useAuth } from '@/contexts/AuthContext';

const Dashboard = () => {
  const { user, isLoading } = useAuth();
  // Default to documents tab
  const [activeTab, setActiveTab] = useState('overview');

  // Parse URL query parameters to get tab
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const tabParam = queryParams.get('tab');
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, []);

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
              <div className="container mx-auto max-w-7xl">
                <div className="mb-8">
                  <WelcomeSection user={mockUser} />
                </div>
                
                <Tabs 
                  defaultValue={activeTab} 
                  onValueChange={setActiveTab}
                  className="space-y-8"
                >
                  <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="documents">My Documents</TabsTrigger>
                    <TabsTrigger value="ai-assistant">AI Assistant</TabsTrigger>
                    <TabsTrigger value="job-tracker">Job Tracker</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="space-y-8">
                    <QuickActionsSection />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <ProgressTrackerWidget user={mockUser} />
                      </div>
                      <div>
                        <ResumeScoreWidget />
                      </div>
                    </div>
                    
                    <PricingPlansSection user={mockUser} />
                    
                    <ProfessionalServicesSection />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <ReferralProgramWidget />
                      <UpcomingFeaturesWidget />
                    </div>
                    
                    <TestimonialsSection />
                  </TabsContent>
                  
                  <TabsContent value="documents" className="space-y-8">
                    <DocumentManager />
                  </TabsContent>
                  
                  <TabsContent value="ai-assistant" className="space-y-8">
                    <AIAssistantPanel />
                  </TabsContent>
                  
                  <TabsContent value="job-tracker" className="space-y-8">
                    <JobTracker />
                  </TabsContent>
                  
                  <TabsContent value="settings" className="space-y-8">
                    <UserSettings user={mockUser} />
                  </TabsContent>
                </Tabs>
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

export default Dashboard;
