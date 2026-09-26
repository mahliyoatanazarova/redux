import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Heart, ShoppingBag, Star, Trash2 } from "lucide-react";
// Redux slice'ingizdan actionlarni chaqirib olamiz (nomlari shopSlice.js dagi bilan bir xil bo'lishi kerak)
import { addToCart, toggleWishlist } from "../features/shopSlice";

export default function Wishlist() {
  const dispatch = useDispatch();
  // Redux store'dan wishlist ma'lumotlarini olamiz
  const wishlist = useSelector((state) => state.shop?.wishlist || []);

  if (wishlist.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-4">
        <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-4">
          <Heart className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Sevimlilar ro‘yxati bo‘sh
        </h2>
        <p className="text-gray-500 mb-6 max-w-sm">
          Sizga yoqqan telefonlarni saqlab qo‘yishingiz mumkin.
        </p>
        <Link
          to="/catalog"
          className="px-6 py-3 bg-emerald-500 text-white rounded-xl font-semibold shadow-lg shadow-emerald-100 hover:bg-emerald-600 transition"
        >
          Katalogga o‘tish
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Sevimlilar ❤️</h1>
            <p className="text-gray-500 text-sm mt-1">
              Jami {wishlist.length} ta saqlangan telefon
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlist.map((phone) => (
            <div
              key={phone.id}
              className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative"
            >
              <button
                onClick={() => dispatch(toggleWishlist(phone))}
                className="absolute top-8 right-8 z-10 p-2.5 bg-red-50 text-red-500 rounded-full shadow-sm hover:bg-red-100 transition"
              >
                <Trash2 className="w-4 h-4" />
              </button>

              <div className="h-48 w-full overflow-hidden rounded-2xl bg-gray-50 flex items-center justify-center p-4 mb-4">
                <img
                  src={phone.image}
                  alt={phone.name}
                  className="h-full object-contain mix-blend-multiply"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{phone.brand}</span>
                  <span>{phone.memory}</span>
                </div>

                <h3 className="font-bold text-gray-800 line-clamp-1">
                  {phone.name}
                </h3>

                <div className="flex items-center gap-1.5 text-xs">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-gray-700">
                    {phone.rating}
                  </span>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-gray-50">
                  <div>
                    <p className="text-xs text-gray-400">Narxi</p>
                    <p className="text-xl font-extrabold text-emerald-600">
                      ${phone.price}
                    </p>
                  </div>

                  <button
                    onClick={() => dispatch(addToCart(phone))}
                    className="p-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl shadow-md shadow-emerald-100 transition active:scale-95 flex items-center gap-1 text-xs font-semibold"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}