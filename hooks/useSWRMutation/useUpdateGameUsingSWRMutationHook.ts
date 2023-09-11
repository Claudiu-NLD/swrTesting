import { updateGame } from "../functions/updateGame";
import { useSWRMutationMultiple } from "../functions/useSWRMutationMultiple";

export const useUpdateGameUsingSWRMutationHooks = (
  gameId: string,
  options?: any
) => {
  return useSWRMutationMultiple(
    [`games`, `games/${gameId}`],
    updateGame,
    options
  );
};
