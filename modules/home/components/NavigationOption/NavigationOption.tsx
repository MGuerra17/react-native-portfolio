import { useUI } from "@/modules/core/hooks/useUI";
import Entypo from "@expo/vector-icons/Entypo";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { createNavigationOptionStyles } from "./NavigationOption.styles";
import type { NavigationOptionProps } from "./NavigationOption.types";

export function NavigationOption({
  onPress,
  icon,
  title,
  subtitle,
  testID,
}: NavigationOptionProps) {
  const { colors, styles, t } = useUI(createNavigationOptionStyles);

  const iconWithSize = React.isValidElement<{ size?: number; color?: string }>(
    icon,
  )
    ? React.cloneElement(icon, { size: styles.mainIconSize })
    : icon;

  const accessibilityLabel =
    title === t("home.navigation.projects.title")
      ? t("home.accessibility.navigateToProjects")
      : title === t("home.navigation.about.title")
        ? t("home.accessibility.navigateToAbout")
        : `${title}: ${subtitle}`;

  return (
    <Pressable
      style={styles.container}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      testID={testID}
    >
      <View style={styles.mainIconContainer}>{iconWithSize}</View>
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <Text style={styles.subtitle} numberOfLines={2}>
        {subtitle}
      </Text>
      <Entypo
        name="chevron-with-circle-down"
        size={styles.chevronSize}
        color={colors.icon}
      />
    </Pressable>
  );
}
