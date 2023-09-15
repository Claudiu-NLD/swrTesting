import { createSWR } from "./swrQuery";

export const createSWRFetchManyQuery = <
  FUNC extends () => Promise<RET>,
  RET = Awaited<ReturnType<FUNC>>
>(
  primaryKey: string,
  fetchingFn: FUNC
) => {
  return createSWR<RET, null>({
    primaryKey: primaryKey,
    fetcher: () => fetchingFn(),
  });
};
