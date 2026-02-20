import type { ReactNode } from "react";

export type NavigationOptionItem = {
  id: string;
  onPress: () => void;
  icon: ReactNode;
  title: string;
  subtitle: string;
  testID: string;
};

export type NavigationSectionProps = {
  title: string;
  subtitle: string;
  options: NavigationOptionItem[];
};
