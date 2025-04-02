
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import WelcomeSection from '@/components/dashboard/WelcomeSection';
import DocumentManager from '@/components/dashboard/DocumentManager';
import AIAssistantPanel from '@/components/dashboard/AIAssistantPanel';
import JobTracker from '@/components/dashboard/JobTracker';
import TemplateLibrary from '@/components/dashboard/TemplateLibrary';
import UserSettings from '@/components/dashboard/UserSettings';
import PremiumFeatures from '@/components/dashboard/PremiumFeatures';
import { useAuth } from '@/contexts/AuthContext';

const Dashboard = () => {
  const { user, isLoading } = useAuth();
  // Default to documents tab
  const [activeTab, setActiveTab] = useState('documents');

  // Parse URL query parameters to get tab
  React.useEffect(() => {
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
      <DashboardHeader user={mockUser} />
      
      <main className="flex-grow p-4 md:p-8">
        <div className="container mx-auto">
          <WelcomeSection user={mockUser} />
          
          <div className="mt-8">
            <Tabs 
              defaultValue={activeTab} 
              onValueChange={setActiveTab}
              className="space-y-8"
            >
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <TabsTrigger value="documents">My Documents</TabsTrigger>
                <TabsTrigger value="ai-assistant">AI Assistant</TabsTrigger>
                <TabsTrigger value="job-tracker">Job Tracker</TabsTrigger>
                <TabsTrigger value="templates">Templates</TabsTrigger>
              </TabsList>
              
              <TabsContent value="documents" className="space-y-8">
                <DocumentManager />
              </TabsContent>
              
              <TabsContent value="ai-assistant" className="space-y-8">
                <AIAssistantPanel />
              </TabsContent>
              
              <TabsContent value="job-tracker" className="space-y-8">
                <JobTracker />
              </TabsContent>
              
              <TabsContent value="templates" className="space-y-8">
                <TemplateLibrary />
              </TabsContent>
              
              <TabsContent value="settings" className="space-y-8">
                <UserSettings user={mockUser} />
              </TabsContent>
            </Tabs>
          </div>
          
          {!mockUser.isPremium && (
            <div className="mt-12">
              <PremiumFeatures user={mockUser} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
