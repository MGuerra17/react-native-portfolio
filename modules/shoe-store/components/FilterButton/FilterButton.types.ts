import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";

export type FilterButtonProps = {
  onPress: () => void;
  activeFilterCount?: number;
};
