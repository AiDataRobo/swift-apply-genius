
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, LogOut, Settings, Users, FileText, Activity } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdminDashboardPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    
    toast({
      title: "Logged out",
      description: "You have been logged out of the admin panel",
    });
    
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold">EnhanceResume Admin</h1>
          </div>
          <Button variant="outline" size="sm" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome Superuser</h2>
          <p className="text-muted-foreground">Manage your EnhanceResume platform from here</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Users
              </CardTitle>
              <CardDescription>Manage user accounts</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">1,234</p>
              <p className="text-sm text-muted-foreground">Total registered users</p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full">View All Users</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Resumes
              </CardTitle>
              <CardDescription>Resume submissions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">3,457</p>
              <p className="text-sm text-muted-foreground">Created with our platform</p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full">View Resume Data</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Analytics
              </CardTitle>
              <CardDescription>Platform usage metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">67%</p>
              <p className="text-sm text-muted-foreground">Weekly growth in usage</p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full">View Analytics</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Quick Settings
              </CardTitle>
              <CardDescription>Common admin controls</CardDescription>
            </CardHeader>
            <CardContent className="flex gap-4">
              <Button>Manage Templates</Button>
              <Button variant="outline">Update Content</Button>
              <Button variant="outline">Manage Services</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboardPage;
