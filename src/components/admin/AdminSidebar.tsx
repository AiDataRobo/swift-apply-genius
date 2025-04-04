
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Users, FileText, CreditCard, Star, 
  Edit, Award, Network, MessageSquare, Settings, LogOut 
} from 'lucide-react';
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

interface AdminSidebarProps {
  admin: {
    name: string;
    email: string;
    role: string;
  };
}

const AdminSidebar = ({ admin }: AdminSidebarProps) => {
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
    { icon: <LayoutDashboard size={20} />, label: 'Overview', path: '/admin-dashboard?tab=overview' },
    { icon: <Users size={20} />, label: 'Users Management', path: '/admin-dashboard?tab=users' },
    { icon: <FileText size={20} />, label: 'Resume/Cover Letters', path: '/admin-dashboard?tab=submissions' },
    { icon: <CreditCard size={20} />, label: 'Plans & Transactions', path: '/admin-dashboard?tab=transactions' },
    { icon: <Star size={20} />, label: 'AI Resume Reviews', path: '/admin-dashboard?tab=ai-reviews' },
    { icon: <Edit size={20} />, label: 'Writing Service Requests', path: '/admin-dashboard?tab=writing-services' },
    { icon: <Award size={20} />, label: 'Interview Guarantee', path: '/admin-dashboard?tab=interview-guarantee' },
    { icon: <Network size={20} />, label: 'Career Path Stats', path: '/admin-dashboard?tab=career-paths' },
    { icon: <MessageSquare size={20} />, label: 'Feedback & Support', path: '/admin-dashboard?tab=support' },
    { icon: <Settings size={20} />, label: 'Settings & Access', path: '/admin-dashboard?tab=settings' },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="border-b p-4">
        <Link to="/admin-dashboard" className="flex items-center justify-center">
          <span className="text-xl font-semibold">Admin<span className="text-primary">Panel</span></span>
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
        <div className="flex flex-col items-center p-3 mb-4 bg-primary/10 rounded-md">
          <span className="text-xs font-medium text-primary">{admin.role}</span>
          <span className="text-xs text-muted-foreground mt-1">{admin.email}</span>
        </div>
        
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

export default AdminSidebar;
