import { SWRMutationOptions } from "@/types/SWRMutationOptions";
import { createGame } from "../functions/createGame";
import { useSWRMutationMultiple } from "../functions/useSWRMutationMultiple";

export const useCreateGameUsingSWRMutationHooks = (
  options?: SWRMutationOptions<typeof createGame>
) => {
  return useSWRMutationMultiple([`games`], createGame, options);
};
