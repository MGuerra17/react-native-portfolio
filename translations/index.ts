import { Locale } from "@/constants/i18n";
import { aboutEn } from "./about/en";
import { aboutEs } from "./about/es";
import { homeEn } from "./home/en";
import { homeEs } from "./home/es";
import { shoeStoreEn } from "./shoe-store/en";
import { shoeStoreEs } from "./shoe-store/es";
import { projectsEn } from "./projects/en";
import { projectsEs } from "./projects/es";

type HomeTranslations = typeof homeEn | typeof homeEs;
type ProjectsTranslations = typeof projectsEn | typeof projectsEs;
type AboutTranslations = typeof aboutEn | typeof aboutEs;
type ShoeStoreTranslations = typeof shoeStoreEn | typeof shoeStoreEs;

export type Translations = {
  home: HomeTranslations;
  projects: ProjectsTranslations;
  about: AboutTranslations;
  shoeStore: ShoeStoreTranslations;
};

const translations: Record<Locale, Translations> = {
  [Locale.En]: {
    home: homeEn,
    projects: projectsEn,
    about: aboutEn,
    shoeStore: shoeStoreEn,
  },
  [Locale.Es]: {
    home: homeEs,
    projects: projectsEs,
    about: aboutEs,
    shoeStore: shoeStoreEs,
  },
};

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}
