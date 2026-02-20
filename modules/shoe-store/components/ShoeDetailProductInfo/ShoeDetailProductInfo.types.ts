import { ShoeGender } from "@/modules/shoe-store/types/shoe.types";

export type ShoeDetailProductInfoProps = {
  gender: ShoeGender;
  rating: number;
  name: string;
  price: string;
};
