import { Game } from "@/types/supabase";
import useSWRMutation from "swr/mutation";
import { updateGame } from "../functions/updateGame";
import { revalidateKeys } from "../functions/revalidateKeys";

export const useUpdateGameUsingSWRMutationHooks = () => {
  return useSWRMutation("updateGames", async (_, { arg }: { arg: Game }) => {
    await updateGame(arg);
    const keys = ["games", `games/${arg.id}`];
    revalidateKeys(keys);
  });
};
