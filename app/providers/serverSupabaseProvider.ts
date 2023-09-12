import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const serverSupabase = createServerComponentClient<Database>({
  cookies,
});
