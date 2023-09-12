import { updateGame } from "../functions/updateGame";
import { createGame } from "../functions/createGame";
import { deleteGame } from "../functions/deleteGame";
import { fetchGames } from "../functions/fetchGames";
import { fetchGame } from "../functions/fetchGame";
import { createSWRUpdateDeleteMutation } from "./helpers/createSWRUpdateDeleteMutation";
import { createSWRCreateMutation } from "./helpers/createSWRCreateMutation";
import { createSWRFetchOneQuery } from "./helpers/createSWRFetchOneQuery";
import { createSWRFetchManyQuery } from "./helpers/createSWRFetchManyQuery";

const KEY = "games";

export const useGames = createSWRFetchManyQuery(KEY, fetchGames);
export const useGame = createSWRFetchOneQuery(KEY, fetchGame);
export const useCreateGame = createSWRCreateMutation(KEY, createGame);
export const useUpdateGame = createSWRUpdateDeleteMutation(KEY, updateGame);
export const useDeleteGame = createSWRUpdateDeleteMutation(KEY, deleteGame);
