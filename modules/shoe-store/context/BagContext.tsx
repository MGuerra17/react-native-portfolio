import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { BAG_STORAGE_KEY } from "@/modules/shoe-store/constants/storage";
import type { AddToBagOptions, BagItem, StoredBagItem } from "@/modules/shoe-store/types/bag.types";
import type { ShoePreview } from "@/modules/shoe-store/types/shoe.types";
import {
  parseStoredBag,
  rehydrateBagItems,
} from "@/modules/shoe-store/utils/bag";
import { formatPrice, parsePrice } from "@/modules/shoe-store/utils/price";

type BagContextValue = {
  items: BagItem[];
  itemCount: number;
  total: string;
  addToBag: (shoe: ShoePreview, options: AddToBagOptions) => void;
  updateQuantity: (bagItemId: string, delta: number) => void;
  removeItem: (bagItemId: string) => void;
  clearBag: () => void;
};

const BagContext = createContext<BagContextValue | null>(null);

export function BagProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<BagItem[]>([]);
  const hasHydrated = useRef(false);

  useEffect(() => {
    AsyncStorage.getItem(BAG_STORAGE_KEY).then((stored) => {
      const storedItems = parseStoredBag(stored);
      setItems(rehydrateBagItems(storedItems));
      hasHydrated.current = true;
    });
  }, []);

  useEffect(() => {
    if (!hasHydrated.current) return;
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
  }, [items]);

  const updateQuantity = useCallback((bagItemId: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.bagItemId === bagItemId
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item,
      ),
    );
  }, []);

  const removeItem = useCallback((bagItemId: string) => {
    setItems((prev) => prev.filter((item) => item.bagItemId !== bagItemId));
  }, []);

  const clearBag = useCallback(() => {
    setItems([]);
  }, []);

  const addToBag = useCallback(
    (shoe: ShoePreview, options: AddToBagOptions) => {
      const quantity = options.quantity ?? 1;
      const { sizeType, size } = options;
      const bagItemId = `${shoe.id}-${sizeType}-${size}`;
      setItems((prev) => {
        const existing = prev.find((item) => item.bagItemId === bagItemId);
        if (existing) {
          return prev.map((item) =>
            item.bagItemId === bagItemId
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          );
        }
        return [
          ...prev,
          {
            ...shoe,
            quantity,
            sizeType,
            size,
            bagItemId,
          },
        ];
      });
    },
    [],
  );

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );

  const total = useMemo(() => {
    const value = items.reduce(
      (sum, item) => sum + parsePrice(item.price) * item.quantity,
      0,
    );
    return formatPrice(value);
  }, [items]);

  const value: BagContextValue = useMemo(
    () => ({
      items,
      itemCount,
      total,
      addToBag,
      updateQuantity,
      removeItem,
      clearBag,
    }),
    [items, itemCount, total, addToBag, updateQuantity, removeItem, clearBag],
  );

  return <BagContext.Provider value={value}>{children}</BagContext.Provider>;
}

export function useBag(): BagContextValue {
  const ctx = useContext(BagContext);
  if (!ctx) {
    throw new Error("useBag must be used within BagProvider");
  }
  return ctx;
}
