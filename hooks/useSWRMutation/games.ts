import { Game } from "@/types/supabase";
import { createSWRMutation } from "./swrMutation";
import { updateGame } from "../functions/updateGame";
import { createGame } from "../functions/createGame";
import { deleteGame } from "../functions/deleteGame";
import { createSWR } from "./swrQuery";
import { fetchGames } from "../functions/fetchGames";
import { fetchGame } from "../functions/fetchGame";

const KEY = "games";

export const useGames = createSWR<Game[], { skip?: number }>({
  primaryKey: KEY,
  fetcher: (arg) => fetchGames(),
});

export const useGame = createSWR<Game, string, Error>({
  primaryKey: KEY,
  fetcher: (arg) => fetchGame(arg[0]),
});

export const useUpdateGame = createSWRMutation<Game, string, Game, Error>({
  primaryKey: KEY,
  fetcher: (key, options) => updateGame(options.arg),
});

export const useCreateGame = createSWRMutation<Game, null, Game, Error>({
  primaryKey: KEY,
  fetcher: (key, options) => createGame(options.arg),
});

export const useDeleteGame = createSWRMutation<null, string, Game, Error>({
  primaryKey: KEY,
  fetcher: (key, options) => deleteGame(options.arg),
});
