import { supabase } from "@/app/providers/supabaseProvider";

export const fetchAllGames = async () => {
  const { data, error } = await supabase.from("games").select("*");

  return data;
};
