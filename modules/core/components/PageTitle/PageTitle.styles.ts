import { spacing } from "@/constants/theme";
import { fontFamily } from "@/constants/theme/fontFamily";
import { fontSize } from "@/constants/theme/fontSize";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import { StyleSheet } from "react-native";

export const getPageTitleStyles = ({ colors, layout }: UIStyleContext) => {
  return StyleSheet.create({
    container: {
      width: "100%",
      paddingHorizontal: spacing.lg,
      paddingBottom: spacing.sm,
    },
    title: {
      fontSize: fontSize.xl,
      fontFamily: fontFamily.montserratBold,
      color: colors.primaryText,
    },
    subtitle: {
      marginTop: spacing.xs,
      fontSize: fontSize.sm,
      fontFamily: fontFamily.montserratRegular,
      color: colors.secondaryText,
    },
  });
};
