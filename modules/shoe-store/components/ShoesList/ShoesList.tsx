import { RelativePathString, useRouter } from "expo-router";
import { useCallback } from "react";
import type { ShoePreview } from "@/modules/shoe-store/types/shoe.types";
import { useFavoritesStore } from "@/modules/shoe-store/stores";
import { ShoesListView } from "./ShoesListView";

export type ShoesListProps = {
  shoes: ShoePreview[];
  isLoading?: boolean;
  isRefreshing?: boolean;
  onRefresh?: () => void;
  keyboardShouldPersistTaps?: "always" | "never" | "handled";
};

export function ShoesList({
  shoes,
  isLoading,
  isRefreshing,
  onRefresh,
  keyboardShouldPersistTaps,
}: ShoesListProps) {
  const router = useRouter();
  const favoriteIds = useFavoritesStore((state) => state.favoriteIds);
  const addFavorite = useFavoritesStore((state) => state.addFavorite);
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite);

  const getIsFavorite = useCallback(
    (id: string) => favoriteIds.includes(id),
    [favoriteIds]
  );

  const onToggleFavorite = useCallback(
    (id: string) => {
      if (favoriteIds.includes(id)) {
        removeFavorite(id);
      } else {
        addFavorite(id);
      }
    },
    [favoriteIds, addFavorite, removeFavorite]
  );

  const onShoePress = useCallback(
    (shoe: ShoePreview) => {
      router.push(
        `/projects/shoe-store/shoe/${shoe.id}` as RelativePathString
      );
    },
    [router]
  );

  return (
    <ShoesListView
      shoes={shoes}
      isLoading={isLoading}
      refreshing={isRefreshing}
      onRefresh={onRefresh}
      onShoePress={onShoePress}
      getIsFavorite={getIsFavorite}
      onToggleFavorite={onToggleFavorite}
      keyboardShouldPersistTaps={keyboardShouldPersistTaps}
    />
  );
}
