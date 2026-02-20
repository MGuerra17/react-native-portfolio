import { fireEvent, render, screen } from "@testing-library/react-native";
import { Button } from "../Button";

describe("Button", () => {
  it("renders title and calls onPress when pressed", () => {
    const onPress = jest.fn();
    render(<Button title="Submit" onPress={onPress} />);

    const button = screen.getByRole("button", { name: "Submit" });
    expect(button).toBeOnTheScreen();

    fireEvent.press(button);
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it("uses accessibilityLabel when provided", () => {
    render(
      <Button
        title="Submit"
        onPress={jest.fn()}
        accessibilityLabel="Send form"
      />
    );
    expect(screen.getByRole("button", { name: "Send form" })).toBeOnTheScreen();
  });

  it("falls back to title as accessibility label when accessibilityLabel is not provided", () => {
    render(<Button title="Click me" onPress={jest.fn()} />);
    expect(screen.getByRole("button", { name: "Click me" })).toBeOnTheScreen();
  });

  it("does not call onPress when disabled", () => {
    const onPress = jest.fn();
    render(<Button title="Submit" onPress={onPress} disabled />);

    const button = screen.getByRole("button", { name: "Submit" });
    fireEvent.press(button);
    expect(onPress).not.toHaveBeenCalled();
  });

  it("renders with primary variant by default", () => {
    render(<Button title="Primary" onPress={jest.fn()} />);
    expect(screen.getByRole("button", { name: "Primary" })).toBeOnTheScreen();
  });

  it("renders with secondary variant", () => {
    render(
      <Button title="Secondary" onPress={jest.fn()} variant="secondary" />
    );
    expect(screen.getByRole("button", { name: "Secondary" })).toBeOnTheScreen();
  });

  it("renders with outline variant", () => {
    render(<Button title="Outline" onPress={jest.fn()} variant="outline" />);
    expect(screen.getByRole("button", { name: "Outline" })).toBeOnTheScreen();
  });

  it("renders with ghost variant", () => {
    render(<Button title="Ghost" onPress={jest.fn()} variant="ghost" />);
    expect(screen.getByRole("button", { name: "Ghost" })).toBeOnTheScreen();
  });
});
