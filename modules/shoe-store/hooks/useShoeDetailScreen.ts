import {
  fetchShoeDetailById,
  refreshShoeDetailById,
} from "@/modules/shoe-store/services/shoesService";
import { useBagStore, useFavoritesStore } from "@/modules/shoe-store/stores";
import type { SizeType } from "@/modules/shoe-store/types/bag.types";
import type { ShoeDetail } from "@/modules/shoe-store/types/shoe.types";
import { shoeToPreview } from "@/modules/shoe-store/utils/shoe";
import { bagHasSizeOrEquivalent } from "@/modules/shoe-store/utils/sizeEquivalence";
import { useCallback, useMemo, useState } from "react";
import { useQuery } from "@/modules/core/hooks/useQuery";

export function useShoeDetailScreen(id: string | undefined) {
  const {
    data: shoe,
    isLoading,
    isRefreshing,
    error,
    refetch: onRefresh,
  } = useQuery<ShoeDetail>({
    queryFn: () => fetchShoeDetailById(id!),
    refetchFn: () => refreshShoeDetailById(id!),
    enabled: !!id,
  });

  const [sizeType, setSizeType] = useState<SizeType>("US");
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  const items = useBagStore((state) => state.items);
  const addToBag = useBagStore((state) => state.addToBag);

  const favoriteIds = useFavoritesStore((state) => state.favoriteIds);
  const addFavorite = useFavoritesStore((state) => state.addFavorite);
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite);

  const isFavoriteById = useCallback(
    (shoeId: string) => favoriteIds.includes(shoeId),
    [favoriteIds],
  );

  const sizeAlreadyInBag = useMemo(() => {
    if (!shoe || selectedSize === null) return false;
    return bagHasSizeOrEquivalent(shoe, sizeType, selectedSize, items);
  }, [shoe, sizeType, selectedSize, items]);

  const canAddToBag = selectedSize !== null && !sizeAlreadyInBag;
  const isFavorite = shoe ? isFavoriteById(shoe.id) : false;

  const onAddToBag = useCallback((): boolean => {
    if (!shoe) return false;
    if (selectedSize === null) return false;
    if (sizeAlreadyInBag) return false;
    addToBag(shoeToPreview(shoe), {
      quantity: 1,
      sizeType,
      size: selectedSize,
    });
    return true;
  }, [shoe, selectedSize, sizeType, sizeAlreadyInBag, addToBag]);

  const onToggleFavorite = useCallback(() => {
    if (!shoe) return;
    if (isFavoriteById(shoe.id)) {
      removeFavorite(shoe.id);
    } else {
      addFavorite(shoe.id);
    }
  }, [shoe, isFavoriteById, addFavorite, removeFavorite]);

  return {
    shoe,
    isLoading,
    isRefreshing,
    error,
    onRefresh,
    sizeType,
    setSizeType,
    selectedSize,
    setSelectedSize,
    onAddToBag,
    onToggleFavorite,
    isFavorite,
    canAddToBag,
    sizeAlreadyInBag,
  };
}
