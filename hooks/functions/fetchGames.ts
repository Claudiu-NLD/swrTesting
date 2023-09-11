import { supabase } from "@/app/providers/supabaseProvider";
import { Game } from "@/types/supabase";

export const fetchGames = async () => {
  const { data, error } = await supabase.from("games").select("*");

  return data as Game[];
};
