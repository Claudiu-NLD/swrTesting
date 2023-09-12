import { createSWR } from "./swrQuery";

export const createSWRFetchOneQuery = <
  FUNC extends (arg: string) => Promise<RET>,
  RET = Awaited<ReturnType<FUNC>>
>(
  primaryKey: string,
  fetchingFn: FUNC
) => {
  return createSWR<RET, string, Error>({
    primaryKey: primaryKey,
    fetcher: (arg: [string, string]) => fetchingFn(arg[1]),
  });
};
