import React from "react";
import { Link } from "react-router-dom";
import garterSpringImg1 from "../assets/p46.jpg"; 
import garterSpringImg2 from "../assets/p47.jpg";
import headerBg from "../assets/b4.jpg";

// Left side images
import leftImg1 from "../assets/h8.png";
import leftImg2 from "../assets/h5.png";
import leftImg3 from "../assets/h3.png";

// Right side images
import rightImg1 from "../assets/h10.png";
import rightImg2 from "../assets/h2.png";
import rightImg3 from "../assets/h1.png";

export default function GarterSpringPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800 font-sans -ml-2 -mr-2 -mt-2">

            {/* Precision Garter Springs Hero Section */}
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
    <img src={leftImg3} alt="Decorative" className="w-40 h-40 object-contain -translate-y-20" />
    <img src={rightImg3} alt="Decorative" className="w-40 h-40 object-contain translate-y-12" />
  </div>

  {/* ✅ Desktop Heading (only visible on md and above) */}
  <div className="hidden md:block relative max-w-6xl mx-auto px-6 py-20 text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
      Precision Garter Springs
    </h1>
    <p className="max-w-2xl mx-auto text-lg mb-6 text-white">
      Our garter springs provide uniform radial tension and reliability, ensuring optimal performance 
      in sealing, clamping, and mechanical applications.
    </p>
  </div>

  {/* ✅ Mobile Heading */}
  <div className="md:hidden text-center relative px-6 py-16">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
      Precision Garter Springs
    </h1>
    <p className="max-w-2xl mx-auto text-lg mb-6 text-white">
      Our garter springs provide uniform radial tension and reliability, ensuring optimal performance 
      in sealing, clamping, and mechanical applications.
    </p>
  </div>
</div>


      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="flex justify-center">
          <img
            src={garterSpringImg1}
            alt="Garter Spring"
            className="rounded-xl shadow-lg w-full md:w-4/5 object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Our Garter Springs Are Preferred
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Manufactured for consistent radial tension and durability, our garter springs are ideal for applications 
            requiring secure seals, uniform pressure, and long-lasting performance.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 text-xl font-bold mr-2">•</span>
              Uniform radial force for precise sealing
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 text-xl font-bold mr-2">•</span>
              Durable materials for high-stress environments
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 text-xl font-bold mr-2">•</span>
              Custom sizes and tension specifications available
            </li>
          </ul>
        </div>
      </div>

      {/* Applications & Manufacturing */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Applications & Manufacturing Excellence
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Produced with precise coiling techniques and high-quality materials, our garter springs undergo 
            rigorous testing to ensure consistent tension, durability, and reliable operation.
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Industries We Serve
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Sealing systems and mechanical seals</li>
            <li>Automotive components and clutch assemblies</li>
            <li>Industrial machinery and mechanical tools</li>
            <li>Medical devices and precision equipment</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src={garterSpringImg2}
            alt="Garter Spring Manufacturing"
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
            <p className="text-gray-600">0.3 mm – 10 mm</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-800">Material</h4>
            <p className="text-gray-600">Carbon Steel, Stainless Steel, Alloy Steel</p>
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
          Custom Garter Springs for Your Application
        </h3>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          Share your specifications, and our engineers will design garter springs tailored for your exact application, 
          ensuring consistent performance and reliability.
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
