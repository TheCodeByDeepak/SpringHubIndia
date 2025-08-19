import React from "react";
import { Link } from "react-router-dom";
import compressionSpringImg from "../assets/cp1.jpg";
import compressionSpringImg2 from "../assets/cp2.jpg";
import g1 from "../assets/p25.jpg";
import g2 from "../assets/p26.jpg";
import g3 from "../assets/p27.jpg";
import g4 from "../assets/p28.jpg";
import g5 from "../assets/p59.jpg";
import g6 from "../assets/p60.jpg";
import headerBg from "../assets/b2.jpg";

// Left side images
import leftImg1 from "../assets/h9.png";
import leftImg2 from "../assets/h1.png";
import leftImg3 from "../assets/h3.png";

// Right side images
import rightImg1 from "../assets/h8.png";
import rightImg2 from "../assets/h5.png";
import rightImg3 from "../assets/h10.png";

export default function CompressionSpring() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800 font-sans -ml-2 -mr-2 -mt-2">

     {/* Premium Compression Springs Hero Section */}
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

  {/* ✅ Desktop Heading */}
  <div className="hidden md:block relative max-w-6xl mx-auto px-6 py-20 text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
      Premium Compression Springs
    </h1>
    <p className="max-w-2xl mx-auto text-lg mb-6 text-white">
      Engineered for precision, durability, and reliability, our compression springs 
      are designed to perform under the most demanding conditions across multiple industries.
    </p>
  </div>

  {/* ✅ Mobile Heading */}
  <div className="md:hidden text-center relative px-6 py-16">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
      Premium Compression Springs
    </h1>
    <p className="max-w-2xl mx-auto text-lg mb-6 text-white">
      Engineered for precision, durability, and reliability, our compression springs 
      are designed to perform under the most demanding conditions across multiple industries.
    </p>
  </div>
</div>


      {/* Feature Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="flex justify-center">
          <img
            src={compressionSpringImg}
            alt="High-Quality Compression Spring"
            className="rounded-xl shadow-lg w-full md:w-4/5 object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Designed for Performance
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our springs are tested to ensure consistent compression, resilience, and longevity. 
            Each spring undergoes strict quality checks to deliver exceptional performance.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 text-xl font-bold mr-2">•</span>
              Custom sizes and specifications available
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 text-xl font-bold mr-2">•</span>
              High fatigue resistance and load handling
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 text-xl font-bold mr-2">•</span>
              Environmentally resistant coatings for extended life
            </li>
          </ul>
        </div>
      </div>

      {/* Applications Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Applications Across Industries
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our compression springs are versatile and essential components in numerous applications, 
            providing consistent mechanical force in critical systems.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Automotive suspensions, braking systems, and engines</li>
            <li>Industrial machinery and automation equipment</li>
            <li>Consumer electronics and electrical devices</li>
            <li>Medical instruments and laboratory equipment</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src={compressionSpringImg2}
            alt="Industrial Compression Spring"
            className="rounded-xl shadow-lg w-full md:w-4/5 object-cover"
          />
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="bg-white rounded-2xl shadow-md p-8 mb-16 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Technical Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h4 className="text-lg font-semibold text-blue-800">Wire Diameter</h4>
            <p className="text-gray-600">0.3 mm – 25 mm</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-800">Material</h4>
            <p className="text-gray-600">Stainless Steel, Alloy Steel, Custom Grades</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-800">Coating & Finish</h4>
            <p className="text-gray-600">Spring Steel are available in Nickel, Yellow and White Zinc Plating, Black Oxidizing, Lacquering, Green Passivation and Trivalent Passivation. Stainless Steel Springs are available with Bright Finish.</p>
          </div>
        </div>
      </div>

      {/* Additional Torsion Spring Images */}
<div className="my-16 text-center">
  <h3 className="text-3xl font-bold text-blue-800 mb-8">
    Compression Spring Gallery
  </h3>

  <div className="flex flex-wrap justify-center gap-6">
    {[g1, g2, g3, g4, g5, g6, /* add more images here */].map((img, i) => (
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
          Need Tailored Solutions?
        </h3>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          Share your project requirements with us, and our engineers will design compression springs 
          that perfectly fit your needs.
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
