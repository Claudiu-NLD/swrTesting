import { supabase } from "@/app/providers/supabaseProvider";
import { Game } from "@/types/supabase";

export const createGame = async (game: Game) => {
  const { data } = await supabase
    .from("games")
    .insert(game)
    .throwOnError()
    .select()
    .maybeSingle();
  return data as Game;
};
