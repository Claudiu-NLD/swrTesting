import { BareFetcher, SWRConfiguration } from "swr";
import { SWRMutationConfiguration } from "swr/mutation";

export type SWRMutationOptions<T, A> = SWRMutationConfiguration<
  T,
  any,
  string,
  A,
  any
>;

export type SWRFetchOptions<T> = SWRConfiguration<T, any, BareFetcher<T>>;
