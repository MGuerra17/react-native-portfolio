import { borderRadius, spacing } from "@/constants/theme";
import { Dimensions, ImageStyle, StyleSheet, ViewStyle } from "react-native";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";

const CAROUSEL_INDICATOR_HEIGHT = 4;
const CAROUSEL_INDICATOR_WIDTH = 8;
const CAROUSEL_INDICATOR_ACTIVE_WIDTH = 20;

export type ShoeDetailCarouselStyles = {
  carouselSection: ViewStyle;
  carousel: ViewStyle;
  carouselItem: ViewStyle;
  carouselImage: ImageStyle;
  carouselIndicators: ViewStyle;
  carouselIndicator: ViewStyle;
  carouselIndicatorActive: ViewStyle;
};

export const createShoeDetailCarouselStyles = ({ colors, layout }: UIStyleContext<ShoeStoreScheme>) => {
  const { width: screenWidth } = Dimensions.get("window");

  return StyleSheet.create<ShoeDetailCarouselStyles>({
    carouselSection: {
      backgroundColor: colors.surface,
      alignItems: "center",
      paddingBottom: spacing.md,
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40,
      overflow: "hidden",
    },
    carousel: {
      width: screenWidth,
    },
    carouselItem: {
      width: screenWidth,
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: spacing.xl,
    },
    carouselImage: {
      width: screenWidth * 0.8,
      height: screenWidth * 0.5,
      resizeMode: "contain",
    },
    carouselIndicators: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: spacing.sm,
      marginTop: spacing.sm,
    },
    carouselIndicator: {
      width: CAROUSEL_INDICATOR_WIDTH,
      height: CAROUSEL_INDICATOR_HEIGHT,
      borderRadius: borderRadius.full,
      backgroundColor: colors.secondaryText,
      opacity: 0.5,
    },
    carouselIndicatorActive: {
      width: CAROUSEL_INDICATOR_ACTIVE_WIDTH,
      backgroundColor: colors.primaryText,
      opacity: 1,
    },
  });
};
