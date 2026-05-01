import { createClient } from "@supabase/supabase-js";

// Isi lewat file .env.local (recommended):
// VITE_SUPABASE_URL=https://xxxxx.supabase.co
// VITE_SUPABASE_ANON_KEY=xxxxx
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "ISI_PROJECT_URL_SUPABASE";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "ISI_ANON_PUBLIC_KEY_SUPABASE";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
