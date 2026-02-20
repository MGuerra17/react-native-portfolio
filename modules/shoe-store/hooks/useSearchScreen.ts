import { RelativePathString, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import {
  searchShoes,
  fetchShoesPreviewByIds,
} from "@/modules/shoe-store/services/shoesService";
import type { ShoePreview } from "@/modules/shoe-store/types/shoe.types";
import { useDebouncedValue } from "@/modules/core/hooks/useDebouncedValue";
import { useRecentSearches } from "./useRecentSearches";
import { useQuery } from "@/modules/core/hooks/useQuery";

export function useSearchScreen() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebouncedValue(query, 300);
  const { recentShoeIds, addRecentShoe } = useRecentSearches();

  const {
    data: searchResults = [],
    isLoading: isLoadingSearch,
    error: searchError,
    refetch: onRefreshSearch,
  } = useQuery<ShoePreview[]>({
    queryFn: () => searchShoes(debouncedQuery),
    enabled: !!debouncedQuery.trim(),
  });

  const {
    data: recentShoes = [],
    isLoading: isLoadingRecent,
    error: recentError,
    refetch: onRefreshRecent,
  } = useQuery<ShoePreview[]>({
    queryFn: () => fetchShoesPreviewByIds(recentShoeIds),
    enabled: recentShoeIds.length > 0,
  });

  const isTyping = query.trim().length > 0;
  const isPendingDebounce = isTyping && query !== debouncedQuery;
  const isLoadingSearchState = isLoadingSearch || isPendingDebounce;

  const error = searchError ?? recentError;
  const onRefresh = useCallback(async () => {
    if (isTyping) {
      await onRefreshSearch();
    } else {
      await onRefreshRecent();
    }
  }, [isTyping, onRefreshSearch, onRefreshRecent]);

  const onQueryChange = useCallback((text: string) => {
    setQuery(text);
  }, []);

  const onSelectRecentShoe = useCallback(
    (shoe: ShoePreview) => {
      router.push(`/projects/shoe-store/shoe/${shoe.id}` as RelativePathString);
    },
    [router]
  );

  const onSelectShoe = useCallback(
    (shoe: ShoePreview) => {
      addRecentShoe(shoe.id);
      router.push(`/projects/shoe-store/shoe/${shoe.id}` as RelativePathString);
    },
    [addRecentShoe, router]
  );

  const onBack = useCallback(() => {
    router.back();
  }, [router]);

  return {
    query,
    onQueryChange,
    recentShoes,
    searchResults,
    onSelectRecentShoe,
    onSelectShoe,
    onBack,
    isLoadingSearch: isLoadingSearchState,
    isLoadingRecent,
    error,
    onRefresh,
  };
}
