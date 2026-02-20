import { formatPrice, parsePrice } from "../price";

describe("parsePrice", () => {
  it("extracts number from price string with currency symbol", () => {
    expect(parsePrice("$10.00")).toBe(10);
    expect(parsePrice("€99.99")).toBe(99.99);
  });

  it("handles comma as decimal separator", () => {
    expect(parsePrice("10,50")).toBe(10.5);
  });

  it("strips spaces", () => {
    expect(parsePrice("  20.00  ")).toBe(20);
  });

  it("returns 0 for non-numeric string", () => {
    expect(parsePrice("free")).toBe(0);
    expect(parsePrice("")).toBe(0);
  });
});

describe("formatPrice", () => {
  it("formats number as euro string with two decimals", () => {
    expect(formatPrice(10)).toBe("€10.00");
    expect(formatPrice(99.99)).toBe("€99.99");
  });
});
