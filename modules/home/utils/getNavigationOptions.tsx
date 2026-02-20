import { iconSize } from "@/constants/theme";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import type { ReactNode } from "react";
export type NavigationOptionConfig = {
  id: string;
  href: string;
  icon: ReactNode;
  title: string;
  subtitle: string;
  testID: string;
};

export function getNavigationOptions(
  iconColor: string,
  t: (key: string) => string,
): NavigationOptionConfig[] {
  return [
    {
      id: "1",
      href: "/projects",
      icon: <FontAwesome name="code" size={iconSize.md} color={iconColor} />,
      title: t("home.navigation.projects.title"),
      subtitle: t("home.navigation.projects.subtitle"),
      testID: "nav-projects",
    },
    {
      id: "2",
      href: "/about",
      icon: <Feather name="user" size={iconSize.md} color={iconColor} />,
      title: t("home.navigation.about.title"),
      subtitle: t("home.navigation.about.subtitle"),
      testID: "nav-about",
    },
  ];
}
