import { mutate } from "swr";

export const mutationWrapper = async <ARG, RET>(
  mutatingFn: (arg: ARG) => RET,
  arg: ARG,
  filterFunction: (key: any) => boolean
) => {
  const response = await mutatingFn(arg);
  mutate(filterFunction);
  return response;
};
