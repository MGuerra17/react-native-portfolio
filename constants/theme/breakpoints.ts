/**
 * Breakpoints for responsive layout.
 * - isSmallPhone: width < 360
 * - isTablet: width >= 768 (e.g. two-column layout)
 * - Ranges: 360-399 (standard mobile), 400-767 (large mobile)
 */

export const BREAKPOINT_SMALL = 360;
export const BREAKPOINT_MEDIUM = 400;
export const BREAKPOINT_LARGE = 768;
export const BREAKPOINT_HERO_LARGE = 430;

export type LayoutInfo = {
  width: number;
  height: number;
  isSmallPhone: boolean;
  isTablet: boolean;
  isLargePhone: boolean;
  isHeroLarge: boolean;
};

export function getLayoutInfo(width: number, height: number): LayoutInfo {
  return {
    width,
    height,
    isSmallPhone: width < BREAKPOINT_SMALL,
    isTablet: width >= BREAKPOINT_LARGE,
    isLargePhone: width >= BREAKPOINT_MEDIUM && width < BREAKPOINT_LARGE,
    isHeroLarge: width >= BREAKPOINT_HERO_LARGE,
  };
}
