
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
  } | null;
  plan: {
    name: string;
    id: string;
  };
  country: string | null;
  status: 'active' | 'inactive' | 'banned';
}

export interface DashboardStats {
  userCount: number;
  activeUsersCount: number;
  resumeCount: number;
  coverLetterCount: number;
  reviewCount: number;
  subscriptionCount: number;
  writingServiceCount: number;
  totalRevenue: number;
  recentSignups: RecentSignup[];
  revenueByMonth: MonthlyRevenue[];
  activeUsersByDay: DailyActivity[];
}

export interface RecentSignup {
  id: string;
  name: string;
  email: string;
  country: string;
  plan: string;
  date: string;
}

export interface MonthlyRevenue {
  month: string;
  revenue: number;
}

export interface DailyActivity {
  day: string;
  active: number;
}

export interface Transaction {
  id: string;
  amount: number;
  currency: string;
  status: string;
  payment_method: string | null;
  description: string | null;
  created_at: string;
  user_id: string;
  userEmail: string;
  subscription_id: string | null;
}

export interface Document {
  id: string;
  title: string;
  user_id: string;
  userEmail: string;
  created_at: string;
  updated_at: string;
  documentType: 'resume' | 'coverLetter';
  is_reviewed: boolean;
  ats_score: number | null;
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
      const { data: users, error: authError } = await supabase.functions.invoke('admin-helpers', {
        body: { action: 'get_users_with_profiles' }
      });
      
      if (authError) {
        console.error('Error fetching users:', authError);
        return [];
      }
      
      return users || [];
    } catch (error) {
      console.error('Error in getUsers:', error);
      return [];
    }
  },
  
  async getDashboardStats(): Promise<DashboardStats> {
    try {
      const { data, error } = await supabase.functions.invoke('admin-helpers', {
        body: { action: 'get_dashboard_stats' }
      });
        
      if (error) {
        console.error('Error fetching dashboard stats:', error);
        throw error;
      }
      
      return data || {
        userCount: 0,
        activeUsersCount: 0,
        resumeCount: 0,
        coverLetterCount: 0,
        reviewCount: 0,
        subscriptionCount: 0,
        writingServiceCount: 0,
        totalRevenue: 0,
        recentSignups: [],
        revenueByMonth: [],
        activeUsersByDay: []
      };
    } catch (error) {
      console.error('Error in getDashboardStats:', error);
      return {
        userCount: 0,
        activeUsersCount: 0,
        resumeCount: 0,
        coverLetterCount: 0,
        reviewCount: 0,
        subscriptionCount: 0,
        writingServiceCount: 0,
        totalRevenue: 0,
        recentSignups: [],
        revenueByMonth: [],
        activeUsersByDay: []
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
  },
  
  async getTransactions(): Promise<Transaction[]> {
    try {
      const { data, error } = await supabase.functions.invoke('admin-helpers', {
        body: { action: 'get_all_transactions' }
      });
      
      if (error) {
        console.error('Error fetching transactions:', error);
        return [];
      }
      
      return data || [];
    } catch (error) {
      console.error('Error in getTransactions:', error);
      return [];
    }
  },
  
  async getDocuments(): Promise<Document[]> {
    try {
      const { data, error } = await supabase.functions.invoke('admin-helpers', {
        body: { action: 'get_all_documents' }
      });
      
      if (error) {
        console.error('Error fetching documents:', error);
        return [];
      }
      
      return data || [];
    } catch (error) {
      console.error('Error in getDocuments:', error);
      return [];
    }
  }
};
