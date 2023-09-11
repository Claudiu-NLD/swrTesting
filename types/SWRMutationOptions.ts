import { SWRMutationConfiguration } from "swr/mutation";
export type SWRMutationOptions<
  FUNC extends (arg: ARG) => RET,
  ARG = Parameters<FUNC>[0],
  RET = ReturnType<FUNC>
> = SWRMutationConfiguration<RET, any, string, ARG>;
