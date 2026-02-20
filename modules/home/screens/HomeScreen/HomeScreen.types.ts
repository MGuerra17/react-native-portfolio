import type { NavigationOptionItem } from "@/modules/home/sections/NavigationSection/NavigationSection.types";

export type HomeScreenProps = {
  smallText: string;
  largeText: string;
  title: string;
  subtitle: string;
  options: NavigationOptionItem[];
};
