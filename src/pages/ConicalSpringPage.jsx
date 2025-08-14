import React from "react";
import { Link } from "react-router-dom";
import conicalSpringImg from "../assets/c1.jpg"; 
import conicalSpringImg2 from "../assets/c2.jpg";

export default function ConicalSpring() {
  return (
    <div className="w-full px-4 md:px-12 py-12 bg-gradient-to-b from-gray-50 to-blue-50">

      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl font-bold text-blue-800">
          Conical Compression Springs
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Engineered for compact design, efficient load handling, and high stability, 
          our conical springs deliver superior performance across diverse industrial applications.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="flex justify-center">
          <img
            src={conicalSpringImg}
            alt="Conical Spring"
            className="rounded-xl shadow-lg w-full md:w-4/5 object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Our Conical Springs Stand Out
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Designed to provide maximum stability with minimum solid height, our conical springs are 
            ideal for applications requiring compact size without compromising on load capacity.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 text-xl font-bold mr-2">•</span>
              Space-saving tapered geometry
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 text-xl font-bold mr-2">•</span>
              Wide range of load capacities
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 text-xl font-bold mr-2">•</span>
              Precision-engineered for uniform compression
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
            Our conical springs are produced using high-quality materials, advanced coiling techniques, 
            heat treatment, and rigorous quality control. This ensures consistent performance, reliability, 
            and long service life.
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Industries We Serve
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Automotive and vehicle suspension systems</li>
            <li>Industrial machinery and precision equipment</li>
            <li>Electrical contacts, relays, and switches</li>
            <li>Medical and laboratory instruments</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src={conicalSpringImg2}
            alt="Conical Spring Manufacturing"
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
            <p className="text-gray-600">0.3 mm – 12 mm</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-800">Material</h4>
            <p className="text-gray-600">Stainless Steel, Carbon Steel, Alloy Steel</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-800">Finish</h4>
            <p className="text-gray-600">Zinc Plated, Powder Coated, Custom Finishes</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-blue-800 mb-4">
          Custom Solutions Available
        </h3>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          Tell us your project requirements, and our engineers will design the perfect conical spring tailored to your needs.
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
