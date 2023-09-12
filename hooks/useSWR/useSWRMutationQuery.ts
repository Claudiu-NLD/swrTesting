import { BareFetcher } from "swr";
import useSWRMutation, { SWRMutationConfiguration } from "swr/mutation";
import { swrQueryWrapper } from "./swrQueryWrapper";

export const useSWRMutationQuery = <
  FUNC extends BareFetcher<RET>,
  ARG = Parameters<FUNC>[0],
  RET = Awaited<ReturnType<FUNC>>
>(
  fetcher: FUNC,
  keys: [string, ...string[]],
  options?: SWRMutationConfiguration<RET, any, string, ARG, any>
) => {
  return useSWRMutation(
    keys[0],
    (_, { arg }) => {
      return swrQueryWrapper(fetcher, arg, (key) => keys.includes(key));
    },
    options
  );
};
