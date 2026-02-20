import { RootLayoutContainer } from "@/modules/core/containers/RootLayoutContainer";
import { LocaleProvider, ThemeProvider } from "@/modules/core/context";
import { useRootLayout } from "@/modules/core/hooks/useRootLayout";
import { ErrorBoundary } from "@/modules/core/components/ErrorBoundary/ErrorBoundary";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const { isLoading } = useRootLayout();

  if (isLoading) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <LocaleProvider>
          <ErrorBoundary>
            <RootLayoutContainer />
          </ErrorBoundary>
        </LocaleProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
