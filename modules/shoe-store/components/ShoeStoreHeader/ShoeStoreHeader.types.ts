import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";

export type ShoeStoreHeaderProps = {
  onBack: () => void;
  onBagPress: () => void;
  bagItemCount: number;
};
