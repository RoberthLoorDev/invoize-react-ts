import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
     throw new Error("Faltan las credenciales de Supabase en .env");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
