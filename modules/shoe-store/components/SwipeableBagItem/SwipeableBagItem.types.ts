import type { BagItem } from "@/modules/shoe-store/types/bag.types";

export type SwipeableBagItemProps = {
  item: BagItem;
  isFavorite: boolean;
  onQuantityChange: (delta: number) => void;
  onToggleFavorite: () => void;
  onRemove: () => void;
};
