import React from 'react';
import { ArrowRight, Camera, Cpu, Battery, ShieldCheck } from 'lucide-react';

export default function HeroBanner() {
  return (
    <div className="bg-gradient-to-r from-gray-950 via-gray-900 to-black text-white rounded-3xl p-6 md:p-8 relative overflow-hidden mb-8 shadow-xl">
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Chap kontent */}
        <div className="md:col-span-6 space-y-4">
          <span className="bg-emerald-500 text-black font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            YANGI
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            iPhone 16 Pro
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Katta imkoniyatlar. Yanada yaqinroq. Titanium korpus va aqlbovar qilmas A18 Pro chipi.
          </p>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold px-6 py-2.5 rounded-full flex items-center gap-2 text-sm transition shadow-lg shadow-emerald-500/20">
            Xarid qilish <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Markaziy rasm */}
        <div className="md:col-span-3 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&q=80"
            alt="iPhone 16 Pro"
            className="w-48 h-auto object-cover rounded-2xl drop-shadow-2xl transform hover:scale-105 transition duration-500"
          />
        </div>

        {/* O'ng afzalliklar */}
        <div className="md:col-span-3 space-y-3 text-xs border-l border-gray-800 pl-4 hidden md:block">
          <div className="flex items-center gap-3">
            <Camera className="w-5 h-5 text-emerald-400" />
            <div>
              <p className="font-semibold">Pro kamera</p>
              <p className="text-gray-400">Yangi daraja</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Cpu className="w-5 h-5 text-emerald-400" />
            <div>
              <p className="font-semibold">A18 Pro chip</p>
              <p className="text-gray-400">Yuqori unum</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Battery className="w-5 h-5 text-emerald-400" />
            <div>
              <p className="font-semibold">Tungi batareya</p>
              <p className="text-gray-400">Butun kun</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}