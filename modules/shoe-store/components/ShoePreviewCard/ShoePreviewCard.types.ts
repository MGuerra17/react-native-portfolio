import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";
import type { ShoePreview } from "@/modules/shoe-store/types/shoe.types";

export type ShoePreviewCardProps = {
  shoe: ShoePreview;
  isFavorite?: boolean;
  onLike?: () => void;
  onPress?: (shoe: ShoePreview) => void;
};
