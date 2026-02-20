import { fontSize, spacing } from "@/constants/theme";
import { fontFamily } from "@/constants/theme/fontFamily";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export type ShoeDetailErrorScreenStyles = {
  screen: ViewStyle;
  headerWrapper: ViewStyle;
  content: ViewStyle;
  errorContainer: ViewStyle;
  title: TextStyle;
  message: TextStyle;
  buttonContainer: ViewStyle;
};

export const createShoeDetailErrorScreenStyles = ({
  colors,
  layout,
}: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create<ShoeDetailErrorScreenStyles>({
    screen: {
      flex: 1,
      backgroundColor: colors.background,
    },
    headerWrapper: {
      backgroundColor: colors.surface,
    },
    content: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: spacing.xl,
    },
    errorContainer: {
      alignItems: "center",
      maxWidth: 400,
    },
    title: {
      fontSize: fontSize.xl,
      fontFamily: fontFamily.montserratSemiBold,
      color: colors.primaryText,
      marginTop: spacing.xl,
      marginBottom: spacing.md,
      textAlign: "center",
    },
    message: {
      fontSize: fontSize.md,
      fontFamily: fontFamily.montserratRegular,
      color: colors.secondaryText,
      textAlign: "center",
      marginBottom: spacing.xl,
      lineHeight: fontSize.md * 1.5,
    },
    buttonContainer: {
      width: "100%",
      marginTop: spacing.md,
    },
  });
