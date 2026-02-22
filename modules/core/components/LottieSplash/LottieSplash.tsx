import { STATIC_COLORS } from "@/constants/theme/colors";
import LottieView from "lottie-react-native";
import { useCallback } from "react";
import { StyleSheet, View } from "react-native";

const PRIMARY = STATIC_COLORS.primary;

type LottieSplashProps = {
  onFinish: () => void;
};

export function LottieSplash({ onFinish }: LottieSplashProps) {
  const handleAnimationFinish = useCallback(() => {
    onFinish();
  }, [onFinish]);

  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop={false}
        source={require("@/assets/lotties/splash.json")}
        style={styles.lottie}
        onAnimationFinish={handleAnimationFinish}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY,
    justifyContent: "center",
    alignItems: "center",
  },
  lottie: {
    width: "100%",
    height: "100%",
  },
});
