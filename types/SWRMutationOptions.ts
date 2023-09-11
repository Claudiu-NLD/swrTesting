import { Key } from "swr";
import { MutationFetcher, SWRMutationConfiguration } from "swr/mutation";
export type SWRMutationOptions<
  FUNC extends (arg: ARG) => RET,
  ARG = Parameters<FUNC>[0],
  RET = ReturnType<FUNC>
> = SWRMutationConfiguration<RET, any, string, ARG>;

export type useSWRMutationOptions = Partial<
  Pick<SWRMutationConfiguration<unknown, unknown>, "onError" | "onSuccess">
>;

export type CreateSWRMutationOptions<TData, TError, TArgs, TKey extends Key> = {
  primaryKey: string;
  fetcher: MutationFetcher<TData, TKey, TArgs>;
} & Omit<SWRMutationConfiguration<TData, TError, TKey, TArgs>, "fetcher">;
