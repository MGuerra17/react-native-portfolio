import type { ShoePreview } from "@/modules/shoe-store/types/shoe.types";

export type SearchScreenProps = {
  query: string;
  onQueryChange: (text: string) => void;
  recentShoes: ShoePreview[];
  searchResults: ShoePreview[];
  onSelectRecentShoe: (shoe: ShoePreview) => void;
  onSelectShoe: (shoe: ShoePreview) => void;
  onBack: () => void;
  isLoadingSearch?: boolean;
  isLoadingRecent?: boolean;
  error?: Error | null;
  onRefresh?: () => Promise<void>;
};
