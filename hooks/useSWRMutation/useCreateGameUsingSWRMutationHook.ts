import { Game } from "@/types/supabase";
import { createNewGame } from "../functions/createGame";
import useSWRMutation from "swr/mutation";
import { mutate } from "swr";

export const useCreateGameUsingSWRMutationHooks = () => {
  return useSWRMutation("games", async (_, { arg }: { arg: Game }) => {
    console.log("revalidated data using useSWRMutation");
    createNewGame(arg);
    mutate("games");
  });
};
