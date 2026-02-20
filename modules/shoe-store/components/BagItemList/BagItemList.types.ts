import type { BagItem } from "@/modules/shoe-store/types/bag.types";

export type BagItemListProps = {
  items: BagItem[];
  favoriteIds: string[];
  onQuantityChange: (bagItemId: string, delta: number) => void;
  onToggleFavorite: (itemId: string) => void;
  onRemove: (bagItemId: string) => void;
};
