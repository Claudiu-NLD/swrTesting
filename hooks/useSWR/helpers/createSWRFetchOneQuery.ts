import { createSWR } from "./swrQuery";

export const createSWRFetchOneQuery = <
  FUNC extends (arg: string) => RET,
  RET = ReturnType<FUNC>
>(
  primaryKey: string,
  fetchingFn: FUNC
) => {
  return createSWR<RET, string, Error>({
    primaryKey: primaryKey,
    fetcher: (arg: [string, string]) => fetchingFn(arg[0]),
  });
};
