import React from "react";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";
import p7 from "../assets/p7.jpg";
import p8 from "../assets/p8.jpg";
import p9 from "../assets/p9.jpg";
import p10 from "../assets/p10.jpg";
import p11 from "../assets/p11.jpg";
import p12 from "../assets/p12.jpg";
import p13 from "../assets/p13.jpg";
import p14 from "../assets/p14.jpg";
import p15 from "../assets/p15.jpg";
import p16 from "../assets/p16.jpg";
import p17 from "../assets/p17.jpg";

export default function Gallery() {
  const images = [
    { src: p1, caption: "R-clip" },
    { src: p2, caption: "Compression Spring" },
    { src: p3, caption: "U-clips, Compression Spring" },
    { src: p4, caption: "Torsion Spring" },
    { src: p5, caption: "Double Torsion Spring" },
    { src: p6, caption: "Extension Spring" },
    { src: p7, caption: "Torsion Spring" },
    { src: p8, caption: "Circlip-type, Extension, Torsion  Spring" },
    { src: p9, caption: "Spiral Torsion Spring" },
    { src: p10, caption: "R-clip" },
    { src: p11, caption: "Helical Torsion Spring" },
    { src: p12, caption: "Double-leg Torsion Spring" },
    { src: p13, caption: "R-clips" },
    { src: p14, caption: "Double-leg Torsion Spring" },
    { src: p15, caption: "Extension Spring" },
    { src: p16, caption: "Extension Spring with Hook End" },
    { src: p17, caption: "Single-coil Torsion Spring" },
  ];

  return (
    <section className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-16 py-12 bg-gradient-to-b from-white to-blue-50 text-gray-800 font-sans">
      {/* Title */}
      <div className="text-center mb-14">
        <h1 className="text-3xl font-bold text-blue-800">Our Gallery</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Explore our collection of custom-engineered springs, crafted with
          precision and passion.
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6">
        {images.map((item, idx) => (
          <div
            key={idx}
            className="relative mb-6 rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl group break-inside-avoid"
            style={{
              borderTop: "4px solid #FDBA74",    // soft orange top border
              borderLeft: "4px solid #FDBA74",   // soft orange left border
              borderBottom: "4px solid #93C5FD", // soft blue bottom border
              borderRight: "4px solid #93C5FD",  // soft blue right border
            }}
          >
            <img
              src={item.src}
              alt={item.caption}
              className="w-full h-auto object-cover rounded-xl"
              style={{ borderRadius: "0.75rem" }} // rounded corners
            />
            <div className="absolute inset-0 bg-blue-200 bg-opacity-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-opacity-70 transition-all duration-300 rounded-xl">
              <span
                className="text-gray-900 text-lg font-semibold text-center px-4"
                style={{ textShadow: "1px 1px 3px rgba(255,255,255,0.9)" }}
              >
                {item.caption}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
