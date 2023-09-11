import { supabase } from "@/app/providers/supabaseProvider";
import { Game } from "@/types/supabase";

export const updateGame = async (url: any, { arg }: { arg: Game }) => {
  const { data: updateGame, error: updateGameError } = await supabase
    .from("games")
    .update({ ...arg })
    .eq("id", arg.id)
    .select();
  if (updateGameError) {
    console.log(updateGameError.message);
  } else {
    console.log("updated game successfully");
  }
};
