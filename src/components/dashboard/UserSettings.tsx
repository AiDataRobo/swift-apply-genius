
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Mail, Key, Download, Trash2, Share2, Bell, Shield, CreditCard, LogOut } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Switch } from '@/components/ui/switch';

interface UserSettingsProps {
  user: {
    name: string;
    email: string;
    isPremium: boolean;
  };
}

const UserSettings = ({ user }: UserSettingsProps) => {
  const { toast } = useToast();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  
  const handleSaveProfile = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile information has been updated successfully.",
    });
  };
  
  const handleExportData = () => {
    toast({
      title: "Data Export Initiated",
      description: "Your data will be compiled and emailed to you shortly.",
    });
  };
  
  const handleDeleteAccount = () => {
    toast({
      title: "Account Deletion Requested",
      description: "Please check your email to confirm account deletion.",
      variant: "destructive",
    });
  };
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Account Settings</h2>
      
      <Tabs defaultValue="profile">
        <TabsList className="grid grid-cols-1 md:grid-cols-4 gap-2">
          <TabsTrigger value="profile" className="text-sm">Profile</TabsTrigger>
          <TabsTrigger value="privacy" className="text-sm">Privacy & Data</TabsTrigger>
          <TabsTrigger value="notifications" className="text-sm">Notifications</TabsTrigger>
          <TabsTrigger value="billing" className="text-sm">Billing</TabsTrigger>
        </TabsList>
        
        {/* Profile Tab */}
        <TabsContent value="profile" className="mt-6 space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="flex items-center gap-2">
                    <Key className="h-4 w-4" />
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value="••••••••"
                    readOnly
                    placeholder="••••••••"
                  />
                  <Button variant="link" className="text-xs h-auto p-0 text-primary">
                    Change Password
                  </Button>
                </div>
                
                <div className="pt-4">
                  <Button onClick={handleSaveProfile}>
                    Save Changes
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-destructive/5 border-destructive/20">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <LogOut className="h-5 w-5 mr-2" />
                Sign Out
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Sign out from your account on this device.
              </p>
              <Button variant="destructive">
                Sign Out
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Privacy & Data Tab */}
        <TabsContent value="privacy" className="mt-6 space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Data Privacy & Export
              </h3>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label className="flex justify-between">
                    <span className="flex items-center">
                      <Share2 className="h-4 w-4 mr-2" />
                      Resume sharing enabled
                    </span>
                    <Switch defaultChecked />
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Allow others to view your resume via a secure link
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label className="flex justify-between">
                    <span className="flex items-center">
                      <Shield className="h-4 w-4 mr-2" />
                      Enhanced privacy mode
                    </span>
                    <Switch />
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Hide your personal data from AI training and analytics
                  </p>
                </div>
                
                <div className="pt-4 space-y-4">
                  <div>
                    <Button variant="outline" className="w-full sm:w-auto" onClick={handleExportData}>
                      <Download className="mr-2 h-4 w-4" />
                      Export My Data
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2">
                      Download all your data in a portable format
                    </p>
                  </div>
                  
                  <div>
                    <Button variant="destructive" className="w-full sm:w-auto" onClick={handleDeleteAccount}>
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete Account
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2">
                      Permanently delete your account and all associated data
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Notifications Tab */}
        <TabsContent value="notifications" className="mt-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Bell className="h-5 w-5 mr-2" />
                Notification Preferences
              </h3>
              
              <div className="space-y-6">
                <div className="space-y-3">
                  <Label className="flex justify-between">
                    <span>Email Notifications</span>
                    <Switch defaultChecked />
                  </Label>
                  <Label className="flex justify-between">
                    <span>Application Updates</span>
                    <Switch defaultChecked />
                  </Label>
                  <Label className="flex justify-between">
                    <span>Job Recommendation Alerts</span>
                    <Switch defaultChecked />
                  </Label>
                  <Label className="flex justify-between">
                    <span>Resume Tips & Improvements</span>
                    <Switch defaultChecked />
                  </Label>
                  <Label className="flex justify-between">
                    <span>Marketing & Promotions</span>
                    <Switch />
                  </Label>
                </div>
                
                <div className="pt-4">
                  <Button>
                    Save Preferences
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Billing Tab */}
        <TabsContent value="billing" className="mt-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <CreditCard className="h-5 w-5 mr-2" />
                Subscription & Billing
              </h3>
              
              <div className="p-4 bg-secondary/50 rounded-lg mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Current Plan: {user.isPremium ? 'Premium' : 'Free'}</p>
                    <p className="text-sm text-muted-foreground">
                      {user.isPremium 
                        ? 'Your Premium plan renews on January 15, 2024' 
                        : 'Upgrade to unlock premium features'}
                    </p>
                  </div>
                  <Button variant={user.isPremium ? "outline" : "default"}>
                    {user.isPremium ? 'Manage Plan' : 'Upgrade to Pro'}
                  </Button>
                </div>
              </div>
              
              {user.isPremium && (
                <div className="space-y-4">
                  <h4 className="font-medium">Payment Method</h4>
                  <div className="flex items-center p-3 border rounded-md">
                    <div className="w-12 h-8 bg-slate-200 rounded mr-3"></div>
                    <div>
                      <p className="font-medium">•••• •••• •••• 4242</p>
                      <p className="text-xs text-muted-foreground">Expires 12/2025</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Update Payment</Button>
                    <Button variant="outline" size="sm">Billing History</Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserSettings;
