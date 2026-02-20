import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Options for the useQuery hook
 */
export type UseQueryOptions<TData> = {
  /**
   * The query function that returns a Promise with the data
   */
  queryFn: () => Promise<TData>;
  /**
   * Optional function to use for refetching. If not provided, queryFn will be used.
   */
  refetchFn?: () => Promise<TData>;
  /**
   * Whether to automatically fetch data on mount
   * @default true
   */
  enabled?: boolean;
  /**
   * Callback called when the query succeeds.
   * Stored in a ref so it can be called without triggering refetches when it changes.
   */
  onSuccess?: (data: TData) => void;
  /**
   * Callback called when the query fails.
   * Stored in a ref so it can be called without triggering refetches when it changes.
   */
  onError?: (error: Error) => void;
};

/**
 * Return type of the useQuery hook
 */
export type UseQueryResult<TData> = {
  /**
   * The data returned by the query function
   */
  data: TData | undefined;
  /**
   * Whether the query is currently loading (initial fetch)
   */
  isLoading: boolean;
  /**
   * Whether the query is currently refreshing (refetch)
   */
  isRefreshing: boolean;
  /**
   * Whether the query is in any loading state (initial or refresh)
   */
  isLoadingOrRefreshing: boolean;
  /**
   * Error object if the query failed
   */
  error: Error | null;
  /**
   * Whether the query has an error
   */
  isError: boolean;
  /**
   * Whether the query was successful and has data
   */
  isSuccess: boolean;
  /**
   * Function to manually refetch the data
   */
  refetch: () => Promise<void>;
  /**
   * Function to reset the query state
   */
  reset: () => void;
};

/**
 * A custom hook that simulates react-query behavior for data fetching.
 *
 * This hook manages loading states, errors, and provides refetch functionality.
 * It's designed to be easily replaceable with tanstack-query in the future.
 *
 * @example
 * ```typescript
 * const { data, isLoading, error, refetch } = useQuery({
 *   queryFn: fetchShoesPreview,
 * });
 * ```
 *
 * @example With callbacks
 * ```typescript
 * const { data, isLoading } = useQuery({
 *   queryFn: fetchShoesPreview,
 *   onSuccess: (data) => console.log('Loaded:', data),
 *   onError: (error) => console.error('Error:', error),
 * });
 * ```
 */
export function useQuery<TData>({
  queryFn,
  refetchFn,
  enabled = true,
  onSuccess,
  onError,
}: UseQueryOptions<TData>): UseQueryResult<TData> {
  const [data, setData] = useState<TData | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(enabled);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const isCancelledRef = useRef<boolean>(false);
  const onSuccessRef = useRef(onSuccess);
  const onErrorRef = useRef(onError);

  onSuccessRef.current = onSuccess;
  onErrorRef.current = onError;

  const executeQuery = useCallback(
    async (isRefresh = false) => {
      try {
        if (isRefresh) {
          setIsRefreshing(true);
        } else {
          setIsLoading(true);
        }
        setError(null);

        // Use refetchFn for refresh, queryFn for initial fetch
        const fn = isRefresh && refetchFn ? refetchFn : queryFn;
        const result = await fn();

        // Check if component was unmounted
        if (isCancelledRef.current) {
          return;
        }

        setData(result);
        setIsLoading(false);
        setIsRefreshing(false);

        onSuccessRef.current?.(result);
      } catch (err) {
        // Check if component was unmounted
        if (isCancelledRef.current) {
          return;
        }

        const error = err instanceof Error ? err : new Error("Query failed");
        setError(error);
        setIsLoading(false);
        setIsRefreshing(false);

        if (__DEV__) {
          console.error("Query error:", error);
        }
        onErrorRef.current?.(error);
      }
    },
    [queryFn, refetchFn]
  );

  // Initial fetch
  useEffect(() => {
    if (!enabled) {
      return;
    }

    isCancelledRef.current = false;
    executeQuery(false);

    return () => {
      isCancelledRef.current = true;
    };
  }, [enabled, executeQuery]);

  const refetch = useCallback(async () => {
    await executeQuery(true);
  }, [executeQuery]);

  const reset = useCallback(() => {
    setData(undefined);
    setError(null);
    setIsLoading(false);
    setIsRefreshing(false);
  }, []);

  const isError = error !== null;
  const isSuccess = data !== undefined && error === null;
  const isLoadingOrRefreshing = isLoading || isRefreshing;

  return {
    data,
    isLoading,
    isRefreshing,
    isLoadingOrRefreshing,
    error,
    isError,
    isSuccess,
    refetch,
    reset,
  };
}
