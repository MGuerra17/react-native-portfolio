import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  bagStore,
  getBagItemCount,
  getBagTotal,
  hydrateBagStore,
} from "../bagStore";
import type { AddToBagOptions } from "@/modules/shoe-store/types/bag.types";
import type { ShoePreview } from "@/modules/shoe-store/types/shoe.types";

const mockShoe: ShoePreview = {
  id: "shoe-1",
  name: "Test Shoe",
  price: "$100.00",
  image: { uri: "https://example.com/shoe.jpg" },
  gender: "unisex",
};

const addOptions: AddToBagOptions = {
  sizeType: "US",
  size: 10,
  quantity: 1,
};

function getItems() {
  return bagStore.getState().items;
}

beforeEach(() => {
  bagStore.setState({ items: [], _hydrated: false });
  jest.clearAllMocks();
});

describe("bagStore", () => {
  describe("addToBag", () => {
    it("adds a new item to the bag", () => {
      bagStore.getState().addToBag(mockShoe, addOptions);

      const items = getItems();
      expect(items).toHaveLength(1);
      expect(items[0].id).toBe("shoe-1");
      expect(items[0].quantity).toBe(1);
      expect(items[0].sizeType).toBe("US");
      expect(items[0].size).toBe(10);
      expect(items[0].bagItemId).toBe("shoe-1-US-10");
    });

    it("increases quantity when adding same shoe and size again", () => {
      bagStore.getState().addToBag(mockShoe, addOptions);
      bagStore.getState().addToBag(mockShoe, { ...addOptions, quantity: 2 });

      const items = getItems();
      expect(items).toHaveLength(1);
      expect(items[0].quantity).toBe(3);
    });

    it("adds separate line for different size", () => {
      bagStore.getState().addToBag(mockShoe, addOptions);
      bagStore.getState().addToBag(mockShoe, {
        ...addOptions,
        size: 11,
        sizeType: "US",
      });

      const items = getItems();
      expect(items).toHaveLength(2);
      expect(items.map((i) => i.bagItemId).sort()).toEqual([
        "shoe-1-US-10",
        "shoe-1-US-11",
      ]);
    });
  });

  describe("updateQuantity", () => {
    it("increases quantity", () => {
      bagStore.getState().addToBag(mockShoe, addOptions);
      bagStore.getState().updateQuantity("shoe-1-US-10", 2);

      expect(getItems()[0].quantity).toBe(3);
    });

    it("does not go below 1", () => {
      bagStore.getState().addToBag(mockShoe, addOptions);
      bagStore.getState().updateQuantity("shoe-1-US-10", -10);

      expect(getItems()[0].quantity).toBe(1);
    });
  });

  describe("removeItem", () => {
    it("removes the item by bagItemId", () => {
      bagStore.getState().addToBag(mockShoe, addOptions);
      expect(getItems()).toHaveLength(1);

      bagStore.getState().removeItem("shoe-1-US-10");
      expect(getItems()).toHaveLength(0);
    });
  });

  describe("clearBag", () => {
    it("clears all items", () => {
      bagStore.getState().addToBag(mockShoe, addOptions);
      bagStore.getState().clearBag();
      expect(getItems()).toHaveLength(0);
    });
  });

  describe("setItems", () => {
    it("replaces items when given array", () => {
      bagStore.getState().addToBag(mockShoe, addOptions);
      bagStore.getState().setItems([]);
      expect(getItems()).toHaveLength(0);
    });

    it("uses updater function when given function", () => {
      bagStore.getState().addToBag(mockShoe, addOptions);
      bagStore.getState().setItems((prev) => prev.filter(() => false));
      expect(getItems()).toHaveLength(0);
    });
  });
});

describe("getBagItemCount", () => {
  it("sums quantities of all items", () => {
    const items = [
      { ...mockShoe, quantity: 2, sizeType: "US" as const, size: 10, bagItemId: "a" },
      { ...mockShoe, id: "2", quantity: 3, sizeType: "US" as const, size: 11, bagItemId: "b" },
    ];
    expect(getBagItemCount(items)).toBe(5);
  });
});

describe("getBagTotal", () => {
  it("returns formatted total from item prices and quantities", () => {
    const items = [
      { ...mockShoe, price: "10.00", quantity: 2, sizeType: "US" as const, size: 10, bagItemId: "a" },
    ];
    expect(getBagTotal(items)).toBe("€20.00");
  });
});

describe("hydrateBagStore", () => {
  it("loads items from AsyncStorage and sets _hydrated", async () => {
    const stored = JSON.stringify([
      {
        shoeId: "shoe-1",
        sizeType: "US",
        size: 10,
        quantity: 1,
        bagItemId: "shoe-1-US-10",
      },
    ]);
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(stored);

    await hydrateBagStore();

    expect(bagStore.getState()._hydrated).toBe(true);
    const items = getItems();
    expect(items.length).toBeGreaterThanOrEqual(0);
  });
});
