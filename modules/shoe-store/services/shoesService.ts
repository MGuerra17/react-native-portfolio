import {
  getShoesPreview,
  getShoeDetailById,
  searchShoesPreview,
  getShoesPreviewByIds,
} from "@/modules/shoe-store/constants/shoes";
import type { ShoeDetail, ShoePreview } from "@/modules/shoe-store/types/shoe.types";

/**
 * Simulates network delay for a more realistic data fetching experience.
 * In a real application, this would be replaced by an actual API call.
 */
const SIMULATED_NETWORK_DELAY_MS = 1500;
const SIMULATED_REFRESH_DELAY_MS = 1200;
const SIMULATED_SEARCH_DELAY_MS = 500;
const SIMULATED_PREVIEW_BY_IDS_DELAY_MS = 400;
const SIMULATED_DETAIL_DELAY_MS = 1000;
const SIMULATED_DETAIL_REFRESH_DELAY_MS = 800;

/**
 * Fetches shoes preview from the data source.
 * Currently returns hardcoded data with simulated network delay,
 * but structured to easily swap with an API call in the future.
 *
 * This function is designed to be compatible with tanstack-query (react-query).
 * When migrating to tanstack-query, you can use it directly:
 *
 * ```typescript
 * const { data, isLoading, error } = useQuery({
 *   queryKey: ['shoes', 'preview'],
 *   queryFn: fetchShoesPreview,
 * });
 * ```
 *
 * Future implementation example:
 * ```typescript
 * export async function fetchShoesPreview(): Promise<ShoePreview[]> {
 *   const response = await fetch('/api/shoes/preview');
 *   if (!response.ok) {
 *     throw new Error('Failed to fetch shoes');
 *   }
 *   return response.json();
 * }
 * ```
 */
export async function fetchShoesPreview(): Promise<ShoePreview[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, SIMULATED_NETWORK_DELAY_MS));
  return getShoesPreview();
}

/**
 * Refreshes shoes preview data.
 * In a real application, this might include cache invalidation or
 * force-refresh parameters.
 *
 * This function uses a shorter delay to simulate a faster refresh operation.
 */
export async function refreshShoesPreview(): Promise<ShoePreview[]> {
  // Simulate network delay (shorter for refresh)
  await new Promise((resolve) => setTimeout(resolve, SIMULATED_REFRESH_DELAY_MS));
  return getShoesPreview();
}

/**
 * Searches shoes by query.
 * Simulates GET /api/shoes/search?q=query
 *
 * Future implementation example:
 * ```typescript
 * export async function searchShoes(query: string): Promise<ShoePreview[]> {
 *   const response = await fetch(`/api/shoes/search?q=${encodeURIComponent(query)}`);
 *   if (!response.ok) throw new Error('Search failed');
 *   return response.json();
 * }
 * ```
 */
export async function searchShoes(query: string): Promise<ShoePreview[]> {
  await new Promise((resolve) => setTimeout(resolve, SIMULATED_SEARCH_DELAY_MS));
  return searchShoesPreview(query);
}

/**
 * Fetches shoe previews by IDs.
 * Simulates GET /api/shoes/preview?ids=1,2,3
 *
 * Future implementation example:
 * ```typescript
 * export async function fetchShoesPreviewByIds(ids: string[]): Promise<ShoePreview[]> {
 *   const response = await fetch(`/api/shoes/preview?ids=${ids.join(',')}`);
 *   if (!response.ok) throw new Error('Failed to fetch previews');
 *   return response.json();
 * }
 * ```
 */
export async function fetchShoesPreviewByIds(ids: string[]): Promise<ShoePreview[]> {
  await new Promise((resolve) =>
    setTimeout(resolve, SIMULATED_PREVIEW_BY_IDS_DELAY_MS)
  );
  return getShoesPreviewByIds(ids);
}

/**
 * Fetches a shoe detail by ID from the data source.
 * Currently returns hardcoded data with simulated network delay,
 * but structured to easily swap with an API call in the future.
 *
 * This function is designed to be compatible with tanstack-query (react-query).
 * When migrating to tanstack-query, you can use it directly:
 *
 * ```typescript
 * const { data, isLoading, error } = useQuery({
 *   queryKey: ['shoe', 'detail', id],
 *   queryFn: () => fetchShoeDetailById(id),
 *   enabled: !!id,
 * });
 * ```
 *
 * Future implementation example:
 * ```typescript
 * export async function fetchShoeDetailById(id: string): Promise<ShoeDetail> {
 *   const response = await fetch(`/api/shoes/${id}`);
 *   if (!response.ok) {
 *     throw new Error(`Failed to fetch shoe detail: ${id}`);
 *   }
 *   return response.json();
 * }
 * ```
 *
 * @param id - The ID of the shoe to fetch
 * @returns Promise resolving to the shoe detail
 * @throws Error if the shoe is not found
 */
export async function fetchShoeDetailById(id: string): Promise<ShoeDetail> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, SIMULATED_DETAIL_DELAY_MS));
  
  const shoe = getShoeDetailById(id);
  if (!shoe) {
    throw new Error(`Shoe with id "${id}" not found`);
  }
  
  return shoe;
}

/**
 * Refreshes a shoe detail by ID from the data source.
 * In a real application, this might include cache invalidation or
 * force-refresh parameters.
 *
 * This function uses a shorter delay to simulate a faster refresh operation.
 *
 * This function is designed to be compatible with tanstack-query (react-query).
 * When migrating to tanstack-query, you can use it directly:
 *
 * ```typescript
 * const { data, isLoading, error, refetch } = useQuery({
 *   queryKey: ['shoe', 'detail', id],
 *   queryFn: () => fetchShoeDetailById(id),
 *   refetchFn: () => refreshShoeDetailById(id),
 *   enabled: !!id,
 * });
 * ```
 *
 * Future implementation example:
 * ```typescript
 * export async function refreshShoeDetailById(id: string): Promise<ShoeDetail> {
 *   const response = await fetch(`/api/shoes/${id}?refresh=true`);
 *   if (!response.ok) {
 *     throw new Error(`Failed to refresh shoe detail: ${id}`);
 *   }
 *   return response.json();
 * }
 * ```
 *
 * @param id - The ID of the shoe to refresh
 * @returns Promise resolving to the shoe detail
 * @throws Error if the shoe is not found
 */
export async function refreshShoeDetailById(id: string): Promise<ShoeDetail> {
  // Simulate network delay (shorter for refresh)
  await new Promise((resolve) => setTimeout(resolve, SIMULATED_DETAIL_REFRESH_DELAY_MS));
  
  const shoe = getShoeDetailById(id);
  if (!shoe) {
    throw new Error(`Shoe with id "${id}" not found`);
  }
  
  return shoe;
}
