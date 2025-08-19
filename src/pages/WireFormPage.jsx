import React from "react";
import { Link } from "react-router-dom";
import wireFormImg from "../assets/w1.jpg"; 
import wireFormImg2 from "../assets/p20.jpg"; 
import g1 from "../assets/p1.jpg"; 
import g2 from "../assets/p10.jpg"; 
import g3 from "../assets/p43.jpg"; 
import headerBg from "../assets/b9.jpg";

// Left side images
import leftImg1 from "../assets/h5.png";
import leftImg2 from "../assets/h4.png";
import leftImg3 from "../assets/h6.png";

// Right side images
import rightImg1 from "../assets/h8.png";
import rightImg2 from "../assets/h10.png";
import rightImg3 from "../assets/h7.png";

export default function WireFormSpring() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800 font-sans -ml-2 -mr-2 -mt-2">

      {/* Wire Form Springs Hero Section */}
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
    <img src={leftImg2} alt="Decorative" className="w-40 h-40 object-contain translate-y-20" />
    <img src={rightImg1} alt="Decorative" className="w-40 h-40 object-contain -translate-y-24" />
    <img src={rightImg2} alt="Decorative" className="w-40 h-40 object-contain translate-y-20" />
    <img src={leftImg3} alt="Decorative" className="w-40 h-40 object-contain -translate-y-24" />
    <img src={rightImg3} alt="Decorative" className="w-40 h-40 object-contain translate-y-2" />
  </div>

  {/* ✅ Desktop Heading (only visible on md and above) */}
  <div className="hidden md:block relative max-w-6xl mx-auto px-6 py-20 text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
      Wire Form Springs
    </h1>
    <p className="max-w-2xl mx-auto text-lg mb-6 text-white">
      Custom-shaped wire forms built with precision and durability — perfect for specialized industrial, mechanical, and commercial applications.
    </p>
  </div>

  {/* ✅ Mobile Heading */}
  <div className="md:hidden text-center relative px-6 py-16">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
      Wire Form Springs
    </h1>
    <p className="max-w-2xl mx-auto text-lg mb-6 text-white">
      Custom-shaped wire forms built with precision and durability — perfect for specialized industrial, mechanical, and commercial applications.
    </p>
  </div>
</div>


      {/* Intro Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        {/* Image 1 */}
        <div className="flex justify-center">
          <img
            src={wireFormImg}
            alt="Wire Form Spring"
            className="rounded-2xl shadow-lg w-full md:w-4/5 object-cover"
          />
        </div>

        {/* Description */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Choose Our Wire Form Springs?
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our wire form springs are designed to meet complex shape requirements while delivering maximum performance. 
            From simple hooks to intricate custom bends, we ensure precision, strength, and reliability in every product.
          </p>

          {/* Features */}
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 text-xl font-bold mr-2">•</span>
              Custom shapes and configurations for unique applications
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 text-xl font-bold mr-2">•</span>
              Wide range of wire diameters and materials
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 text-xl font-bold mr-2">•</span>
              Precision bending for consistent quality
            </li>
          </ul>
        </div>
      </div>

      {/* Additional Image & Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        {/* Text Content */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Manufacturing Excellence
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our wire forms are crafted using advanced CNC bending machines, skilled craftsmanship, 
            and strict quality control — ensuring perfect bends, smooth finishes, and high durability.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Industries We Serve
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Automotive (linkages, clips, brackets)</li>
            <li>Appliances and electronics</li>
            <li>Medical devices and instruments</li>
            <li>Industrial and agricultural equipment</li>
          </ul>
        </div>

        {/* Image 2 */}
        <div className="flex justify-center">
          <img
            src={wireFormImg2}
            alt="Wire Form Manufacturing"
            className="rounded-2xl shadow-lg w-full md:w-4/5 object-cover"
          />
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="bg-white rounded-2xl shadow-md p-8 mb-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Technical Specifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h4 className="text-lg font-semibold text-blue-800">Wire Diameter</h4>
            <p className="text-gray-600">0.5 mm – 12 mm</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-800">Material</h4>
            <p className="text-gray-600">Stainless Steel / Carbon Steel / Brass</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-800">Finish</h4>
            <p className="text-gray-600">Polished, Coated, Custom</p>
          </div>
        </div>
      </div>

       {/* Additional Torsion Spring Images */}
<div className="my-16 text-center">
  <h3 className="text-3xl font-bold text-blue-800 mb-8">
    Wire Form Gallery
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

      {/* CTA Section */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-blue-800 mb-4">
          Need a Custom Wire Form?
        </h3>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          Share your design or idea, and we'll manufacture the perfect wire form spring to match your requirements.
        </p>
        <Link
          to="/get-quote"
          onClick={() => window.scrollTo(0, 0)}
        >
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all">
            Get a Quote
          </button>
        </Link>
      </div>
    </div>
  );
}
