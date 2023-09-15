export const revalidationFilterFunction = (
  itemKey: [string, any],
  extraKeys: string[] = []
) => {
  const primaryKeyCheck = (cacheKey: any) =>
    itemKey?.[1] &&
    cacheKey?.[0] === itemKey?.[0] &&
    (cacheKey?.[1] === null || cacheKey?.[1] === itemKey?.[1]);

  const extraKeyCheck = (cacheKey: any) =>
    extraKeys.some(
      (extraKey) =>
        cacheKey?.[0] === extraKey &&
        (cacheKey?.[1] === null || cacheKey?.[1] === itemKey?.[1])
    );

  return (cacheKey: any) =>
    primaryKeyCheck(cacheKey) || extraKeyCheck(cacheKey);
};
