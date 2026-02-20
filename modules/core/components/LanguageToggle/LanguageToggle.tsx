import { Locale } from "@/constants/i18n";
import { useLocale } from "@/modules/core/hooks/useLocale";
import * as Haptics from "expo-haptics";
import { LanguageToggleView } from "./LanguageToggleView";

export function LanguageToggle() {
  const { locale, setLocale, t } = useLocale();
  const isEn = locale === Locale.En;

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setLocale(isEn ? Locale.Es : Locale.En);
  };

  const accessibilityLabel = isEn
    ? `${t("home.common.language.english")} - ${t("home.common.language.toggle")}`
    : `${t("home.common.language.spanish")} - ${t("home.common.language.toggle")}`;

  return (
    <LanguageToggleView
      locale={locale}
      onPress={handlePress}
      accessibilityLabel={accessibilityLabel}
    />
  );
}
