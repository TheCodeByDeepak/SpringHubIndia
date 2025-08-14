import React from "react";
import { Link } from "react-router-dom";
import extensionSpringImg from "../assets/e1.jpg"; 
import extensionSpringImg2 from "../assets/e2.jpg";

export default function ExtensionSpring() {
  return (
    <div className="w-full px-4 md:px-12 py-12 bg-gradient-to-b from-gray-50 to-blue-50">

      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl font-bold text-blue-800">
          Precision Extension Springs
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Engineered to provide reliable tension and controlled return force, our extension springs 
          excel in performance, durability, and consistency across a wide range of industrial and commercial applications.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="flex justify-center">
          <img
            src={extensionSpringImg}
            alt="Extension Spring"
            className="rounded-xl shadow-lg w-full md:w-4/5 object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Our Extension Springs Are Preferred
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Designed for optimal tensile performance, our extension springs deliver smooth pull-back action 
            and consistent force under repeated use. Available in various sizes and hooks to suit any application.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 text-xl font-bold mr-2">•</span>
              High tensile strength for reliable extension
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 text-xl font-bold mr-2">•</span>
              Custom hook, loop, and end designs
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 text-xl font-bold mr-2">•</span>
              Corrosion-resistant coatings for long life
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
            Crafted from premium materials using advanced coiling, heat treatment, and strict quality inspections, 
            our extension springs are built to meet precise load, tension, and durability requirements.
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Industries We Serve
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Automotive systems including doors and trunks</li>
            <li>Industrial machinery and tension equipment</li>
            <li>Garage doors, gates, and mechanical levers</li>
            <li>Consumer electronics and household devices</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src={extensionSpringImg2}
            alt="Extension Spring Manufacturing"
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
            <p className="text-gray-600">Stainless Steel, Carbon Steel, Music Wire</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-800">Finish</h4>
            <p className="text-gray-600">Zinc Plated, Powder Coated, Galvanized, Custom</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-blue-800 mb-4">
          Custom Extension Springs Tailored for You
        </h3>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          Provide your specifications, and our engineers will design extension springs optimized for your exact application and performance requirements.
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
