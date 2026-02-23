import { STATIC_COLORS } from "@/constants/theme/colors";
import LottieView from "lottie-react-native";
import { useCallback, useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";

const PRIMARY = STATIC_COLORS.primary;

const MIN_SPLASH_DURATION_MS = 2500;

type LottieSplashProps = {
  onFinish: () => void;
};

export function LottieSplash({ onFinish }: LottieSplashProps) {
  const [animationFinished, setAnimationFinished] = useState(false);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const onFinishCalledRef = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, MIN_SPLASH_DURATION_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (animationFinished && minTimeElapsed && !onFinishCalledRef.current) {
      onFinishCalledRef.current = true;
      onFinish();
    }
  }, [animationFinished, minTimeElapsed, onFinish]);

  const handleAnimationFinish = useCallback((isCancelled?: boolean) => {
    if (!isCancelled) {
      setAnimationFinished(true);
    }
  }, []);

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
