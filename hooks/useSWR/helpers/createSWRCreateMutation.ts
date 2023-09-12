import { createSWRMutation } from "./swrMutation";

export const createSWRCreateMutation = <
  FUNC extends (arg: ARG) => RET,
  ARG = Parameters<FUNC>[0],
  RET = ReturnType<FUNC>
>(
  primaryKey: string,
  mutatingFn: FUNC
) => {
  return createSWRMutation<RET, null, ARG, Error>({
    primaryKey: primaryKey,
    fetcher: (key, options) => mutatingFn(options.arg),
  });
};
