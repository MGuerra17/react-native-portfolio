import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";
import type { ShoeReview } from "@/modules/shoe-store/types/shoe.types";

export type ShoeDetailReviewCardProps = {
  review: ShoeReview;
  comment: string;
};
