import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Fragment } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import type { RootLayoutContentProps } from "./RootLayoutContent.types";

export function RootLayoutContent({
  styles,
  statusBarStyle,
}: RootLayoutContentProps) {
  return (
    <Fragment>
      <StatusBar style={statusBarStyle} />
      <SafeAreaView style={styles.safeArea}>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: styles.stack,
          }}
        />
      </SafeAreaView>
    </Fragment>
  );
}
