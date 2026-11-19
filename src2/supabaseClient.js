import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://arwyosntvctaxpatbapa.supabase.co";
const supabaseAnonKey ="sb_publishable_5Jz6j_rLSRXwFsMRsTfGVg_J6rAFxK8";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);