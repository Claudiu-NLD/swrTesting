export const checkKey = (
  cacheKey: [string, string],
  itemKey: [string, string],
  extraKey?: boolean
) => {
  return (
    (itemKey?.[1] || extraKey) &&
    cacheKey?.[0] === itemKey?.[0] &&
    ((cacheKey?.[1] === null || cacheKey?.[1] === itemKey?.[1]) ?? null)
  );
};
