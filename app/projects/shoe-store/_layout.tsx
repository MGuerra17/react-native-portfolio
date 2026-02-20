import { getLayoutInfo } from "@/constants/theme/breakpoints";
import {
  BottomSheetProvider,
  createShoeStoreLayoutStyles,
  hydrateBagStore,
  hydrateFavoritesStore,
  useShoeStoreTheme,
} from "@/modules/shoe-store";
import { Stack } from "expo-router";
import { useEffect, useMemo } from "react";
import { View, useWindowDimensions } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function ShoeStoreLayout() {
  const theme = useShoeStoreTheme();
  const { width, height } = useWindowDimensions();
  const layout = useMemo(() => getLayoutInfo(width, height), [width, height]);
  const styles = useMemo(
    () => createShoeStoreLayoutStyles({ colors: theme.colors, layout }),
    [theme.colors, layout],
  );

  useEffect(() => {
    hydrateBagStore();
    hydrateFavoritesStore();
  }, []);

  return (
    <GestureHandlerRootView style={styles.gestureHandlerRoot}>
      <BottomSheetProvider>
        <View style={styles.container}>
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: styles.stackContent,
            }}
          >
            <Stack.Screen name="index" />
            <Stack.Screen
              name="search"
              options={{
                animation: "slide_from_bottom",
              }}
            />
            <Stack.Screen name="bag" />
            <Stack.Screen name="shoe/[id]" />
          </Stack>
        </View>
      </BottomSheetProvider>
    </GestureHandlerRootView>
  );
}
