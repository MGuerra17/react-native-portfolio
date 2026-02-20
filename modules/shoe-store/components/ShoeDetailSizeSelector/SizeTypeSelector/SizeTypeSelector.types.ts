import type { SizeType } from "@/modules/shoe-store/hooks/useShoeDetailScreen";

export type SizeTypeSelectorProps = {
  sizeType: SizeType;
  onSizeTypeChange: (type: SizeType) => void;
};
