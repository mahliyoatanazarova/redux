import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Smartphone, ShoppingBag, Heart } from "lucide-react";

export default function Navbar() {
  const cart = useSelector((state) => state.shop?.cart || []);
  const wishlist = useSelector((state) => state.shop?.wishlist || []);

  const totalCartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-md shadow-emerald-200">
            <Smartphone className="w-6 h-6" />
          </div>
          <span className="text-2xl font-bold text-gray-800">
            Phone<span className="text-emerald-500">Store</span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            to="/wishlist"
            className="relative p-2.5 rounded-xl hover:bg-gray-100 text-gray-600 transition"
          >
            <Heart className="w-5 h-5" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center border-2 border-white">
                {wishlist.length}
              </span>
            )}
          </Link>

          <Link
            to="/cart"
            className="relative p-2.5 rounded-xl hover:bg-emerald-50 text-emerald-600 transition"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalCartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center border-2 border-white">
                {totalCartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}