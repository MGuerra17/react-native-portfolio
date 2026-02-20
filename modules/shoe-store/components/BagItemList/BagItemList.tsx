import { useBagStore, useFavoritesStore } from "@/modules/shoe-store/stores";
import { useCallback } from "react";
import { BagItemListView } from "./BagItemListView";

export function BagItemList() {
  const items = useBagStore((state) => state.items);
  const updateQuantity = useBagStore((state) => state.updateQuantity);
  const removeItem = useBagStore((state) => state.removeItem);

  const favoriteIds = useFavoritesStore((state) => state.favoriteIds);
  const addFavorite = useFavoritesStore((state) => state.addFavorite);
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite);

  const handleToggleFavorite = useCallback(
    (itemId: string) => {
      if (favoriteIds.includes(itemId)) {
        removeFavorite(itemId);
      } else {
        addFavorite(itemId);
      }
    },
    [favoriteIds, addFavorite, removeFavorite],
  );

  return (
    <BagItemListView
      items={items}
      favoriteIds={favoriteIds}
      onQuantityChange={updateQuantity}
      onToggleFavorite={handleToggleFavorite}
      onRemove={removeItem}
    />
  );
}
