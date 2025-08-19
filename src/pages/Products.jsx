import React from "react";
import { useNavigate } from "react-router-dom";

import wireForm from "../assets/p42.jpg";
import torsionSpring from "../assets/g2.jpg";
import conicalSpring from "../assets/p30.jpg";
import compressionspring from "../assets/p18.jpg";
import tensionSpring from "../assets/p39.jpg";
import sheetMetal from "../assets/p21.jpg";
import clutchSpring from "../assets/p22.jpg";
import garterSpring from "../assets/p23.jpg";
import spiralSpring from "../assets/p24.jpg";
import headerBg from "../assets/b1.jpg";
// Left side images
import leftImg1 from "../assets/h1.png";
import leftImg2 from "../assets/h2.png";
import leftImg3 from "../assets/h3.png";

// Right side images
import rightImg1 from "../assets/h4.png";
import rightImg2 from "../assets/h5.png";
import rightImg3 from "../assets/h6.png";
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
  },
  {
    id: "tension",
    title: "Tension Spring",
    image: tensionSpring,
    short:
      "Tension springs resist stretching and are commonly used in automotive, machinery, and door systems..."
  },
  {
    id: "sheetmetal",
    title: "Sheet Metal",
    image: sheetMetal,
    short:
      "Sheet metal components are precision-cut and formed for various industrial and mechanical applications..."
  },
  {
    id: "clutch",
    title: "Clutch Spring",
    image: clutchSpring,
    short:
      "Clutch springs provide force and tension in automotive and machinery clutch systems, ensuring smooth operation..."
  },
  {
    id: "garter",
    title: "Garter Spring",
    image: garterSpring,
    short:
      "Garter springs are circular springs used for sealing and maintaining tension in mechanical assemblies..."
  },
  {
    id: "spiral",
    title: "Spiral Spring",
    image: spiralSpring,
    short:
      "Spiral springs are flat wound springs used in clocks, measuring instruments, and other precision devices..."
  }
];

export default function ProductsPage() {
  const navigate = useNavigate();

  const handleReadMore = (id) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      navigate(`/products/${id}`);
    }, 300);
  };

  return (
   
     <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800 font-sans -ml-2 -mr-2 -mt-2">
{/* Heading Section */}
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
    <img src={leftImg2} alt="Decorative" className="w-40 h-40 object-contain translate-y-0" />
    <img src={rightImg1} alt="Decorative" className="w-40 h-40 object-contain -translate-y-16" />
    <img src={rightImg2} alt="Decorative" className="w-40 h-40 object-contain translate-y-20" />
    <img src={leftImg3} alt="Decorative" className="w-32 h-32 object-contain -translate-y-12" />
    <img src={rightImg3} alt="Decorative" className="w-40 h-40 object-contain translate-y-2" />
  </div>

  {/* ✅ Desktop Heading (only visible on md and above) */}
  <div className="hidden md:block relative max-w-6xl mx-auto px-6 py-20 text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">
      Our Product
    </h1>
    <p className="text-lg mb-0 text-white">
      Discover our premium range of springs and wire forms, engineered for precision, durability, and performance.
    </p>
  </div>

  {/* ✅ Mobile Heading */}
  <div className="md:hidden text-center relative px-6 py-6">
    <h1 className="text-4xl font-bold mb-4 text-white">
      Our Product
    </h1>
    <p className="text-lg mb-6 text-white">
      Discover our premium range of springs and wire forms, engineered for precision, durability, and performance.
    </p>
  </div>
</div>



      {/* Products Grid (no background container) */}
      <div className="max-w-6xl -ml-5 -mr-5 mx-auto px-4 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow overflow-hidden border border-gray-200"
          >
            <div className="relative w-full h-56 overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
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
