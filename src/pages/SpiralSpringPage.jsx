import React from "react";
import { Link } from "react-router-dom";
import spiralSpringImg1 from "../assets/p48.jpg"; 
import spiralSpringImg2 from "../assets/p49.jpg";
import g1 from "../assets/p9.jpg";
import g2 from "../assets/p57.jpg";
import g3 from "../assets/p58.jpg";
import headerBg from "../assets/b6.jpg";

// Left side images
import leftImg1 from "../assets/h7.png";
import leftImg2 from "../assets/h10.png";
import leftImg3 from "../assets/h8.png";

// Right side images
import rightImg1 from "../assets/h6.png";
import rightImg2 from "../assets/h4.png";
import rightImg3 from "../assets/h2.png";


export default function SpiralSpringPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800 font-sans -ml-2 -mr-2 -mt-2">

          {/* Precision Spiral Springs Hero Section */}
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
      Precision Spiral Springs
    </h1>
    <p className="max-w-2xl mx-auto text-lg mb-6 text-white">
      Our spiral springs are engineered for smooth energy storage and release, providing 
      consistent torque and long-lasting performance for a variety of industrial and mechanical applications.
    </p>
  </div>

  {/* ✅ Mobile Heading */}
  <div className="md:hidden text-center relative px-6 py-16">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
      Precision Spiral Springs
    </h1>
    <p className="max-w-2xl mx-auto text-lg mb-6 text-white">
      Our spiral springs are engineered for smooth energy storage and release, providing 
      consistent torque and long-lasting performance for a variety of industrial and mechanical applications.
    </p>
  </div>
</div>


      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="flex justify-center">
          <img
            src={spiralSpringImg1}
            alt="Spiral Spring"
            className="rounded-xl shadow-lg w-full md:w-4/5 object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Choose Our Spiral Springs
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Designed for consistent torque, durability, and precision, our spiral springs 
            are ideal for clocks, measuring instruments, automotive components, and other mechanical assemblies.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 text-xl font-bold mr-2">•</span>
              Smooth energy storage and release
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 text-xl font-bold mr-2">•</span>
              Precision coiling for accurate performance
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 text-xl font-bold mr-2">•</span>
              High-quality materials for extended life
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
            Manufactured using advanced coiling and heat-treatment techniques, our spiral springs are 
            tested for uniform torque, strength, and resilience to ensure reliable operation in all applications.
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Industries We Serve
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Clocks, timers, and measuring instruments</li>
            <li>Automotive components and transmissions</li>
            <li>Industrial machinery and precision tools</li>
            <li>Consumer electronics and mechanical devices</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src={spiralSpringImg2}
            alt="Spiral Spring Manufacturing"
            className="rounded-xl shadow-lg w-full md:w-4/5 object-cover"
          />
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="bg-white rounded-2xl shadow-md p-8 mb-16 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Technical Specifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h4 className="text-lg font-semibold text-blue-800">Wire Diameter</h4>
            <p className="text-gray-600">0.2 mm – 10 mm</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-800">Material</h4>
            <p className="text-gray-600">Stainless Steel, Carbon Steel, Alloy Steel</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-800">Finish</h4>
            <p className="text-gray-600">Zinc Plated, Powder Coated, Phosphate Coating, Custom</p>
          </div>
        </div>
      </div>

       {/* Additional Torsion Spring Images */}
<div className="my-16 text-center">
  <h3 className="text-3xl font-bold text-blue-800 mb-8">
    Spiral Spring Gallery
  </h3>

  <div className="flex flex-wrap justify-center gap-6">
    {[g1, g2, g3 /* add more images here */].map((img, i) => (
      <div key={i} className="rounded-xl shadow overflow-hidden w-56">
        <img
          src={img}
          alt={`Torsion Spring ${i + 1}`}
          className="w-full h-56 object-cover"
        />
      </div>
    ))}
  </div>
</div>

      {/* Call to Action */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-blue-800 mb-4">
          Custom Spiral Springs for Your Application
        </h3>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          Provide your specifications, and our engineers will design spiral springs tailored for precise torque, 
          consistent performance, and durability.
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
