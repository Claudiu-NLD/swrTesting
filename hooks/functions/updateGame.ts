import { supabase } from "@/app/providers/supabaseProvider";
import { Game } from "@/types/supabase";

export const updateGame = async (game: Game) => {
  const { data: updateGame, error: updateGameError } = await supabase
    .from("games")
    .update({ ...game })
    .eq("id", game.id)
    .select();
  if (updateGameError) {
    console.log(updateGameError.message);
  } else {
    console.log("updated game successfully");
  }
};
