import type { ReactNode } from "react";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";

export type AccordionItemProps = {
  title: string;
  expanded: boolean;
  onToggle: () => void;
  children: ReactNode;
};
