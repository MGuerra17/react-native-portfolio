import { ThemeMode } from "@/constants/theme";
import { darkColors } from "@/constants/theme/colors";
import { useTheme } from "@/modules/core/hooks/useTheme";
import { useLocale } from "@/modules/core/hooks/useLocale";
import * as Haptics from "expo-haptics";
import { ThemeModeToggleView } from "./ThemeModeToggleView";

export function ThemeModeToggle() {
  const { setThemeMode, colors } = useTheme();
  const { t } = useLocale();
  const isDark = colors.background === darkColors.background;

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setThemeMode(isDark ? ThemeMode.Light : ThemeMode.Dark);
  };

  return (
    <ThemeModeToggleView
      isDark={isDark}
      onPress={handlePress}
      accessibilityLabel={
        isDark ? t("home.common.themeMode.dark") : t("home.common.themeMode.light")
      }
    />
  );
}
