import { ThemeMode } from "@/constants/theme";
import { useUI } from "@/modules/core/hooks/useUI";
import { Image } from "expo-image";
import { RelativePathString, useRouter } from "expo-router";
import { Pressable, Text, useColorScheme, View } from "react-native";
import { CATEGORY_COLORS } from "@/modules/projects/constants/categoryColors";
import { createProjectCardStyles } from "./ProjectCard.styles";
import type { ProjectCardProps } from "./ProjectCard.types";

export function ProjectCard({ project }: ProjectCardProps) {
  const router = useRouter();
  const { t, themeMode, styles } = useUI(createProjectCardStyles);
  const systemColorScheme = useColorScheme();
  const categoryColor = CATEGORY_COLORS[project.category];

  const isDark =
    themeMode === ThemeMode.Dark ||
    (themeMode === ThemeMode.System && systemColorScheme === "dark");
  const coverImage = isDark ? project.imageDark : project.imageLight;

  const categoryLabel = t(`projects.categories.${project.category}`);
  const title = t(`projects.items.${project.id}.title`) || project.title;
  const description =
    t(`projects.items.${project.id}.description`) || project.description;

  const handlePress = () => {
    router.push(project.href as RelativePathString);
  };

  const accessibilityLabel = `${t("projects.accessibility.projectCard")} ${title}`;

  return (
    <Pressable
      style={styles.card}
      onPress={handlePress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      testID={`project-card-${project.id}`}
    >
      <View style={[styles.categoryBadge, { backgroundColor: categoryColor }]}>
        <Text style={styles.categoryText}>{categoryLabel}</Text>
      </View>
      <View style={styles.imageContainer}>
        {coverImage != null && (
          <Image source={coverImage} style={styles.image} />
        )}
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </Pressable>
  );
}
