import {
  ProjectCategory,
  type Project,
} from "@/modules/projects/types/project.types";

export function getProjects(): Project[] {
  return [
    {
      id: "shoe-store",
      title: "Shoe Store",
      description:
        "Mobile app to browse shoes with filters, search, product detail and shopping bag.",
      category: ProjectCategory.Uiux,
      href: "/projects/shoe-store",
      imageLight: require("@/assets/images/shoe-store/cover-light.png"),
      imageDark: require("@/assets/images/shoe-store/cover-dark.png"),
    },
  ];
}

/**
 * Filters projects by query and category.
 * Represents the logic that would run on the backend.
 */
export function getProjectsFiltered(
  query?: string,
  category?: string | null,
): Project[] {
  let filtered = [...getProjects()];

  if (category) {
    filtered = filtered.filter((project) => project.category === category);
  }

  if (query?.trim()) {
    const q = query.trim().toLowerCase();
    filtered = filtered.filter((project) =>
      project.title.toLowerCase().includes(q),
    );
  }

  return filtered;
}
