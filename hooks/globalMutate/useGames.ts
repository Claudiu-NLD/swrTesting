import useSWR from "swr";
import { fetchGames } from "../functions/fetchGames";

export const useGames = () => {
  return useSWR("games", () => fetchGames());
};
