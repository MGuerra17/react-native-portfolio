import type { Locale } from "@/constants/i18n";
import { getTranslations } from "@/translations";

export function getExperiences(locale: Locale) {
  return [...getTranslations(locale).about.experiences];
}
