import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect real touch device
    const touchCheck = window.matchMedia("(pointer: coarse)").matches;
    setIsTouchDevice(touchCheck);

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / totalHeight) * 100;
      setScrollProgress(progress);
      setIsVisible(scrolled > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowTooltip(false); // Hide tooltip after click
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 flex items-center"
          onMouseEnter={() => !isTouchDevice && setShowTooltip(true)}
          onMouseLeave={() => !isTouchDevice && setShowTooltip(false)}
        >
          {/* Tooltip (only desktop) */}
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
                Back to Top
              </motion.div>
            )}
          </AnimatePresence>

          {/* Scroll-to-top button with progress ring */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="
              relative w-14 h-14 flex items-center justify-center
              rounded-full shadow-xl text-white
              bg-gradient-to-r from-blue-500 to-purple-600
              hover:from-orange-500 hover:to-pink-500
              transition-all duration-300 ease-in-out
              transform hover:scale-110
            "
          >
            {/* Progress ring */}
            <svg className="absolute inset-0" width="56" height="56">
              <circle
                cx="28"
                cy="28"
                r="26"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="4"
                fill="none"
              />
              <circle
                cx="28"
                cy="28"
                r="26"
                stroke="white"
                strokeWidth="4"
                fill="none"
                strokeDasharray={2 * Math.PI * 26}
                strokeDashoffset={
                  2 * Math.PI * 26 - (scrollProgress / 100) * 2 * Math.PI * 26
                }
                strokeLinecap="round"
                style={{ transition: "stroke-dashoffset 0.3s" }}
              />
            </svg>

            <ArrowUp size={24} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
