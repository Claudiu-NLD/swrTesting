import useSWR from "swr";
import { fetchGame } from "../functions/fetchGame";

export const useGame = (gameId: string) => {
  return useSWR(`games/${gameId}`, () => fetchGame(gameId));
};
