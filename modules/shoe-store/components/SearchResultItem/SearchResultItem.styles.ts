import { borderRadius, fontSize, spacing } from "@/constants/theme";
import { fontFamily } from "@/constants/theme/fontFamily";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";

const IMAGE_SIZE = 56;

export type SearchResultItemStyles = {
  container: ViewStyle;
  imageContainer: ViewStyle;
  image: ViewStyle;
  name: TextStyle;
};

export const createSearchResultItemStyles = ({ colors, layout }: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create<SearchResultItemStyles>({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.md,
      paddingVertical: spacing.sm,
    },
    imageContainer: {
      width: IMAGE_SIZE,
      height: IMAGE_SIZE,
      borderRadius: IMAGE_SIZE / 2,
      backgroundColor: colors.surface,
      overflow: "hidden",
    },
    image: {
      width: IMAGE_SIZE,
      height: IMAGE_SIZE,
    },
    name: {
      flex: 1,
      fontSize: fontSize.sm,
      fontFamily: fontFamily.montserratRegular,
      color: colors.primaryText,
    },
  });
