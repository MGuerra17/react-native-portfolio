import {
  ABOUT_SECTIONS,
  AboutSectionType,
  type AboutSectionItem,
} from "@/modules/about/constants/sections";
import { ExperienceSection } from "@/modules/about/sections/ExperienceSection";
import { HelloSection } from "@/modules/about/sections/HelloSection";
import { DefaultHeader } from "@/modules/core/components/DefaultHeader";
import { PageTitle } from "@/modules/core/components/PageTitle";
import { Swiper } from "@/modules/core/components/Swiper";
import { useUI } from "@/modules/core/hooks/useUI";
import { View } from "react-native";
import { getAboutScreenStyles } from "./AboutScreen.styles";
import type { AboutScreenProps } from "./AboutScreen.types";

export function AboutScreenView({
  flatListRef,
  currentSectionIndex,
  sectionWidth,
  onPrev,
  onNext,
  onMomentumScrollEnd,
}: AboutScreenProps) {
  const { styles, t } = useUI(getAboutScreenStyles);

  const renderItem = ({ item }: { item: AboutSectionItem }) => (
    <View style={[styles.slide, { width: sectionWidth }]}>
      {item.type === AboutSectionType.Presentation ? (
        <HelloSection />
      ) : (
        <ExperienceSection />
      )}
    </View>
  );

  return (
    <View style={styles.screen}>
      <DefaultHeader />
      <PageTitle
        title={t("about.screen.title")}
        subtitle={t("about.screen.subtitle")}
      />
      <Swiper<AboutSectionItem>
        data={[...ABOUT_SECTIONS]}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        getTitleKey={(item) => item.titleKey}
        onMomentumScrollEnd={onMomentumScrollEnd}
        flatListRef={flatListRef}
        currentIndex={currentSectionIndex}
        onPrev={onPrev}
        onNext={onNext}
        listContainerStyle={styles.swiperContainer}
      />
    </View>
  );
}
