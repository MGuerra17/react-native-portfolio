import type { SizeType } from "@/modules/shoe-store/types/bag.types";
import type { ShoeDetail, ShoePreview } from "@/modules/shoe-store/types/shoe.types";

/**
 * Converts a ShoeDetail to a ShoePreview by extracting only the preview fields.
 */
export function shoeToPreview(shoe: ShoeDetail): ShoePreview {
  return {
    id: shoe.id,
    name: shoe.name,
    price: shoe.price,
    image: shoe.image,
    gender: shoe.gender,
  };
}

/**
 * Gets the size array for a specific size type from a shoe detail.
 */
export function getSizesForType(
  shoe: ShoeDetail,
  sizeType: SizeType,
): { size: number; stock: number }[] {
  switch (sizeType) {
    case "US":
      return shoe.sizesUS;
    case "UK":
      return shoe.sizesUK;
    case "EU":
      return shoe.sizesEU;
  }
}
