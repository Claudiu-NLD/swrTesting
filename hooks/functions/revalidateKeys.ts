import { mutate } from "swr";

export const revalidateKeys = (keys: string[]) => {
  mutate((cacheKey) => keys.some((key) => key === cacheKey));
};
