export const revalidationFilterFunction = (itemKey: [string, any]) => {
  return (cacheKey: any) =>
    itemKey?.[1] &&
    cacheKey?.[0] === itemKey?.[0] &&
    (cacheKey?.[1] === null || cacheKey?.[1] === itemKey?.[1]);
};
