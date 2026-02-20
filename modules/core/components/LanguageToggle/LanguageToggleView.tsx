import { Locale } from "@/constants/i18n";
import { useUI } from "@/modules/core/hooks/useUI";
import { Pressable, Text } from "react-native";
import { createLanguageToggleStyles } from "./LanguageToggle.styles";
import type { LanguageToggleProps } from "./LanguageToggle.types";

export function LanguageToggleView({
  locale,
  onPress,
  accessibilityLabel,
}: LanguageToggleProps) {
  const { styles } = useUI(createLanguageToggleStyles);
  const isEn = locale === Locale.En;

  return (
    <Pressable
      style={styles.container}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
    >
      <Text style={styles.label}>{isEn ? "EN" : "ES"}</Text>
    </Pressable>
  );
}
