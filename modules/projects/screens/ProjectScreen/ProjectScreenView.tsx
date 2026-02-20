import { DefaultHeader } from "@/modules/core/components/DefaultHeader";
import { PageTitle } from "@/modules/core/components/PageTitle";
import { useUI } from "@/modules/core/hooks/useUI";
import {
  FilterButton,
  ProjectsList,
  SearchInput,
} from "@/modules/projects/components";
import { FilterBottomSheet } from "@/modules/projects/components/FilterBottomSheet";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { getProjectScreenStyles } from "./ProjectScreen.styles";
import type { ProjectScreenProps } from "./ProjectScreen.types";

export function ProjectScreenView({
  projects,
  searchQuery,
  selectedCategory,
  onSearchChange,
  onFilterPress,
  isFilterSheetOpen,
  onApplyFilter,
  onFilterSheetClose,
  isLoading = false,
  isRefreshing = false,
  onRefresh,
}: ProjectScreenProps) {
  const { t, styles } = useUI(getProjectScreenStyles);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.screen}>
        <DefaultHeader />
        <PageTitle
          title={t("projects.screen.title")}
          subtitle={t("projects.screen.subtitle")}
        />
        <View style={styles.controls}>
          <View style={styles.searchContainer}>
            <SearchInput
              value={searchQuery}
              onChangeText={onSearchChange}
              placeholder={t("projects.search.placeholder")}
            />
          </View>
          <FilterButton
            onPress={onFilterPress}
            activeFilterCount={selectedCategory !== null ? 1 : 0}
          />
        </View>
        <ProjectsList
          projects={projects}
          isLoading={isLoading}
          isRefreshing={isRefreshing}
          onRefresh={onRefresh}
        />
        <FilterBottomSheet
          isOpen={isFilterSheetOpen}
          selectedCategory={selectedCategory}
          onApply={onApplyFilter}
          onClose={onFilterSheetClose}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
