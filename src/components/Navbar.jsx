import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery, toggleCartModal } from '../features/shopSlice';
import { Search, Heart, User, ShoppingBag, Smartphone } from 'lucide-react';

export default function Navbar() {
  const dispatch = useDispatch();
  const { cart, wishlist, searchQuery } = useSelector((state) => state.shop);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-md shadow-emerald-200">
            <Smartphone className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800 leading-none">
              Phone<span className="text-emerald-500">Store</span>
            </h1>
            <p className="text-[10px] text-gray-400 mt-0.5">Sizning ideal telefoningiz</p>
          </div>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-md relative hidden md:block">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Telefon qidirish..."
            value={searchQuery}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            className="w-full bg-gray-50 text-sm pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-emerald-500 focus:bg-white transition"
          />
        </div>

        {/* Nav Links & Actions */}
        <div className="flex items-center gap-6">
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#" className="text-emerald-600 border-b-2 border-emerald-500 pb-1">Bosh sahifa</a>
            <a href="#" className="hover:text-emerald-600 transition">Katalog</a>
            <a href="#" className="hover:text-emerald-600 transition">Aloqa</a>
          </nav>

          <div className="flex items-center gap-3 border-l border-gray-200 pl-4">
            <button className="p-2 text-gray-600 hover:text-emerald-600 relative">
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            <button className="p-2 text-gray-600 hover:text-emerald-600">
              <User className="w-5 h-5" />
            </button>

            <button
              onClick={() => dispatch(toggleCartModal())}
              className="p-2 bg-emerald-50 text-emerald-600 rounded-full hover:bg-emerald-100 transition relative flex items-center justify-center"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}