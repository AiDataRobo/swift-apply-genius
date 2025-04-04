
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
      
      // Merge auth users with their profile data
      const usersWithProfiles = users.users.map(user => {
        const userProfile = profiles.find(profile => profile.id === user.id);
        return {
          ...user,
          profile: userProfile || null
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
      
      // Format the user data to include relevant info
      const recentUsers = users.users.map(user => ({
        id: user.id,
        name: user.user_metadata.full_name || user.email,
        email: user.email,
        country: user.user_metadata.country || 'Unknown',
        plan: 'Basic', // This would be dynamic in a production app
        date: user.created_at
      }));
      
      return new Response(JSON.stringify(recentUsers), {
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
        action: data.action,
        details: data.details || {}
      });
      
      if (error) {
        throw error;
      }
      
      return new Response(JSON.stringify({ success: true, id: result }), {
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
