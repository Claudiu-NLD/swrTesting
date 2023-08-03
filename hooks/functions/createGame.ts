import { supabase } from "@/app/providers/supabaseProvider";
import { Game } from "@/types/supabase";

export const createNewGame = async (game: Game) => {
  const { data, error } = await supabase.from("games").insert(game);
  if (error) {
    console.log(error);
  }
};
