import React, { useCallback, useRef } from "react";
import { LayoutChangeEvent, PanResponder, View } from "react-native";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import { roundToStep } from "@/modules/shoe-store/utils/math";
import { createPriceRangeSliderStyles } from "./PriceRangeSlider.styles";
import type { PriceRangeSliderProps } from "./PriceRangeSlider.types";

export function PriceRangeSlider({
  minValue,
  maxValue,
  lowValue,
  highValue,
  step = 1,
  onValueChange,
}: PriceRangeSliderProps) {
  const { styles } = useShoeStoreUI(createPriceRangeSliderStyles);
  const trackWidthRef = useRef(0);
  const lowRef = useRef(lowValue);
  const highRef = useRef(highValue);
  const startLowRef = useRef(0);
  const startHighRef = useRef(0);
  lowRef.current = lowValue;
  highRef.current = highValue;

  const range = maxValue - minValue;

  const valueToPercent = useCallback(
    (value: number) => {
      if (range <= 0) return 0;
      return Math.max(0, Math.min(1, (value - minValue) / range));
    },
    [minValue, range],
  );

  const percentToValue = useCallback(
    (percent: number) => {
      const value = minValue + percent * range;
      return roundToStep(value, step, minValue);
    },
    [minValue, range, step],
  );

  const handleLayout = useCallback((e: LayoutChangeEvent) => {
    const { width } = e.nativeEvent.layout;
    trackWidthRef.current = width;
  }, []);

  const panLow = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        startLowRef.current = lowRef.current;
      },
      onPanResponderMove: (_, gestureState) => {
        const width = trackWidthRef.current;
        if (width <= 0) return;
        const high = highRef.current;
        const startLow = startLowRef.current;
        const dx = gestureState.dx;
        const startPercent = (startLow - minValue) / range;
        const newPercent = Math.max(0, Math.min(1, startPercent + dx / width));
        const newLow = percentToValue(newPercent);
        const clamped = Math.max(minValue, Math.min(newLow, high - step));
        const rounded = roundToStep(clamped, step, minValue);
        if (rounded !== lowRef.current) {
          onValueChange(rounded, high);
        }
      },
    }),
  ).current;

  const panHigh = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        startHighRef.current = highRef.current;
      },
      onPanResponderMove: (_, gestureState) => {
        const width = trackWidthRef.current;
        if (width <= 0) return;
        const low = lowRef.current;
        const startHigh = startHighRef.current;
        const dx = gestureState.dx;
        const startPercent = (startHigh - minValue) / range;
        const newPercent = Math.max(0, Math.min(1, startPercent + dx / width));
        const newHigh = percentToValue(newPercent);
        const clamped = Math.min(maxValue, Math.max(newHigh, low + step));
        const rounded = roundToStep(clamped, step, minValue);
        if (rounded !== highRef.current) {
          onValueChange(low, rounded);
        }
      },
    }),
  ).current;

  const lowPercent = valueToPercent(lowValue);
  const highPercent = valueToPercent(highValue);

  return (
    <View style={styles.container}>
      <View style={styles.track} onLayout={handleLayout}>
        <View
          style={[
            styles.trackActive,
            {
              left: `${lowPercent * 100}%`,
              width: `${(highPercent - lowPercent) * 100}%`,
            },
          ]}
        />
        <View style={styles.thumbsRow}>
          <View
            style={[
              styles.thumbTouch,
              {
                left: `${lowPercent * 100}%`,
              },
            ]}
            {...panLow.panHandlers}
          >
            <View style={styles.thumb} />
          </View>
          <View
            style={[
              styles.thumbTouch,
              {
                left: `${highPercent * 100}%`,
              },
            ]}
            {...panHigh.panHandlers}
          >
            <View style={styles.thumb} />
          </View>
        </View>
      </View>
    </View>
  );
}
