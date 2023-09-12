import useSWR, { BareFetcher, Fetcher, SWRConfiguration } from "swr";
import { swrQueryWrapper } from "./swrQueryWrapper";

export const useSWRQuery = <
  FUNC extends Fetcher<RET>,
  RET = Awaited<ReturnType<FUNC>>
>(
  fetcher: FUNC,
  keys: [string, ...string[]],
  options?: SWRConfiguration<RET, any, BareFetcher<RET>>
) => {
  return useSWR<RET>(
    keys[0],
    async (arg) => await swrQueryWrapper(fetcher, arg),
    options
  );
};
