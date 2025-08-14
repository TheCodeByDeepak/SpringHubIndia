import React from "react";
import {useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Lottie from "lottie-react";
import website404 from "../assets/Website404.json";

export default function NotFound() {
  const navigate = useNavigate();


  const goTo = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 p-6 text-center">
      {/* Animation */}
      <div className="w-full max-w-md">
        <Lottie animationData={website404} loop={true} />
      </div>

      {/* Error Code */}
      <h1 className="text-7xl font-bold text-blue-800">404</h1>

      {/* Message */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 mt-3 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      {/* Back Button */}
      <button
        onClick={() => goTo("/")}
        className="mt-6 inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition-all"
      >
        <FaArrowLeft className="mr-2" />
        Back to Home
      </button>

      {/* Quick Links */}
      <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-600">
        <button onClick={() => goTo("/products")} className="hover:text-orange-500">Products</button>
        <button onClick={() => goTo("/about")} className="hover:text-orange-500">About Us</button>
        <button onClick={() => goTo("/contact")} className="hover:text-orange-500">Contact</button>
      </div>
    </div>
  );
}
