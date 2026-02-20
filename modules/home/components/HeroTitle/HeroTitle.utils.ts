import type { LayoutInfo } from "@/constants/theme/breakpoints";
import type { HeroTitleFontSizes } from "./HeroTitle.types";

export function getResponsiveHeroFontSizes(
  layout: LayoutInfo,
): HeroTitleFontSizes {
  const { isTablet, isLargePhone } = layout;
  if (isTablet) return { small: 40, large: 100 };
  if (isLargePhone) return { small: 20, large: 50 };
  return { small: 16, large: 36 };
}

export function getResponsiveHeroTitleMarginBottom(layout: LayoutInfo): number {
  const { isTablet, isLargePhone } = layout;
  if (isTablet) return -25;
  if (isLargePhone) return -2;
  return 0;
}
