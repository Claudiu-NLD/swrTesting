import { clientSupabase } from "@/app/providers/clientSupabaseProvider";
import { Game } from "@/types/database";

export const createGame = async (game: Omit<Game, "id">) => {
  const { data } = await clientSupabase
    .from("games")
    .insert(game)
    .throwOnError()
    .select()
    .maybeSingle();

  return data;
};
