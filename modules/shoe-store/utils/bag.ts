import { getShoeDetailById } from "@/modules/shoe-store/constants/shoes";
import { SIZE_TYPES } from "@/modules/shoe-store/constants/sizes";
import type { BagItem, SizeType, StoredBagItem } from "@/modules/shoe-store/types/bag.types";

/**
 * Type guard to check if an unknown value is a valid StoredBagItem.
 */
export function isStoredBagItem(x: unknown): x is StoredBagItem {
  if (x == null || typeof x !== "object") return false;
  const o = x as Record<string, unknown>;
  return (
    typeof o.shoeId === "string" &&
    typeof o.bagItemId === "string" &&
    typeof o.quantity === "number" &&
    typeof o.size === "number" &&
    SIZE_TYPES.includes(o.sizeType as SizeType)
  );
}

/**
 * Parses a stored bag string from AsyncStorage into an array of StoredBagItem.
 * Returns an empty array if parsing fails or if the stored value is null.
 */
export function parseStoredBag(stored: string | null): StoredBagItem[] {
  if (stored == null) return [];
  try {
    const parsed = JSON.parse(stored) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isStoredBagItem);
  } catch {
    return [];
  }
}

/**
 * Rehydrates stored bag items by fetching full shoe details and converting
 * StoredBagItem[] to BagItem[].
 */
export function rehydrateBagItems(stored: StoredBagItem[]): BagItem[] {
  const items: BagItem[] = [];
  for (const s of stored) {
    const detail = getShoeDetailById(s.shoeId);
    if (!detail) continue;
    const { id, name, price, image, gender } = detail;
    items.push({
      id,
      name,
      price,
      image,
      gender,
      quantity: s.quantity,
      sizeType: s.sizeType,
      size: s.size,
      bagItemId: s.bagItemId,
    });
  }
  return items;
}
