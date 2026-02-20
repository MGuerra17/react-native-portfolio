import { fontSize, spacing } from "@/constants/theme";
import { fontFamily } from "@/constants/theme/fontFamily";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import { StyleSheet } from "react-native";

export const createProjectsListStyles = ({ colors, layout }: UIStyleContext) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    list: {
      paddingHorizontal: spacing.md,
      paddingTop: spacing.md,
    },
    emptyContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: spacing.xl,
    },
    emptyText: {
      fontSize: fontSize.md,
      fontFamily: fontFamily.montserratRegular,
      color: colors.secondaryText,
      textAlign: "center",
    },
  });
