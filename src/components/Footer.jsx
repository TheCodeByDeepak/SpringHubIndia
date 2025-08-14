import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
<footer className="bg-gradient-to-r from-blue-100 via-orange-50 to-blue-100 border-t shadow-inner py-10 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">

    {/* ✅ 1. Logo & About */}
    <div className="flex flex-col items-center space-y-3 text-center md:items-center">
      <div className="flex flex-col items-center space-y-2">
        <img src={logo} alt="Logo" className="w-16 h-16" />
        <h4 className="text-2xl font-bold text-blue-900">Spring Hub India</h4>
      </div>
      <p className="text-gray-700 text-sm max-w-xs">
        Delivering high-quality springs and industrial solutions with precision and trust.
      </p>
    </div>

    {/* ✅ 2. Quick Links */}
    <div>
      <h5 className="text-lg font-semibold text-blue-900 mb-4 uppercase tracking-wide">
        Quick Links
      </h5>
      <ul className="space-y-2 text-gray-700 text-sm">
        {[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: "Manufacturing", path: "/manufacturing" },
          { name: "Industries Served", path: "/industries-served" },
          { name: "Gallery", path: "/gallary" },
          { name: "About Us", path: "/about" },
          { name: "Contact", path: "/contact" },
          { name: "Get a Quote", path: "/get-quote" }
        ].map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-orange-500 hover:underline transition"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* ✅ 3. Contact Us */}
    <div>
      <h5 className="text-lg font-semibold text-blue-900 mb-4 uppercase tracking-wide">
        Contact Us
      </h5>
      <p className="text-gray-700 text-sm mb-2">
        Email:{" "}
        <a
          href="mailto:info@springhubindia.com"
          className="text-blue-700 hover:text-orange-500 transition"
        >
          info@springhubindia.com
        </a>
      </p>
      <p className="text-gray-700 text-sm mb-2">
        Phone:{" "}
        <a
          href="tel:+919876543210"
          className="text-blue-700 hover:text-orange-500 transition"
        >
          +91 98765 43210
        </a>
      </p>
     <p className="text-gray-700 text-sm">
  Address:{" "}
  <a
    href="https://www.google.com/maps?q=19.410350,72.883583"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-700 hover:text-orange-500 transition"
  >
    Mangalmurti Nagar Building No 10A 403 Tuungarfata Sativali Vasai (E) - 401 208 Maharashtra
  </a>
</p>


    </div>

    {/* ✅ 4. Follow Us */}
    <div>
      <h5 className="text-lg font-semibold text-blue-900 mb-4 uppercase tracking-wide">
        Follow Us
      </h5>
      <div className="flex justify-center md:justify-start space-x-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
          className="text-blue-600 hover:text-orange-500 hover:scale-125 transition-transform duration-300">
          <FaFacebookF size={22} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
          className="text-blue-400 hover:text-orange-500 hover:scale-125 transition-transform duration-300">
          <FaXTwitter size={22} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
          className="text-pink-500 hover:text-orange-500 hover:scale-125 transition-transform duration-300">
          <FaInstagram size={22} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
          className="text-blue-700 hover:text-orange-500 hover:scale-125 transition-transform duration-300">
          <FaLinkedinIn size={22} />
        </a>
      </div>
    </div>
  </div>

  {/* ✅ Bottom Bar */}
  <div className="mt-10 border-t border-gray-300 pt-6 text-center text-gray-700 text-sm space-y-2">
    <p>© {new Date().getFullYear()} Spring Hub India. All rights reserved.</p>
    <p className="text-gray-500">
      A project by{" "}
      <a href="https://thecodebydeepak.github.io/QuickInnovation/" target="_blank" rel="noopener noreferrer"
        className="font-semibold text-blue-700 hover:text-orange-500 transition">
        Quick Innovation
      </a>, developed by{" "}
      <a href="https://github.com/TheCodeByDeepak" target="_blank" rel="noopener noreferrer"
        className="font-semibold text-orange-500 hover:text-blue-700 transition">
        TheCodeByDeepak
      </a>{" "} &{" "}
      <a href="https://github.com/Shubha7757/Shubha7757" target="_blank" rel="noopener noreferrer"
        className="font-semibold text-orange-500 hover:text-blue-700 transition">
        Shubha Vishwakarma
      </a>.
    </p>
  </div>
</footer>

  );
}
