import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wjtvgeaadlebqursdzgx.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqdHZnZWFhZGxlYnF1cnNkemd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxNzg3ODMsImV4cCI6MjA2Mzc1NDc4M30.svexzMZkUX6dVJlNtbzdYK1Hyk6kjwMtwmxetfoNmWQ'; // TODO: Replace with your actual anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 