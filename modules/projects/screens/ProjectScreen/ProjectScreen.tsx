import { useProjectScreen } from "@/modules/projects/hooks/useProjectScreen";
import { ProjectScreenView } from "./ProjectScreenView";

export function ProjectScreen() {
  const projectScreenProps = useProjectScreen();

  return <ProjectScreenView {...projectScreenProps} />;
}
