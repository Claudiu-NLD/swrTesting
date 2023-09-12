import { clientSupabase } from "@/app/providers/clientSupabaseProvider";

export const fetchGame = async (gameId: string) => {
  return clientSupabase
    .from("games")
    .select("*")
    .eq("id", gameId)
    .maybeSingle();
};
