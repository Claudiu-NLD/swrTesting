import { Key } from "swr";
import useSWRMutation, {
  MutationFetcher,
  SWRMutationConfiguration,
} from "swr/mutation";

export type CreateSWRMutationOptions<TData, TError, TArgs, TKey extends Key> = {
  primaryKey: string;
  fetcher: MutationFetcher<TData, TKey, TArgs>;
} & Omit<SWRMutationConfiguration<TData, TError, TKey, TArgs>, "fetcher">;

export type MutationHookOptions<
  TData,
  TVariable,
  TError,
  TKey extends Key,
  TArgs
> = Omit<SWRMutationConfiguration<TData, TError, TKey, TArgs>, "fetcher"> & {
  variables: TVariable;
};

export const createSWRMutation = <
  TData,
  TVariable = unknown,
  TArgs = unknown,
  TError = unknown,
  TKey extends Key = [string, TVariable]
>(
  options: CreateSWRMutationOptions<TData, TError, TArgs, TKey>
) => {
  const { primaryKey, fetcher, ...createdOptions } = options;

  const getPrimaryKey = () => {
    return primaryKey;
  };

  const getKey = (variable: TVariable) => {
    return [primaryKey, variable] as const;
  };

  const getFetcher = () => {
    return fetcher;
  };

  const useSWRHook = (
    opt: MutationHookOptions<TData, TVariable, TError, TKey, TArgs>
  ) => {
    const { variables, ...hookOptions } = opt;

    return useSWRMutation(getKey(variables) as unknown as TKey, getFetcher(), {
      ...createdOptions,
      ...hookOptions,
    });
  };

  return Object.assign(useSWRHook, {
    getPrimaryKey,
    getKey,
    getFetcher,
  });
};
