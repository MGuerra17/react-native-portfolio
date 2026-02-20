import { Text, View } from "react-native";
import { useUI } from "@/modules/core/hooks/useUI";
import { getPageTitleStyles } from "./PageTitle.styles";
import type { PageTitleProps } from "./PageTitle.types";

export function PageTitle({ title, subtitle }: PageTitleProps) {
  const { styles } = useUI(getPageTitleStyles);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}
