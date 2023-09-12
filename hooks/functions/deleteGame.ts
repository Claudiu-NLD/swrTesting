import { clientSupabase } from "@/app/providers/clientSupabaseProvider";
import { Game } from "@/types/database";

export const deleteGame = async (game: Game) => {
  const { data } = await clientSupabase
    .from("games")
    .delete()
    .eq("id", game.id)
    .select()
    .single()
    .throwOnError();

  return data;
};
