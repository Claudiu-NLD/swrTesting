import { clientSupabase } from "@/app/providers/clientSupabaseProvider";
import { Game } from "@/types/database";

export const updateGame = async (game: Game) => {
  return await clientSupabase
    .from("games")
    .update({ ...game })
    .eq("id", game.id)
    .throwOnError()
    .select()
    .maybeSingle();
};
