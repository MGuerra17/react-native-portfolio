import { fireEvent, render, screen } from "@testing-library/react-native";
import { Text } from "react-native";
import { NavigationOption } from "../NavigationOption";

describe("NavigationOption", () => {
  it("renders title and subtitle", () => {
    render(
      <NavigationOption
        onPress={jest.fn()}
        icon={<Text>Icon</Text>}
        title="Projects"
        subtitle="View all projects"
      />
    );
    expect(screen.getByText("Projects")).toBeOnTheScreen();
    expect(screen.getByText("View all projects")).toBeOnTheScreen();
  });

  it("calls onPress when pressed", () => {
    const onPress = jest.fn();
    render(
      <NavigationOption
        onPress={onPress}
        icon={<Text>Icon</Text>}
        title="Projects"
        subtitle="View all"
      />
    );
    const button = screen.getByRole("button", { name: "Projects: View all" });
    fireEvent.press(button);
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it("uses projects accessibility label when title matches projects translation key", () => {
    render(
      <NavigationOption
        onPress={jest.fn()}
        icon={<Text>Icon</Text>}
        title="home.navigation.projects.title"
        subtitle="View all"
      />
    );
    expect(
      screen.getByRole("button", { name: "home.accessibility.navigateToProjects" })
    ).toBeOnTheScreen();
  });

  it("uses about accessibility label when title matches about translation key", () => {
    render(
      <NavigationOption
        onPress={jest.fn()}
        icon={<Text>Icon</Text>}
        title="home.navigation.about.title"
        subtitle="View all"
      />
    );
    expect(
      screen.getByRole("button", { name: "home.accessibility.navigateToAbout" })
    ).toBeOnTheScreen();
  });
});
