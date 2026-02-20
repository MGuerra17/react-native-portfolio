import { HomeGradient } from "@/modules/home/components/HomeGradient";
import { HeroSection } from "@/modules/home/sections/HeroSection";
import { NavigationSection } from "@/modules/home/sections/NavigationSection";
import { View } from "react-native";
import { homeScreenStyles } from "./HomeScreen.styles";
import type { HomeScreenProps } from "./HomeScreen.types";

export function HomeScreenView({
  smallText,
  largeText,
  title,
  subtitle,
  options,
}: HomeScreenProps) {
  return (
    <View style={homeScreenStyles.screen} testID="home-screen">
      <HomeGradient />
      <HeroSection smallText={smallText} largeText={largeText} />
      <NavigationSection title={title} subtitle={subtitle} options={options} />
    </View>
  );
}
