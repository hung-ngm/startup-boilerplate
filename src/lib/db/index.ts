import { drizzle } from "drizzle-orm/postgres-js";
import { supabaseClient } from "../supabase";
import * as schema from "./schema";

export const db = drizzle(supabaseClient, { schema });
