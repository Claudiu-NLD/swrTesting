import useSWR from "swr";
import { createNewGame } from "../functions/createGame";
import { Game } from "@/types/supabase";
import { fetchAllGames } from "../functions/fetchGames";

export const useCreateGameUsingBoundMutate = () => {
  const { data, mutate, error, isLoading, isValidating } = useSWR("games", () =>
    fetchAllGames()
  );

  const createGameUsingBoundMuate = async (game: Game) => {
    const response = await createNewGame(game);
    mutate();
    console.log("revalidated data using bound mutate");
    return response;
  };
  return { createGameUsingBoundMuate };
};
