import { useUI } from "@/modules/core/hooks/useUI";
import { Text, View } from "react-native";
import { createHeroTitleStyles } from "./HeroTitle.styles";
import type { HeroTitleProps } from "./HeroTitle.types";

export function HeroTitle({ largeText, smallText }: HeroTitleProps) {
  const { styles } = useUI(createHeroTitleStyles);

  return (
    <View style={styles.container}>
      <Text style={styles.smallText} numberOfLines={1}>
        {smallText}
      </Text>
      <Text style={styles.largeText} numberOfLines={1}>
        {largeText}
      </Text>
    </View>
  );
}
