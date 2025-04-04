
import React, { useState, useEffect } from 'react';
import { Search, UserCog, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useAdminData } from '@/hooks/useAdminData';
import { UserWithProfile } from '@/services/supabase/adminService';
import UsersManagementTable from './UsersManagementTable';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const UsersManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [planFilter, setPlanFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortColumn, setSortColumn] = useState('last_sign_in_at');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [isViewingUser, setIsViewingUser] = useState(false);

  // Get admin data using our custom hook
  const { 
    users, 
    isLoadingUsers, 
    updateUserStatus,
    getUserDetails,
  } = useAdminData();

  // Get details for selected user when viewing profile
  const {
    data: userDetails,
    isLoading: isLoadingUserDetails,
  } = getUserDetails(selectedUserId || '');

  // Filter and sort users based on current filters and sort state
  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      (user.profile?.full_name?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesPlan = planFilter === 'all' || 
      (user.plan?.name.toLowerCase() === planFilter.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    
    return matchesSearch && matchesPlan && matchesStatus;
  }).sort((a, b) => {
    if (sortColumn === 'name') {
      const nameA = a.profile?.full_name || '';
      const nameB = b.profile?.full_name || '';
      return sortDirection === 'asc' 
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    } else if (sortColumn === 'created_at') {
      return sortDirection === 'asc'
        ? new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
        : new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    } else if (sortColumn === 'last_sign_in_at') {
      // Handle null values for last_sign_in_at
      const timeA = a.last_sign_in_at ? new Date(a.last_sign_in_at).getTime() : 0;
      const timeB = b.last_sign_in_at ? new Date(b.last_sign_in_at).getTime() : 0;
      return sortDirection === 'asc'
        ? timeA - timeB
        : timeB - timeA;
    }
    return 0;
  });

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const handleBanUser = (userId: string) => {
    updateUserStatus.mutate({ userId, status: 'banned' });
  };

  const handleUnbanUser = (userId: string) => {
    updateUserStatus.mutate({ userId, status: 'active' });
  };

  const handleViewProfile = (userId: string) => {
    setSelectedUserId(userId);
    setIsViewingUser(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold">Users Management</h2>
          <Badge variant="outline" className="ml-2">
            {filteredUsers.length} / {users.length} Total
          </Badge>
        </div>
        <Button variant="default">
          <UserCog className="mr-2 h-4 w-4" />
          Add New User
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Users</CardTitle>
          <CardDescription>
            View and manage all registered users across the platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 mb-6 md:flex-row md:items-end">
            <div className="grid w-full md:max-w-sm">
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="h-9"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Select
                value={planFilter}
                onValueChange={setPlanFilter}
              >
                <SelectTrigger className="h-9 w-[130px]">
                  <SelectValue placeholder="Filter by Plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Plans</SelectLabel>
                    <SelectItem value="all">All Plans</SelectItem>
                    <SelectItem value="basic">Basic</SelectItem>
                    <SelectItem value="premium">Premium</SelectItem>
                    <SelectItem value="professional">Professional</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              
              <Select
                value={statusFilter}
                onValueChange={setStatusFilter}
              >
                <SelectTrigger className="h-9 w-[130px]">
                  <SelectValue placeholder="Filter by Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Status</SelectLabel>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="banned">Banned</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <UsersManagementTable
            users={filteredUsers}
            isLoading={isLoadingUsers}
            sortColumn={sortColumn}
            sortDirection={sortDirection}
            handleSort={handleSort}
            onBanUser={handleBanUser}
            onUnbanUser={handleUnbanUser}
            onViewProfile={handleViewProfile}
          />
        </CardContent>
      </Card>

      {/* User Details Dialog */}
      <Dialog open={isViewingUser} onOpenChange={setIsViewingUser}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>User Profile</DialogTitle>
            <DialogDescription>
              Detailed information about the selected user
            </DialogDescription>
          </DialogHeader>
          
          {isLoadingUserDetails ? (
            <div className="flex justify-center p-8">
              <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
            </div>
          ) : userDetails?.profile ? (
            <div className="grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-medium">Personal Information</h3>
                  <div className="mt-2 space-y-2">
                    <div>
                      <span className="text-sm text-muted-foreground">Name:</span>
                      <p>{userDetails.profile.full_name || 'N/A'}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Phone:</span>
                      <p>{userDetails.profile.phone_number || 'N/A'}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Subscription</h3>
                  <div className="mt-2 space-y-2">
                    <div>
                      <span className="text-sm text-muted-foreground">Plan:</span>
                      <p>{userDetails.subscription?.plans.name || 'Basic (Free)'}</p>
                    </div>
                    {userDetails.subscription && (
                      <div>
                        <span className="text-sm text-muted-foreground">Valid Until:</span>
                        <p>{new Date(userDetails.subscription.current_period_end).toLocaleDateString()}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium">Account Statistics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <p className="text-2xl font-bold">{userDetails.documentCounts.resumes}</p>
                        <p className="text-sm text-muted-foreground">Resumes</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <p className="text-2xl font-bold">{userDetails.documentCounts.coverLetters}</p>
                        <p className="text-sm text-muted-foreground">Cover Letters</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {userDetails.recentActivity.length > 0 && (
                <div>
                  <h3 className="text-lg font-medium">Recent Activity</h3>
                  <ul className="mt-2 space-y-2">
                    {userDetails.recentActivity.map((activity: any) => (
                      <li key={activity.id} className="text-sm">
                        <span className="font-medium">{activity.action}</span> - {new Date(activity.created_at).toLocaleString()}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="flex justify-end space-x-2 mt-4">
                <Button variant="outline" onClick={() => setIsViewingUser(false)}>
                  Close
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center py-4">
              <p>User details not found.</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UsersManagement;
