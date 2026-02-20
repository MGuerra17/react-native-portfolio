import { LanguageToggle } from "@/modules/core/components/LanguageToggle";
import { ThemeModeToggle } from "@/modules/core/components/ThemeModeToggle";
import { HeroTitle } from "@/modules/home/components/HeroTitle";
import { Image } from "expo-image";
import { View } from "react-native";
import { heroSectionStyles } from "./HeroSection.styles";

export type HeroSectionProps = {
  smallText: string;
  largeText: string;
};

export function HeroSection({ smallText, largeText }: HeroSectionProps) {
  return (
    <View style={heroSectionStyles.container}>
      <View style={heroSectionStyles.header}>
        <View style={heroSectionStyles.toggles}>
          <LanguageToggle />
          <ThemeModeToggle />
        </View>
      </View>
      <HeroTitle smallText={smallText} largeText={largeText} />
      <Image
        source={require("@/assets/images/avatar-base.png")}
        style={heroSectionStyles.avatar}
      />
    </View>
  );
}
