import React from "react";
import { Link } from "react-router-dom";
import compressionSpringImg from "../assets/cp1.jpg";
import compressionSpringImg2 from "../assets/cp2.jpg";

export default function CompressionSpring() {
  return (
    <div className="w-full px-4 md:px-12 py-12 bg-gradient-to-b from-gray-50 to-blue-50">

      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Premium Compression Springs
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Engineered for precision, durability, and reliability, our compression springs 
          are designed to perform under the most demanding conditions across multiple industries.
        </p>
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
            <p className="text-gray-600">Zinc, Nickel, Powder Coating, Customized Finishes</p>
          </div>
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
