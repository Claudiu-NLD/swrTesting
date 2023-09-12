import { supabase } from "@/app/providers/supabaseProvider";
import { Game } from "@/types/database";

export const createGame = async (game: Omit<Game, "id">) => {
  const { data } = await supabase
    .from("games")
    .insert(game)
    .throwOnError()
    .select()
    .maybeSingle();
  return data;
};
