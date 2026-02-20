import { borderRadius, fontSize, spacing } from "@/constants/theme";
import { fontFamily } from "@/constants/theme/fontFamily";
import { Platform, StyleSheet, TextStyle, ViewStyle } from "react-native";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";

export type FilterBottomSheetStyles = {
  overlay: ViewStyle;
  sheet: ViewStyle;
  headerRow: ViewStyle;
  handle: ViewStyle;
  sectionHeaderRow: ViewStyle;
  resetButton: ViewStyle;
  resetButtonText: TextStyle;
  sectionTitle: TextStyle;
  priceRangeLabel: TextStyle;
  buttonsContainer: ViewStyle;
};

export const createFilterBottomSheetStyles = ({ colors, layout }: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create<FilterBottomSheetStyles>({
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
      maxHeight: "85%",
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
      marginBottom: spacing.md,
    },
    handle: {
      width: 40,
      height: 4,
      borderRadius: 2,
      backgroundColor: colors.secondaryText,
      opacity: 0.4,
    },
    sectionHeaderRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: spacing.sm,
      marginBottom: spacing.lg,
    },
    resetButton: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.xs,
      padding: spacing.sm,
    },
    resetButtonText: {
      fontSize: fontSize.xs,
      fontFamily: fontFamily.montserratRegular,
      color: colors.secondaryText,
    },
    sectionTitle: {
      fontSize: fontSize.md,
      fontFamily: fontFamily.montserratBold,
      color: colors.secondaryText,
      marginTop: spacing.sm,
      marginBottom: spacing.lg,
      textAlign: "left",
    },
    priceRangeLabel: {
      fontSize: fontSize.sm,
      fontFamily: fontFamily.montserratRegular,
      color: colors.primaryText,
      textAlign: "left",
      marginBottom: spacing.sm,
    },
    buttonsContainer: {
      gap: spacing.sm,
    },
  });
