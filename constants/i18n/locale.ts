export enum Locale {
  En = "en",
  Es = "es",
}

export type SupportedLocale = Locale;

export const LOCALE_STORAGE_KEY = "@app/locale" as const;
