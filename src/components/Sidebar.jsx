import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCategory, setMaxPrice } from '../features/shopSlice';
import { LayoutGrid, Smartphone, ShieldCheck, Battery, Camera, Zap, Tv } from 'lucide-react';

const categories = [
  { name: 'Barchasi', count: 24, icon: LayoutGrid },
  { name: 'iPhone', count: 8, icon: Smartphone },
  { name: 'Samsung', count: 7, icon: Smartphone },
  { name: 'Xiaomi', count: 5, icon: Smartphone },
  { name: 'Realme', count: 2, icon: Smartphone },
  { name: 'Google', count: 1, icon: Smartphone },
];

export default function Sidebar() {
  const dispatch = useDispatch();
  const { selectedCategory, maxPrice } = useSelector((state) => state.shop);

  return (
    <aside className="w-full lg:w-64 space-y-6 flex-shrink-0">
      {/* Kategoriyalar */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <LayoutGrid className="w-4 h-4 text-emerald-500" /> Categoriyalar
        </h3>
        <div className="space-y-1">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => dispatch(setSelectedCategory(cat.name))}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium transition ${
                  isSelected
                    ? 'bg-emerald-50 text-emerald-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4" />
                  <span>{cat.name}</span>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full ${isSelected ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-500'}`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Narx oralig'i */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="font-semibold text-gray-800 mb-3">Narx oralig'i</h3>
        <input
          type="range"
          min="1000000"
          max="15000000"
          step="500000"
          value={maxPrice}
          onChange={(e) => dispatch(setMaxPrice(Number(e.target.value)))}
          className="w-full accent-emerald-500 cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-2 font-medium">
          <span>0 UZS</span>
          <span className="text-emerald-600 font-bold">{maxPrice.toLocaleString()} UZS</span>
        </div>
      </div>

      {/* Xususiyatlar */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="font-semibold text-gray-800 mb-3">Xususiyatlar</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" defaultChecked className="accent-emerald-500 rounded" />
            <span>5G Qo'llab-quvvatlash</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="accent-emerald-500 rounded" />
            <span>Batareya (5000mAh+)</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="accent-emerald-500 rounded" />
            <span>Kamera (50MP+)</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="accent-emerald-500 rounded" />
            <span>Tez zaryadlash</span>
          </label>
        </div>
      </div>
    </aside>
  );
}