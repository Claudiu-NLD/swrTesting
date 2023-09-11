import { supabase } from "@/app/providers/supabaseProvider";
import { Game } from "@/types/supabase";

export const deleteGame = async (arg: Game) => {
  const { data, error } = await supabase
    .from("games")
    .delete()
    .eq("id", arg.id);

  if (error) {
    console.log(error, "error deleting game");
  }
};
