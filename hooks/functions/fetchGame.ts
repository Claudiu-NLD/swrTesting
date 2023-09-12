import { clientSupabase } from "@/app/providers/clientSupabaseProvider";

export const fetchGame = async (gameId: string) => {
  const { data } = await clientSupabase
    .from("games")
    .select("*")
    .eq("id", gameId)
    .maybeSingle();

  return data;
};
