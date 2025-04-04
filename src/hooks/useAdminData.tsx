
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { adminService, UserWithProfile } from '@/services/supabase/adminService';
import { useToast } from '@/hooks/use-toast';

export function useAdminData() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  // Check if current user is admin
  const {
    data: isAdmin,
    isLoading: isCheckingAdmin,
  } = useQuery({
    queryKey: ['admin-check'],
    queryFn: () => adminService.checkIsAdmin(),
    retry: 1,
  });

  // Get all users
  const {
    data: users = [],
    isLoading: isLoadingUsers,
    error: usersError,
    refetch: refetchUsers,
  } = useQuery({
    queryKey: ['admin-users'],
    queryFn: () => adminService.getUsers(),
    enabled: !!isAdmin,
  });

  // Get dashboard statistics
  const {
    data: dashboardStats,
    isLoading: isLoadingStats,
    error: statsError,
  } = useQuery({
    queryKey: ['admin-dashboard-stats'],
    queryFn: () => adminService.getDashboardStats(),
    enabled: !!isAdmin,
  });

  // Update user status mutation
  const updateUserStatus = useMutation({
    mutationFn: ({ userId, status }: { userId: string; status: 'active' | 'inactive' | 'banned' }) =>
      adminService.updateUserStatus(userId, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-users'] });
      toast({
        title: 'User status updated',
        description: 'The user status has been successfully updated',
      });
    },
    onError: (error) => {
      console.error('Error updating user status:', error);
      toast({
        title: 'Error',
        description: 'Failed to update user status',
        variant: 'destructive',
      });
    },
  });

  // Get user details (for viewing a single user)
  const getUserDetails = (userId: string) => {
    return useQuery({
      queryKey: ['admin-user-details', userId],
      queryFn: () => adminService.getUserDetails(userId),
      enabled: !!userId && !!isAdmin,
    });
  };

  return {
    isAdmin,
    isCheckingAdmin,
    users,
    isLoadingUsers,
    usersError,
    refetchUsers,
    dashboardStats,
    isLoadingStats,
    statsError,
    updateUserStatus,
    getUserDetails,
  };
}
