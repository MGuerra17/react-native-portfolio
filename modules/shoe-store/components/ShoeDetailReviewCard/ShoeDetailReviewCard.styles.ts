import { fontSize, spacing } from "@/constants/theme";
import { fontFamily } from "@/constants/theme/fontFamily";
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";

export const AVATAR_SIZE = 40;
const AVATAR_AND_GAP = AVATAR_SIZE + spacing.sm;

export type ShoeDetailReviewCardStyles = {
  card: ViewStyle;
  header: ViewStyle;
  avatar: ViewStyle;
  avatarImage: ImageStyle;
  avatarInitial: TextStyle;
  headerRight: ViewStyle;
  authorName: TextStyle;
  contentBlock: ViewStyle;
  comment: TextStyle;
  date: TextStyle;
};

export const createShoeDetailReviewCardStyles = ({ colors, layout }: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create<ShoeDetailReviewCardStyles>({
    card: {
      marginBottom: spacing.lg,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: spacing.sm,
    },
    avatar: {
      width: AVATAR_SIZE,
      height: AVATAR_SIZE,
      borderRadius: AVATAR_SIZE / 2,
      backgroundColor: colors.surface,
      alignItems: "center",
      justifyContent: "center",
      marginRight: spacing.sm,
      overflow: "hidden",
    },
    avatarImage: {
      width: AVATAR_SIZE,
      height: AVATAR_SIZE,
    },
    avatarInitial: {
      fontSize: fontSize.md,
      fontFamily: fontFamily.montserratSemiBold,
      color: colors.primaryText,
    },
    headerRight: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    authorName: {
      fontSize: fontSize.sm,
      fontFamily: fontFamily.montserratSemiBold,
      color: colors.primaryText,
    },
    contentBlock: {
      marginLeft: AVATAR_AND_GAP,
    },
    comment: {
      fontSize: fontSize.sm,
      fontFamily: fontFamily.montserratRegular,
      color: colors.primaryText,
      marginBottom: spacing.xs,
    },
    date: {
      fontSize: fontSize.xs,
      fontFamily: fontFamily.montserratRegular,
      color: colors.secondaryText,
    },
  });
