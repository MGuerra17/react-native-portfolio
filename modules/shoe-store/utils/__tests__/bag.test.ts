import {
  isStoredBagItem,
  parseStoredBag,
} from "../bag";

describe("isStoredBagItem", () => {
  it("returns true for valid StoredBagItem", () => {
    expect(
      isStoredBagItem({
        shoeId: "s1",
        bagItemId: "s1-US-10",
        quantity: 1,
        size: 10,
        sizeType: "US",
      })
    ).toBe(true);
  });

  it("returns false for null or non-object", () => {
    expect(isStoredBagItem(null)).toBe(false);
    expect(isStoredBagItem(undefined)).toBe(false);
    expect(isStoredBagItem("string")).toBe(false);
    expect(isStoredBagItem([])).toBe(false);
  });

  it("returns false when sizeType is invalid", () => {
    expect(
      isStoredBagItem({
        shoeId: "s1",
        bagItemId: "s1-US-10",
        quantity: 1,
        size: 10,
        sizeType: "INVALID",
      })
    ).toBe(false);
  });

  it("returns false when required fields are missing or wrong type", () => {
    expect(isStoredBagItem({})).toBe(false);
    expect(
      isStoredBagItem({
        shoeId: "s1",
        bagItemId: "s1-US-10",
        quantity: "1",
        size: 10,
        sizeType: "US",
      })
    ).toBe(false);
  });
});

describe("parseStoredBag", () => {
  it("returns empty array for null or invalid JSON", () => {
    expect(parseStoredBag(null)).toEqual([]);
    expect(parseStoredBag("")).toEqual([]);
    expect(parseStoredBag("not json")).toEqual([]);
  });

  it("returns empty array when stored is not an array", () => {
    expect(parseStoredBag("{}")).toEqual([]);
    expect(parseStoredBag("123")).toEqual([]);
  });

  it("parses and filters valid StoredBagItems", () => {
    const stored = JSON.stringify([
      {
        shoeId: "s1",
        bagItemId: "s1-US-10",
        quantity: 1,
        size: 10,
        sizeType: "US",
      },
      { invalid: "item" },
    ]);
    const result = parseStoredBag(stored);
    expect(result).toHaveLength(1);
    expect(result[0].shoeId).toBe("s1");
    expect(result[0].sizeType).toBe("US");
  });
});
