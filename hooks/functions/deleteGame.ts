import { supabase } from "@/app/providers/supabaseProvider";
import { Game } from "@/types/supabase";

export const deleteGame = async (game: Game) => {
  const { data } = await supabase
    .from("games")
    .delete()
    .eq("id", game.id)
    .throwOnError();
  return data;
};
