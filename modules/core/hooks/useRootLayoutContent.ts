import { ThemeMode } from "@/constants/theme";
import { StatusBarStyle } from "expo-status-bar";
import * as SystemUI from "expo-system-ui";
import { useEffect } from "react";
import { getRootLayoutContentStyles } from "../components/RootLayoutContent/RootLayoutContent.styles";
import { useUI } from "./useUI";

export function useRootLayoutContent() {
  const { themeMode, colors, styles } = useUI(getRootLayoutContentStyles);
  const isDark = themeMode === ThemeMode.Dark;
  const statusBarStyle: StatusBarStyle = isDark ? "light" : "dark";

  useEffect(() => {
    SystemUI.setBackgroundColorAsync(colors.background);
  }, [colors.background]);

  return {
    styles,
    statusBarStyle,
  };
}
