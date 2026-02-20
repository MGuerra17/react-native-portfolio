import { fontSize, spacing } from "@/constants/theme";
import { fontFamily } from "@/constants/theme/fontFamily";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";

export type SizeTypeSelectorStyles = {
  sizeTypeRow: ViewStyle;
  sizeTypeButton: ViewStyle;
  sizeTypeText: TextStyle;
  sizeTypeTextActive: TextStyle;
};

export const createSizeTypeSelectorStyles = ({ colors, layout }: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create<SizeTypeSelectorStyles>({
    sizeTypeRow: {
      flexDirection: "row",
      gap: spacing.lg,
    },
    sizeTypeButton: {
      paddingVertical: spacing.xs,
      paddingHorizontal: spacing.sm,
    },
    sizeTypeText: {
      fontSize: fontSize.sm,
      fontFamily: fontFamily.montserratRegular,
      color: colors.secondaryText,
    },
    sizeTypeTextActive: {
      fontFamily: fontFamily.montserratSemiBold,
      color: colors.primaryText,
    },
  });
