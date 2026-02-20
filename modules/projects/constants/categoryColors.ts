import { ProjectCategory } from "@/modules/projects/types/project.types";

export const CATEGORY_COLORS: Record<ProjectCategory, string> = {
  [ProjectCategory.Performance]: "#1BA273",
  [ProjectCategory.Uiux]: "#3F68EB",
  [ProjectCategory.Architecture]: "#CD611F",
  [ProjectCategory.Other]: "#666666",
  [ProjectCategory.NativeModules]: "#9C27B0",
};
