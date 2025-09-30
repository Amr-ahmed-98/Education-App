import { useQuery, useMutation } from '@tanstack/react-query';
import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';

interface ApiOptions extends AxiosRequestConfig {
  method?: 'get' | 'post' | 'delete';
  url: string;
  queryKey?: unknown[];
  enabled?: boolean;
  onSuccess?: (data: unknown) => void;
  onError?: (error: unknown) => void;
}

const useApi = (options: ApiOptions) => {
  const { method = 'get', url, queryKey = [url], enabled = true, onSuccess, onError, ...rest } = options;

  // Handle GET requests with useQuery for automatic caching and refetching
  const queryResult = useQuery({
    queryKey,
    queryFn: async () => {
      const response = await axios.get(url, rest);
      return response.data;
    },
    enabled: method.toLowerCase() === 'get' && enabled,
    retry: 1,
    staleTime: 5 * 60 * 1000, 
    gcTime: 10 * 60 * 1000,
  });

  // Handle POST/DELETE with useMutation for side effects
  const mutationResult = useMutation({
    mutationFn: async (data: unknown) => {
      let response;
      if (method.toLowerCase() === 'post') {
        response = await axios.post(url, data, rest);
      } else if (method.toLowerCase() === 'delete') {
        response = await axios.delete(url, { data, ...rest });
      } else {
        throw new Error('Unsupported method');
      }
      return response.data;
    },
    onSuccess,
    onError,
    retry: 0,
  });

  // Return the appropriate result based on method
  if (method.toLowerCase() === 'get') {
    // Handle onSuccess/onError for queries
    if (queryResult.isSuccess && onSuccess) {
      onSuccess(queryResult.data);
    }
    if (queryResult.isError && onError) {
      onError(queryResult.error);
    }
    return queryResult;
  }

  return mutationResult;
};

export default useApi;