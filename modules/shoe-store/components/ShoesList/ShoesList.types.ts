import type { ShoePreview } from "@/modules/shoe-store/types/shoe.types";

export type ShoesListProps = {
  shoes: ShoePreview[];
  isLoading?: boolean;
  refreshing?: boolean;
  onRefresh?: () => void;
  onShoePress: (shoe: ShoePreview) => void;
  getIsFavorite?: (id: string) => boolean;
  onToggleFavorite?: (id: string) => void;
  keyboardShouldPersistTaps?: "always" | "never" | "handled";
};
