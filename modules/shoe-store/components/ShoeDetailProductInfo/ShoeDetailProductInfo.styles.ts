import { fontSize, spacing } from "@/constants/theme";
import { fontFamily } from "@/constants/theme/fontFamily";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";

export type ShoeDetailProductInfoStyles = {
  row: ViewStyle;
  genderRatingRow: ViewStyle;
  genderText: TextStyle;
  ratingContainer: ViewStyle;
  ratingText: TextStyle;
  nameText: TextStyle;
  priceText: TextStyle;
};

export const createShoeDetailProductInfoStyles = ({ colors, layout }: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create<ShoeDetailProductInfoStyles>({
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: spacing.md,
    },
    genderRatingRow: {
      marginBottom: spacing.sm,
    },
    genderText: {
      fontSize: fontSize.sm,
      fontFamily: fontFamily.montserratRegular,
      color: colors.secondaryText,
    },
    ratingContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.xs,
    },
    ratingText: {
      fontSize: fontSize.sm,
      fontFamily: fontFamily.montserratRegular,
      color: colors.secondaryText,
    },
    nameText: {
      fontSize: fontSize.lg,
      fontFamily: fontFamily.montserratSemiBold,
      color: colors.primaryText,
      flex: 1,
    },
    priceText: {
      fontSize: fontSize.lg,
      fontFamily: fontFamily.montserratRegular,
      color: colors.primaryText,
    },
  });
