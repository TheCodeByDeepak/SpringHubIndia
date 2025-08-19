import React from "react";
import { Link } from "react-router-dom";
import tensionSpringImg1 from "../assets/p37.jpg"; 
import tensionSpringImg2 from "../assets/p38.jpg";
import g1 from "../assets/p19.jpg";
import g2 from "../assets/p37.jpg";
import g3 from "../assets/p6.jpg";
import g4 from "../assets/p16.jpg";
import g5 from "../assets/p41.jpg";
import g6 from "../assets/p40.jpg";
import g7 from "../assets/p15.jpg";
import headerBg from "../assets/b7.jpg";

// Left side images
import leftImg1 from "../assets/h6.png";
import leftImg2 from "../assets/h4.png";
import leftImg3 from "../assets/h3.png";

// Right side images
import rightImg1 from "../assets/h1.png";
import rightImg2 from "../assets/h7.png";
import rightImg3 from "../assets/h5.png";

export default function TensionSpringPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800 font-sans -ml-2 -mr-2 -mt-2">

      {/* Precision Tension Springs Hero Section */}
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
      Precision Tension Springs
    </h1>
    <p className="max-w-2xl mx-auto text-lg mb-6 text-white">
      Designed for reliable tension and smooth operation, our tension springs deliver consistent performance 
      across a wide range of industrial, automotive, and mechanical applications.
    </p>
  </div>

  {/* ✅ Mobile Heading */}
  <div className="md:hidden text-center relative px-6 py-16">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
      Precision Tension Springs
    </h1>
    <p className="max-w-2xl mx-auto text-lg mb-6 text-white">
      Designed for reliable tension and smooth operation, our tension springs deliver consistent performance 
      across a wide range of industrial, automotive, and mechanical applications.
    </p>
  </div>
</div>

      

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="flex justify-center">
          <img
            src={tensionSpringImg1}
            alt="Tension Spring"
            className="rounded-xl shadow-lg w-full md:w-4/5 object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Our Tension Springs Are Preferred
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Engineered for maximum durability and consistent extension force, our tension springs 
            are ideal for precision mechanisms, heavy-duty machinery, and custom industrial equipment.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 text-xl font-bold mr-2">•</span>
              High tensile strength for precise tension control
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 text-xl font-bold mr-2">•</span>
              Custom hook and loop designs available
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 text-xl font-bold mr-2">•</span>
              Corrosion-resistant coatings for long service life
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
            Produced with high-quality materials and precise coiling techniques, our tension springs undergo 
            strict quality inspections to ensure optimal performance in every application.
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Industries We Serve
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Automotive components and suspension systems</li>
            <li>Industrial machinery and mechanical tools</li>
            <li>Garage doors, gates, and lever mechanisms</li>
            <li>Consumer electronics and household devices</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src={tensionSpringImg2}
            alt="Tension Spring Manufacturing"
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
            <p className="text-gray-600">0.3 mm – 15 mm</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-800">Material</h4>
            <p className="text-gray-600">Stainless Steel, Carbon Steel, Music Wire, Galvanized</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-800">Finish</h4>
            <p className="text-gray-600">Spring Steel are available in Nickel, Yellow and White Zinc Plating, Black Oxidizing, Lacquering, Green Passivation and Trivalent Passivation. Stainless Steel Springs are available with Bright Finish.</p>
          </div>
        </div>
      </div>

       {/* Additional Torsion Spring Images */}
<div className="my-16 text-center">
  <h3 className="text-3xl font-bold text-blue-800 mb-8">
    Tension Spring Gallery
  </h3>

  <div className="flex flex-wrap justify-center gap-6">
    {[g1, g2, g3, g4, g5, g6, g7 /* add more images here */].map((img, i) => (
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
          Custom Tension Springs Tailored for Your Needs
        </h3>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          Provide your specifications, and our engineers will design tension springs optimized for your application, ensuring reliability and performance.
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
