import { useUI } from "@/modules/core/hooks/useUI";
import { View } from "react-native";
import { ProjectCategory } from "@/modules/projects/types/project.types";
import { CategoryFilterOption } from "@/modules/projects/components/CategoryFilterOption";
import { createCategoryFilterOptionsStyles } from "./CategoryFilterOptions.styles";
import type { CategoryFilterOptionsProps } from "./CategoryFilterOptions.types";

const GRID_OPTIONS: (ProjectCategory | null)[] = [
  null,
  ProjectCategory.Performance,
  ProjectCategory.Uiux,
  ProjectCategory.Architecture,
  ProjectCategory.NativeModules,
  ProjectCategory.Other,
];

function getLabel(
  value: ProjectCategory | null,
  t: (key: string) => string
): string {
  return value === null
    ? t("projects.filter.all")
    : t(`projects.categories.${value}`);
}

export function CategoryFilterOptions({
  selectedCategory,
  onSelect,
}: CategoryFilterOptionsProps) {
  const { t, styles } = useUI(createCategoryFilterOptionsStyles);

  return (
    <View style={styles.categoryGrid}>
      {[GRID_OPTIONS.slice(0, 3), GRID_OPTIONS.slice(3, 6)].map(
        (row, rowIndex) => (
          <View key={rowIndex} style={styles.categoryGridRow}>
            {row.map((value) => {
              const categoryKey = value as string | null;
              const isSelected = selectedCategory === categoryKey;
              return (
                <CategoryFilterOption
                  key={value ?? "all"}
                  label={getLabel(value, t)}
                  isSelected={isSelected}
                  onPress={() => onSelect(categoryKey)}
                />
              );
            })}
          </View>
        )
      )}
    </View>
  );
}
