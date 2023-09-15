import { checkKey } from "./checkKey";

export const revalidationFilterFunction = (
  itemKey: [string, any],
  extraKeys?: [string, any][]
) => {
  return (cacheKey: any) =>
    checkKey(cacheKey, itemKey) ||
    (extraKeys?.some((key) => checkKey(cacheKey, key, true)) ?? false);
};
