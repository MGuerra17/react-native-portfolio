import { ErrorBoundary } from "@/modules/core/components/ErrorBoundary/ErrorBoundary";
import { LottieSplash } from "@/modules/core/components/LottieSplash";
import { RootLayoutContainer } from "@/modules/core/containers/RootLayoutContainer";
import { LocaleProvider, ThemeProvider } from "@/modules/core/context";
import { useRootLayout } from "@/modules/core/hooks/useRootLayout";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { isLoading } = useRootLayout();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (!isLoading && showSplash) {
      SplashScreen.hideAsync();
    }
  }, [isLoading, showSplash]);

  if (isLoading) {
    return null;
  }

  if (showSplash) {
    return <LottieSplash onFinish={() => setShowSplash(false)} />;
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
