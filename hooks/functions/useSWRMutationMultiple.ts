import useSWRMutation from "swr/mutation";
import { mutationWrapper } from "./mutationWrapper";
import { SWRMutationOptions } from "@/types/SWRMutationOptions";

export const useSWRMutationMultiple = <
  FUNC extends (arg: ARG) => RET,
  ARG = Parameters<FUNC>[0],
  RET = ReturnType<FUNC>
>(
  keys: [string, ...string[]], // At least one string....
  mutatingFn: FUNC,
  options?: SWRMutationOptions<FUNC, ARG, RET>
) => {
  return useSWRMutation(
    keys[0],
    (_, { arg }: { arg: ARG }) => {
      return mutationWrapper(mutatingFn, arg, (key) => keys.includes(key));
    },
    options
  );
};
