import type { ShoeGender } from "@/modules/shoe-store/types/shoe.types";

export type GenderFilterOptionsProps = {
  selectedGender: ShoeGender | null;
  onSelect: (gender: ShoeGender | null) => void;
};
