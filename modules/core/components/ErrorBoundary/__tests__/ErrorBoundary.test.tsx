import { fireEvent, render, screen } from "@testing-library/react-native";
import React from "react";
import { Text } from "react-native";
import { ErrorBoundary } from "../ErrorBoundary";

function Thrower({ shouldThrow }: { shouldThrow: boolean }) {
  if (shouldThrow) {
    throw new Error("Test error");
  }
  return null;
}

describe("ErrorBoundary", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders children when there is no error", () => {
    render(
      <ErrorBoundary>
        <Thrower shouldThrow={false} />
      </ErrorBoundary>
    );
    expect(screen.queryByText("Something went wrong")).not.toBeOnTheScreen();
  });

  it("renders default fallback when child throws", () => {
    render(
      <ErrorBoundary>
        <Thrower shouldThrow={true} />
      </ErrorBoundary>
    );
    // useUI mock returns translation key; fallback uses t() so we see the key
    expect(screen.getByText("home.common.error.title")).toBeOnTheScreen();
    expect(screen.getByText("home.common.error.message")).toBeOnTheScreen();
  });

  it("renders custom fallback when provided", () => {
    const fallback = jest.fn((error: Error, reset: () => void) => (
      <Text>{error.message}</Text>
    ));
    render(
      <ErrorBoundary fallback={fallback}>
        <Thrower shouldThrow={true} />
      </ErrorBoundary>
    );
    expect(fallback).toHaveBeenCalled();
    const [error, resetFn] = fallback.mock.calls[0];
    expect(error.message).toBe("Test error");
    expect(typeof resetFn).toBe("function");
  });

  it("reset button clears error and shows children again when child no longer throws", () => {
    let resetFn: () => void;
    const fallback = (_error: Error, reset: () => void) => {
      resetFn = reset;
      return <Text>Custom fallback</Text>;
    };

    const { rerender } = render(
      <ErrorBoundary fallback={fallback}>
        <Thrower shouldThrow={true} />
      </ErrorBoundary>
    );
    expect(screen.getByText("Custom fallback")).toBeOnTheScreen();

    resetFn!();
    rerender(
      <ErrorBoundary fallback={fallback}>
        <Thrower shouldThrow={false} />
      </ErrorBoundary>
    );

    expect(screen.queryByText("Custom fallback")).not.toBeOnTheScreen();
  });

  it("Go Home button calls router.replace with /", () => {
    const replace = jest.fn();
    const { useRouter } = require("expo-router");
    (useRouter as jest.Mock).mockReturnValue({
      replace,
      push: jest.fn(),
      back: jest.fn(),
      canGoBack: jest.fn(() => true),
    });

    render(
      <ErrorBoundary>
        <Thrower shouldThrow={true} />
      </ErrorBoundary>
    );

    const goHomeButton = screen.getByRole("button", {
      name: "home.common.error.goHome",
    });
    fireEvent.press(goHomeButton);

    expect(replace).toHaveBeenCalledWith("/");
  });
});
