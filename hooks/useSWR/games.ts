import { updateGame } from "../functions/updateGame";
import { createGame } from "../functions/createGame";
import { deleteGame } from "../functions/deleteGame";
import { fetchGames } from "../functions/fetchGames";
import { fetchGame } from "../functions/fetchGame";
import { createSWRUpdateDeleteMutation } from "./helpers/createSWRUpdateDeleteMutation";
import { createSWRCreateMutation } from "./helpers/createSWRCreateMutation";
import { createSWRFetchOneQuery } from "./helpers/createSWRFetchOneQuery";
import { createSWRFetchManyQuery } from "./helpers/createSWRFetchManyQuery";
import { useSWRQuery } from "./useSWRQuery";
import { useSWRMutationQuery } from "./useSWRMutationQuery";
import { Game } from "@/types/database";

const KEY = "games";

export const useGames = createSWRFetchManyQuery(KEY, fetchGames);
export const useGame = createSWRFetchOneQuery(KEY, fetchGame);
export const useCreateGame = createSWRCreateMutation(KEY, createGame);
export const useUpdateGame = createSWRUpdateDeleteMutation(KEY, updateGame);
export const useDeleteGame = createSWRUpdateDeleteMutation(KEY, deleteGame);

export const useTestGames = () => {
  return useSWRQuery(fetchGames, [KEY]);
};
export const useTestGame = (gameId: string) => {
  return useSWRQuery(() => fetchGame(gameId), [KEY]);
};
export const useTestCreateGame = () => {
  return useSWRMutationQuery(createGame, [KEY]);
};
export const useTestUpdateGame = (gameId: string) => {
  return useSWRMutationQuery(updateGame, [KEY, `${KEY}/${gameId}`]);
};
export const useTestDeleteGame = (gameId: string) => {
  return useSWRMutationQuery(deleteGame, [KEY, `${KEY}/${gameId}`]);
};
