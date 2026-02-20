import { borderRadius, fontSize, spacing } from "@/constants/theme";
import { fontFamily } from "@/constants/theme/fontFamily";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";

const ICON_CONTAINER_SIZE = 40;

export type RecentSearchItemStyles = {
  container: ViewStyle;
  iconContainer: ViewStyle;
  text: TextStyle;
};

export const createRecentSearchItemStyles = ({ colors, layout }: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create<RecentSearchItemStyles>({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.sm,
      paddingVertical: spacing.sm,
    },
    iconContainer: {
      width: ICON_CONTAINER_SIZE,
      height: ICON_CONTAINER_SIZE,
      borderRadius: ICON_CONTAINER_SIZE / 2,
      backgroundColor: colors.surface,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      flex: 1,
      fontSize: fontSize.sm,
      fontFamily: fontFamily.montserratRegular,
      color: colors.primaryText,
    },
  });
