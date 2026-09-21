import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, toggleWishlist } from '../features/shopSlice';
import { Heart, Star, ShoppingCart } from 'lucide-react';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.shop.wishlist);
  const isWishlisted = wishlist.includes(product.id);

  return (
    <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between relative group">
      {/* Badge */}
      {product.badge && (
        <span className="absolute top-3 left-3 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-md z-10">
          {product.badge}
        </span>
      )}

      {/* Wishlist Button */}
      <button
        onClick={() => dispatch(toggleWishlist(product.id))}
        className="absolute top-3 right-3 p-1.5 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-400 hover:text-red-500 z-10 transition"
      >
        <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
      </button>

      {/* Image */}
      <div className="h-44 flex items-center justify-center p-2 mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full object-contain group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Info */}
      <div>
        <h3 className="font-bold text-gray-800 text-base">{product.name}</h3>
        <p className="text-xs text-gray-400 mb-2">{product.desc}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span className="text-xs font-semibold text-gray-700">{product.rating}</span>
          <span className="text-[11px] text-gray-400">({product.reviews})</span>
        </div>

        {/* Price & Add to Cart */}
        <div className="space-y-2">
          <p className="font-extrabold text-gray-900 text-base">
            {product.price.toLocaleString()} <span className="text-xs font-normal">UZS</span>
          </p>

          <button
            onClick={() => dispatch(addToCart(product))}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold py-2 rounded-xl flex items-center justify-center gap-1.5 transition active:scale-95"
          >
            <ShoppingCart className="w-3.5 h-3.5" /> Savatga qo'shish
          </button>
        </div>
      </div>
    </div>
  );
}