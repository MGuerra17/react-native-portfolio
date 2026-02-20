import AsyncStorage from "@react-native-async-storage/async-storage";
import { useStore } from "zustand/react";
import { createStore } from "zustand/vanilla";
import { BAG_STORAGE_KEY } from "@/modules/shoe-store/constants/storage";
import type {
  AddToBagOptions,
  BagItem,
  StoredBagItem,
} from "@/modules/shoe-store/types/bag.types";
import type { ShoePreview } from "@/modules/shoe-store/types/shoe.types";
import {
  parseStoredBag,
  rehydrateBagItems,
} from "@/modules/shoe-store/utils/bag";
import { formatPrice, parsePrice } from "@/modules/shoe-store/utils/price";

export type BagState = {
  items: BagItem[];
  _hydrated: boolean;
};

export type BagActions = {
  setItems: (items: BagItem[] | ((prev: BagItem[]) => BagItem[])) => void;
  addToBag: (shoe: ShoePreview, options: AddToBagOptions) => void;
  updateQuantity: (bagItemId: string, delta: number) => void;
  removeItem: (bagItemId: string) => void;
  clearBag: () => void;
};

export type BagStore = BagState & BagActions;

export const bagStore = createStore<BagStore>((set) => ({
  items: [],
  _hydrated: false,

  setItems: (itemsOrUpdater) => {
    set((state) => ({
      items:
        typeof itemsOrUpdater === "function"
          ? itemsOrUpdater(state.items)
          : itemsOrUpdater,
    }));
  },

  addToBag: (shoe, options) => {
    const quantity = options.quantity ?? 1;
    const { sizeType, size } = options;
    const bagItemId = `${shoe.id}-${sizeType}-${size}`;
    set((state) => {
      const existing = state.items.find((item) => item.bagItemId === bagItemId);
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.bagItemId === bagItemId
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          ),
        };
      }
      return {
        items: [
          ...state.items,
          {
            ...shoe,
            quantity,
            sizeType,
            size,
            bagItemId,
          },
        ],
      };
    });
  },

  updateQuantity: (bagItemId, delta) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.bagItemId === bagItemId
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item,
      ),
    }));
  },

  removeItem: (bagItemId) => {
    set((state) => ({
      items: state.items.filter((item) => item.bagItemId !== bagItemId),
    }));
  },

  clearBag: () => set({ items: [] }),
}));

function persistBagItems(items: BagItem[]) {
  const stored: StoredBagItem[] = items.map((item) => ({
    shoeId: item.id,
    sizeType: item.sizeType,
    size: item.size,
    quantity: item.quantity,
    bagItemId: item.bagItemId,
  }));
  AsyncStorage.setItem(BAG_STORAGE_KEY, JSON.stringify(stored)).catch(
    (error) => {
      if (__DEV__) {
        console.warn("Failed to persist bag to AsyncStorage:", error);
      }
    },
  );
}

bagStore.subscribe((state) => {
  if (state._hydrated && state.items !== undefined) {
    persistBagItems(state.items);
  }
});

export async function hydrateBagStore(): Promise<void> {
  const stored = await AsyncStorage.getItem(BAG_STORAGE_KEY);
  const storedItems = parseStoredBag(stored);
  bagStore.setState({
    items: rehydrateBagItems(storedItems),
    _hydrated: true,
  });
}

export function getBagItemCount(items: BagItem[]): number {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}

export function getBagTotal(items: BagItem[]): string {
  const value = items.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0,
  );
  return formatPrice(value);
}

export function useBagStore<T>(selector: (state: BagStore) => T): T {
  return useStore(bagStore, selector);
}
