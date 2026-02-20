import { fontSize, spacing } from "@/constants/theme";
import { fontFamily } from "@/constants/theme/fontFamily";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";

const HIT_SLOP = { top: 12, bottom: 12, left: 12, right: 12 };

export type BagScreenHeaderStyles = {
  container: ViewStyle;
  backButton: ViewStyle;
  hitSlop: { top: number; bottom: number; left: number; right: number };
  titleRow: ViewStyle;
  title: TextStyle;
  itemCount: TextStyle;
};

export const getBagScreenHeaderStyles = ({ colors, layout }: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create<BagScreenHeaderStyles>({
    container: {
      width: "100%",
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.lg,
    },
    backButton: {
      marginBottom: spacing.md,
      alignSelf: "flex-start",
    },
    hitSlop: HIT_SLOP,
    titleRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    title: {
      fontSize: fontSize.xl,
      fontFamily: fontFamily.montserratSemiBold,
      color: colors.primaryText,
    },
    itemCount: {
      fontSize: fontSize.md,
      fontFamily: fontFamily.montserratRegular,
      color: colors.secondaryText,
    },
  });
