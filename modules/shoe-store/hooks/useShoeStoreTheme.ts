import { darkColors } from "@/constants/theme/colors";
import { useTheme } from "@/modules/core/hooks/useTheme";
import { shoeStoreDarkColors, shoeStoreLightColors } from "@/modules/shoe-store/constants/theme";

export function useShoeStoreTheme() {
  const theme = useTheme();

  const isDarkMode = theme.colors.background === darkColors.background;
  const colors = isDarkMode ? shoeStoreDarkColors : shoeStoreLightColors;

  return {
    ...theme,
    colors,
    isDarkMode,
  };
}
