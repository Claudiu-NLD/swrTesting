import { supabase } from "@/app/providers/supabaseProvider";

export const deteleGame = async (gameId: string) => {
  const { data, error } = await supabase
    .from("games")
    .delete()
    .eq("id", gameId);

  if (error) {
    console.log(error, "error deleting game");
  }
};
