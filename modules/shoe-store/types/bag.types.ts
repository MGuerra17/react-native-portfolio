import type { ShoePreview } from "./shoe.types";

export type SizeType = "US" | "UK" | "EU";

export type AddToBagOptions = {
  quantity?: number;
  sizeType: SizeType;
  size: number;
};

export type BagItem = ShoePreview & {
  quantity: number;
  sizeType: SizeType;
  size: number;
  /** Unique id for this bag line (same product + size). Used for updateQuantity/removeItem. */
  bagItemId: string;
};

/** Serializable shape for persisting bag items (no image asset). */
export type StoredBagItem = {
  shoeId: string;
  sizeType: SizeType;
  size: number;
  quantity: number;
  bagItemId: string;
};
