import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartModal, removeFromCart, updateQuantity } from '../features/shopSlice';
import { X, Trash2, Plus, Minus } from 'lucide-react';

export default function CartModal() {
  const dispatch = useDispatch();
  const { cart, isCartOpen } = useSelector((state) => state.shop);

  if (!isCartOpen) return null;

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col p-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-800">Savat</h2>
          <button
            onClick={() => dispatch(toggleCartModal())}
            className="p-1 text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4">
          {cart.length === 0 ? (
            <p className="text-center text-gray-400 text-sm mt-10">Savat bo'sh</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex items-center gap-3 border-b border-gray-50 pb-3">
                <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded-lg" />
                <div className="flex-1">
                  <h4 className="font-semibold text-sm text-gray-800">{item.name}</h4>
                  <p className="text-xs text-emerald-600 font-bold">{item.price.toLocaleString()} UZS</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                      className="p-1 rounded bg-gray-100 text-gray-600 hover:bg-gray-200"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold">{item.quantity}</span>
                    <button
                      onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                      className="p-1 rounded bg-gray-100 text-gray-600 hover:bg-gray-200"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-gray-300 hover:text-red-500 p-1"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="pt-4 border-t border-gray-100 space-y-3">
            <div className="flex justify-between font-bold text-gray-800">
              <span>Jami:</span>
              <span className="text-emerald-600">{totalAmount.toLocaleString()} UZS</span>
            </div>
            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-xl transition">
              Buyurtma berish
            </button>
          </div>
        )}
      </div>
    </div>
  );
}