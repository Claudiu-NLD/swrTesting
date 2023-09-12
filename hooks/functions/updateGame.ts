import { supabase } from "@/app/providers/supabaseProvider";
import { Game } from "@/types/database";

export const updateGame = async (game: Game) => {
  const { data } = await supabase
    .from("games")
    .update({ ...game })
    .eq("id", game.id)
    .throwOnError()
    .select()
    .maybeSingle();
  return data;
};
