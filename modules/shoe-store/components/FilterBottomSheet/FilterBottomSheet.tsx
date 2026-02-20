import { useBottomSheet } from "@/modules/shoe-store/context/BottomSheetContext";
import type { ShoeGender } from "@/modules/shoe-store/types/shoe.types";
import {
  PRICE_FILTER_MAX,
  PRICE_FILTER_MIN,
  type PriceRange,
} from "@/modules/shoe-store/types/filter.types";
import { useCallback, useEffect, useState } from "react";
import { FilterBottomSheetView } from "./FilterBottomSheetView";

export type FilterBottomSheetProps = {
  selectedGender: ShoeGender | null;
  priceRange: PriceRange;
  onApply: (gender: ShoeGender | null, priceRange: PriceRange) => void;
};

const DEFAULT_PRICE_RANGE: PriceRange = {
  min: PRICE_FILTER_MIN,
  max: PRICE_FILTER_MAX,
};

export function FilterBottomSheet({
  selectedGender,
  priceRange,
  onApply,
}: FilterBottomSheetProps) {
  const { state, close } = useBottomSheet();
  const isOpen = state.filter;

  const [pendingGender, setPendingGender] = useState<ShoeGender | null>(
    selectedGender
  );
  const [pendingPriceRange, setPendingPriceRange] = useState<PriceRange>(
    priceRange
  );

  useEffect(() => {
    if (isOpen) {
      setPendingGender(selectedGender);
      setPendingPriceRange(priceRange);
    }
  }, [isOpen, selectedGender, priceRange]);

  const handleClose = () => {
    close("filter");
  };

  const handleApply = () => {
    onApply(pendingGender, pendingPriceRange);
    handleClose();
  };

  const handleReset = useCallback(() => {
    setPendingGender(null);
    setPendingPriceRange(DEFAULT_PRICE_RANGE);
  }, []);

  return (
    <FilterBottomSheetView
      isOpen={isOpen}
      onClose={handleClose}
      pendingGender={pendingGender}
      onSelectGender={setPendingGender}
      pendingPriceRange={pendingPriceRange}
      onPriceRangeChange={setPendingPriceRange}
      onReset={handleReset}
      onApply={handleApply}
    />
  );
}
