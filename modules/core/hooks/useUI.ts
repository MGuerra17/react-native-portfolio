import type { ColorScheme } from "@/constants/theme/colors";
import { getLayoutInfo } from "@/constants/theme/breakpoints";
import type { UIStyleFactory } from "@/modules/core/types/styleFactory";
import { useLocale } from "@/modules/core/hooks/useLocale";
import { useTheme } from "@/modules/core/hooks/useTheme";
import { useMemo } from "react";
import { useWindowDimensions } from "react-native";

export function useUI(): ReturnType<typeof useTheme> & {
  t: ReturnType<typeof useLocale>["t"];
  styles: undefined;
  layout: ReturnType<typeof getLayoutInfo>;
};

export function useUI<Style>(
  styleFactory: UIStyleFactory<Style, ColorScheme>
): ReturnType<typeof useTheme> & {
  t: ReturnType<typeof useLocale>["t"];
  styles: Style;
  layout: ReturnType<typeof getLayoutInfo>;
};

export function useUI<Style>(
  styleFactory?: UIStyleFactory<Style, ColorScheme>
) {
  const { t } = useLocale();
  const theme = useTheme();
  const { width, height } = useWindowDimensions();

  const layout = useMemo(
    () => getLayoutInfo(width, height),
    [width, height]
  );

  const styles = useMemo(
    () =>
      styleFactory?.({ colors: theme.colors, layout }),
    [theme.colors, layout, styleFactory]
  );

  return {
    t,
    styles,
    layout,
    ...theme,
  };
}
