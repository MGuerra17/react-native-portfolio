import type { SizeType } from "@/modules/shoe-store/types/bag.types";
import type { ShoeSizeOption } from "@/modules/shoe-store/types/shoe.types";

export type ShoeDetailSizeSelectorProps = {
  sizeType: SizeType;
  setSizeType: (type: SizeType) => void;
  selectedSize: number | null;
  setSelectedSize: (size: number | null) => void;
  sizes: ShoeSizeOption[];
};
