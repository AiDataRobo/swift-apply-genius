
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
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    );

    // Get the request body
    const { 
      user_id, 
      file_path, 
      file_name, 
      file_size, 
      file_type, 
      status = 'pending'
    } = await req.json();

    // Call the RPC function to create the resume submission
    const { data, error } = await supabaseClient.rpc('create_resume_submission', {
      user_id_param: user_id,
      file_path_param: file_path,
      file_name_param: file_name,
      file_size_param: file_size,
      file_type_param: file_type,
      status_param: status
    });

    if (error) {
      throw error;
    }

    return new Response(
      JSON.stringify({ success: true, id: data }),
      { headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  } catch (error) {
    console.error('Error creating resume submission:', error);
    
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders }
      }
    );
  }
});
