import useSWR, { BareFetcher, Fetcher, SWRConfiguration } from "swr";
import { swrQueryWrapper } from "./swrQueryWrapper";

export const useSWRQuery = <
  FUNC extends Fetcher<RET>,
  RET = Awaited<ReturnType<FUNC>>
>(
  fetcher: FUNC,
  keys: [string, ...string[]],
  arg?: Parameters<FUNC>[0],
  options?: SWRConfiguration<RET, any, BareFetcher<RET>>
) => {
  return useSWR<RET>(
    keys[0],
    async () => await swrQueryWrapper(fetcher, arg),
    options
  );
};
