
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import WelcomeSection from '@/components/dashboard/WelcomeSection';
import DocumentManager from '@/components/dashboard/DocumentManager';
import AIAssistantPanel from '@/components/dashboard/AIAssistantPanel';
import JobTracker from '@/components/dashboard/JobTracker';
import TemplateLibrary from '@/components/dashboard/TemplateLibrary';
import UserSettings from '@/components/dashboard/UserSettings';
import PremiumFeatures from '@/components/dashboard/PremiumFeatures';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("documents");
  const user = { name: "Sarah", email: "sarah@example.com", isPremium: false };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <DashboardHeader user={user} />
      
      <main className="flex-1 container mx-auto px-4 py-6 md:px-6 lg:px-8">
        <WelcomeSection user={user} />
        
        <Tabs defaultValue="documents" className="mt-8" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 w-full mb-6">
            <TabsTrigger value="documents" className="text-sm">Documents</TabsTrigger>
            <TabsTrigger value="ai-assistant" className="text-sm">AI Assistant</TabsTrigger>
            <TabsTrigger value="job-tracker" className="text-sm">Job Tracker</TabsTrigger>
            <TabsTrigger value="templates" className="text-sm">Templates</TabsTrigger>
            <TabsTrigger value="settings" className="text-sm">Settings</TabsTrigger>
            <TabsTrigger value="premium" className="text-sm">Premium</TabsTrigger>
          </TabsList>
          
          <TabsContent value="documents" className="space-y-6">
            <DocumentManager />
          </TabsContent>
          
          <TabsContent value="ai-assistant" className="space-y-6">
            <AIAssistantPanel />
          </TabsContent>
          
          <TabsContent value="job-tracker" className="space-y-6">
            <JobTracker />
          </TabsContent>
          
          <TabsContent value="templates" className="space-y-6">
            <TemplateLibrary />
          </TabsContent>
          
          <TabsContent value="settings" className="space-y-6">
            <UserSettings user={user} />
          </TabsContent>
          
          <TabsContent value="premium" className="space-y-6">
            <PremiumFeatures user={user} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
