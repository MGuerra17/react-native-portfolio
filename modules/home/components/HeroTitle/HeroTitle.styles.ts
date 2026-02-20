import { spacing } from "@/constants/theme";
import { fontFamily } from "@/constants/theme/fontFamily";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import { StyleSheet } from "react-native";
import {
  getResponsiveHeroFontSizes,
  getResponsiveHeroTitleMarginBottom,
} from "./HeroTitle.utils";

export type { HeroTitleFontSizes } from "./HeroTitle.types";

export const createHeroTitleStyles = ({ colors, layout }: UIStyleContext) => {
  const fontSizes = getResponsiveHeroFontSizes(layout);
  const marginBottom = getResponsiveHeroTitleMarginBottom(layout);
  return StyleSheet.create({
    container: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginBottom,
    },
    smallText: {
      fontSize: fontSizes.small,
      color: colors.primaryText,
      fontFamily: fontFamily.montserratRegular,
    },
    largeText: {
      fontSize: fontSizes.large,
      fontFamily: fontFamily.montserratExtraBold,
      color: colors.primaryText,
      marginTop: -spacing.xs,
    },
  });
};
