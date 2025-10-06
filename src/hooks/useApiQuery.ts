import { useQuery } from "@tanstack/react-query";
import type { QueryKey } from "@tanstack/query-core";
type QueryFn<T> = () => Promise<T>;

export function useApiQuery<T>(
  key: QueryKey,
  queryFn: QueryFn<T>,
  options?: Omit<Parameters<typeof useQuery<T>>[0], "queryKey" | "queryFn">,
) {
  return useQuery<T>({
    queryKey: key,
    queryFn,
    ...options,
  });
  
}
