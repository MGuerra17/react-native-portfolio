import type { ShoePreview } from "@/modules/shoe-store/types/shoe.types";

export type SearchResultItemProps = {
  shoe: ShoePreview;
  onPress: () => void;
};
