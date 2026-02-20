import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";
import type { ShoeGender } from "@/modules/shoe-store/types/shoe.types";
import type { PriceRange } from "@/modules/shoe-store/types/filter.types";

export type FilterBottomSheetProps = {
  isOpen: boolean;
  onClose: () => void;
  pendingGender: ShoeGender | null;
  onSelectGender: (gender: ShoeGender | null) => void;
  pendingPriceRange: PriceRange;
  onPriceRangeChange: (range: PriceRange) => void;
  onReset: () => void;
  onApply: () => void;
};
