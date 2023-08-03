import { Game } from "@/types/supabase";
import { useSWRConfig } from "swr";
import { createNewGame } from "../functions/createGame";

export const useCreateGameUsingGlobalMutate = () => {
  const { mutate } = useSWRConfig();
  const createGameUsingGlobalMutate = async (game: Game) => {
    const response = await createNewGame(game);
    console.log("revalidated data using GLOBAL mutate");
    mutate("games");
    return response;
  };

  return { createGameUsingGlobalMutate };
};
