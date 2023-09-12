import { supabase } from "@/app/providers/supabaseProvider";
import { Game } from "@/types/database";

export const fetchGame = async (gameId: string) => {
  const { data, error } = await supabase
    .from("games")
    .select("*")
    .eq("id", gameId)
    .maybeSingle();
  if (error) {
    console.log(error, "could not fetch this game");
  }
  return data;
};
