import React from "react";
import p1 from "../assets/p1.jpg";
import p21 from "../assets/p21.jpg";
import p6 from "../assets/p6.jpg";
import p20 from "../assets/p20.jpg";
import p9 from "../assets/p9.jpg";
import p10 from "../assets/p10.jpg";
import p12 from "../assets/p12.jpg";
import p14 from "../assets/p14.jpg";
import p19 from "../assets/p19.jpg";
import p18 from "../assets/p18.jpg";
import p17 from "../assets/p17.jpg";
import p22 from "../assets/p22.jpg";
import p23 from "../assets/p23.jpg";
import p24 from "../assets/p24.jpg";
import p15 from "../assets/p15.jpg";
import p16 from "../assets/p16.jpg";
import p26 from "../assets/p26.jpg";
import p27 from "../assets/p27.jpg";
import p28 from "../assets/p28.jpg";
import p29 from "../assets/p29.jpg";
import p30 from "../assets/p30.jpg";
import p31 from "../assets/p31.jpg";
import p32 from "../assets/p32.jpg";
import p33 from "../assets/p33.jpg";
import p34 from "../assets/p34.jpg";
import g2 from "../assets/g2.jpg";
import p35 from "../assets/p35.jpg";
import p36 from "../assets/p36.jpg";
import p37 from "../assets/p37.jpg";
import p38 from "../assets/p38.jpg";
import p39 from "../assets/p39.jpg";
import p40 from "../assets/p40.jpg";
import p41 from "../assets/p41.jpg";
import w1 from "../assets/w1.jpg";
import p42 from "../assets/p42.jpg";
import p43 from "../assets/p43.jpg";
import p44 from "../assets/p44.jpg";
import p45 from "../assets/p45.jpg";
import p46 from "../assets/p46.jpg";
import p47 from "../assets/p47.jpg";
import p48 from "../assets/p48.jpg";
import p49 from "../assets/p49.jpg";
import p59 from "../assets/p59.jpg";
import p60 from "../assets/p60.jpg";
import headerBg from "../assets/b6.jpg";

// Left side images
import leftImg1 from "../assets/h10.png";
import leftImg2 from "../assets/h9.png";
import leftImg3 from "../assets/h7.png";

// Right side images
import rightImg1 from "../assets/h2.png";
import rightImg2 from "../assets/h5.png";
import rightImg3 from "../assets/h1.png";

export default function Gallery() {
  const categories = {
    "Compression Spring": [p59, p18, p60, p26, p27, p28],
    "Torsion Spring": [p17, g2, p12, p35, p36, p14],
    "Extension Spring": [p6, p15, p16],
    "Conical Spring": [p29, p30, p31, p32, p33, p34],
    "Tension Spring": [p19, p37, p38, p39, p40, p41],
    "Wire Form": [p1, p10, p20, w1, p42, p43],
    "Sheet Metal": [p21],
    "Clutch Spring": [p22, p44, p45],
    "Garter Spring": [p23, p46, p47],
    "Spiral Spring": [p9, p24, p48, p49],
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800 font-sans">
      {/* Our Gallery Section */}
<div className="relative bg-blue-900 text-white overflow-hidden -mt-6 -ml-6 -mr-6">
  {/* ✅ Mobile Background */}
  <img
    src={headerBg}
    alt="Header Background"
    className="absolute inset-0 w-full h-full object-cover opacity-40 md:hidden"
  />

  {/* ✅ Desktop Decorative Images in Zigzag */}
  <div className="hidden md:flex absolute inset-0 items-center justify-center gap-6 opacity-80 pointer-events-none">
    <img src={leftImg1} alt="Decorative" className="w-32 h-32 object-contain -translate-y-6" />
    <img src={leftImg2} alt="Decorative" className="w-32 h-32 object-contain translate-y-4" />
    <img src={rightImg1} alt="Decorative" className="w-32 h-32 object-contain -translate-y-2" />
    <img src={rightImg2} alt="Decorative" className="w-32 h-32 object-contain translate-y-6" />
    <img src={leftImg3} alt="Decorative" className="w-32 h-32 object-contain -translate-y-4" />
    <img src={rightImg3} alt="Decorative" className="w-32 h-32 object-contain translate-y-2" />
  </div>

  {/* ✅ Heading */}
  <div className="relative w-full px-6 py-16 text-center">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
      Our Gallery
    </h1>
    <p className="w-full max-w-3xl mx-auto text-base sm:text-lg text-white">
      Explore our collection of custom-engineered springs, crafted with precision and passion.
    </p>
  </div>
</div>

      {/* Gallery Categories */}
 <div className="px-4 sm:px-6 md:px-12 lg:px-20 mt-10">
  {Object.entries(categories).map(([category, images], idx) => (
    <div key={idx} className="mb-16">
      <h2 className="text-2xl font-semibold text-blue-900 mb-6 text-center md:text-left">
        {category}
      </h2>

      {/* Pinterest-style layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="mb-4 break-inside-avoid relative overflow-hidden rounded-xl transition-transform duration-300 hover:scale-[1.03]"
          >
            <img
              src={img}
              alt={category}
              className="w-full object-cover rounded-xl"
              style={{
                borderTop: "4px solid #FDBA74",
                borderLeft: "4px solid #FDBA74",
                borderBottom: "4px solid #93C5FD",
                borderRight: "4px solid #93C5FD",
              }}
            />
            <div
              className="absolute inset-0 flex items-center justify-center rounded-xl transition-opacity duration-300 opacity-0 hover:opacity-100"
              style={{ backgroundColor: "rgba(147, 197, 253, 0.7)" }}
            >
              <span className="text-gray-900 text-lg font-semibold text-center px-2 sm:px-4">
                {category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {images.length === 0 && (
        <p className="text-gray-500 italic text-center mt-4">
          No images available for this category.
        </p>
      )}
    </div>
  ))}
</div>

    </section>
  );
}