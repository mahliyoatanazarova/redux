import { createSlice } from '@reduxjs/toolkit';

const initialProducts = [
  {
    id: 1,
    name: "iPhone 16 Pro",
    desc: "256 GB • Natural Titanium",
    price: 11999000,
    rating: 4.9,
    reviews: 124,
    category: "iPhone",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&q=80",
    badge: "Bestseller",
    isNew: true,
    condition: "Yangi"
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    desc: "256 GB • Phantom Violet",
    price: 7499000,
    rating: 4.8,
    reviews: 98,
    category: "Samsung",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&q=80",
    condition: "Yangi"
  },
  {
    id: 3,
    name: "Xiaomi 14",
    desc: "256 GB • Jade Green",
    price: 6999000,
    rating: 4.7,
    reviews: 70,
    category: "Xiaomi",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&q=80",
    condition: "Yangi"
  },
  {
    id: 4,
    name: "iPhone 15",
    desc: "128 GB • Pink",
    price: 8499000,
    rating: 4.6,
    reviews: 112,
    category: "iPhone",
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500&q=80",
    condition: "Yangi"
  },
  {
    id: 5,
    name: "Galaxy A55",
    desc: "128 GB • Awesome Iceblue",
    price: 4299000,
    rating: 4.5,
    reviews: 84,
    category: "Samsung",
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500&q=80",
    condition: "Aksiya"
  },
  {
    id: 6,
    name: "Redmi Note 13",
    desc: "256 GB • Ocean Blue",
    price: 3199000,
    rating: 4.4,
    reviews: 52,
    category: "Xiaomi",
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500&q=80",
    condition: "Yangi"
  },
  {
    id: 7,
    name: "realme 12",
    desc: "128 GB • Cream",
    price: 2799000,
    rating: 4.3,
    reviews: 41,
    category: "Realme",
    image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=500&q=80",
    condition: "Aksiya"
  },
  {
    id: 8,
    name: "Google Pixel 8",
    desc: "128 GB • Hazel",
    price: 5999000,
    rating: 4.2,
    reviews: 36,
    category: "Google",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&q=80",
    condition: "Yangi"
  }
];

const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    products: initialProducts,
    cart: [],
    wishlist: [],
    searchQuery: '',
    selectedCategory: 'Barchasi',
    maxPrice: 15000000,
    isCartOpen: false,
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    toggleCartModal: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    addToCart: (state, action) => {
      const item = state.cart.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(i => i.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find(i => i.id === id);
      if (item && quantity > 0) {
        item.quantity = quantity;
      }
    },
    toggleWishlist: (state, action) => {
      const id = action.payload;
      if (state.wishlist.includes(id)) {
        state.wishlist = state.wishlist.filter(item => item !== id);
      } else {
        state.wishlist.push(id);
      }
    }
  }
});

export const {
  setSearchQuery,
  setSelectedCategory,
  setMaxPrice,
  toggleCartModal,
  addToCart,
  removeFromCart,
  updateQuantity,
  toggleWishlist
} = shopSlice.actions;

export default shopSlice.reducer;