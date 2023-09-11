import useSWRMutation from "swr/mutation";
import { mutationWrapper } from "./mutationWrapper";

export const useSWRMutationMultiple = <
  FUNC extends (arg: ARG) => RET,
  ARG = Parameters<FUNC>[0],
  RET = ReturnType<FUNC>
>(
  keys: string[],
  mutatingFn: FUNC,
  options?: any
) => {
  return useSWRMutation(
    keys[0],
    (_, { arg }: { arg: ARG }) =>
      mutationWrapper(mutatingFn, arg, (key) => keys.includes(key)),
    options
  );
};
