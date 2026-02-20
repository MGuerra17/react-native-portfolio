import { useLocale } from "@/modules/core/hooks/useLocale";
import { useTheme } from "@/modules/core/hooks/useTheme";
import { getNavigationOptions } from "@/modules/home/utils/getNavigationOptions";
import { RelativePathString, useRouter } from "expo-router";
import { useMemo } from "react";

export function useHomeScreen() {
  const router = useRouter();
  const { colors } = useTheme();
  const { t } = useLocale();

  const options = useMemo(() => {
    const navigationOptions = getNavigationOptions(colors.icon, t);

    return navigationOptions.map((option) => ({
      ...option,
      onPress: () => router.push(option.href as RelativePathString),
    }));
  }, [colors.icon, t, router]);

  return {
    smallText: t("home.hero.smallText"),
    largeText: t("home.hero.largeText"),
    title: t("home.navigation.title"),
    subtitle: t("home.navigation.subtitle"),
    options,
  };
}
