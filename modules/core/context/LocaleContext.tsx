import { Locale, LOCALE_STORAGE_KEY } from "@/constants/i18n";
import { getTranslations, type Translations } from "@/translations";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useCallback, useEffect, useMemo, useState } from "react";

export type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const LOCALE_VALUES = Object.values(Locale) as string[];

function parseStoredLocale(stored: string | null): Locale {
  if (stored != null && LOCALE_VALUES.includes(stored)) {
    return stored as Locale;
  }
  return Locale.En;
}

function resolveTranslation(
  translations: Translations,
  key: string
): string | undefined {
  const parts = key.split(".");
  let current: unknown = translations;
  for (const part of parts) {
    if (current == null || typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[part];
  }
  return typeof current === "string" ? current : undefined;
}

export const LocaleContext = React.createContext<LocaleContextValue | null>(
  null
);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(Locale.En);

  useEffect(() => {
    AsyncStorage.getItem(LOCALE_STORAGE_KEY).then((stored) => {
      setLocaleState(parseStoredLocale(stored));
    });
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    AsyncStorage.setItem(LOCALE_STORAGE_KEY, newLocale).then(() => {
      setLocaleState(newLocale);
    });
  }, []);

  const t = useCallback(
    (key: string): string => {
      const translations = getTranslations(locale);
      const value = resolveTranslation(translations, key);
      if (value != null) return value;
      const fallback = resolveTranslation(getTranslations(Locale.En), key);
      return fallback ?? key;
    },
    [locale]
  );

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}
