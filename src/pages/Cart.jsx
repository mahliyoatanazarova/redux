import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Trash2, ShoppingBag } from "lucide-react";
import { removeFromCart } from "../features/shopSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.shop?.cart || []);

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-4">
        <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-4">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Savat bo‘sh</h2>
        <p className="text-gray-500 mb-6">
          Katalog bo‘limiga o‘tib, telefon qo‘shishingiz mumkin.
        </p>
        <Link
          to="/catalog"
          className="px-6 py-3 bg-emerald-500 text-white rounded-xl font-semibold hover:bg-emerald-600 transition"
        >
          Katalogga o‘tish
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Savat 🛒</h1>

        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-contain bg-gray-50 p-2 rounded-xl"
                />
                <div>
                  <h3 className="font-bold text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-400">
                    Soni: {item.quantity || 1} ta
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <p className="font-extrabold text-emerald-600 text-lg">
                  ${item.price * (item.quantity || 1)}
                </p>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-xl transition"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}

          <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
            <span className="text-lg font-bold text-gray-700">Jami narx:</span>
            <span className="text-2xl font-black text-emerald-600">
              ${total}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}