import { supabase } from "@/app/providers/supabaseProvider";
import { Game } from "@/types/supabase";

export const createNewGame = async (url: any, { arg }: { arg: Game }) => {
  const { data, error } = await supabase.from("games").insert(arg);
  if (error) {
    console.log(error);
  }
};
