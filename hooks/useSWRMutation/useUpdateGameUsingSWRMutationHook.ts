import { SWRMutationOptions } from "@/types/SWRMutationOptions";
import { updateGame } from "../functions/updateGame";
import { useSWRMutationMultiple } from "../functions/useSWRMutationMultiple";

export const useUpdateGameUsingSWRMutationHooks = (
  gameId: string,
  options?: SWRMutationOptions<typeof updateGame>
) => {
  return useSWRMutationMultiple(
    [`games`, `games/${gameId}`],
    updateGame,
    options
  );
};
