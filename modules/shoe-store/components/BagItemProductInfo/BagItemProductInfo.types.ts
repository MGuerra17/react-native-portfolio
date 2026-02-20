import type { SizeType } from "@/modules/shoe-store/types/bag.types";

export type BagItemProductInfoProps = {
  name: string;
  price: string;
  quantity: number;
  sizeType: SizeType;
  size: number;
  onQuantityChange: (delta: number) => void;
};
