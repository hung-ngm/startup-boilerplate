import { env } from "@/env";
import postgres from "postgres";

// This is just a wrapper around the postgres connection
// Drizzle will be the primary ORM interface
export const supabaseClient = postgres(env.DATABASE_URL);
