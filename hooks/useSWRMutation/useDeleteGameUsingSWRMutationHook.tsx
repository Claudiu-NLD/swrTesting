import { SWRMutationOptions } from "@/types/SWRMutationOptions";
import { deleteGame } from "../functions/deleteGame";
import { useSWRMutationMultiple } from "../functions/useSWRMutationMultiple";

export const useDeleteGameUsingSWRMutationHook = (
  gameId: string,
  options?: SWRMutationOptions<typeof deleteGame>
) => {
  return useSWRMutationMultiple(
    [`games`, `games/${gameId}`],
    deleteGame,
    options
  );
};
