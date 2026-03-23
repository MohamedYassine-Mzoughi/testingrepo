const SUPABASE_URL = "https://xjkcjcazvxkjjezjfngg.supabase.co";          // placeholder: e.g., "https://xyzcompany.supabase.co"
const SUPABASE_ANON_KEY = "sb_publishable_uHh_-XiWjxIuOJJd9hkskA_zJYZAdYG"; // placeholder: e.g., "eyJhbGciOiJIUzI1NiIs..."

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);