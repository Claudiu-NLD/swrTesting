import { useSWRConfig } from "swr";
import { updateGame } from "../functions/updateGame";
import { Game } from "@/types/supabase";

export const useUpdateGameUsingGlobalMutate = () => {
  const { mutate } = useSWRConfig();
  const updateGameUsingGlobalMutate = async (game: Game) => {
    const response = await updateGame(game);
    console.log("updated game and revalidated data using GLOBAL mutate");
    mutate("games");
    return response;
  };

  return { updateGameUsingGlobalMutate };
};
