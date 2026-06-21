import { createClient } from "@supabase/supabase-js";

let cachedClient = globalThis.__axxionSupabaseAdmin;

function getRequiredEnv(name) {
  const value = process.env[name]?.trim();

  if (!value) {
    const error = new Error(`Supabase is not configured. Missing environment variable: ${name}.`);
    error.code = "SUPABASE_NOT_CONFIGURED";
    error.statusCode = 500;
    throw error;
  }

  return value;
}

export function getSupabaseAdmin() {
  if (!cachedClient) {
    cachedClient = createClient(
      getRequiredEnv("SUPABASE_URL"),
      getRequiredEnv("SUPABASE_SERVICE_ROLE_KEY"),
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    );

    globalThis.__axxionSupabaseAdmin = cachedClient;
  }

  return cachedClient;
}
