import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Catalog from "./pages/Catalog";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Aloqa sahifasi
function Contact() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Aloqa 📞</h1>
      <p className="text-gray-500">
        📍 Toshkent sh., Chilonzor tumani | 📞 +998 (90) 123-45-67
      </p>
    </div>
  );
}

// Layout
function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Catalog />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}