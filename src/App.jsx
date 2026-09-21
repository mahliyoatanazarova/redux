import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HeroBanner from './components/HeroBanner';
import ProductCard from './components/ProductCard';
import CartModal from './components/CartModal';

export default function App() {
  const { products, selectedCategory, searchQuery, maxPrice } = useSelector((state) => state.shop);

  // Filtrlangan mahsulotlar
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'Barchasi' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = product.price <= maxPrice;
    return matchesCategory && matchesSearch && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
        <Sidebar />

        <section className="flex-1">
          <HeroBanner />

          {/* Sarlavha */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">Mashhur mahsulotlar</h2>
            <button className="text-emerald-600 text-sm font-semibold hover:underline">
              Barchasini ko'rish &rarr;
            </button>
          </div>

          {/* Mahsulotlar to'ri (Grid) */}
          {filteredProducts.length === 0 ? (
            <p className="text-gray-400 text-center py-10">Mahsulotlar topilmadi</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </main>

      <CartModal />
    </div>
  );
}