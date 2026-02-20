import type { SizeType } from "@/modules/shoe-store/types/bag.types";
import type { ShoeDetail } from "@/modules/shoe-store/types/shoe.types";

export type ShoeDetailScreenProps = {
  shoe: ShoeDetail | undefined;
  isLoading?: boolean;
  isRefreshing?: boolean;
  onRefresh?: () => void;
  sizeType: SizeType;
  setSizeType: (type: SizeType) => void;
  selectedSize: number | null;
  setSelectedSize: (size: number | null) => void;
  onAddToBag: () => void;
  onToggleFavorite: () => void;
  isFavorite: boolean;
  canAddToBag: boolean;
  sizeAlreadyInBag: boolean;
  error: Error | null;
  onGoBack: () => void;
  onGoHome: () => void;
};
