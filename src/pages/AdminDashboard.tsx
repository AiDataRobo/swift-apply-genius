
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ModeToggle } from '@/components/ModeToggle';
import { SidebarProvider } from '@/components/ui/sidebar';
import { useAuth } from '@/contexts/AuthContext';
import AdminHeader from '@/components/admin/AdminHeader';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminOverview from '@/components/admin/AdminOverview';
import UsersManagement from '@/components/admin/UsersManagement';
import ResumeCoverLetters from '@/components/admin/ResumeCoverLetters';
import PlansTransactions from '@/components/admin/PlansTransactions';
import AIResumeReviews from '@/components/admin/AIResumeReviews';
import WritingServiceRequests from '@/components/admin/WritingServiceRequests';
import InterviewGuaranteeProgram from '@/components/admin/InterviewGuaranteeProgram';
import CareerPathStats from '@/components/admin/CareerPathStats';
import FeedbackSupport from '@/components/admin/FeedbackSupport';
import SettingsAccess from '@/components/admin/SettingsAccess';

const AdminDashboard = () => {
  const { user, isLoading } = useAuth();
  // Default to overview tab
  const [activeTab, setActiveTab] = useState('overview');

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

  // If not logged in or not an admin, redirect to login
  // Note: In a real app, you'd check for admin role here
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Mock admin user data - in a real app, this would check for admin permissions
  const mockAdmin = {
    name: user?.user_metadata?.full_name || "Admin User",
    email: user?.email || "",
    role: "Super Admin" // This would come from your permission system
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SidebarProvider>
        <div className="flex flex-1 w-full overflow-hidden">
          <AdminSidebar admin={mockAdmin} />
          
          <div className="flex-1 flex flex-col min-h-screen overflow-auto">
            <AdminHeader admin={mockAdmin} />
            
            <main className="flex-grow p-4 md:p-6 overflow-y-auto">
              <div className="container mx-auto max-w-7xl">
                <Tabs 
                  defaultValue={activeTab} 
                  onValueChange={setActiveTab}
                  className="space-y-8"
                >
                  <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="users">Users</TabsTrigger>
                    <TabsTrigger value="submissions">Submissions</TabsTrigger>
                    <TabsTrigger value="transactions">Transactions</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="space-y-8">
                    <AdminOverview />
                  </TabsContent>
                  
                  <TabsContent value="users" className="space-y-8">
                    <UsersManagement />
                  </TabsContent>
                  
                  <TabsContent value="submissions" className="space-y-8">
                    <ResumeCoverLetters />
                  </TabsContent>
                  
                  <TabsContent value="transactions" className="space-y-8">
                    <PlansTransactions />
                  </TabsContent>
                  
                  <TabsContent value="ai-reviews" className="space-y-8">
                    <AIResumeReviews />
                  </TabsContent>
                  
                  <TabsContent value="writing-services" className="space-y-8">
                    <WritingServiceRequests />
                  </TabsContent>
                  
                  <TabsContent value="interview-guarantee" className="space-y-8">
                    <InterviewGuaranteeProgram />
                  </TabsContent>
                  
                  <TabsContent value="career-paths" className="space-y-8">
                    <CareerPathStats />
                  </TabsContent>
                  
                  <TabsContent value="support" className="space-y-8">
                    <FeedbackSupport />
                  </TabsContent>
                  
                  <TabsContent value="settings" className="space-y-8">
                    <SettingsAccess />
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

export default AdminDashboard;
