import { clientSupabase } from "@/app/providers/clientSupabaseProvider";

export const fetchGames = async () => {
  const { data } = await clientSupabase.from("games").select("*");

  return data;
};
