import { THEME_MODE_STORAGE_KEY, ThemeMode } from "@/constants/theme";
import type { ColorScheme } from "@/constants/theme/colors";
import { darkColors, lightColors } from "@/constants/theme/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useColorScheme } from "react-native";

export type ThemeContextValue = {
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  colors: ColorScheme;
};

const THEME_MODE_VALUES = Object.values(ThemeMode) as string[];

function parseStoredThemeMode(stored: string | null): ThemeMode {
  if (stored != null && THEME_MODE_VALUES.includes(stored)) {
    return stored as ThemeMode;
  }
  return ThemeMode.System;
}

function resolveColors(
  themeMode: ThemeMode,
  systemScheme: "light" | "dark" | null | undefined
): ColorScheme {
  if (themeMode === ThemeMode.System) {
    return systemScheme === "dark" ? darkColors : lightColors;
  }
  return themeMode === ThemeMode.Dark ? darkColors : lightColors;
}

export const ThemeContext = React.createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemScheme = useColorScheme();
  const [themeMode, setThemeModeState] = useState<ThemeMode>(ThemeMode.System);

  useEffect(() => {
    AsyncStorage.getItem(THEME_MODE_STORAGE_KEY).then((stored) => {
      setThemeModeState(parseStoredThemeMode(stored));
    });
  }, []);

  const setThemeMode = useCallback((mode: ThemeMode) => {
    AsyncStorage.setItem(THEME_MODE_STORAGE_KEY, mode).then(() => {
      setThemeModeState(mode);
    });
  }, []);

  const colors = useMemo(
    () => resolveColors(themeMode, systemScheme),
    [themeMode, systemScheme]
  );

  const value = useMemo<ThemeContextValue>(
    () => ({ themeMode, setThemeMode, colors }),
    [themeMode, setThemeMode, colors]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
