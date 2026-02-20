import {
  getProjectsFiltered,
} from "@/modules/projects/constants/projects";
import type { Project } from "@/modules/projects/types/project.types";

const SIMULATED_FETCH_DELAY_MS = 500;
const SIMULATED_REFRESH_DELAY_MS = 300;

/**
 * Fetches projects from the data source with optional filters.
 * Simulates GET /api/projects?q=...&category=...
 *
 * Future implementation example:
 * ```typescript
 * export async function fetchProjects(
 *   query?: string,
 *   category?: string | null,
 * ): Promise<Project[]> {
 *   const params = new URLSearchParams();
 *   if (query) params.set('q', query);
 *   if (category) params.set('category', category);
 *   const response = await fetch(`/api/projects?${params}`);
 *   if (!response.ok) throw new Error('Failed to fetch projects');
 *   return response.json();
 * }
 * ```
 */
export async function fetchProjects(
  query?: string,
  category?: string | null
): Promise<Project[]> {
  await new Promise((resolve) =>
    setTimeout(resolve, SIMULATED_FETCH_DELAY_MS)
  );
  return getProjectsFiltered(query, category);
}

/**
 * Refreshes projects data with optional filters.
 * Simulates a faster refresh operation.
 */
export async function refreshProjects(
  query?: string,
  category?: string | null
): Promise<Project[]> {
  await new Promise((resolve) =>
    setTimeout(resolve, SIMULATED_REFRESH_DELAY_MS)
  );
  return getProjectsFiltered(query, category);
}
