import type { ShoeGender, ShoePreview } from "@/modules/shoe-store/types/shoe.types";
import type { PriceRange } from "@/modules/shoe-store/types/filter.types";

export type ShoeStoreHomeScreenProps = {
  shoes: ShoePreview[];
  isLoading?: boolean;
  isRefreshing?: boolean;
  onRefresh?: () => void;
  selectedGender: ShoeGender | null;
  priceRange: PriceRange;
  activeFilterCount: number;
  onApplyFilter: (gender: ShoeGender | null, priceRange: PriceRange) => void;
  onSearchPress: () => void;
  onFilterPress: () => void;
};
