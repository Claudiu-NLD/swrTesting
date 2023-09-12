import { BareFetcher, SWRConfiguration, SWRResponse } from "swr";
import { SWRMutationConfiguration, SWRMutationResponse } from "swr/mutation";

export type SWRFetchFunction<T> = (
  ...args: [
    ...[params?: any],
    ...[options?: SWRConfiguration<T, any, BareFetcher<T>>]
  ]
) => SWRResponse<T, any>;

export type SWRMutationFunction<T, A> = (
  ...args: [
    ...[params?: any],
    ...[options?: SWRMutationConfiguration<T, any, string, A, any>]
  ]
) => SWRMutationResponse<T, any, string, A>;
