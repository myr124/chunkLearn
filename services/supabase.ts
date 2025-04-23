import { createClient } from "@supabase/supabase-js";

// This file is used to create a Supabase client instance.
// It uses environment variables to get the Supabase URL and key.
// Make sure to set these environment variables in your .env file or in your hosting platform.
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

