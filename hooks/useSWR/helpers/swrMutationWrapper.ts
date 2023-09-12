import { BareFetcher, mutate } from "swr";

export const swrMutationWrapper = async <
  FUNC extends BareFetcher<RET>,
  ARG = Parameters<FUNC>[0],
  RET = Awaited<ReturnType<FUNC>>
>(
  fetcher: FUNC,
  arg: ARG,
  filterFunction?: (keys: any) => boolean
) => {
  const response = await fetcher(arg);
  filterFunction && mutate(filterFunction);
  return response;
};
