import { checkKey } from "./checkKey";

export const revalidationFilterFunction = (
  itemKey: [string, any],
  extraKeys?: string[]
) => {
  return (cacheKey: any) =>
    checkKey(cacheKey, itemKey) ||
    (extraKeys?.some((extraKey) =>
      [itemKey[1], null].some((key) =>
        checkKey(cacheKey, [extraKey, key], true)
      )
    ) ??
      false);
};
