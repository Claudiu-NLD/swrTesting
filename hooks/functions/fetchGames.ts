import { clientSupabase } from "@/app/providers/clientSupabaseProvider";

export const fetchGames = async () => clientSupabase.from("games").select("*");
