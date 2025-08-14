import React from "react";
import { Link } from "react-router-dom";
import torsionSpringImg from "../assets/g1.jpg";
import torsionSpringImg2 from "../assets/g2.jpg";

export default function TorsionSpring() {
  return (
    <div className="w-full px-4 md:px-12 py-12 bg-gradient-to-b from-gray-50 to-blue-50">

      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl font-bold text-blue-800">
          Precision Torsion Springs
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Designed for rotational force, reliability, and long-term durability, our torsion springs 
          meet the exacting standards of industrial, commercial, and consumer applications.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="flex justify-center">
          <img
            src={torsionSpringImg}
            alt="Torsion Spring"
            className="rounded-xl shadow-lg w-full md:w-4/5 object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Choose Our Torsion Springs
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our torsion springs provide consistent torque and maintain performance under repeated cycles. 
            Built from premium stainless or carbon steel, they ensure reliability in demanding applications.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 text-xl font-bold mr-2">•</span>
              Corrosion-resistant, high-quality materials
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 text-xl font-bold mr-2">•</span>
              Customizable size, angle, and torque specifications
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 text-xl font-bold mr-2">•</span>
              Rigorous testing for durability and precision
            </li>
          </ul>
        </div>
      </div>

      {/* Applications & Manufacturing */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Manufacturing & Application
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Each torsion spring undergoes precision coiling, stress-relieving heat treatment, 
            and thorough inspection to ensure optimal performance and long operational life.
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Industries We Serve
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Automotive components (doors, trunk mechanisms, throttle systems)</li>
            <li>Industrial machinery and mechanical assemblies</li>
            <li>Home appliances and electronics</li>
            <li>Construction, agricultural, and heavy-duty equipment</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src={torsionSpringImg2}
            alt="Torsion Spring Manufacturing"
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
            <p className="text-gray-600">Stainless Steel / Carbon Steel / Alloy Steel</p>
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
          Custom Torsion Springs Available
        </h3>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          Provide your requirements, and our engineers will design torsion springs tailored to your exact application, torque, and size specifications.
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
