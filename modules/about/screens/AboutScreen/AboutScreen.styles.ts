import { spacing } from "@/constants/theme";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import { StyleSheet } from "react-native";

export const getAboutScreenStyles = ({ colors, layout }: UIStyleContext) =>
  StyleSheet.create({
    screen: {
      flex: 1,
    },
    swiperContainer: {
      flex: 1,
    },
    slide: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: spacing.lg,
    },
  });
