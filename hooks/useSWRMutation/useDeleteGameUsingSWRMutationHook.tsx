import { deleteGame } from "../functions/deleteGame";
import { useSWRMutationMultiple } from "../functions/useSWRMutationMultiple";

export const useDeleteGameUsingSWRMutationHook = (
  gameId: string,
  options?: any
) => {
  return useSWRMutationMultiple(
    [`games`, `games/${gameId}`],
    deleteGame,
    options
  );
};
