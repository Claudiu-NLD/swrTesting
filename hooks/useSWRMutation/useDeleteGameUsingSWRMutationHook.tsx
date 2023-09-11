import useSWRMutation, { SWRMutationResponse } from "swr/mutation";
import { deleteGame } from "../functions/deleteGame";
import { mutatingFunction } from "./mutatingFunction";
import { Game } from "@/types/supabase";
import { mutate } from "swr";
import { revalidateKeys } from "../functions/revalidateKeys";

// export const useDeleteGameUsingSWRMutationHook = (gameId: string) => {
//   console.log("useDeleteGameUsingSWRMutationHook", gameId);
//   return useSWRMutation(
//     'games',
//     mutatingFunction(gameId, deleteGame)
//   );
// };

// export const useDeleteGameUsingSWRMutationHook = (gameId: string) => {
//   return useSWRMutation("games", (_, args) => myFunction(deleteGame, args, ["games"]));
// };

// export type MutatingFunction =  <T extends never, Z extends never>(arg: T) => Promise<Z>;

const mutationWrapper = async <
  RET,
  ARG,
  FUNC extends (arg: ARG) => Promise<RET>
>(
  mutatingFn: FUNC,
  arg: ARG,
  filterFunction: (key: any) => boolean
) => {
  await mutatingFn(arg);
  mutate(filterFunction);
};

const useSWRMutationMultiple = <
  RET,
  ARG extends Game,
  FUNC extends (arg: ARG) => Promise<RET>
>(
  keys: string[],
  mutatingFn: FUNC
) => {
  return useSWRMutation(keys[0], (_, { arg }: { arg: ARG }) =>
    mutationWrapper(mutatingFn, arg, (key) => keys.includes(key))
  );
};

export const useDeleteGameUsingSWRMutationHook = (gameId: string) => {
  return useSWRMutationMultiple([`games`, `games/${gameId}`], deleteGame);
};

// export const useDeleteGameUsingSWRMutationHook = (gameId: string) => {
//   return useSWRMutation("updateGame", async (_, { arg }: { arg: Game }) => {
//     await deleteGame(arg);
//     const keys = ["games", `games/${gameId}`];
//     revalidateKeys(keys);
//   });
// };
