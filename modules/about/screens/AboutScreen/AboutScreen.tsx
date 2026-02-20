import { useAboutScreen } from "@/modules/about/hooks/useAboutScreen";
import { AboutScreenView } from "./AboutScreenView";

export function AboutScreen() {
  const aboutScreenProps = useAboutScreen();

  return <AboutScreenView {...aboutScreenProps} />;
}
