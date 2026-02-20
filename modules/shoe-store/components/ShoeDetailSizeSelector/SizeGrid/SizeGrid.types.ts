import type { ShoeSizeOption } from "@/modules/shoe-store/types/shoe.types";

export type SizeGridProps = {
  sizes: ShoeSizeOption[];
  selectedSize: number | null;
  onSizeSelect: (size: number | null) => void;
};
