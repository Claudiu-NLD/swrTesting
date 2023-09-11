import { createGame } from "../functions/createGame";
import { useSWRMutationMultiple } from "../functions/useSWRMutationMultiple";

export const useCreateGameUsingSWRMutationHooks = (options?: any) => {
  return useSWRMutationMultiple([`games`], createGame, options);
};
