
import React from 'react';
import { Bell, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface AdminHeaderProps {
  admin: {
    name: string;
    email: string;
    role: string;
  };
}

const AdminHeader = ({ admin }: AdminHeaderProps) => {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <div className="flex flex-1 items-center gap-4 md:gap-6">
        <div className="flex-1 md:flex-initial">
          <h1 className="text-xl font-semibold md:text-2xl">Admin Dashboard</h1>
        </div>
        
        <div className="hidden md:flex flex-1 items-center gap-4">
          <form className="flex-1 sm:max-w-lg md:max-w-xl">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for users, tickets, or documents..."
                className="w-full bg-background pl-8 md:w-[400px] lg:w-[500px]"
              />
            </div>
          </form>
        </div>
        
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="relative">
                <Bell className="h-4 w-4" />
                <Badge className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full p-0">
                  3
                </Badge>
                <span className="sr-only">Notifications</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[300px]">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">New Support Ticket</span>
                    <span className="text-xs text-muted-foreground">User requested help with resume</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">Plan Upgrade</span>
                    <span className="text-xs text-muted-foreground">5 users upgraded to Premium</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">System Alert</span>
                    <span className="text-xs text-muted-foreground">Database backup completed</span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="justify-center">
                View all notifications
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <div className="hidden md:flex items-center gap-2">
            <span className="text-sm font-medium">{admin.name}</span>
            <span className="hidden rounded-full border bg-muted p-1 text-xs font-medium md:inline-block">
              {admin.role}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
