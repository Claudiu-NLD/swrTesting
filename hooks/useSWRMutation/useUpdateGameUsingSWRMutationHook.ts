import useSWRMutation from "swr/mutation";
import { updateGame } from "../functions/updateGame";

export const useUpdateGameUsingSWRMutationHooks = (gameId: string) => {
  return useSWRMutation(["games", `games/${gameId}`], updateGame);
};
