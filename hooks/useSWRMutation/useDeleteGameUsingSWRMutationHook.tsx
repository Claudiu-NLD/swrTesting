import useSWRMutation from "swr/mutation";
import { mutate } from "swr";
import { deteleGame } from "../functions/deleteGame";
import { revalidateKeys } from "../functions/revalidateKeys";

export const useDeleteGameUsingSWRMutationHook = () => {
  return useSWRMutation("updateGame", async (_, { arg }: { arg: string }) => {
    await deteleGame(arg);
    const keys = ["games", `games/${arg}`];
    revalidateKeys(keys);
  });
};
