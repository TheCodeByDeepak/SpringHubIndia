import React from "react";
import { Link } from "react-router-dom";
import sheetMetalImg1 from "../assets/p21.jpg"; 
import headerBg from "../assets/b5.jpg";

// Left side images
import leftImg1 from "../assets/h10.png";
import leftImg2 from "../assets/h6.png";
import leftImg3 from "../assets/h3.png";

// Right side images
import rightImg1 from "../assets/h7.png";
import rightImg2 from "../assets/h5.png";
import rightImg3 from "../assets/h4.png";

export default function SheetMetalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800 font-sans -ml-2 -mr-2 -mt-2">

      {/* Premium Sheet Metal Solutions Hero Section */}
<div className="relative bg-blue-900 text-white mb-10 overflow-hidden -mt-6 -ml-4 -mr-4">
  {/* ✅ Mobile Background */}
  <img
    src={headerBg}
    alt="Header Background"
    className="absolute inset-0 w-full h-full object-cover opacity-40 md:hidden"
  />

  {/* ✅ Desktop Background Images in a zigzag line */}
  <div className="hidden md:flex absolute inset-0 items-center justify-center gap-6 opacity-80 pointer-events-none">
    <img src={leftImg1} alt="Decorative" className="w-40 h-40 object-contain -translate-y-6" />
    <img src={leftImg2} alt="Decorative" className="w-40 h-40 object-contain translate-y-4" />
    <img src={rightImg1} alt="Decorative" className="w-40 h-40 object-contain -translate-y-2" />
    <img src={rightImg2} alt="Decorative" className="w-40 h-40 object-contain translate-y-6" />
    <img src={leftImg3} alt="Decorative" className="w-40 h-40 object-contain -translate-y-4" />
    <img src={rightImg3} alt="Decorative" className="w-40 h-40 object-contain translate-y-2" />
  </div>

  {/* ✅ Desktop Heading (only visible on md and above) */}
  <div className="hidden md:block relative max-w-6xl mx-auto px-6 py-20 text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
      Premium Sheet Metal Solutions
    </h1>
    <p className="max-w-2xl mx-auto text-lg mb-6 text-white">
      Our sheet metal products are manufactured with precision and durability in mind, 
      providing superior performance for industrial, automotive, and construction applications.
    </p>
  </div>

  {/* ✅ Mobile Heading */}
  <div className="md:hidden text-center relative px-6 py-16">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
      Premium Sheet Metal Solutions
    </h1>
    <p className="max-w-2xl mx-auto text-lg mb-6 text-white">
      Our sheet metal products are manufactured with precision and durability in mind, 
      providing superior performance for industrial, automotive, and construction applications.
    </p>
  </div>
</div>


      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="flex justify-center">
          <img
            src={sheetMetalImg1}
            alt="Sheet Metal"
            className="rounded-xl shadow-lg w-full md:w-4/5 object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Choose Our Sheet Metal
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Engineered for strength, flexibility, and precision, our sheet metal products 
            meet the highest standards for thickness, uniformity, and surface finish.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 text-xl font-bold mr-2">•</span>
              High-strength materials for structural integrity
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 text-xl font-bold mr-2">•</span>
              Smooth surface finish for better aesthetics and performance
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 text-xl font-bold mr-2">•</span>
              Custom sizes, thicknesses, and coatings available
            </li>
          </ul>
        </div>
      </div>

      {/* Applications & Manufacturing */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Applications & Manufacturing Quality
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Produced using state-of-the-art rolling, cutting, and finishing processes, 
            our sheet metal is tested for thickness, hardness, and corrosion resistance, 
            ensuring reliable performance across industries.
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Industries We Serve
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Automotive and aerospace components</li>
            <li>Industrial machinery and equipment</li>
            <li>Construction, roofing, and HVAC systems</li>
            <li>Consumer appliances and electronic enclosures</li>
          </ul>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="bg-white rounded-2xl shadow-md p-8 mb-16 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Technical Specifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h4 className="text-lg font-semibold text-blue-800">Thickness</h4>
            <p className="text-gray-600">0.5 mm – 25 mm</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-800">Material</h4>
            <p className="text-gray-600">Stainless Steel, Mild Steel, Aluminum, Copper</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-800">Finish</h4>
            <p className="text-gray-600">Galvanized, Powder Coated, Polished, Anodized</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-blue-800 mb-4">
          Custom Sheet Metal Solutions for Your Project
        </h3>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          Provide your project requirements, and our engineers will deliver sheet metal products 
          tailored for your exact specifications, ensuring quality and reliability.
        </p>
        <Link to="/get-quote" onClick={() => window.scrollTo(0, 0)}>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all">
            Request a Quote
          </button>
        </Link>
      </div>

    </div>
  );
}
