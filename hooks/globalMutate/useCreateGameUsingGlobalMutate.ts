import { Game } from "@/types/database";
import { useSWRConfig } from "swr";
import { createGame } from "../functions/createGame";

export const useCreateGameUsingGlobalMutate = () => {
  const { mutate } = useSWRConfig();

  const createGameUsingGlobalMutate = async (game: Game) => {
    const response = await createGame(game);
    console.log("revalidated data using GLOBAL mutate");
    mutate("games");
    return response;
  };
  return { createGameUsingGlobalMutate };
};
