import type { ImageSourcePropType } from "react-native";

export type ShoeGender = "men" | "women" | "unisex";

export type ShoePreview = {
  id: string;
  name: string;
  price: string;
  image: ImageSourcePropType;
  gender: ShoeGender;
};

export type ShoeSizeOption = {
  size: number;
  stock: number;
};

export type ShoeReview = {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  authorImage?: ImageSourcePropType;
};

export type ShoeDetail = ShoePreview & {
  images: ImageSourcePropType[];
  gender: ShoeGender;
  rating: number;
  sizesUS: ShoeSizeOption[];
  sizesUK: ShoeSizeOption[];
  sizesEU: ShoeSizeOption[];
  description: string;
  deliveryAndReturnsPolicy?: string;
  reviews: ShoeReview[];
};
