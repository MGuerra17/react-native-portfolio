export const shoeStoreEn = {
  bag: {
    title: "My Bag",
    oneItem: "1 Item",
    items: "Items",
    goBack: "Go back",
    empty: "Your bag is empty",
    total: "Total",
    checkout: "Checkout",
    checkoutSuccess: "Order completed successfully!",
    finish: "Finish",
    removeItem: "Remove item from bag",
    bag: "Bag",
    bagWithItems: "Bag with {count} items",
  },
  home: {
    sectionTitle: "Shoes",
  },
  common: {
    goBack: "Go back",
    search: "Search",
    closeSearch: "Close search",
    searchFor: "Search for {query}",
    decreaseQuantity: "Decrease quantity",
    increaseQuantity: "Increase quantity",
    addToFavorites: "Add to favorites",
    removeFromFavorites: "Remove from favorites",
    filter: "Filter",
    filterWithCount: "Filter ({count})",
    shoeImage: "Shoe image",
    shoeImageNumber: "Shoe image {number} of {total}",
    carousel: "Product images carousel",
  },
  search: {
    placeholder: "Search shoes…",
    recentTitle: "Recent",
    recentSearches: "Recent searches",
    noRecentSearches: "No recent searches",
    noResults: "No results found",
  },
  filter: {
    categoryLabel: "Gender",
    priceLabel: "Price",
    all: "All",
    men: "Men",
    women: "Women",
    unisex: "Unisex",
    apply: "Apply",
    cancel: "Cancel",
    reset: "Reset",
  },
  shoeDetail: {
    addToFavorites: "Add to favorites",
    removeFromFavorites: "Remove from favorites",
    addToBag: "Add to bag",
    addToBagButton: "Add to Bag",
    alreadyInBag: "Already in bag",
    selectSize: "Select size",
    description: "Description",
    deliveryReturns: "Delivery & returns",
    reviews: "Reviews",
    size: "Size",
    sizeTypeUS: "US",
    sizeTypeUK: "UK",
    sizeTypeEU: "EU",
    sizeTypeLabel: "Size type",
    outOfStock: "out of stock",
    noReviews: "This shoe has no reviews yet.",
    moreReviews: "More Reviews",
    error: {
      title: "Shoe not found",
      message: "The shoe you're looking for doesn't exist or has been removed.",
      goBack: "Go Back",
      goHome: "Go to Home",
    },
  },
  shoes: {
    deliveryPolicy:
      "Free delivery on orders over €50. Standard delivery 3-5 business days. Returns accepted within 30 days in original condition.",
    detail: {
      "1": {
        description:
          "Versatile road running shoe with responsive cushioning. Built for daily runs and all-day comfort. The Run Flow 11 delivers a smooth ride whether you're logging miles or running errands.",
      },
      "2": {
        description:
          "Trail-ready design with reliable traction and cushioning for off-road runs and outdoor adventures. The Trail Juniper 3 handles mud, rocks and roots while staying comfortable mile after mile.",
      },
      "3": {
        description:
          "Smooth ride for running and everyday wear. The Zoom Roam combines responsive cushioning with a versatile design that works from the road to the café. Built for women who want one shoe that does it all.",
      },
      "4": {
        description:
          "Reliable neutral running shoe with responsive cushioning. The Pegasus 41 is a training favorite for daily miles, tempo runs and long efforts. Designed for women who want a balanced, durable ride.",
      },
      "5": {
        description:
          "Engineered for race day. The Alphafly 3 is lightweight, responsive and built for speed. Ideal for marathon and half-marathon racing, with a plate and Zoom Air for maximum energy return. For women who are ready to push the pace.",
      },
    },
    reviews: {
      r1: "The Run Flow 11 is my go-to for daily runs. Cushioning is spot on and they're true to size. Best value in the lineup.",
      r2: "Great road shoe. Took a few runs to break in but now they feel fantastic. Holds up well on pavement.",
      r3: "Perfect for guys who want one shoe for training and everyday. Comfortable and durable. Highly recommend.",
      r1b: "Solid everyday runner. Comfortable for long runs and walking. True to size.",
      r4: "Best trail shoe I've tried. Grip is incredible on wet rocks and roots. Perfect for mixed terrain.",
      r5: "Great for trail running and light hiking. Slightly narrow—consider half size up if you like a roomy toe box.",
      r5b: "Trail Juniper 3 is a beast on the trails. Cushioned enough for long days, agile enough for technical sections.",
      r5c: "Works for both trail runs and everyday wear. True to size and holds up well in all conditions.",
      r6: "Love my Zoom Roam—perfect for morning runs and then all day. Cushiony and so easy to style.",
      r7: "Really comfortable and the clean look goes with everything. Great pick for women who run and want one versatile shoe.",
      r8: "Peg 41 is my daily trainer. Cushioning is just right—not too soft, not too firm. Great for building mileage.",
      r9: "Best Pegasus yet. I use them for easy runs and long runs. True to size and my feet feel great after 20K.",
      r10: "Wore the Alphafly 3 for my marathon PB. Unreal pop off the ground and they stayed comfortable the whole way. Worth every euro.",
      r11: "Fast and light. True to size. I use them for half marathons and key workouts. My legs feel less beat up than in other racers.",
    },
  },
} as const;
