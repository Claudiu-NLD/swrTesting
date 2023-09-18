import { createSWR } from "./swrQuery";

export const createSWRFetchOneQuery = <
  FUNC extends (arg: ARG) => Promise<RET>,
  ARG = Parameters<FUNC>[0],
  RET = Awaited<ReturnType<FUNC>>
>(
  primaryKey: string,
  fetchingFn: FUNC
) => {
  return createSWR<RET, ARG, Error>({
    primaryKey: primaryKey,
    fetcher: (arg: [string, ARG]) => fetchingFn(arg[1]),
  });
};
