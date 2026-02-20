import { borderRadius, spacing } from "@/constants/theme";
import { STATIC_COLORS } from "@/constants/theme/colors";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import { StyleSheet } from "react-native";

const TIMELINE_WIDTH = 3;

export const getExperienceSectionStyles = ({ colors, layout }: UIStyleContext) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    contentContainer: {
      paddingVertical: spacing.xl,
      paddingHorizontal: spacing.lg,
      paddingLeft: TIMELINE_WIDTH + spacing.md,
      position: "relative",
    },
    // Timeline container - flush to left edge
    timelineContainer: {
      position: "absolute",
      left: 0,
      top: spacing.xl,
      bottom: spacing.xl,
      width: TIMELINE_WIDTH,
      alignItems: "center",
    },
    timelineLine: {
      flex: 1,
      width: TIMELINE_WIDTH,
      backgroundColor: STATIC_COLORS.primary,
      opacity: 0.2,
      borderRadius: borderRadius.full,
    },
    // Experiences wrapper
    experiencesWrapper: {
      position: "relative",
      zIndex: 1,
    },
  });
