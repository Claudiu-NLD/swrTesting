import { Game } from "@/types/database";
import useSWR from "swr";
import { createGame } from "../functions/createGame";
import { fetchGames } from "../functions/fetchGames";

export const useCreateGameUsingBoundMutate = () => {
  const { data, mutate, error, isLoading, isValidating } = useSWR("games", () =>
    fetchGames()
  );

  const createGameUsingBoundMuate = async (game: Game) => {
    const response = await createGame(game);
    mutate();
    console.log("revalidated data using bound mutate");
    return response;
  };
  return { createGameUsingBoundMuate };
};
