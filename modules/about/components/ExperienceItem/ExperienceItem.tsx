import { useUI } from "@/modules/core/hooks/useUI";
import { Text, View } from "react-native";
import { getExperienceItemStyles } from "./ExperienceItem.styles";
import type { ExperienceItemProps } from "./ExperienceItem.types";

export function ExperienceItem({
  companyName,
  startYear,
  endYear,
  title,
  description,
  isLast = false,
}: ExperienceItemProps) {
  const { styles } = useUI(getExperienceItemStyles);

  return (
    <View style={styles.container}>
      <Text style={styles.companyName}>{companyName}</Text>
      <Text style={styles.years}>
        {startYear} - {endYear}
      </Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      {!isLast && <View style={styles.endLine} />}
    </View>
  );
}
