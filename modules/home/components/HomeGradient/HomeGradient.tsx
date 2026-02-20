import { useUI } from "@/modules/core/hooks/useUI";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./HomeGradient.styles";

export function HomeGradient() {
  const { colors } = useUI();

  return (
    <LinearGradient
      colors={[colors.background, colors.primary]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={[0, 0.5]}
    />
  );
}
