import { useUI } from "@/modules/core/hooks/useUI";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable } from "react-native";
import {
  createThemeModeToggleStyles,
  ICON_SIZE,
} from "./ThemeModeToggle.styles";
import type { ThemeModeToggleProps } from "./ThemeModeToggle.types";

export function ThemeModeToggleView({
  isDark,
  onPress,
  accessibilityLabel,
}: ThemeModeToggleProps) {
  const { styles, colors } = useUI(createThemeModeToggleStyles);

  return (
    <Pressable
      style={styles.container}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
    >
      <Ionicons
        name={isDark ? "moon" : "sunny"}
        size={ICON_SIZE}
        color={colors.primaryText}
      />
    </Pressable>
  );
}
