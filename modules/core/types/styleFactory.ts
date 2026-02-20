import type { ColorScheme } from "@/constants/theme/colors";
import type { LayoutInfo } from "@/constants/theme/breakpoints";

export type UIStyleContext<Colors = ColorScheme> = {
  colors: Colors;
  layout: LayoutInfo;
};

export type UIStyleFactory<Style, Colors = ColorScheme> = (
  context: UIStyleContext<Colors>
) => Style;
