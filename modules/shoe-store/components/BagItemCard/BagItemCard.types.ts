import type { BagItem } from "@/modules/shoe-store/types/bag.types";

export type BagItemCardProps = {
  item: BagItem;
  isFavorite: boolean;
  onQuantityChange: (delta: number) => void;
  onToggleFavorite: () => void;
};
