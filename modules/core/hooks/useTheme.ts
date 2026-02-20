import { ThemeContext, type ThemeContextValue } from "@/modules/core/context";
import React from "react";

export function useTheme(): ThemeContextValue {
  const context = React.useContext(ThemeContext);
  if (context == null) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
