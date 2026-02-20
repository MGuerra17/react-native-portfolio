import { fontSize, spacing } from "@/constants/theme";
import { fontFamily } from "@/constants/theme/fontFamily";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";
import { AVATAR_SIZE } from "@/modules/shoe-store/components/ShoeDetailReviewCard/ShoeDetailReviewCard.styles";
import { StyleSheet, TextStyle } from "react-native";

const REVIEW_CONTENT_LEFT = AVATAR_SIZE + spacing.sm;

export type ShoeDetailAccordionReviewsStyles = {
  emptyState: TextStyle;
  moreReviews: TextStyle;
};

export const createShoeDetailAccordionReviewsStyles = ({
  colors,
  layout,
}: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create<ShoeDetailAccordionReviewsStyles>({
    emptyState: {
      fontSize: fontSize.sm,
      fontFamily: fontFamily.montserratRegular,
      color: colors.secondaryText,
      fontStyle: "italic",
    },
    moreReviews: {
      fontSize: fontSize.sm,
      fontFamily: fontFamily.montserratSemiBold,
      color: colors.primary,
      textDecorationLine: "underline",
      marginTop: spacing.sm,
      marginLeft: REVIEW_CONTENT_LEFT,
    },
  });
