import { useUI } from "@/modules/core/hooks/useUI";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  View,
} from "react-native";
import { ProjectCard } from "@/modules/projects/components/ProjectCard";
import { createProjectsListStyles } from "./ProjectsList.styles";
import type { ProjectsListProps } from "./ProjectsList.types";

export function ProjectsList({
  projects,
  isLoading = false,
  isRefreshing = false,
  onRefresh,
}: ProjectsListProps) {
  const { styles, colors, t } = useUI(createProjectsListStyles);

  const refreshControl =
    onRefresh != null ? (
      <RefreshControl
        refreshing={isRefreshing}
        onRefresh={onRefresh}
        tintColor={colors.primaryText}
      />
    ) : undefined;

  if (isLoading) {
    return (
      <View style={styles.container}>
        <View style={styles.emptyContainer}>
          <ActivityIndicator size="large" color={colors.primaryText} />
        </View>
      </View>
    );
  }

  if (projects.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>{t("projects.search.empty")}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={projects}
        renderItem={({ item }) => <ProjectCard project={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        refreshControl={refreshControl}
      />
    </View>
  );
}
