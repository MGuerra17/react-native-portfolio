import { iconSize } from "@/constants/theme";
import { useUI } from "@/modules/core/hooks/useUI";
import Feather from "@expo/vector-icons/Feather";
import { Pressable, View } from "react-native";
import { LanguageToggle } from "../LanguageToggle";
import { ThemeModeToggle } from "../ThemeModeToggle";
import { getDefaultHeaderStyles } from "./DefaultHeader.styles";
import type { DefaultHeaderProps } from "./DefaultHeader.types";

export function DefaultHeaderView({ onBack }: DefaultHeaderProps) {
  const { colors, styles, t } = useUI(getDefaultHeaderStyles);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={onBack}
        accessibilityRole="button"
        accessibilityLabel={t("projects.accessibility.back")}
      >
        <Feather name="arrow-left" size={iconSize.sm} color={colors.icon} />
      </Pressable>

      <View style={styles.toggles}>
        <LanguageToggle />
        <ThemeModeToggle />
      </View>
    </View>
  );
}

