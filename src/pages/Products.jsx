import React from "react";
import { useNavigate } from "react-router-dom";

import wireForm from "../assets/p10.jpg";
import extensionSpring from "../assets/g3.jpg";
import torsionSpring from "../assets/g2.jpg";
import conicalSpring from "../assets/g5.jpg";
import compressionspring from "../assets/g1.jpg";

const products = [
  {
    id: "torsion",
    title: "Torsion Spring",
    image: torsionSpring,
    short:
      "Torsion springs store rotational energy and release it to maintain balance or provide force in mechanical systems..."
  },
  {
    id: "wireform",
    title: "Wire Form",
    image: wireForm,
    short:
      "Wire forms are custom-shaped metal wires used for a wide range of mechanical and structural applications..."
  },
  {
    id: "extension",
    title: "Extension Spring",
    image: extensionSpring,
    short:
      "Extension springs absorb and store energy by resisting pulling forces, commonly used in garage doors and trampolines..."
  },
  {
    id: "conical",
    title: "Conical Spring",
    image: conicalSpring,
    short:
      "Conical springs have a tapered shape, providing stability and the ability to handle larger loads in compact spaces..."
  },
  {
    id: "compression",
    title: "Compression Spring",
    image: compressionspring,
    short:
      "Compression springs are open-coil springs that resist compressive forces and store mechanical energy..."
  }
];

export default function ProductsPage() {
  const navigate = useNavigate();

  const handleReadMore = (id) => {
    // Scroll to top before navigating
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      navigate(`/products/${id}`);
    }, 300);
  };

  return (
    <div className="w-full px-4 md:px-12 py-12 bg-gradient-to-b from-white to-blue-50">
      {/* Heading */}
      <div className="text-center mb-12">
               <h1 className="text-3xl font-bold text-blue-800">
          Our Product Range
        </h1>
        <p className="text-lg text-gray-700 mt-2 max-w-2xl mx-auto">
          Discover our premium range of springs and wire forms, engineered for
          precision, durability, and performance in diverse applications.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow overflow-hidden border border-gray-200"
          >
            {/* Image */}
            <div className="relative w-full h-56 overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Text Content */}
            <div className="p-6 flex flex-col">
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                {product.title}
              </h3>
              <p className="text-gray-700 text-sm mb-4">{product.short}</p>
              <button
                onClick={() => handleReadMore(product.id)}
                className="mt-auto self-start px-4 py-1 border border-orange-600 text-orange-600 rounded-full hover:bg-orange-600 hover:text-white text-sm font-medium transition-all duration-300"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
