import { ExperienceItem } from "@/modules/about/components/ExperienceItem";
import { getExperiences } from "@/modules/about/utils/getExperiences";
import { useLocale } from "@/modules/core/hooks/useLocale";
import { useUI } from "@/modules/core/hooks/useUI";
import { useMemo } from "react";
import { ScrollView, View } from "react-native";
import { getExperienceSectionStyles } from "./ExperienceSection.styles";

export function ExperienceSection() {
  const { locale } = useLocale();
  const experiences = useMemo(() => getExperiences(locale), [locale]);
  const { styles } = useUI(getExperienceSectionStyles);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* Timeline line */}
      <View style={styles.timelineContainer}>
        <View style={styles.timelineLine} />
      </View>

      {/* Experiences */}
      <View style={styles.experiencesWrapper}>
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={`${exp.companyName}-${index}`}
            companyName={exp.companyName}
            startYear={exp.startYear}
            endYear={exp.endYear}
            title={exp.title}
            description={exp.description}
            isLast={index === experiences.length - 1}
          />
        ))}
      </View>
    </ScrollView>
  );
}
