import { useUI } from "@/modules/core/hooks/useUI";
import { NavigationOption } from "@/modules/home/components/NavigationOption";
import { Text, View } from "react-native";
import { createNavigationSectionStyles } from "./NavigationSection.styles";
import type { NavigationSectionProps } from "./NavigationSection.types";

export function NavigationSection({
  title,
  subtitle,
  options,
}: NavigationSectionProps) {
  const { styles } = useUI(createNavigationSectionStyles);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <View style={styles.optionsContainer}>
        {options.map((option) => (
          <NavigationOption
            key={option.id}
            onPress={option.onPress}
            icon={option.icon}
            title={option.title}
            subtitle={option.subtitle}
            testID={option.testID}
          />
        ))}
      </View>
    </View>
  );
}
