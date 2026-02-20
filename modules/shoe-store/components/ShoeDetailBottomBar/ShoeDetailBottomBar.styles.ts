import { borderRadius, fontSize, spacing } from "@/constants/theme";
import { fontFamily } from "@/constants/theme/fontFamily";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";

const BOTTOM_BAR_HEIGHT = 64;
const FAVORITE_BUTTON_SIZE = 48;

export type ShoeDetailBottomBarStyles = {
  bottomBar: ViewStyle;
  favoriteButton: ViewStyle;
  pillButton: ViewStyle;
  pillButtonDisabled: ViewStyle;
  pillButtonText: TextStyle;
};

export const createShoeDetailBottomBarStyles = ({ colors, layout }: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create<ShoeDetailBottomBarStyles>({
    bottomBar: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: BOTTOM_BAR_HEIGHT,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: spacing.lg,
      gap: spacing.md,
      backgroundColor: colors.background,
    },
    favoriteButton: {
      width: FAVORITE_BUTTON_SIZE,
      height: FAVORITE_BUTTON_SIZE,
      borderRadius: FAVORITE_BUTTON_SIZE / 2,
      borderWidth: 2,
      borderColor: colors.surface,
      alignItems: "center",
      justifyContent: "center",
    },
    pillButton: {
      flex: 1,
      height: FAVORITE_BUTTON_SIZE,
      borderRadius: borderRadius.full,
      backgroundColor: colors.primaryText,
      alignItems: "center",
      justifyContent: "center",
    },
    pillButtonDisabled: {
      opacity: 0.5,
    },
    pillButtonText: {
      fontSize: fontSize.md,
      fontFamily: fontFamily.montserratSemiBold,
      color: colors.background,
    },
  });
