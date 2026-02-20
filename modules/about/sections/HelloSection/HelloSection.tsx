import { useUI } from "@/modules/core/hooks/useUI";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, Text, View } from "react-native";
import {
  getHelloSectionStyles,
  HELLO_SECTION_GRADIENT_COLORS,
} from "./HelloSection.styles";

export function HelloSection() {
  const { styles, t } = useUI(getHelloSectionStyles);

  return (
    <ScrollView
      style={[styles.container, { overflow: "visible" }]}
      contentContainerStyle={[styles.contentContainer, { overflow: "visible" }]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.topSpacer} />
      {/* Decorative elements */}
      <View style={styles.decorativeContainer}>
        <View style={styles.decorativeCircle1} />
        <View style={styles.decorativeCircle2} />
      </View>

      {/* Avatar with enhanced styling */}
      <View style={styles.avatarContainer}>
        <View style={styles.avatarGlow} />
        <View style={styles.avatarWrapper}>
          <LinearGradient
            colors={[...HELLO_SECTION_GRADIENT_COLORS]}
            style={styles.avatarGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          />
          <Image
            source={require("@/assets/images/avatar-hello.png")}
            style={styles.avatarImage}
          />
        </View>
        {/* Decorative dots around avatar */}
        <View style={styles.decorativeDot1} />
        <View style={styles.decorativeDot2} />
        <View style={styles.decorativeDot3} />
      </View>

      {/* Content with decorative line */}
      <View style={styles.contentWrapper}>
        <View style={styles.decorativeLine} />
        <Text style={styles.paragraph}>
          <Text style={styles.paragraphHighlight}>
            {t("about.hello.paragraph1Highlight")}
          </Text>
          {t("about.hello.paragraph1Rest")}
        </Text>
        <Text style={styles.paragraph}>
          {t("about.hello.paragraph2Start")}
          <Text style={styles.paragraphHighlight}>
            {t("about.hello.paragraph2Highlight")}
          </Text>
          {t("about.hello.paragraph2End")}
        </Text>
        <Text style={styles.paragraph}>{t("about.hello.paragraph3")}</Text>
        <View style={styles.decorativeLine} />
      </View>
    </ScrollView>
  );
}
