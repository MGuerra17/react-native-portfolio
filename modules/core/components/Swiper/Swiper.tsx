import { SwiperControls } from "@/modules/core/components/Swiper/SwiperControls";
import type { SwiperProps } from "@/modules/core/components/Swiper/Swiper.types";
import { FlatList, View, useWindowDimensions } from "react-native";

export function Swiper<T>({
  data,
  renderItem,
  keyExtractor,
  onMomentumScrollEnd,
  flatListRef,
  currentIndex,
  getTitleKey,
  onPrev,
  onNext,
  containerStyle,
  listContainerStyle,
  controlsContainerStyle,
  navButtonStyle,
  navButtonDisabledStyle,
  centerContainerStyle,
  centerTextStyle,
}: SwiperProps<T>) {
  const { width } = useWindowDimensions();
  const sectionTitleKeys = data.map(getTitleKey);

  const getItemLayout = (_: unknown, index: number) => ({
    length: width,
    offset: width * index,
    index,
  });

  return (
    <View style={[{ flex: 1 }, containerStyle]}>
      <View style={[{ flex: 1 }, listContainerStyle]}>
        <FlatList
          ref={flatListRef}
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={onMomentumScrollEnd}
          getItemLayout={getItemLayout}
          snapToInterval={width}
          snapToAlignment="start"
          decelerationRate="fast"
        />
      </View>
      <SwiperControls
        currentIndex={currentIndex}
        sectionTitleKeys={sectionTitleKeys}
        onPrev={onPrev}
        onNext={onNext}
        controlsContainerStyle={controlsContainerStyle}
        navButtonStyle={navButtonStyle}
        navButtonDisabledStyle={navButtonDisabledStyle}
        centerContainerStyle={centerContainerStyle}
        centerTextStyle={centerTextStyle}
      />
    </View>
  );
}
