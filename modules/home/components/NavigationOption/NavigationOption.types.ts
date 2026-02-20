import type { ReactNode } from "react";

export type NavigationOptionProps = {
  onPress: () => void;
  icon: ReactNode;
  title: string;
  subtitle: string;
  testID?: string;
};
