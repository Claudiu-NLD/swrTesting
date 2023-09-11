import { createNewGame } from "../functions/createGame";
import useSWRMutation from "swr/mutation";

export const useCreateGameUsingSWRMutationHooks = () => {
  return useSWRMutation("games", createNewGame);
};
