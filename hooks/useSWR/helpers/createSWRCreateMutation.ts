import { revalidationFilterFunction } from "./revalidationFilterFunction";
import { createSWRMutation } from "./swrMutation";
import { swrMutationWrapper } from "./swrMutationWrapper";

export const createSWRCreateMutation = <
  FUNC extends (arg: ARG) => Promise<RET>,
  ARG = Parameters<FUNC>[0],
  RET = Awaited<ReturnType<FUNC>>
>(
  primaryKey: string,
  mutatingFn: FUNC,
  extraKeys?: [string, any][]
) => {
  return createSWRMutation<RET, null, ARG, Error>({
    primaryKey: primaryKey,
    fetcher: (keys, options) =>
      swrMutationWrapper(
        mutatingFn,
        options.arg,
        revalidationFilterFunction(keys, extraKeys)
      ),
  });
};
