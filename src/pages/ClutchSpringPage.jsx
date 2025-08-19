import React from "react";
import { Link } from "react-router-dom";
import clutchSpringImg1 from "../assets/p44.jpg"; 
import clutchSpringImg2 from "../assets/p45.jpg";
import headerBg from "../assets/b1.jpg";

// Left side images
import leftImg1 from "../assets/h1.png";
import leftImg2 from "../assets/h2.png";
import leftImg3 from "../assets/h8.png";

// Right side images
import rightImg1 from "../assets/h3.png";
import rightImg2 from "../assets/h5.png";
import rightImg3 from "../assets/h4.png";

export default function ClutchSpring() {
  return (
   <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800 font-sans -ml-2 -mr-2 -mt-2">

      {/* High-Performance Clutch Springs Hero Section */}
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
    <img src={leftImg2} alt="Decorative" className="w-40 h-40 object-contain translate-y-24" />
    <img src={rightImg1} alt="Decorative" className="w-40 h-40 object-contain -translate-y-24" />
    <img src={rightImg2} alt="Decorative" className="w-40 h-40 object-contain translate-y-24" />
    <img src={leftImg3} alt="Decorative" className="w-40 h-40 object-contain -translate-y-28" />
    <img src={rightImg3} alt="Decorative" className="w-40 h-40 object-contain translate-y-12" />
  </div>

  {/* ✅ Desktop Heading */}
  <div className="hidden md:block relative max-w-6xl mx-auto px-6 py-20 text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
      High-Performance Clutch Springs
    </h1>
    <p className="max-w-2xl mx-auto text-lg mb-6 text-white">
      Our clutch springs are engineered for maximum durability, consistent performance, and precise tension, 
      ensuring smooth engagement and reliable operation across automotive and industrial applications.
    </p>
  </div>

  {/* ✅ Mobile Heading */}
  <div className="md:hidden text-center relative px-6 py-16">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
      High-Performance Clutch Springs
    </h1>
    <p className="max-w-2xl mx-auto text-lg mb-6 text-white">
      Our clutch springs are engineered for maximum durability, consistent performance, and precise tension, 
      ensuring smooth engagement and reliable operation across automotive and industrial applications.
    </p>
  </div>
</div>


      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="flex justify-center">
          <img
            src={clutchSpringImg1}
            alt="Clutch Spring"
            className="rounded-xl shadow-lg w-full md:w-4/5 object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Our Clutch Springs Stand Out
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Built to handle high stress and repeated use, our clutch springs maintain consistent tension and 
            ensure smooth transmission engagement. They are available in multiple sizes and specifications.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 text-xl font-bold mr-2">•</span>
              Superior fatigue resistance for long-lasting performance
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 text-xl font-bold mr-2">•</span>
              Precision coiling for consistent engagement
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 text-xl font-bold mr-2">•</span>
              High-grade materials and anti-corrosion coatings
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
            Manufactured using advanced coiling techniques, heat treatment, and stringent quality checks, 
            our clutch springs provide optimal performance under extreme operating conditions.
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Industries We Serve
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Automotive clutches and transmissions</li>
            <li>Motorcycles, scooters, and heavy vehicles</li>
            <li>Industrial machinery and equipment</li>
            <li>Agricultural and construction machinery</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src={clutchSpringImg2}
            alt="Clutch Spring Manufacturing"
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
            <p className="text-gray-600">0.5 mm – 20 mm</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-800">Material</h4>
            <p className="text-gray-600">High Carbon Steel, Alloy Steel, Stainless Steel</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-800">Finish</h4>
            <p className="text-gray-600">Zinc Plated, Powder Coated, Phosphate Coating, Custom</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-blue-800 mb-4">
          Custom Clutch Springs Tailored for You
        </h3>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          Share your specifications, and our engineers will design clutch springs optimized for your exact application and performance requirements.
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
