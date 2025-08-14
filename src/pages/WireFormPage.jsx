import React from "react";
import { Link } from "react-router-dom";
import wireFormImg from "../assets/w1.jpg"; 
import wireFormImg2 from "../assets/w2.jpg"; 

export default function WireFormSpring() {
  return (
    <div className="w-full px-4 md:px-12 py-12 bg-gradient-to-b from-white to-blue-50">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-3xl font-bold text-blue-800">
          Wire Form Springs
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Custom-shaped wire forms built with precision and durability — perfect for specialized industrial, mechanical, and commercial applications.
        </p>
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
