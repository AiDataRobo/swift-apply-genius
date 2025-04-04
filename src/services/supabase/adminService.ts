
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export interface UserWithProfile {
  id: string;
  email: string;
  created_at: string;
  last_sign_in_at: string | null;
  profile: {
    full_name: string | null;
    phone_number: string | null;
    avatar_url: string | null;
  };
  plan: {
    name: string;
    id: string;
  } | null;
  country: string | null;
  status: 'active' | 'inactive' | 'banned';
}

export const adminService = {
  async checkIsAdmin(): Promise<boolean> {
    try {
      // First get the current user
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) return false;
      
      // Check if user has an admin role
      const { data, error } = await supabase
        .from('admin_roles')
        .select('role')
        .eq('user_id', user.id)
        .eq('role', 'admin')
        .maybeSingle();

      if (error) {
        console.error('Error checking admin status:', error);
        return false;
      }
      
      return !!data;
    } catch (error) {
      console.error('Error checking admin status:', error);
      return false;
    }
  },
  
  async getUsers(): Promise<UserWithProfile[]> {
    try {
      // Fetch users from auth.users (using a Supabase Function since we can't query auth directly)
      const { data: authUsers, error: authError } = await supabase.functions.invoke('admin-helpers', {
        body: { action: 'get_users_with_profiles' }
      });
      
      if (authError) {
        console.error('Error fetching users:', authError);
        return [];
      }
      
      // Get subscriptions to determine user plans
      const { data: subscriptions, error: subsError } = await supabase
        .from('subscriptions')
        .select(`
          user_id,
          plan_id,
          plans(name, id)
        `)
        .eq('status', 'active');
      
      if (subsError) {
        console.error('Error fetching subscriptions:', subsError);
      }

      // Map subscriptions to users
      const usersWithPlans = (authUsers || []).map(user => {
        const subscription = subscriptions?.find(sub => sub.user_id === user.id);
        
        return {
          ...user,
          plan: subscription ? {
            name: subscription.plans.name,
            id: subscription.plans.id
          } : {
            name: 'Basic',
            id: 'free'
          },
          // Extract country from metadata if available
          country: user.raw_user_meta_data?.country || 'Unknown',
          // Default status to active, this would come from a real status field in production
          status: 'active' as const
        };
      });
      
      return usersWithPlans;
    } catch (error) {
      console.error('Error in getUsers:', error);
      return [];
    }
  },
  
  async getDashboardStats() {
    try {
      // Get user count
      const { count: userCount, error: userCountError } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true });
        
      if (userCountError) {
        console.error('Error fetching user count:', userCountError);
      }
      
      // Get resume count
      const { count: resumeCount, error: resumeError } = await supabase
        .from('resumes')
        .select('*', { count: 'exact', head: true });
        
      if (resumeError) {
        console.error('Error fetching resume count:', resumeError);
      }
      
      // Get cover letter count
      const { count: coverLetterCount, error: coverLetterError } = await supabase
        .from('cover_letters')
        .select('*', { count: 'exact', head: true });
        
      if (coverLetterError) {
        console.error('Error fetching cover letter count:', coverLetterError);
      }
      
      // Get AI review count
      const { count: reviewCount, error: reviewError } = await supabase
        .from('ai_reviews')
        .select('*', { count: 'exact', head: true });
        
      if (reviewError) {
        console.error('Error fetching review count:', reviewError);
      }
      
      // Get active subscription count
      const { count: subscriptionCount, error: subscriptionError } = await supabase
        .from('subscriptions')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'active');
        
      if (subscriptionError) {
        console.error('Error fetching subscription count:', subscriptionError);
      }
      
      // Get active writing services orders
      const { count: writingServiceCount, error: writingError } = await supabase
        .from('writing_services')
        .select('*', { count: 'exact', head: true })
        .in('status', ['pending', 'in_progress']);
        
      if (writingError) {
        console.error('Error fetching writing service count:', writingError);
      }
      
      // Get transaction total revenue
      const { data: transactions, error: transactionError } = await supabase
        .from('transactions')
        .select('amount');
        
      if (transactionError) {
        console.error('Error fetching transactions:', transactionError);
      }
      
      const totalRevenue = transactions?.reduce((sum, t) => sum + parseFloat(t.amount as any), 0) || 0;
      
      // Recent signups - last 5 users
      const { data: recentUsers, error: recentError } = await supabase.functions.invoke('admin-helpers', {
        body: { 
          action: 'get_recent_signups',
          data: { limit: 5 }
        }
      });
        
      if (recentError) {
        console.error('Error fetching recent signups:', recentError);
      }
      
      return {
        userCount: userCount || 0,
        resumeCount: resumeCount || 0,
        coverLetterCount: coverLetterCount || 0,
        reviewCount: reviewCount || 0,
        subscriptionCount: subscriptionCount || 0,
        writingServiceCount: writingServiceCount || 0,
        totalRevenue,
        recentSignups: recentUsers || []
      };
    } catch (error) {
      console.error('Error in getDashboardStats:', error);
      return {
        userCount: 0,
        resumeCount: 0,
        coverLetterCount: 0,
        reviewCount: 0,
        subscriptionCount: 0,
        writingServiceCount: 0,
        totalRevenue: 0,
        recentSignups: []
      };
    }
  },
  
  async updateUserStatus(userId: string, status: 'active' | 'inactive' | 'banned'): Promise<boolean> {
    try {
      // Update user status in profiles 
      // In a real implementation, this would update a 'status' field in your profile table
      console.log(`Updating user ${userId} to status: ${status}`);
      
      // Log the activity for audit trail
      await supabase.functions.invoke('admin-helpers', {
        body: { 
          action: 'log_activity',
          data: {
            user_id: userId,
            action: `user_status_update`,
            details: { new_status: status }
          }
        }
      });
      
      useToast().toast({
        title: "User status updated",
        description: `User has been marked as ${status}`,
      });
      
      return true;
    } catch (error) {
      console.error('Error updating user status:', error);
      
      useToast().toast({
        title: "Error updating user",
        description: "There was a problem changing the user status",
        variant: "destructive"
      });
      
      return false;
    }
  },
  
  async getUserDetails(userId: string) {
    try {
      // Get user profile
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();
      
      if (profileError) {
        console.error('Error fetching user profile:', profileError);
      }
      
      // Get user's current subscription
      const { data: subscription, error: subError } = await supabase
        .from('subscriptions')
        .select(`
          id,
          status,
          current_period_end,
          plans(name, price, interval)
        `)
        .eq('user_id', userId)
        .eq('status', 'active')
        .maybeSingle();
      
      if (subError) {
        console.error('Error fetching user subscription:', subError);
      }
      
      // Get user's documents count
      const { count: resumeCount, error: resumeError } = await supabase
        .from('resumes')
        .select('id', { count: 'exact', head: true })
        .eq('user_id', userId);
      
      if (resumeError) {
        console.error('Error counting resumes:', resumeError);
      }
      
      const { count: coverCount, error: coverError } = await supabase
        .from('cover_letters')
        .select('id', { count: 'exact', head: true })
        .eq('user_id', userId);
      
      if (coverError) {
        console.error('Error counting cover letters:', coverError);
      }
      
      // Get recent activity
      const { data: activity, error: activityError } = await supabase
        .from('user_activity')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(5);
      
      if (activityError) {
        console.error('Error fetching user activity:', activityError);
      }
      
      return {
        profile,
        subscription,
        documentCounts: {
          resumes: resumeCount || 0,
          coverLetters: coverCount || 0
        },
        recentActivity: activity || []
      };
    } catch (error) {
      console.error('Error in getUserDetails:', error);
      return {
        profile: null,
        subscription: null,
        documentCounts: {
          resumes: 0,
          coverLetters: 0
        },
        recentActivity: []
      };
    }
  }
};
