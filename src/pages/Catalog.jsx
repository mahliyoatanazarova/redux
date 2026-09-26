import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Heart, ShoppingBag, Star, Search, SlidersHorizontal } from "lucide-react";
import { addToCart, toggleWishlist } from "../features/shopSlice";

export default function Catalog() {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.shop?.wishlist || []);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All");

  // Namuna uchun mahsulotlar ro'yxati
  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      brand: "Apple",
      price: 1199,
      memory: "256GB",
      rating: 4.9,
      image: "https://viss.uz/wp-content/uploads/2023/10/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium.png",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      brand: "Samsung",
      price: 1299,
      memory: "512GB",
      rating: 4.8,
      image: "https://images.samsung.com/is/image/samsung/p6pim/uz_uz/2401/gallery/uz-uz-galaxy-s24-s928-489240-sm-s928bztqskz-thumb-539328220",
    },
    {
      id: 3,
      name: "Xiaomi 14 Ultra",
      brand: "Xiaomi",
      price: 999,
      memory: "512GB",
      rating: 4.7,
      image: "https://i02.appmifile.com/835_operator_sg/22/02/2024/96985a7209ff8f98ec3f890c29bcbe37.png",
    },
  ];

  // Saralash
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesBrand =
      selectedBrand === "All" || product.brand === selectedBrand;
    return matchesSearch && matchesBrand;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Qidiruv va Filter */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-96">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Telefon qidirish..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-emerald-500 transition"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
            {["All", "Apple", "Samsung", "Xiaomi"].map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                  selectedBrand === brand
                    ? "bg-emerald-500 text-white shadow-md shadow-emerald-100"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {brand === "All" ? "Barchasi" : brand}
              </button>
            ))}
          </div>
        </div>

        {/* Kartalar gridi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((phone) => {
            const isWishlisted = wishlist.some((item) => item.id === phone.id);

            return (
              <div
                key={phone.id}
                className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative"
              >
                {/* Sevimlilar tugmasi */}
                <button
                  onClick={() => dispatch(toggleWishlist(phone))}
                  className={`absolute top-8 right-8 z-10 p-2.5 rounded-full shadow-sm transition ${
                    isWishlisted
                      ? "bg-red-50 text-red-500"
                      : "bg-white/80 text-gray-400 hover:text-red-500 hover:bg-white"
                  }`}
                >
                  <Heart
                    className={`w-5 h-5 ${isWishlisted ? "fill-red-500" : ""}`}
                  />
                </button>

                {/* Rasm */}
                <div className="h-52 w-full overflow-hidden rounded-2xl bg-gray-50 flex items-center justify-center p-4 mb-4 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={phone.image}
                    alt={phone.name}
                    className="h-full object-contain mix-blend-multiply"
                  />
                </div>

                {/* Ma'lumotlar */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{phone.brand}</span>
                    <span>{phone.memory}</span>
                  </div>

                  <h3 className="font-bold text-gray-800 text-lg line-clamp-1">
                    {phone.name}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-gray-700">
                      {phone.rating}
                    </span>
                  </div>

                  {/* Narx va Savat */}
                  <div className="pt-4 flex items-center justify-between border-t border-gray-50">
                    <div>
                      <p className="text-xs text-gray-400">Narxi</p>
                      <p className="text-xl font-extrabold text-emerald-600">
                        ${phone.price}
                      </p>
                    </div>

                    <button
                      onClick={() => dispatch(addToCart(phone))}
                      className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl shadow-md shadow-emerald-100 transition active:scale-95 flex items-center gap-2 text-xs font-semibold"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Savatga</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}