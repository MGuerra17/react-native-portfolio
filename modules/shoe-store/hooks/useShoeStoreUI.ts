import { getLayoutInfo } from "@/constants/theme/breakpoints";
import { useLocale } from "@/modules/core/hooks/useLocale";
import type { UIStyleFactory } from "@/modules/core/types/styleFactory";
import { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";
import { useMemo } from "react";
import { useWindowDimensions } from "react-native";
import { useShoeStoreTheme } from "./useShoeStoreTheme";

export function useShoeStoreUI(): {
  t: ReturnType<typeof useLocale>["t"];
  styles: undefined;
  layout: ReturnType<typeof getLayoutInfo>;
} & ReturnType<typeof useShoeStoreTheme>;

export function useShoeStoreUI<Style>(
  styleFactory: UIStyleFactory<Style, ShoeStoreScheme>,
): {
  t: ReturnType<typeof useLocale>["t"];
  styles: Style;
  layout: ReturnType<typeof getLayoutInfo>;
} & ReturnType<typeof useShoeStoreTheme>;

export function useShoeStoreUI<Style>(
  styleFactory?: UIStyleFactory<Style, ShoeStoreScheme>,
) {
  const { t } = useLocale();
  const theme = useShoeStoreTheme();
  const { width, height } = useWindowDimensions();

  const layout = useMemo(
    () => getLayoutInfo(width, height),
    [width, height],
  );

  const styles = useMemo(
    () => styleFactory?.({ colors: theme.colors, layout }),
    [theme.colors, layout, styleFactory],
  );

  return {
    t,
    styles,
    layout,
    ...theme,
  };
}
