import { UseQueryResult } from "react-query";

export type UseQueryType<TData, TResponse, TError> = (
  params?: TData,
) => UseQueryResult<TResponse, TError>;
