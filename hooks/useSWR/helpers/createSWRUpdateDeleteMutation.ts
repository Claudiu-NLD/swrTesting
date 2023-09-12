import { createSWRMutation } from "./swrMutation";

export const createSWRUpdateDeleteMutation = <
  FUNC extends (arg: ARG) => RET,
  ARG = Parameters<FUNC>[0],
  RET = ReturnType<FUNC>
>(
  primaryKey: string,
  mutatingFn: FUNC
) => {
  return createSWRMutation<RET, string, ARG, Error>({
    primaryKey: primaryKey,
    fetcher: (key, options) => mutatingFn(options.arg),
  });
};
