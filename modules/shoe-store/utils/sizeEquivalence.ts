import { SIZE_TYPES } from "@/modules/shoe-store/constants/sizes";
import type { BagItem, SizeType } from "@/modules/shoe-store/types/bag.types";
import type { ShoeDetail } from "@/modules/shoe-store/types/shoe.types";

function getSizeArrays(shoe: ShoeDetail) {
  return { US: shoe.sizesUS, UK: shoe.sizesUK, EU: shoe.sizesEU } as const;
}

/**
 * Finds the index of the given size in the shoe's array for the given type.
 * Sizes are aligned by index across US/UK/EU (same index = same fit).
 */
export function getSizeIndex(
  shoe: ShoeDetail,
  sizeType: SizeType,
  size: number,
): number {
  const arrays = getSizeArrays(shoe);
  const arr = arrays[sizeType];
  const index = arr.findIndex((s) => s.size === size);
  return index;
}

/**
 * Returns the equivalent sizes in all types (US, UK, EU) for the given size in one type.
 * Uses the same index across the three arrays (aligned by fit).
 */
export function getEquivalentSizes(
  shoe: ShoeDetail,
  sizeType: SizeType,
  size: number,
): { sizeType: SizeType; size: number }[] {
  const index = getSizeIndex(shoe, sizeType, size);
  if (index < 0) return [];

  const arrays = getSizeArrays(shoe);
  return SIZE_TYPES.filter((type) => index < arrays[type].length).map(
    (type) => ({
      sizeType: type,
      size: arrays[type][index].size,
    }),
  );
}

/**
 * Returns true if the bag already contains this shoe with this size or its equivalent
 * (same fit in another size type, e.g. US 9 = UK 8 = EU 42).
 */
export function bagHasSizeOrEquivalent(
  shoe: ShoeDetail,
  sizeType: SizeType,
  size: number,
  items: BagItem[],
): boolean {
  const equivalents = getEquivalentSizes(shoe, sizeType, size);
  if (equivalents.length === 0) return false;

  return items.some(
    (item) =>
      item.id === shoe.id &&
      equivalents.some(
        (eq) => eq.sizeType === item.sizeType && eq.size === item.size,
      ),
  );
}
