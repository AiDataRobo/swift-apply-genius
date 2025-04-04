
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
    // Create a Supabase client with the service role key (for admin operations)
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );
    
    // Create a regular client for the authenticated user
    const authHeader = req.headers.get('Authorization');
    let supabaseClient;
    
    if (authHeader) {
      supabaseClient = createClient(
        Deno.env.get('SUPABASE_URL') ?? '',
        Deno.env.get('SUPABASE_ANON_KEY') ?? '',
        { global: { headers: { Authorization: authHeader } } }
      );
    } else {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    // Check if user is an admin
    const { data: { user }, error: userError } = await supabaseClient.auth.getUser();
    
    if (userError || !user) {
      throw new Error('Unauthorized access');
    }
    
    // Get admin role
    const { data: adminRole, error: roleError } = await supabaseClient
      .from('admin_roles')
      .select('role')
      .eq('user_id', user.id)
      .single();
    
    if (roleError || !adminRole) {
      throw new Error('User is not an admin');
    }
    
    const { action } = await req.json();
    
    // Handle different actions
    switch (action) {
      case 'get_users_with_profiles': {
        // Get users from auth.users
        const { data: authUsers, error: usersError } = await supabaseAdmin.auth.admin.listUsers();
        
        if (usersError) {
          throw usersError;
        }
        
        // Get profiles for those users
        const { data: profiles, error: profilesError } = await supabaseClient
          .from('profiles')
          .select('*');
        
        if (profilesError) {
          throw profilesError;
        }
        
        // Combine the data
        const users = authUsers.users.map(user => {
          const profile = profiles.find(p => p.id === user.id);
          return {
            ...user,
            profile: profile || null
          };
        });
        
        return new Response(JSON.stringify(users), {
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        });
      }
      
      case 'get_dashboard_stats': {
        // Get various statistics needed for the dashboard
        // In a real app, this would gather and return all required stats
        // For now, we'll return sample data
        
        return new Response(JSON.stringify({
          userCount: 100,
          resumeCount: 250,
          coverLetterCount: 150,
          reviewCount: 75,
          subscriptionCount: 50,
          writingServiceCount: 25,
          totalRevenue: 2500,
          recentSignups: []
        }), {
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        });
      }
      
      default:
        throw new Error(`Unsupported action: ${action}`);
    }

  } catch (error) {
    console.error('RPC function error:', error);
    
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
});
