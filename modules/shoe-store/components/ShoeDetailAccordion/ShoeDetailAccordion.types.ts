import type { ShoeReview } from "@/modules/shoe-store/types/shoe.types";

export type ShoeDetailAccordionProps = {
  description: string;
  deliveryAndReturnsPolicy: string;
  reviews: ShoeReview[];
};

export type AccordionSection = "description" | "policy" | "reviews";
