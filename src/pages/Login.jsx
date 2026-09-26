import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Smartphone, Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  // State'lar
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // 1. Maydonlar to'ldirilganini tekshirish
    if (!email || !password) {
      setError("Iltimos, email va parolni kiriting!");
      return;
    }

    // 2. localStorage'dan foydalanuvchini olish
    const savedUser = JSON.parse(localStorage.getItem("phoneStore_user"));

    if (!savedUser) {
      setError("Ruyxatdan utgan foydalanuvchi topilmadi. Avval ro‘yxatdan o‘ting!");
      return;
    }

    // 3. Email va Parolni solishtirish
    if (savedUser.email === email && savedUser.password === password) {
      // Muvaffaqiyatli kirish -> sessiyani saqlash
      localStorage.setItem("phoneStore_isLoggedIn", "true");
      alert("Xush kelibsiz! Tizimga muvaffaqiyatli kirdingiz.");
      
      // Bosh sahifaga yuborish
      navigate("/");
    } else {
      setError("Email yoki parol noto‘g‘ri!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex w-16 h-16 bg-emerald-500 rounded-2xl items-center justify-center text-white shadow-lg shadow-emerald-200 mb-4">
            <Smartphone className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">
            Phone<span className="text-emerald-500">Store</span>
          </h1>
          <p className="text-gray-500 mt-2">Hisobingizga kiring</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-7">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Xush kelibsiz! 👋
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            PhoneStore'dan foydalanish uchun hisobingizga kiring.
          </p>

          {/* Xatolik bildirishnomasi */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-600 rounded-xl text-sm font-medium">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin}>
            {/* Email */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@gmail.com"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition"
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Parol
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Parolingizni kiriting"
                  className="w-full pl-12 pr-12 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-500"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-xl transition shadow-lg shadow-emerald-100"
            >
              Kirish
            </button>
          </form>

          {/* Register link */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Hisobingiz yo‘qmi?{" "}
            <Link
              to="/register"
              className="text-emerald-600 font-semibold hover:underline"
            >
              Ro‘yxatdan o‘tish
            </Link>
          </p>
        </div>

        {/* Back */}
        <div className="text-center mt-6">
          <Link
            to="/"
            className="text-sm text-gray-500 hover:text-emerald-600 transition"
          >
            ← Bosh sahifaga qaytish
          </Link>
        </div>

      </div>
    </div>
  );
}