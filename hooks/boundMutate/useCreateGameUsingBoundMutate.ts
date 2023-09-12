import useSWR from "swr";
import { Game } from "@/types/database";
import { fetchGames } from "../functions/fetchGames";
import { createGame } from "../functions/createGame";

export const useCreateGameUsingBoundMutate = () => {
  const { mutate } = useSWR("games", () => fetchGames());

  const createGameUsingBoundMuate = async (game: Game) => {
    const response = await createGame(game);
    mutate();
    console.log("revalidated data using bound mutate");
    return response;
  };
  return { createGameUsingBoundMuate };
};
