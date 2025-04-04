
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Home, FileText, Mail, Star, Edit, Award, 
  Briefcase, User, Settings, LogOut, CreditCard
} from 'lucide-react';
import { Player } from '@lottiefiles/react-lottie-player';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem, 
  SidebarHeader,
  SidebarFooter
} from '@/components/ui/sidebar';

interface DashboardSidebarProps {
  user: {
    name: string;
    email: string;
    isPremium: boolean;
  };
}

const DashboardSidebar = ({ user }: DashboardSidebarProps) => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const menuItems = [
    { icon: <Home size={20} />, label: 'Dashboard', path: '/dashboard' },
    { icon: <FileText size={20} />, label: 'My Resumes', path: '/dashboard?tab=documents' },
    { icon: <Mail size={20} />, label: 'Cover Letters', path: '/dashboard?tab=coverletters' },
    { icon: <Star size={20} />, label: 'AI Resume Review', path: '/dashboard?tab=ai-assistant' },
    { icon: <Edit size={20} />, label: 'Professional Writing', path: '/resume-writing-services' },
    { icon: <Award size={20} />, label: 'Interview Guarantee', path: '/interview-guarantee-package' },
    { icon: <Briefcase size={20} />, label: 'IT Career Paths', path: '/it-career-paths' },
    { icon: <User size={20} />, label: 'Account & Settings', path: '/account-settings' },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="border-b p-4">
        <Link to="/" className="flex items-center justify-center">
          <span className="text-xl font-semibold">SwiftApply<span className="text-primary">.</span></span>
        </Link>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item, index) => (
            <SidebarMenuItem key={index}>
              <SidebarMenuButton asChild tooltip={item.label}>
                <Link to={item.path} className="flex items-center gap-3 py-2">
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      
      <SidebarFooter className="border-t p-4">
        {user.isPremium ? (
          <div className="flex flex-col items-center p-3 mb-4 bg-primary/10 rounded-md">
            <CreditCard className="h-5 w-5 text-primary mb-2" />
            <span className="text-xs font-medium">Premium Plan Active</span>
          </div>
        ) : (
          <Button 
            variant="default" 
            className="w-full mb-4"
            onClick={() => navigate('/dashboard#pricing')}
          >
            Upgrade to Premium
          </Button>
        )}
        
        <Button 
          variant="outline" 
          className="w-full" 
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4 mr-2" />
          Log out
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
