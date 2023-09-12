import { createSWRMutation } from "./swrMutation";
import { swrMutationWrapper } from "./swrMutationWrapper";

export const createSWRCreateMutation = <
  FUNC extends (arg: ARG) => Promise<RET>,
  ARG = Parameters<FUNC>[0],
  RET = Awaited<ReturnType<FUNC>>
>(
  primaryKey: string,
  mutatingFn: FUNC
) => {
  return createSWRMutation<RET, null, ARG, Error>({
    primaryKey: primaryKey,
    fetcher: (key, options) =>
      swrMutationWrapper(mutatingFn, options.arg, (key) => {
        console.log(
          `Filter function checking ${primaryKey} against ${JSON.stringify(
            key,
            null,
            2
          )}`
        );
        return key === primaryKey;
      }),
  });
};
