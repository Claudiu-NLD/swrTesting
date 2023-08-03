import useSWR from "swr";
import { fetchAllGames } from "../functions/fetchGames";

export const useGames = () => {
  return useSWR("games", () => fetchAllGames());
};
