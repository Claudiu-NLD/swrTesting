import { updateGame } from "../functions/updateGame";
import { createGame } from "../functions/createGame";
import { deleteGame } from "../functions/deleteGame";
import { fetchGames } from "../functions/fetchGames";
import { fetchGame } from "../functions/fetchGame";
import { createSWRUpdateDeleteMutation } from "./helpers/createSWRUpdateDeleteMutation";
import { createSWRCreateMutation } from "./helpers/createSWRCreateMutation";
import { createSWRFetchManyQuery } from "./helpers/createSWRFetchManyQuery";
import { useSWRQuery } from "./useSWRQuery";
import { useSWRMutationQuery } from "./useSWRMutationQuery";
import { Game } from "@/types/database";
import { SWRFetchFunction, SWRMutationFunction } from "@/types/SWRQueryTypes";

const KEY = "games";

export const useGames = createSWRFetchManyQuery(KEY, fetchGames);
// export const useGame = createSWRFetchOneQuery(KEY, fetchGame);
export const useCreateGame = createSWRCreateMutation(KEY, createGame);
export const useUpdateGame = createSWRUpdateDeleteMutation(KEY, updateGame);
export const useDeleteGame = createSWRUpdateDeleteMutation(KEY, deleteGame);

export const useTestGames = () => {
  return useSWRQuery(fetchGames, [KEY]);
};
export const useTestGame: SWRFetchFunction<Game | null> = (
  gameId: string,
  options
) => {
  return useSWRQuery(fetchGame, [KEY, `${KEY}/${gameId}`], options);
};

export const useTestCreateGame: SWRMutationFunction<
  Game | null,
  Omit<Game, "id">
> = (options) => {
  return useSWRMutationQuery(createGame, [KEY], options);
};

export const useTestUpdateGame: SWRMutationFunction<Game | null, Game> = (
  gameId: string,
  options
) => {
  return useSWRMutationQuery(updateGame, [KEY, `${KEY}/${gameId}`], options);
};

export const useTestDeleteGame: SWRMutationFunction<Game | null, Game> = (
  gameId: string,
  options
) => {
  return useSWRMutationQuery(deleteGame, [KEY, `${KEY}/${gameId}`], options);
};
