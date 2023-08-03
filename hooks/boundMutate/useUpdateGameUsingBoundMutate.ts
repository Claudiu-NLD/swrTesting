import useSWR from "swr";
import { Game } from "@/types/supabase";
import { fetchAllGames } from "../functions/fetchGames";
import { updateGame } from "../functions/updateGame";

export const useUpdateGameUsingBoundMutate = () => {
  const { data, mutate } = useSWR("games", () => fetchAllGames());

  const updateGameUsingBoundMutate = async (game: Game) => {
    const gameData = await updateGame(game);
    mutate();
    console.log("updated game and revalidated data using bound mutate");
    return gameData;
  };
  return { updateGameUsingBoundMutate, data };
};
