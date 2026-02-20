import { borderRadius, fontSize, spacing } from "@/constants/theme";
import { fontFamily } from "@/constants/theme/fontFamily";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";

const IMAGE_HEIGHT = 120;

export type ShoePreviewCardStyles = {
  card: ViewStyle;
  likeButton: ViewStyle;
  imageContainer: ViewStyle;
  image: ViewStyle;
  name: TextStyle;
  price: TextStyle;
};

export const createShoePreviewCardStyles = ({ colors, layout }: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create<ShoePreviewCardStyles>({
    card: {
      backgroundColor: colors.surface,
      borderRadius: borderRadius.xxl,
      padding: spacing.lg,
      marginBottom: spacing.sm,
      position: "relative",
    },
    likeButton: {
      position: "absolute",
      top: spacing.md,
      right: spacing.md,
      padding: spacing.xs,
      zIndex: 1,
    },
    imageContainer: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: spacing.sm,
    },
    image: {
      height: IMAGE_HEIGHT,
      width: "100%",
      resizeMode: "contain",
    },
    name: {
      fontSize: fontSize.md,
      fontFamily: fontFamily.montserratSemiBold,
      color: colors.primaryText,
      textAlign: "center",
      marginTop: spacing.xl,
    },
    price: {
      fontSize: fontSize.sm,
      fontFamily: fontFamily.montserratRegular,
      color: colors.primaryText,
      textAlign: "center",
      marginTop: spacing.sm,
    },
  });
