import { createSWR } from "./swrQuery";

export const createSWRFetchManyQuery = <
  FUNC extends () => RET,
  RET = ReturnType<FUNC>
>(
  primaryKey: string,
  fetchingFn: FUNC
) => {
  return createSWR<RET, { skip?: number }>({
    primaryKey: primaryKey,
    fetcher: () => fetchingFn(),
  });
};
