import { clientSupabase } from "@/app/providers/clientSupabaseProvider";
import { Game } from "@/types/database";

export const deleteGame = async (game: Game) => {
  return clientSupabase
    .from("games")
    .delete()
    .eq("id", game.id)
    .select()
    .single()
    .throwOnError();
};
