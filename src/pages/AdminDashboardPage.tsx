
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ModeToggle } from '@/components/ModeToggle';
import { SidebarProvider } from '@/components/ui/sidebar';
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
import { useAdminData } from '@/hooks/useAdminData';
import { useToast } from '@/hooks/use-toast';
import { Shield, LogOut, Settings, Users, FileText, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const AdminDashboardPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { isAdmin, isCheckingAdmin } = useAdminData();
  
  // Default to overview tab
  const [activeTab, setActiveTab] = useState('overview');

  // Parse URL query parameters to get tab
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const tabParam = queryParams.get('tab');
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, []);

  // Check if admin is logged in from localStorage
  useEffect(() => {
    const isAdminLoggedIn = localStorage.getItem('isAdmin') === 'true';
    if (!isAdminLoggedIn) {
      toast({
        title: "Access denied",
        description: "You don't have permission to access the admin dashboard",
        variant: "destructive",
      });
      navigate('/admin/login', { replace: true });
    }
  }, [navigate, toast]);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    
    toast({
      title: "Logged out",
      description: "You have been logged out of the admin panel",
    });
    
    navigate('/admin/login');
  };

  // Simple admin data (since we're using localStorage for admin authentication)
  const adminData = {
    name: "Superuser",
    email: "vishal170997@gmail.com",
    role: "Super Admin"
  };

  // While checking if admin, show loading state
  if (isCheckingAdmin) {
    return <div className="flex h-screen items-center justify-center">
      <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
    </div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SidebarProvider>
        <div className="flex flex-1 w-full overflow-hidden">
          <AdminSidebar admin={adminData} />
          
          <div className="flex-1 flex flex-col min-h-screen overflow-auto">
            <AdminHeader admin={adminData} />
            
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

export default AdminDashboardPage;
