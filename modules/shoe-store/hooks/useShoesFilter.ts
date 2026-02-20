import { useMemo } from "react";
import type { ShoeGender, ShoePreview } from "@/modules/shoe-store/types/shoe.types";
import type { PriceRange } from "@/modules/shoe-store/types/filter.types";
import { parsePrice } from "@/modules/shoe-store/utils/price";

export function useShoesFilter(
  shoes: ShoePreview[],
  searchQuery: string,
  selectedGender: ShoeGender | null,
  priceRange: PriceRange
): ShoePreview[] {
  return useMemo(() => {
    let filtered = [...shoes];

    if (selectedGender) {
      filtered = filtered.filter((shoe) => shoe.gender === selectedGender);
    }

    filtered = filtered.filter((shoe) => {
      const value = parsePrice(shoe.price);
      return value >= priceRange.min && value <= priceRange.max;
    });

    if (searchQuery.trim()) {
      const query = searchQuery.trim().toLowerCase();
      filtered = filtered.filter(
        (shoe) =>
          shoe.name.toLowerCase().includes(query) ||
          shoe.price.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [shoes, searchQuery, selectedGender, priceRange]);
}
