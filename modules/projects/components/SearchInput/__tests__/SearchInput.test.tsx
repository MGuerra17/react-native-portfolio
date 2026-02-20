import { fireEvent, render, screen } from "@testing-library/react-native";
import { SearchInput } from "../SearchInput";

describe("SearchInput", () => {
  it("renders with value and default placeholder from t()", () => {
    render(<SearchInput value="test" onChangeText={jest.fn()} />);
    const input = screen.getByDisplayValue("test");
    expect(input).toBeOnTheScreen();
    expect(screen.getByPlaceholderText("projects.search.placeholder")).toBeOnTheScreen();
  });

  it("calls onChangeText when text changes", () => {
    const onChangeText = jest.fn();
    render(<SearchInput value="" onChangeText={onChangeText} />);
    const input = screen.getByPlaceholderText("projects.search.placeholder");
    fireEvent.changeText(input, "new query");
    expect(onChangeText).toHaveBeenCalledWith("new query");
  });

  it("uses custom placeholder when provided", () => {
    render(
      <SearchInput
        value=""
        onChangeText={jest.fn()}
        placeholder="Search projects..."
      />
    );
    expect(screen.getByPlaceholderText("Search projects...")).toBeOnTheScreen();
  });
});
