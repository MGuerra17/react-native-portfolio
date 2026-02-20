import type { LayoutInfo } from "./breakpoints";
import { fontSize as baseFontSize } from "./fontSize";
import { spacing as baseSpacing } from "./spacing";

/**
 * Returns spacing scale for the given layout. Use in style factories for responsive padding/margins.
 * Currently returns base scale; can be extended to scale up for tablet (e.g. layout.isTablet).
 */
export function getSpacing(_layout: LayoutInfo): typeof baseSpacing {
  return baseSpacing;
}

/**
 * Returns font size scale for the given layout. Use in style factories for responsive typography.
 * Currently returns base scale; can be extended to scale by breakpoint or layout.isTablet.
 */
export function getFontSize(_layout: LayoutInfo): typeof baseFontSize {
  return baseFontSize;
}
