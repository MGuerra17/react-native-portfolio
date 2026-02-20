import type { Project } from "@/modules/projects/types/project.types";

export type ProjectScreenProps = {
  projects: Project[];
  searchQuery: string;
  selectedCategory: string | null;
  onSearchChange: (query: string) => void;
  onFilterPress: () => void;
  isFilterSheetOpen: boolean;
  onApplyFilter: (category: string | null) => void;
  onFilterSheetClose: () => void;
  isLoading?: boolean;
  isRefreshing?: boolean;
  error?: Error | null;
  onRefresh?: () => Promise<void>;
};
