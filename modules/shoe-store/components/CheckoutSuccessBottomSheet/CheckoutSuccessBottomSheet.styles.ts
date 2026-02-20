import { borderRadius, fontSize, spacing } from "@/constants/theme";
import { fontFamily } from "@/constants/theme/fontFamily";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";
import { Platform, StyleSheet, TextStyle, ViewStyle } from "react-native";

export type CheckoutSuccessBottomSheetStyles = {
  overlay: ViewStyle;
  sheet: ViewStyle;
  headerRow: ViewStyle;
  handle: ViewStyle;
  iconWrapper: ViewStyle;
  message: TextStyle;
  buttonWrapper: ViewStyle;
};

export const createCheckoutSuccessBottomSheetStyles = ({
  colors,
  layout,
}: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create<CheckoutSuccessBottomSheetStyles>({
    overlay: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.45)",
      justifyContent: "flex-end",
    },
    sheet: {
      backgroundColor: colors.background,
      borderTopLeftRadius: borderRadius.xxl,
      borderTopRightRadius: borderRadius.xxl,
      paddingTop: spacing.sm,
      paddingBottom: spacing.xl + spacing.lg,
      paddingHorizontal: spacing.lg,
      alignItems: "center",
      ...Platform.select({
        ios: {
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.15,
          shadowRadius: 12,
        },
        android: {
          elevation: 16,
        },
      }),
    },
    headerRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: spacing.lg,
    },
    handle: {
      width: 40,
      height: 4,
      borderRadius: 2,
      backgroundColor: colors.secondaryText,
      opacity: 0.4,
    },
    iconWrapper: {
      marginBottom: spacing.lg,
    },
    message: {
      fontSize: fontSize.lg,
      fontFamily: fontFamily.montserratSemiBold,
      color: colors.primaryText,
      textAlign: "center",
      marginBottom: spacing.xl,
      paddingHorizontal: spacing.sm,
    },
    buttonWrapper: {
      width: "100%",
    },
  });
