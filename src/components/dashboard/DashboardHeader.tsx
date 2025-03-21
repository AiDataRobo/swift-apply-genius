
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, Moon, Sun, User, LogOut, FileText, Briefcase, Layout, Settings, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface DashboardHeaderProps {
  user: {
    name: string;
    email: string;
    isPremium: boolean;
  };
}

const DashboardHeader = ({ user }: DashboardHeaderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { toast } = useToast();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    toast({
      title: `${isDarkMode ? 'Light' : 'Dark'} mode activated`,
      duration: 2000,
    });
  };

  return (
    <header className="border-b bg-background sticky top-0 z-20">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Button variant="ghost" className="justify-start" asChild>
                  <Link to="/dashboard">
                    <FileText className="mr-2 h-4 w-4" />
                    My Documents
                  </Link>
                </Button>
                <Button variant="ghost" className="justify-start" asChild>
                  <Link to="/dashboard?tab=ai-assistant">
                    <Star className="mr-2 h-4 w-4" />
                    AI Assistant
                  </Link>
                </Button>
                <Button variant="ghost" className="justify-start" asChild>
                  <Link to="/dashboard?tab=job-tracker">
                    <Briefcase className="mr-2 h-4 w-4" />
                    Job Tracker
                  </Link>
                </Button>
                <Button variant="ghost" className="justify-start" asChild>
                  <Link to="/dashboard?tab=templates">
                    <Layout className="mr-2 h-4 w-4" />
                    Templates
                  </Link>
                </Button>
                <Button variant="ghost" className="justify-start" asChild>
                  <Link to="/dashboard?tab=settings">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
          
          <Link to="/" className="text-xl font-semibold ml-2 md:ml-0">
            SwiftApply<span className="text-primary">.</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-1">
          <Button variant="ghost" asChild>
            <Link to="/dashboard">
              <FileText className="mr-2 h-4 w-4" />
              Documents
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/dashboard?tab=ai-assistant">
              <Star className="mr-2 h-4 w-4" />
              AI Assistant
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/dashboard?tab=job-tracker">
              <Briefcase className="mr-2 h-4 w-4" />
              Job Tracker
            </Link>
          </Button>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <User className="h-5 w-5" />
                {user.isPremium && (
                  <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">{user.name}</h4>
                  <p className="text-muted-foreground text-sm">{user.email}</p>
                </div>
                <div className="border-t pt-4 space-y-2">
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link to="/dashboard?tab=settings">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-destructive">
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
