import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Header() {
  return (
    <>
      {/* Main Header */}
      <header className="relative flex items-center justify-between bg-white shadow-md px-6 h-20 md:h-28 sticky top-0 z-30">
        
        {/* Left Side - Social Icons + Email (hidden on mobile) */}
        <div className="hidden md:flex flex-col items-start space-y-2">
          {/* Social Icons */}
          <div className="flex space-x-3">
            <a
              href="https://www.facebook.com/profile.php?id=61579307682312"
              target="_blank"
              rel="noopener noreferrer"
              className="group transform transition duration-200 hover:scale-110"
            >
              <FaFacebookF
                size={22}
                className="text-[#1877F2] group-hover:text-orange-500 transition-colors"
              />
            </a>
            <a
              href="https://x.com/springhubindia"
              target="_blank"
              rel="noopener noreferrer"
              className="group transform transition duration-200 hover:scale-110"
            >
              <FaXTwitter
                size={22}
                className="text-[#1DA1F2] group-hover:text-orange-500 transition-colors"
              />
            </a>
            <a
              href="https://www.instagram.com/springhubindia"
              target="_blank"
              rel="noopener noreferrer"
              className="group transform transition duration-200 hover:scale-110"
            >
              <FaInstagram
                size={22}
                className="text-[#E4405F] group-hover:text-orange-500 transition-colors"
              />
            </a>
            <a
  href="https://www.linkedin.com/in/spring-hub-india-9924b537b/"
  target="_blank"
  rel="noopener noreferrer"
  className="group transform transition duration-200 hover:scale-110"
>
  <FaLinkedin
    size={22}
    className="text-[#0A66C2] group-hover:text-orange-500 transition-colors"
  />
</a>

          </div>

          {/* Email Below */}
          <a
            href="mailto:info@springhubindia.com"
            className="text-mm text-blue-700 hover:text-orange-500 transition-colors"
          >
            info@springhubindia.com
          </a>
        </div>

        {/* Center - Logo & Brand (clickable link to Home) */}
        <Link
          to="/"
          className="flex items-center justify-center mx-auto md:flex-col md:space-y-1 md:space-x-0 space-x-2 hover:opacity-90 transition"
        >
          <img src={logo} alt="Logo" className="w-8 h-8 md:w-11 md:h-11" />
          <h1 className="text-lg md:text-2xl font-bold text-blue-800 font-serif text-center mt-2">
            SPRING HUB INDIA
          </h1>
        </Link>

        {/* Right Side - Contact & Quote (hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-7">
          {/* Contact Us + Number */}
          <div className="flex flex-col items-start">
            <Link
              to="/contact"
              className="text-blue-700 font-medium hover:text-orange-500 transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="tel:+918007431996"
              className="text-mm text-blue-600 hover:text-orange-500 transition-colors -ml-6"
            >
              +91 80074 31996
            </a>
          </div>

          {/* Get a Quote */}
          <Link
            to="/get-quote"
            className="bg-orange-500 text-white font-medium px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </header>
    </>
  );
}
