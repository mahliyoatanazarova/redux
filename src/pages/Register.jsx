import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Smartphone, User, Mail, Phone, Lock, Eye, EyeOff } from "lucide-react";

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // Form inputlar holati
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // Oddiy tekshiruvlar
    if (!formData.name || !formData.email || !formData.phone || !formData.password) {
      setError("Iltimos, barcha maydonlarni to‘ldiring!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Parollar bir-biriga mos kelmadi!");
      return;
    }

    // Foydalanuvchini localStorage-ga saqlaymiz
    const userData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
    };

    localStorage.setItem("phoneStore_user", JSON.stringify(userData));
    alert("Muvaffaqiyatli ro‘yxatdan o‘tdingiz! Endi tizimga kiring.");
    
    // Login sahifasiga yo'naltiramiz
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-gray-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        
        {/* Logo */}
        <div className="text-center mb-6">
          <div className="inline-flex w-16 h-16 bg-emerald-500 rounded-2xl items-center justify-center text-white shadow-lg shadow-emerald-200 mb-3">
            <Smartphone className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">
            Phone<span className="text-emerald-500">Store</span>
          </h1>
        </div>

        {/* Register Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-7">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Ro‘yxatdan o‘tish 📝
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Yangi hisob yaratish uchun ma'lumotlaringizni kiriting.
          </p>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-600 rounded-xl text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleRegister}>
            {/* Ism */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                To‘liq ismingiz
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ali Valiyev"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition"
                />
              </div>
            </div>

            {/* Telefon */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Telefon raqam
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+998 90 123 45 67"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition"
                />
              </div>
            </div>

            {/* Parol */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Parol
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Parol o‘ylab toping"
                  className="w-full pl-12 pr-12 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-500"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Parolni tasdiqlash */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Parolni tasdiqlang
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Parolni qayta kiriting"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition"
                />
              </div>
            </div>

            {/* Register button */}
            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-xl transition shadow-lg shadow-emerald-100"
            >
              Ro‘yxatdan o‘tish
            </button>
          </form>

          {/* Login link */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Hisobingiz bormi?{" "}
            <Link to="/login" className="text-emerald-600 font-semibold hover:underline">
              Kirish
            </Link>
          </p>
        </div>

        {/* Back */}
        <div className="text-center mt-6">
          <Link to="/" className="text-sm text-gray-500 hover:text-emerald-600 transition">
            ← Bosh sahifaga qaytish
          </Link>
        </div>
      </div>
    </div>
  );
}