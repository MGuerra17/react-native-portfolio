import { fireEvent, render, screen } from "@testing-library/react-native";
import { FilterButton } from "../FilterButton";

describe("FilterButton", () => {
  it("renders and calls onPress when pressed", () => {
    const onPress = jest.fn();
    render(<FilterButton onPress={onPress} />);

    const button = screen.getByRole("button", {
      name: "projects.filter.filterButton",
    });
    fireEvent.press(button);
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it("shows badge with count when activeFilterCount > 0", () => {
    render(<FilterButton onPress={jest.fn()} activeFilterCount={3} />);
    expect(screen.getByText("3")).toBeOnTheScreen();
    expect(
      screen.getByRole("button", {
        name: "projects.filter.filterButtonWithCount 3",
      })
    ).toBeOnTheScreen();
  });

  it("shows 9+ when activeFilterCount > 9", () => {
    render(<FilterButton onPress={jest.fn()} activeFilterCount={12} />);
    expect(screen.getByText("9+")).toBeOnTheScreen();
  });
});
