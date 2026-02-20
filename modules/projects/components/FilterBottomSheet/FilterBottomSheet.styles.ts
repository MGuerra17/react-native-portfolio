import { borderRadius, fontSize, spacing } from "@/constants/theme";
import { fontFamily } from "@/constants/theme/fontFamily";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import { Platform, StyleSheet } from "react-native";

export const createFilterBottomSheetStyles = ({ colors, layout }: UIStyleContext) =>
  StyleSheet.create({
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
    handle: {
      alignSelf: "center",
      width: 40,
      height: 4,
      borderRadius: 2,
      backgroundColor: colors.secondaryText,
      opacity: 0.4,
      marginBottom: spacing.md,
    },
    sectionTitle: {
      fontSize: fontSize.md,
      fontFamily: fontFamily.montserratBold,
      color: colors.secondaryText,
      marginTop: spacing.sm,
      marginBottom: spacing.lg,
      textAlign: "center",
    },
    buttonsContainer: {
      gap: spacing.sm,
    },
  });
