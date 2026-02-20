import { fireEvent, render, screen } from "@testing-library/react-native";
import { ProjectCard } from "../ProjectCard";
import { ProjectCategory } from "@/modules/projects/types/project.types";

const mockProject = {
  id: "shoe-store",
  title: "Shoe Store",
  description: "An e-commerce app",
  category: ProjectCategory.Uiux,
  href: "/projects/shoe-store",
  imageLight: { uri: "https://example.com/light.jpg" },
  imageDark: { uri: "https://example.com/dark.jpg" },
};

describe("ProjectCard", () => {
  it("renders project title and description", () => {
    render(<ProjectCard project={mockProject} />);
    // useUI mock returns translation key; component uses t() || project.title so we see key
    expect(screen.getByText("projects.items.shoe-store.title")).toBeOnTheScreen();
    expect(screen.getByText("projects.items.shoe-store.description")).toBeOnTheScreen();
  });

  it("renders category label from translation key", () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText("projects.categories.uiux")).toBeOnTheScreen();
  });

  it("calls router.push with project href when pressed", () => {
    const { useRouter } = require("expo-router");
    const push = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push,
      replace: jest.fn(),
      back: jest.fn(),
      canGoBack: jest.fn(() => true),
    });

    render(<ProjectCard project={mockProject} />);
    const card = screen.getByRole("button", {
      name: "projects.accessibility.projectCard projects.items.shoe-store.title",
    });
    fireEvent.press(card);

    expect(push).toHaveBeenCalledWith("/projects/shoe-store");
  });

  it("has correct accessibility role and label", () => {
    render(<ProjectCard project={mockProject} />);
    expect(
      screen.getByRole("button", {
        name: "projects.accessibility.projectCard projects.items.shoe-store.title",
      })
    ).toBeOnTheScreen();
  });
});
