import { borderRadius, spacing } from "@/constants/theme";
import { ImageStyle, StyleSheet, ViewStyle } from "react-native";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";

const IMAGE_SIZE = 100;
const FAVORITE_BUTTON_SIZE = 40;

export type BagItemCardStyles = {
  card: ViewStyle;
  imageContainer: ViewStyle;
  image: ImageStyle;
  content: ViewStyle;
  favoriteButton: ViewStyle;
};

export const getBagItemCardStyles = ({ colors, layout }: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create<BagItemCardStyles>({
    card: {
      flexDirection: "row",
      backgroundColor: colors.surface,
      borderRadius: borderRadius.xxl,
      padding: spacing.md,
      marginBottom: spacing.md,
      alignItems: "center",
    },
    imageContainer: {
      width: IMAGE_SIZE,
      height: IMAGE_SIZE,
      borderRadius: borderRadius.lg,
      overflow: "hidden",
    },
    image: {
      width: "100%",
      height: "100%",
    },
    content: {
      flex: 1,
      marginLeft: spacing.md,
      minWidth: 0,
    },
    favoriteButton: {
      width: FAVORITE_BUTTON_SIZE,
      height: FAVORITE_BUTTON_SIZE,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: spacing.xs,
    },
  });
