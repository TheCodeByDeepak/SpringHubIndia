import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppFloatingIcon() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const touchCheck = window.matchMedia("(pointer: coarse)").matches;
    setIsTouchDevice(touchCheck);
  }, []);

  return (
    <div
      className="fixed bottom-24 right-6 z-50 flex items-center"
      onMouseEnter={() => !isTouchDevice && setShowTooltip(true)}
      onMouseLeave={() => !isTouchDevice && setShowTooltip(false)}
    >
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && !isTouchDevice && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
            className="
              mr-3 px-3 py-1 rounded-lg
              bg-white/30 backdrop-blur-md border border-white/20
              text-gray-900 text-xs font-medium shadow-md
              dark:bg-gray-800/50 dark:text-gray-100
            "
          >
            WhatsApp Us
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Icon Button */}
      <a
        href="https://wa.me/918007431996?text=Hello%2C%20I%27d%20like%20to%20inquire%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="text-green-600 hover:text-green-700 transition duration-300"
      >
        <FaWhatsapp className="text-6xl" />
      </a>
    </div>
  );
}
