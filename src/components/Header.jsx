import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="relative flex justify-center items-center bg-white shadow-md px-6 h-16 sticky top-0 z-30">
      {/* ✅ Logo + Brand Name (Center) */}
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Logo" className="w-14 h-14" />
        <h1 className="text-2xl font-bold text-blue-800 font-serif">
          Spring Hub India
        </h1>
      </div>

      {/* ✅ Right Side Links (Desktop Only) */}
      <div className="absolute right-6 hidden md:flex items-start space-x-6">
        <Link
          to="/contact"
          className="text-blue-700 font-medium hover:text-orange-500 transition-colors mt-2"
        >
          Contact Us
        </Link>
        <Link
          to="/get-quote"
          className="bg-orange-500 text-white font-medium px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
        >
          Get a Quote
        </Link>
      </div>
    </header>
  );
}
