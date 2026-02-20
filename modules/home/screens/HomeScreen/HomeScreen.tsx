import { useHomeScreen } from "@/modules/home/hooks/useHomeScreen";
import { HomeScreenView } from "./HomeScreenView";

export function HomeScreen() {
  const { smallText, largeText, title, subtitle, options } = useHomeScreen();

  return (
    <HomeScreenView
      smallText={smallText}
      largeText={largeText}
      title={title}
      subtitle={subtitle}
      options={options}
    />
  );
}
