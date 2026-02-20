import { ProjectCategory } from "@/modules/projects/types/project.types";

export const CATEGORY_LABELS = {
  [ProjectCategory.Performance]: "Performance",
  [ProjectCategory.Uiux]: "UI/UX",
  [ProjectCategory.Architecture]: "Architecture",
  [ProjectCategory.NativeModules]: "Native APIs",
  [ProjectCategory.Other]: "Other",
} as const;
