import { useQuery } from "@/modules/core/hooks/useQuery";
import { useBottomSheet } from "@/modules/shoe-store/context/BottomSheetContext";
import {
  fetchShoesPreview,
  refreshShoesPreview,
} from "@/modules/shoe-store/services/shoesService";
import {
  PRICE_FILTER_MAX,
  PRICE_FILTER_MIN,
  type PriceRange,
} from "@/modules/shoe-store/types/filter.types";
import type {
  ShoeGender,
  ShoePreview,
} from "@/modules/shoe-store/types/shoe.types";
import { RelativePathString, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { useShoesFilter } from "./useShoesFilter";

const DEFAULT_PRICE_RANGE: PriceRange = {
  min: PRICE_FILTER_MIN,
  max: PRICE_FILTER_MAX,
};

export function useShoeStoreHomeScreen() {
  const router = useRouter();
  const { open: openBottomSheet } = useBottomSheet();
  const {
    data: shoes = [],
    isLoading,
    isRefreshing,
    error,
    refetch: onRefresh,
  } = useQuery<ShoePreview[]>({
    queryFn: fetchShoesPreview,
    refetchFn: refreshShoesPreview,
  });

  const [selectedGender, setSelectedGender] = useState<ShoeGender | null>(null);
  const [priceRange, setPriceRange] = useState<PriceRange>(DEFAULT_PRICE_RANGE);

  const { close } = useBottomSheet();
  const filteredShoes = useShoesFilter(shoes, "", selectedGender, priceRange);

  const genderFilterCount = selectedGender !== null ? 1 : 0;
  const hasPriceFilter =
    priceRange.min !== PRICE_FILTER_MIN || priceRange.max !== PRICE_FILTER_MAX;
  const priceFilterCount = hasPriceFilter ? 1 : 0;
  const activeFilterCount = genderFilterCount + priceFilterCount;

  const onApplyFilter = useCallback(
    (gender: ShoeGender | null, newPriceRange: PriceRange) => {
      setSelectedGender(gender);
      setPriceRange(newPriceRange);
      close("filter");
    },
    [close],
  );

  const onSearchPress = () => {
    router.push("/projects/shoe-store/search" as RelativePathString);
  };

  const onFilterPress = () => {
    openBottomSheet("filter");
  };

  return {
    shoes: filteredShoes,
    isLoading,
    isRefreshing,
    error,
    onRefresh,
    selectedGender,
    priceRange,
    activeFilterCount,
    onApplyFilter,
    onSearchPress,
    onFilterPress,
  };
}
