import { iconSize } from "@/constants/theme";
import { useUI } from "@/modules/core/hooks/useUI";
import Feather from "@expo/vector-icons/Feather";
import { Pressable, Text, View } from "react-native";
import { getSwiperControlsStyles } from "./SwiperControls.styles";
import type { SwiperControlsProps } from "./SwiperControls.types";

export function SwiperControls({
  currentIndex,
  sectionTitleKeys,
  onPrev,
  onNext,
  controlsContainerStyle,
  navButtonStyle,
  navButtonDisabledStyle,
  centerContainerStyle,
  centerTextStyle,
}: SwiperControlsProps) {
  const { colors, styles, t } = useUI(getSwiperControlsStyles);

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex === sectionTitleKeys.length - 1;

  return (
    <View style={[styles.controlsRow, controlsContainerStyle]}>
      <Pressable
        style={[
          styles.navButton,
          navButtonStyle,
          isPrevDisabled && (navButtonDisabledStyle ?? styles.navButtonDisabled),
        ]}
        onPress={onPrev}
        disabled={isPrevDisabled}
        accessibilityState={{ disabled: isPrevDisabled }}
        accessibilityLabel="Previous section"
        testID="about-swiper-prev"
      >
        <Feather name="chevron-left" size={iconSize.sm} color={colors.icon} />
      </Pressable>
      <View style={[styles.sectionTitlePill, centerContainerStyle]}>
        <Text style={[styles.sectionTitleText, centerTextStyle]}>
          {t(sectionTitleKeys[currentIndex])}
        </Text>
      </View>
      <Pressable
        style={[
          styles.navButton,
          navButtonStyle,
          isNextDisabled && (navButtonDisabledStyle ?? styles.navButtonDisabled),
        ]}
        onPress={onNext}
        disabled={isNextDisabled}
        accessibilityState={{ disabled: isNextDisabled }}
        accessibilityLabel="Next section"
        testID="about-swiper-next"
      >
        <Feather name="chevron-right" size={iconSize.sm} color={colors.icon} />
      </Pressable>
    </View>
  );
}
