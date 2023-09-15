import { isEmpty, isObject } from "lodash";
import useSWR, { Fetcher, Key, SWRConfiguration } from "swr";

export type CreateSWROptions<TData, TError, TKey extends Key> = {
  primaryKey: string;
  fetcher: Fetcher<TData, TKey>;
  enabled?: boolean;
} & Omit<SWRConfiguration<TData, TError>, "fetcher">;

export type HookOptions<TData, TVariable, TError> = Omit<
  SWRConfiguration<TData, TError>,
  "fetcher"
> & {
  variables: TVariable;
  enabled?: boolean;
};

export const createSWR = <
  TData,
  TVariable = unknown,
  TError = unknown,
  TKey extends Key = [string, TVariable]
>(
  options: CreateSWROptions<TData, TError, TKey>
) => {
  const {
    primaryKey,
    enabled: optionEnable,
    fetcher,
    ...createdOptions
  } = options;

  const getPrimaryKey = () => {
    return primaryKey;
  };

  const getKey = (variable: TVariable) => {
    return [primaryKey, variable] as const;
  };

  const getFetcher = () => {
    return fetcher;
  };

  const useSWRHook = (opt: HookOptions<TData, TVariable, TError>) => {
    const { variables, enabled: hookEnable, ...hookOptions } = opt;
    const enabled = optionEnable || hookEnable;

    return useSWR(
      enabled || enabled === undefined ? getKey(variables) : null,
      getFetcher(),
      {
        ...createdOptions,
        ...hookOptions,
      }
    );
  };

  return Object.assign(useSWRHook, {
    getPrimaryKey,
    getKey,
    getFetcher,
  });
};
