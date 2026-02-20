import { borderRadius, fontSize, spacing } from "@/constants/theme";
import { fontFamily } from "@/constants/theme/fontFamily";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";

const SIZE_BOX_SIZE = 64;

export type SizeBoxStyles = {
  sizeBox: ViewStyle;
  sizeBoxSelected: ViewStyle;
  sizeBoxDisabled: ViewStyle;
  sizeBoxText: TextStyle;
  sizeBoxTextSelected: TextStyle;
  sizeBoxTextDisabled: TextStyle;
};

export const createSizeBoxStyles = ({ colors, layout }: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create<SizeBoxStyles>({
    sizeBox: {
      width: SIZE_BOX_SIZE,
      height: SIZE_BOX_SIZE,
      borderRadius: borderRadius.md,
      backgroundColor: colors.surface,
      alignItems: "center",
      justifyContent: "center",
    },
    sizeBoxSelected: {
      backgroundColor: colors.primary,
    },
    sizeBoxDisabled: {
      opacity: 0.7,
    },
    sizeBoxText: {
      fontSize: fontSize.md,
      fontFamily: fontFamily.montserratSemiBold,
      color: colors.primaryText,
    },
    sizeBoxTextSelected: {
      color: colors.background,
    },
    sizeBoxTextDisabled: {
      color: colors.secondaryText,
      fontFamily: fontFamily.montserratRegular,
    },
  });
