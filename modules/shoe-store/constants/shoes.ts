import type { ShoeDetail, ShoePreview } from "@/modules/shoe-store/types/shoe.types";

const shoeDetails: ShoeDetail[] = [
  {
    id: "1",
    name: "Run Flow 11",
    price: "€129.99",
    image: require("@/assets/images/shoe-store/shoes/shoe-1-1.png"),
    images: [
      require("@/assets/images/shoe-store/shoes/shoe-1-1.png"),
      require("@/assets/images/shoe-store/shoes/shoe-1-2.png"),
      require("@/assets/images/shoe-store/shoes/shoe-1-3.png"),
      require("@/assets/images/shoe-store/shoes/shoe-1-4.png"),
      require("@/assets/images/shoe-store/shoes/shoe-1-5.png"),
    ],
    gender: "men",
    rating: 4.5,
    sizesUS: [
      { size: 7, stock: 2 },
      { size: 8, stock: 0 },
      { size: 9, stock: 5 },
      { size: 10, stock: 3 },
      { size: 11, stock: 0 },
    ],
    sizesUK: [
      { size: 6, stock: 2 },
      { size: 7, stock: 0 },
      { size: 8, stock: 5 },
      { size: 9, stock: 3 },
      { size: 10, stock: 0 },
    ],
    sizesEU: [
      { size: 40, stock: 2 },
      { size: 41, stock: 0 },
      { size: 42, stock: 5 },
      { size: 43, stock: 3 },
      { size: 44, stock: 0 },
    ],
    description: "shoeStore.shoes.detail.1.description",
    deliveryAndReturnsPolicy: "shoeStore.shoes.deliveryPolicy",
    reviews: [
      {
        id: "r1",
        author: "Alex M.",
        rating: 5,
        comment: "shoeStore.shoes.reviews.r1",
        date: "Jan 15, 2025",
      },
      {
        id: "r2",
        author: "Jordan K.",
        rating: 4,
        comment: "shoeStore.shoes.reviews.r2",
        date: "Jan 8, 2025",
      },
      {
        id: "r3",
        author: "Sam P.",
        rating: 5,
        comment: "shoeStore.shoes.reviews.r3",
        date: "Dec 28, 2024",
      },
      {
        id: "r1b",
        author: "Morgan R.",
        rating: 4,
        comment: "shoeStore.shoes.reviews.r1b",
        date: "Dec 15, 2024",
      },
    ],
  },
  {
    id: "2",
    name: "Trail Juniper 3",
    price: "€149.99",
    image: require("@/assets/images/shoe-store/shoes/shoe-2-1.png"),
    images: [
      require("@/assets/images/shoe-store/shoes/shoe-2-1.png"),
      require("@/assets/images/shoe-store/shoes/shoe-2-2.png"),
      require("@/assets/images/shoe-store/shoes/shoe-2-3.png"),
      require("@/assets/images/shoe-store/shoes/shoe-2-4.png"),
      require("@/assets/images/shoe-store/shoes/shoe-2-5.png"),
    ],
    gender: "unisex",
    rating: 4.8,
    sizesUS: [
      { size: 7, stock: 1 },
      { size: 8, stock: 4 },
      { size: 9, stock: 0 },
      { size: 10, stock: 2 },
    ],
    sizesUK: [
      { size: 6, stock: 1 },
      { size: 7, stock: 4 },
      { size: 8, stock: 0 },
      { size: 9, stock: 2 },
    ],
    sizesEU: [
      { size: 40, stock: 1 },
      { size: 41, stock: 4 },
      { size: 42, stock: 0 },
      { size: 43, stock: 2 },
    ],
    description: "shoeStore.shoes.detail.2.description",
    deliveryAndReturnsPolicy: "shoeStore.shoes.deliveryPolicy",
    reviews: [
      {
        id: "r4",
        author: "Casey L.",
        rating: 5,
        comment: "shoeStore.shoes.reviews.r4",
        date: "Feb 1, 2025",
      },
      {
        id: "r5",
        author: "Riley T.",
        rating: 4,
        comment: "shoeStore.shoes.reviews.r5",
        date: "Jan 22, 2025",
      },
      {
        id: "r5b",
        author: "Jamie W.",
        rating: 5,
        comment: "shoeStore.shoes.reviews.r5b",
        date: "Jan 10, 2025",
      },
      {
        id: "r5c",
        author: "Taylor S.",
        rating: 4,
        comment: "shoeStore.shoes.reviews.r5c",
        date: "Jan 2, 2025",
      },
    ],
  },
  {
    id: "3",
    name: "Zoom Roam",
    price: "€219.99",
    image: require("@/assets/images/shoe-store/shoes/shoe-3-1.png"),
    images: [
      require("@/assets/images/shoe-store/shoes/shoe-3-1.png"),
      require("@/assets/images/shoe-store/shoes/shoe-3-2.png"),
      require("@/assets/images/shoe-store/shoes/shoe-3-3.png"),
      require("@/assets/images/shoe-store/shoes/shoe-3-4.png"),
      require("@/assets/images/shoe-store/shoes/shoe-3-5.png"),
    ],
    gender: "women",
    rating: 4.6,
    sizesUS: [
      { size: 8, stock: 0 },
      { size: 9, stock: 3 },
      { size: 10, stock: 5 },
    ],
    sizesUK: [
      { size: 7, stock: 0 },
      { size: 8, stock: 3 },
      { size: 9, stock: 5 },
    ],
    sizesEU: [
      { size: 41, stock: 0 },
      { size: 42, stock: 3 },
      { size: 43, stock: 5 },
    ],
    description: "shoeStore.shoes.detail.3.description",
    deliveryAndReturnsPolicy: "shoeStore.shoes.deliveryPolicy",
    reviews: [
      {
        id: "r6",
        author: "Claire D.",
        rating: 5,
        comment: "shoeStore.shoes.reviews.r6",
        date: "Jan 20, 2025",
      },
      {
        id: "r7",
        author: "Pat M.",
        rating: 4,
        comment: "shoeStore.shoes.reviews.r7",
        date: "Jan 5, 2025",
      },
    ],
  },
  {
    id: "4",
    name: "Pegasus 41",
    price: "€129.99",
    image: require("@/assets/images/shoe-store/shoes/shoe-4-1.png"),
    images: [
      require("@/assets/images/shoe-store/shoes/shoe-4-1.png"),
      require("@/assets/images/shoe-store/shoes/shoe-4-2.png"),
      require("@/assets/images/shoe-store/shoes/shoe-4-3.png"),
      require("@/assets/images/shoe-store/shoes/shoe-4-4.png"),
      require("@/assets/images/shoe-store/shoes/shoe-4-5.png"),
    ],
    gender: "women",
    rating: 4.4,
    sizesUS: [
      { size: 6, stock: 2 },
      { size: 7, stock: 0 },
      { size: 8, stock: 4 },
    ],
    sizesUK: [
      { size: 5, stock: 2 },
      { size: 6, stock: 0 },
      { size: 7, stock: 4 },
    ],
    sizesEU: [
      { size: 39, stock: 2 },
      { size: 40, stock: 0 },
      { size: 41, stock: 4 },
    ],
    description: "shoeStore.shoes.detail.4.description",
    deliveryAndReturnsPolicy: "shoeStore.shoes.deliveryPolicy",
    reviews: [
      {
        id: "r8",
        author: "Quinn L.",
        rating: 4,
        comment: "shoeStore.shoes.reviews.r8",
        date: "Jan 18, 2025",
      },
      {
        id: "r9",
        author: "Avery K.",
        rating: 5,
        comment: "shoeStore.shoes.reviews.r9",
        date: "Jan 12, 2025",
      },
    ],
  },
  {
    id: "5",
    name: "Alphafly 3",
    price: "€319.99",
    image: require("@/assets/images/shoe-store/shoes/shoe-5-1.png"),
    images: [
      require("@/assets/images/shoe-store/shoes/shoe-5-1.png"),
      require("@/assets/images/shoe-store/shoes/shoe-5-2.png"),
      require("@/assets/images/shoe-store/shoes/shoe-5-3.png"),
      require("@/assets/images/shoe-store/shoes/shoe-5-4.png"),
      require("@/assets/images/shoe-store/shoes/shoe-5-5.png"),
    ],
    gender: "women",
    rating: 4.7,
    sizesUS: [
      { size: 8, stock: 1 },
      { size: 9, stock: 0 },
      { size: 10, stock: 2 },
    ],
    sizesUK: [
      { size: 7, stock: 1 },
      { size: 8, stock: 0 },
      { size: 9, stock: 2 },
    ],
    sizesEU: [
      { size: 41, stock: 1 },
      { size: 42, stock: 0 },
      { size: 43, stock: 2 },
    ],
    description: "shoeStore.shoes.detail.5.description",
    deliveryAndReturnsPolicy: "shoeStore.shoes.deliveryPolicy",
    reviews: [
      {
        id: "r10",
        author: "Jordan B.",
        rating: 5,
        comment: "shoeStore.shoes.reviews.r10",
        date: "Feb 2, 2025",
      },
      {
        id: "r11",
        author: "Skyler N.",
        rating: 4,
        comment: "shoeStore.shoes.reviews.r11",
        date: "Jan 25, 2025",
      },
    ],
  },
];

export function getShoesPreview(): ShoePreview[] {
  return shoeDetails.map(({ id, name, price, image, gender }) => ({
    id,
    name,
    price,
    image,
    gender,
  }));
}

export function getShoeDetailById(id: string): ShoeDetail | undefined {
  return shoeDetails.find((shoe) => shoe.id === id);
}

/**
 * Searches shoes by query (name or price).
 * Represents the logic that would run on the backend.
 */
export function searchShoesPreview(query: string): ShoePreview[] {
  const previews = getShoesPreview();
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return previews.filter(
    (shoe) =>
      shoe.name.toLowerCase().includes(q) ||
      shoe.price.toLowerCase().includes(q)
  );
}

/**
 * Returns shoe previews for the given IDs, preserving order.
 */
export function getShoesPreviewByIds(ids: string[]): ShoePreview[] {
  const previews = getShoesPreview();
  const byId = new Map(previews.map((p) => [p.id, p]));
  return ids
    .map((id) => byId.get(id))
    .filter((s): s is ShoePreview => s != null);
}
