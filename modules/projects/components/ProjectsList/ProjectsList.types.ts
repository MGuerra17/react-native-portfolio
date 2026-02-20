import type { Project } from "@/modules/projects/types/project.types";

export type ProjectsListProps = {
  projects: Project[];
  isLoading?: boolean;
  isRefreshing?: boolean;
  onRefresh?: () => Promise<void>;
};
