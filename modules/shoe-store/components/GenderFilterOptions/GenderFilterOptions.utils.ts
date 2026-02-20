import type { ShoeGender } from "@/modules/shoe-store/types/shoe.types";

export const GENDER_OPTIONS: (ShoeGender | null)[] = [
  null,
  "men",
  "women",
  "unisex",
];

export function getGenderLabel(
  value: ShoeGender | null,
  t: (key: string) => string,
): string {
  return value === null
    ? t("shoeStore.filter.all")
    : t(`shoeStore.filter.${value}`);
}
