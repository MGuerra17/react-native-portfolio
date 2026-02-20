import { useQuery } from "@/modules/core/hooks/useQuery";
import { useDebouncedValue } from "@/modules/core/hooks/useDebouncedValue";
import { useCallback, useState } from "react";
import {
  fetchProjects,
  refreshProjects,
} from "@/modules/projects/services/projectsService";
import type { Project } from "@/modules/projects/types/project.types";

export function useProjectScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebouncedValue(searchQuery, 300);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false);

  const {
    data: projects = [],
    isLoading,
    isRefreshing,
    error,
    refetch: onRefresh,
  } = useQuery<Project[]>({
    queryFn: () =>
      fetchProjects(debouncedSearchQuery, selectedCategory),
    refetchFn: () =>
      refreshProjects(debouncedSearchQuery, selectedCategory),
  });

  const onSearchChange = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const onFilterPress = useCallback(() => {
    setIsFilterSheetOpen(true);
  }, []);

  const onApplyFilter = useCallback((category: string | null) => {
    setSelectedCategory(category);
    setIsFilterSheetOpen(false);
  }, []);

  const onFilterSheetClose = useCallback(() => {
    setIsFilterSheetOpen(false);
  }, []);

  return {
    projects,
    searchQuery,
    selectedCategory,
    onSearchChange,
    onFilterPress,
    isFilterSheetOpen,
    onApplyFilter,
    onFilterSheetClose,
    isLoading,
    isRefreshing,
    error,
    onRefresh,
  };
}
