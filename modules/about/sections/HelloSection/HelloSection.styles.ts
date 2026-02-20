import { borderRadius, spacing } from "@/constants/theme";
import { STATIC_COLORS } from "@/constants/theme/colors";
import { fontFamily } from "@/constants/theme/fontFamily";
import { fontSize } from "@/constants/theme/fontSize";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import { StyleSheet } from "react-native";

const AVATAR_SIZE = 170;
const DECORATIVE_CIRCLE_SIZE = 120;
const DECORATIVE_DOT_SIZE = 12;
const GLOW_SIZE = AVATAR_SIZE + 30;

export const getHelloSectionStyles = ({ colors, layout }: UIStyleContext) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    contentContainer: {
      alignItems: "center",
      paddingHorizontal: spacing.lg + DECORATIVE_CIRCLE_SIZE * 0.35,
      paddingTop: spacing.xl,
      paddingBottom: spacing.xl,
      position: "relative",
    },
    // Spacer so scroll area includes top circle (circle 1 has top: -DECORATIVE_CIRCLE_SIZE/2)
    topSpacer: {
      height: DECORATIVE_CIRCLE_SIZE / 2,
      width: "100%",
    },
    // Decorative background circles - container extends with negative margins so circles fit
    decorativeContainer: {
      position: "absolute",
      top: 0,
      left: -DECORATIVE_CIRCLE_SIZE * 0.35,
      right: -DECORATIVE_CIRCLE_SIZE * 0.2,
      height: 320,
    },
    decorativeCircle1: {
      position: "absolute",
      width: DECORATIVE_CIRCLE_SIZE * 0.7,
      height: DECORATIVE_CIRCLE_SIZE * 0.7,
      borderRadius: (DECORATIVE_CIRCLE_SIZE * 0.7) / 2,
      backgroundColor: STATIC_COLORS.primary,
      opacity: 0.15,
      top: spacing.xl,
      left: -DECORATIVE_CIRCLE_SIZE * 0.1,
    },
    decorativeCircle2: {
      position: "absolute",
      width: DECORATIVE_CIRCLE_SIZE * 0.5,
      height: DECORATIVE_CIRCLE_SIZE * 0.5,
      borderRadius: (DECORATIVE_CIRCLE_SIZE * 0.5) / 2,
      backgroundColor: STATIC_COLORS.primary,
      opacity: 0.12,
      top: DECORATIVE_CIRCLE_SIZE * 1.6,
      right: spacing.lg,
    },
    // Avatar container with glow effect
    avatarContainer: {
      alignItems: "center",
      justifyContent: "center",
      marginBottom: spacing.xl,
      position: "relative",
      zIndex: 1,
    },
    avatarGlow: {
      position: "absolute",
      width: GLOW_SIZE,
      height: GLOW_SIZE,
      borderRadius: GLOW_SIZE / 2,
      backgroundColor: STATIC_COLORS.primary,
      opacity: 0.08,
      zIndex: -1,
    },
    avatarWrapper: {
      width: AVATAR_SIZE,
      height: AVATAR_SIZE,
      borderRadius: AVATAR_SIZE / 2,
      borderWidth: 6,
      borderColor: colors.surface,
      overflow: "hidden",
      shadowColor: STATIC_COLORS.primary,
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.2,
      shadowRadius: 16,
      elevation: 8,
    },
    avatarGradient: {
      position: "absolute",
      width: "100%",
      height: "100%",
      borderRadius: AVATAR_SIZE / 2,
    },
    avatarImage: {
      width: AVATAR_SIZE,
      height: AVATAR_SIZE,
      borderRadius: AVATAR_SIZE / 2,
    },
    // Decorative dots around avatar
    decorativeDot1: {
      position: "absolute",
      width: DECORATIVE_DOT_SIZE,
      height: DECORATIVE_DOT_SIZE,
      borderRadius: DECORATIVE_DOT_SIZE / 2,
      backgroundColor: STATIC_COLORS.primary,
      top: AVATAR_SIZE * 0.2,
      right: -DECORATIVE_DOT_SIZE * 2,
      opacity: 0.6,
    },
    decorativeDot2: {
      position: "absolute",
      width: DECORATIVE_DOT_SIZE * 0.8,
      height: DECORATIVE_DOT_SIZE * 0.8,
      borderRadius: (DECORATIVE_DOT_SIZE * 0.8) / 2,
      backgroundColor: STATIC_COLORS.primary,
      bottom: AVATAR_SIZE * 0.15,
      left: -DECORATIVE_DOT_SIZE * 2.5,
      opacity: 0.5,
    },
    decorativeDot3: {
      position: "absolute",
      width: DECORATIVE_DOT_SIZE * 0.6,
      height: DECORATIVE_DOT_SIZE * 0.6,
      borderRadius: (DECORATIVE_DOT_SIZE * 0.6) / 2,
      backgroundColor: STATIC_COLORS.primary,
      top: -DECORATIVE_DOT_SIZE,
      left: AVATAR_SIZE * 0.3,
      opacity: 0.4,
    },
    // Content wrapper
    contentWrapper: {
      width: "100%",
      alignItems: "center",
      position: "relative",
      zIndex: 1,
    },
    decorativeLine: {
      width: 60,
      height: 3,
      backgroundColor: STATIC_COLORS.primary,
      borderRadius: borderRadius.full,
      opacity: 0.3,
      marginVertical: spacing.lg,
    },
    paragraph: {
      fontSize: fontSize.sm,
      fontFamily: fontFamily.montserratRegular,
      color: colors.secondaryText,
      lineHeight: 22,
      marginBottom: spacing.md,
      textAlign: "center",
      paddingHorizontal: spacing.sm,
    },
    paragraphHighlight: {
      fontFamily: fontFamily.montserratBold,
      color: STATIC_COLORS.primary,
    },
  });

export const HELLO_SECTION_GRADIENT_COLORS = [
  "#000000",
  STATIC_COLORS.primary,
] as const;
