import { LocaleProvider, ThemeProvider } from "@/modules/core/context";
import React from "react";
import { render, type RenderOptions } from "@testing-library/react-native";

/**
 * Wraps the given UI with ThemeProvider and LocaleProvider.
 * Use this when a test needs real useUI behavior (real theme/translations)
 * instead of the global useUI mock. In that test file, call jest.unmock
 * (or jest.doMock) for @/modules/core/hooks/useUI before importing components.
 */
function AllProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LocaleProvider>{children}</LocaleProvider>
    </ThemeProvider>
  );
}

function renderWithProviders(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) {
  return render(ui, {
    wrapper: AllProviders,
    ...options,
  });
}

export { renderWithProviders, AllProviders };
