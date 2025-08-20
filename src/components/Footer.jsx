import React from "react";
import logoTransparent from "../assets/logo-transparent.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 border-t shadow-inner py-10 px-6 text-white">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">

        {/* ✅ 1. Logo & About */}
        <div className="flex flex-col items-center space-y-3 text-center md:items-center">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex flex-col items-center space-y-2 hover:opacity-90 transition"
          >
            <img src={logoTransparent} alt="Logo" className="w-20 h-20 -mb-6" />
            <h4 className="text-2xl font-bold">SPRING HUB INDIA</h4>
          </Link>
          <p className="text-mm max-w-xs">
            Delivering high-quality springs and industrial solutions with precision and trust.
          </p>
        </div>

        {/* ✅ 2. Quick Links */}
        <div>
          <h5 className="text-lg font-semibold mb-4 uppercase tracking-wide">
            Quick Links
          </h5>
          <ul className="space-y-2 text-mm">
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
                  className="hover:text-orange-400 hover:underline transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ✅ 3. Contact Us */}
        <div>
          <h5 className="text-lg font-semibold mb-4 uppercase tracking-wide">
            Contact Us
          </h5>

          <p className="text-mm mb-2">
            <span className="text-blue-200">Email:</span>{" "}
            <a
              href="mailto:info@springhubindia.com"
              className="text-white-400 hover:text-orange-400 transition"
            >
              info@springhubindia.com
            </a>
          </p>

          <p className="text-mm mb-2">
            <span className="text-blue-200">Phone:</span>{" "}
            <a
              href="tel:+918007431996"
              className="text-white-400 hover:text-orange-400 transition"
            >
              +91 80074 31996
            </a>
            <br />
            <span className="ml-12">
              <a
                href="tel:+918127516770"
                className="text-white-400 hover:text-orange-400 transition"
              >
                +91 81275 16770
              </a>
            </span>
          </p>

          <p className="text-mm">
            <span className="text-blue-200">Registered Address:</span>{" "}
            <a
              href="https://www.google.com/maps?q=19.410350,72.883583"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-400 hover:text-orange-400 transition"
            >
              Mangalmurti Nagar Building No 10A 403 Tungarfata Sativali Vasai (E) <br /> 401 208 Maharashtra
            </a>
          </p>
        </div>

        {/* ✅ 4. Follow Us */}
        <div>
          <h5 className="text-lg font-semibold mb-4 uppercase tracking-wide">
            Follow Us
          </h5>
          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="https://www.facebook.com/profile.php?id=61579307682312"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-orange-400 hover:scale-125 transition-transform duration-300"
            >
              <FaFacebookF size={25} />
            </a>
            <a
              href="https://x.com/springhubindia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-orange-400 hover:scale-125 transition-transform duration-300"
            >
              <FaXTwitter size={25} />
            </a>
            <a
              href="https://www.instagram.com/springhubindia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-orange-400 hover:scale-125 transition-transform duration-300"
            >
              <FaInstagram size={25} />
            </a>
            <a
  href="https://www.linkedin.com/in/spring-hub-india-9924b537b/"
  target="_blank"
  rel="noreferrer"
  className="text-[#0A66C2] hover:text-orange-400 hover:scale-125 transition-transform duration-300"
>
  <FaLinkedin size={25} />
</a>

          </div>
        </div>
      </div>

      {/* ✅ Bottom Bar */}
      <div className="mt-10 text-center text-white text-mm space-y-2">
        {/* copyright ABOVE divider */}
        <p>© {new Date().getFullYear()} Spring Hub India. All rights reserved.</p>

        {/* divider + credits */}
        <div className="border-t border-white pt-6">
          <p>
            A Project by{" "}
            <a
              href="https://thecodebydeepak.github.io/QuickInnovation/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-orange-400 hover:text-blue-400 transition"
            >
              Quick Innovation
            </a>
            , developed by{" "}
            <a
              href="https://github.com/TheCodeByDeepak"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-orange-400 hover:text-blue-400 transition"
            >
              TheCodeByDeepak
            </a>{" "}
            &{" "}
            <a
              href="https://github.com/Shubha7757/Shubha7757"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-orange-400 hover:text-blue-400 transition"
            >
              Shubha Vishwakarma
            </a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
