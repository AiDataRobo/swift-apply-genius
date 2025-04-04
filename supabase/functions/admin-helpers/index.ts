
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.1";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    );
    
    const body = await req.json();
    const action = body.action;
    const data = body.data || {};
    
    if (action === 'get_users_with_profiles') {
      // Get users and join with profiles
      const { data: users, error } = await supabaseClient.auth.admin.listUsers({
        page: data?.page || 1,
        perPage: data?.perPage || 100,
      });
  
      if (error) {
        throw error;
      }
      
      // Get all user profiles
      const { data: profiles, error: profilesError } = await supabaseClient
        .from('profiles')
        .select('*');
        
      if (profilesError) {
        throw profilesError;
      }
      
      // Get subscriptions to determine user plans
      const { data: subscriptions, error: subsError } = await supabaseClient
        .from('subscriptions')
        .select(`
          user_id,
          plan_id,
          status,
          plans(name, id)
        `)
        .eq('status', 'active');
        
      if (subsError) {
        console.error('Error fetching subscriptions:', subsError);
      }
      
      // Merge auth users with their profile data and subscription info
      const usersWithProfiles = users.users.map(user => {
        const userProfile = profiles.find(profile => profile.id === user.id);
        const subscription = subscriptions?.find(sub => sub.user_id === user.id);
        
        return {
          ...user,
          profile: userProfile || null,
          plan: subscription ? {
            name: subscription.plans?.name || 'Basic',
            id: subscription.plans?.id || 'free'
          } : {
            name: 'Basic',
            id: 'free'
          },
          // Extract country from metadata if available
          country: user.user_metadata?.country || 'Unknown',
          // Default status to active, this would come from a real status field in production
          status: 'active'
        };
      });
      
      return new Response(JSON.stringify(usersWithProfiles), {
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }
    
    else if (action === 'get_recent_signups') {
      const limit = data?.limit || 5;
      
      const { data: users, error } = await supabaseClient.auth.admin.listUsers({
        perPage: limit,
        sortBy: {
          column: 'created_at',
          order: 'desc',
        },
      });
      
      if (error) {
        throw error;
      }
      
      // Get subscriptions for these users
      const userIds = users.users.map(user => user.id);
      const { data: subscriptions, error: subsError } = await supabaseClient
        .from('subscriptions')
        .select(`
          user_id,
          plans(name)
        `)
        .in('user_id', userIds)
        .eq('status', 'active');
      
      if (subsError) {
        console.error('Error fetching subscriptions:', subsError);
      }
      
      // Format the user data to include relevant info
      const recentUsers = users.users.map(user => {
        const subscription = subscriptions?.find(sub => sub.user_id === user.id);
        return {
          id: user.id,
          name: user.user_metadata.full_name || user.email?.split('@')[0] || 'Anonymous',
          email: user.email,
          country: user.user_metadata.country || 'Unknown',
          plan: subscription?.plans?.name || 'Basic',
          date: user.created_at
        };
      });
      
      return new Response(JSON.stringify(recentUsers), {
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }
    
    else if (action === 'get_dashboard_stats') {
      // Get user count
      const { count: userCount, error: userCountError } = await supabaseClient
        .from('profiles')
        .select('*', { count: 'exact', head: true });
        
      if (userCountError) {
        console.error('Error fetching user count:', userCountError);
      }
      
      // Get active users in last 24 hours
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const { count: activeUsersCount, error: activeUsersError } = await supabaseClient
        .from('user_activity')
        .select('*', { count: 'exact', head: true })
        .gte('created_at', yesterday.toISOString());
      
      if (activeUsersError) {
        console.error('Error fetching active users:', activeUsersError);
      }
      
      // Get resume count
      const { count: resumeCount, error: resumeError } = await supabaseClient
        .from('resumes')
        .select('*', { count: 'exact', head: true });
        
      if (resumeError) {
        console.error('Error fetching resume count:', resumeError);
      }
      
      // Get cover letter count
      const { count: coverLetterCount, error: coverLetterError } = await supabaseClient
        .from('cover_letters')
        .select('*', { count: 'exact', head: true });
        
      if (coverLetterError) {
        console.error('Error fetching cover letter count:', coverLetterError);
      }
      
      // Get AI review count
      const { count: reviewCount, error: reviewError } = await supabaseClient
        .from('ai_reviews')
        .select('*', { count: 'exact', head: true });
        
      if (reviewError) {
        console.error('Error fetching review count:', reviewError);
      }
      
      // Get active subscription count
      const { count: subscriptionCount, error: subscriptionError } = await supabaseClient
        .from('subscriptions')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'active');
        
      if (subscriptionError) {
        console.error('Error fetching subscription count:', subscriptionError);
      }
      
      // Get active writing services orders
      const { count: writingServiceCount, error: writingError } = await supabaseClient
        .from('writing_services')
        .select('*', { count: 'exact', head: true })
        .in('status', ['pending', 'in_progress']);
        
      if (writingError) {
        console.error('Error fetching writing service count:', writingError);
      }
      
      // Get transaction total revenue
      const { data: transactions, error: transactionError } = await supabaseClient
        .from('transactions')
        .select('amount');
        
      if (transactionError) {
        console.error('Error fetching transactions:', transactionError);
      }
      
      const totalRevenue = transactions?.reduce((sum, t) => sum + (parseFloat(t.amount as string) || 0), 0) || 0;
      
      // Recent signups - last 5 users
      const { data: recentUsers, error: recentError } = await supabaseClient.auth.admin.listUsers({
        perPage: 5,
        sortBy: {
          column: 'created_at',
          order: 'desc',
        },
      });
        
      if (recentError) {
        console.error('Error fetching recent signups:', recentError);
      }
      
      // Get monthly revenue for the chart
      const { data: monthlyRevenue, error: monthlyRevenueError } = await supabaseClient
        .from('transactions')
        .select('amount, created_at');
      
      if (monthlyRevenueError) {
        console.error('Error fetching monthly revenue:', monthlyRevenueError);
      }
      
      // Process monthly revenue data
      const revenueByMonth = processMonthlyRevenue(monthlyRevenue || []);
      
      // Get daily active users for the chart
      const { data: userActivity, error: userActivityError } = await supabaseClient
        .from('user_activity')
        .select('created_at');
      
      if (userActivityError) {
        console.error('Error fetching user activity:', userActivityError);
      }
      
      // Process user activity data
      const activeUsersByDay = processUserActivity(userActivity || []);
      
      // Format recent users
      const formattedRecentUsers = recentUsers?.users.map(user => ({
        id: user.id,
        name: user.user_metadata?.full_name || user.email?.split('@')[0] || 'Anonymous',
        email: user.email,
        country: user.user_metadata?.country || 'Unknown',
        plan: 'Basic', // Default to Basic, would be replaced by actual subscription in production
        date: user.created_at
      })) || [];
      
      return new Response(JSON.stringify({
        userCount: userCount || 0,
        activeUsersCount: activeUsersCount || 0,
        resumeCount: resumeCount || 0,
        coverLetterCount: coverLetterCount || 0,
        reviewCount: reviewCount || 0,
        subscriptionCount: subscriptionCount || 0,
        writingServiceCount: writingServiceCount || 0,
        totalRevenue,
        recentSignups: formattedRecentUsers,
        revenueByMonth,
        activeUsersByDay
      }), {
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }
    
    else if (action === 'log_activity') {
      if (!data.user_id || !data.action) {
        return new Response(JSON.stringify({ error: 'Missing required parameters' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        });
      }
      
      const { data: result, error } = await supabaseClient.rpc('log_activity', {
        user_id: data.user_id,
        action_name: data.action,
        details: data.details || {}
      });
      
      if (error) {
        throw error;
      }
      
      return new Response(JSON.stringify({ success: true, id: result }), {
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }
    
    else if (action === 'get_all_transactions') {
      const { data: transactions, error } = await supabaseClient
        .from('transactions')
        .select(`
          id,
          amount,
          currency,
          status,
          payment_method,
          description,
          created_at,
          user_id,
          subscription_id
        `)
        .order('created_at', { ascending: false })
        .limit(data?.limit || 100);
      
      if (error) {
        throw error;
      }
      
      // Get user emails for the transactions
      const userIds = [...new Set(transactions.map(t => t.user_id))];
      const { data: users, error: usersError } = await supabaseClient.auth.admin.listUsers();
      
      if (usersError) {
        console.error('Error fetching users:', usersError);
      }
      
      // Map user emails to transactions
      const transactionsWithUserInfo = transactions.map(transaction => {
        const user = users?.users.find(u => u.id === transaction.user_id);
        return {
          ...transaction,
          userEmail: user?.email || 'Unknown'
        };
      });
      
      return new Response(JSON.stringify(transactionsWithUserInfo), {
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }
    
    else if (action === 'get_all_documents') {
      // Get resumes
      const { data: resumes, error: resumesError } = await supabaseClient
        .from('resumes')
        .select(`
          id,
          title,
          user_id,
          created_at,
          updated_at,
          is_reviewed,
          ats_score
        `)
        .order('created_at', { ascending: false })
        .limit(data?.limit || 50);
      
      if (resumesError) {
        console.error('Error fetching resumes:', resumesError);
      }
      
      // Get cover letters
      const { data: coverLetters, error: coverLettersError } = await supabaseClient
        .from('cover_letters')
        .select(`
          id,
          title,
          user_id,
          created_at,
          updated_at
        `)
        .order('created_at', { ascending: false })
        .limit(data?.limit || 50);
      
      if (coverLettersError) {
        console.error('Error fetching cover letters:', coverLettersError);
      }
      
      // Get user emails
      const userIds = [
        ...(resumes?.map(r => r.user_id) || []), 
        ...(coverLetters?.map(c => c.user_id) || [])
      ];
      const uniqueUserIds = [...new Set(userIds)];
      
      const { data: users, error: usersError } = await supabaseClient.auth.admin.listUsers();
      
      if (usersError) {
        console.error('Error fetching users:', usersError);
      }
      
      // Map user emails to documents
      const resumesWithUserInfo = resumes?.map(resume => {
        const user = users?.users.find(u => u.id === resume.user_id);
        return {
          ...resume,
          userEmail: user?.email || 'Unknown',
          documentType: 'resume'
        };
      }) || [];
      
      const coverLettersWithUserInfo = coverLetters?.map(coverLetter => {
        const user = users?.users.find(u => u.id === coverLetter.user_id);
        return {
          ...coverLetter,
          userEmail: user?.email || 'Unknown',
          documentType: 'coverLetter',
          is_reviewed: false,
          ats_score: null
        };
      }) || [];
      
      const allDocuments = [...resumesWithUserInfo, ...coverLettersWithUserInfo]
        .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      
      return new Response(JSON.stringify(allDocuments), {
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }
    
    return new Response(JSON.stringify({ error: 'Invalid action' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });

  } catch (error) {
    console.error('Error in admin-helpers function:', error);
    
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
});

// Helper function to process monthly revenue data
function processMonthlyRevenue(transactions: any[]) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const revenueByMonth: Record<string, number> = {};
  
  // Initialize all months with zero
  months.forEach(month => {
    revenueByMonth[month] = 0;
  });
  
  // Sum up revenue by month
  transactions.forEach(transaction => {
    const date = new Date(transaction.created_at);
    const month = months[date.getMonth()];
    revenueByMonth[month] += parseFloat(transaction.amount as string) || 0;
  });
  
  // Convert to array format for recharts
  return months.map(month => ({
    month,
    revenue: revenueByMonth[month]
  }));
}

// Helper function to process user activity data
function processUserActivity(activities: any[]) {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const activeUsersByDay: Record<string, number> = {};
  
  // Initialize all days with zero
  days.forEach(day => {
    activeUsersByDay[day] = 0;
  });
  
  // Count activities by day
  activities.forEach(activity => {
    const date = new Date(activity.created_at);
    const day = days[date.getDay() === 0 ? 6 : date.getDay() - 1]; // Adjust for Sunday as 0
    activeUsersByDay[day]++;
  });
  
  // Convert to array format for recharts
  return days.map(day => ({
    day,
    active: activeUsersByDay[day]
  }));
}
