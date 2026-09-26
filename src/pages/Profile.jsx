import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { User, Mail, Phone, LogOut, ShieldCheck, ShoppingBag, Heart } from "lucide-react";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // 1. Tizimga kirganlik holatini tekshirish
    const isLoggedIn = localStorage.getItem("phoneStore_isLoggedIn") === "true";

    if (!isLoggedIn) {
      // Kirilmagan bo'lsa login sahifasiga qaytarish
      navigate("/login");
      return;
    }

    // 2. LocalStorage'dan user ma'lumotlarini olish
    const savedUserData = localStorage.getItem("phoneStore_user");
    if (savedUserData) {
      setUser(JSON.parse(savedUserData));
    }
  }, [navigate]);

  // Logout (Chiqish) funksiyasi
  const handleLogout = () => {
    // Login holatini o'chirish
    localStorage.removeItem("phoneStore_isLoggedIn");
    alert("Hisobingizdan chiqdingiz!");
    navigate("/login");
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Yuklanmoqda...</p>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* Profil Sarlavhasi (Header) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center font-bold text-3xl shadow-inner">
              {user.name ? user.name.charAt(0).toUpperCase() : "U"}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
              <p className="text-gray-500 text-sm flex items-center gap-1.5 mt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> Tasdiqlangan foydalanuvchi
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-5 py-2.5 bg-red-50 hover:bg-red-100 text-red-600 font-semibold rounded-xl transition text-sm"
          >
            <LogOut className="w-4 h-4" />
            Chiqish
          </button>
        </div>

        {/* Asosiy ma'lumotlar kartasi va statistikalar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Shaxsiy Ma'lumotlar */}
          <div className="md:col-span-2 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 space-y-6">
            <h2 className="text-xl font-bold text-gray-800 border-b pb-4">
              Shaxsiy ma'lumotlar
            </h2>

            <div className="space-y-4">
              {/* Ism */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50">
                <div className="p-3 bg-white rounded-xl text-emerald-600 shadow-sm">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">To‘liq ism</p>
                  <p className="text-gray-800 font-semibold">{user.name}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50">
                <div className="p-3 bg-white rounded-xl text-emerald-600 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Email manzil</p>
                  <p className="text-gray-800 font-semibold">{user.email}</p>
                </div>
              </div>

              {/* Telefon */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50">
                <div className="p-3 bg-white rounded-xl text-emerald-600 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Telefon raqam</p>
                  <p className="text-gray-800 font-semibold">{user.phone || "Kiritilmagan"}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tezkor menyu / Statistika */}
          <div className="space-y-4">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-4">Tezkor bo‘limlar</h3>
              
              <div className="space-y-2">
                <Link
                  to="/wishlist"
                  className="flex items-center justify-between p-3.5 rounded-xl hover:bg-emerald-50 text-gray-700 hover:text-emerald-600 transition"
                >
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-emerald-500" />
                    <span className="text-sm font-medium">Sevimlilar</span>
                  </div>
                  <span className="text-xs bg-emerald-100 text-emerald-700 font-bold px-2.5 py-1 rounded-full">
                    0
                  </span>
                </Link>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-gray-50 text-gray-400 cursor-not-allowed">
                  <div className="flex items-center gap-3">
                    <ShoppingBag className="w-5 h-5" />
                    <span className="text-sm font-medium">Buyurtmalarim</span>
                  </div>
                  <span className="text-xs bg-gray-200 text-gray-600 font-bold px-2.5 py-1 rounded-full">
                    0
                  </span>
                </div>
              </div>
            </div>

            {/* Qo'shimcha banner */}
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-6 text-white shadow-lg shadow-emerald-100">
              <h4 className="font-bold text-lg mb-1">PhoneStore Azoisiz 🌟</h4>
              <p className="text-xs text-emerald-100">
                Xaridlaringiz va sevimli mahsulotlaringizni profil orqali boshqarishingiz mumkin.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}