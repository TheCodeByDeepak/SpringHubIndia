import React from "react";
import {
  FaIndustry,
  FaTruck,
  FaTools,
  FaBolt,
  FaBuilding,
  FaCogs,
  FaAppleAlt,
  FaHeartbeat,
  FaBookOpen,
} from "react-icons/fa";

import ManufacturingImg from "../assets/Manufacturing.png";
import AutomotiveImg from "../assets/Automotive.png";
import ConstructionImg from "../assets/Construction.png";
import ElectricalImg from "../assets/Electrical.png";
import InfrastructureImg from "../assets/Infrastructure.png";
import IndustrialEquipmentImg from "../assets/Industrial_Equipment.png";
import AgricultureImg from "../assets/Agriculture.png";
import HealthcareImg from "../assets/Healthcare.png";
import EducationImg from "../assets/Education.png";
import headerBg from "../assets/b3.jpg";
// Left side images
import leftImg1 from "../assets/h9.png";
import leftImg2 from "../assets/h2.png";
import leftImg3 from "../assets/h7.png";

// Right side images
import rightImg1 from "../assets/h6.png";
import rightImg2 from "../assets/h4.png";
import rightImg3 from "../assets/h1.png";

const industries = [
  {
    image: ManufacturingImg,
    icon: <FaIndustry className="text-blue-600 text-4xl mb-4" />,
    name: "Manufacturing",
    description:
      "Providing durable and precise components tailored for manufacturing processes.",
    keyProducts: ["Compression Springs", "Torsion Springs", "Extension Springs"],
  },
  {
    image: AutomotiveImg,
    icon: <FaTruck className="text-green-600 text-4xl mb-4" />,
    name: "Automotive",
    description:
      "Reliable springs and parts used in automotive assembly and maintenance.",
    keyProducts: ["Coil Springs", "Shock Absorbers", "Wire Form"],
  },
  {
    image: ConstructionImg,
    icon: <FaTools className="text-yellow-600 text-4xl mb-4" />,
    name: "Construction",
    description:
      "Robust solutions designed to withstand tough construction site conditions.",
    keyProducts: ["Heavy-Duty Springs", "Vibration Dampers"],
  },
  {
    image: ElectricalImg,
    icon: <FaBolt className="text-red-600 text-4xl mb-4" />,
    name: "Electrical",
    description:
      "Precision-engineered components for electrical and electronics applications.",
    keyProducts: ["Contact Springs", "Terminal Springs"],
  },
  {
    image: InfrastructureImg,
    icon: <FaBuilding className="text-purple-600 text-4xl mb-4" />,
    name: "Infrastructure",
    description:
      "Components supporting infrastructure development with long-lasting quality.",
    keyProducts: ["Bridge Bearings", "Load Springs"],
  },
  {
    image: IndustrialEquipmentImg,
    icon: <FaCogs className="text-indigo-600 text-4xl mb-4" />,
    name: "Industrial Equipment",
    description:
      "Custom-engineered springs and parts for various industrial machines.",
    keyProducts: ["Machine Springs", "Precision Components"],
  },
  {
    image: AgricultureImg,
    icon: <FaAppleAlt className="text-pink-600 text-4xl mb-4" />,
    name: "Agriculture",
    description:
      "Durable components suited for agricultural tools and machinery.",
    keyProducts: ["Plow Springs", "Seeder Springs"],
  },
  {
    image: HealthcareImg,
    icon: <FaHeartbeat className="text-red-400 text-4xl mb-4" />,
    name: "Healthcare",
    description:
      "Precision springs and parts for medical devices and healthcare equipment.",
    keyProducts: ["Micro Springs", "Medical Device Components"],
  },
  {
    image: EducationImg,
    icon: <FaBookOpen className="text-orange-600 text-4xl mb-4" />,
    name: "Education",
    description:
      "Reliable components for educational tools, lab equipment, and training devices.",
    keyProducts: ["Lab Springs", "Demo Equipment Parts"],
  },
];

export default function IndustriesServed() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800 font-sans -mt-2 -ml-2 -mr-2">
     {/* Industries Served Section */}
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
    <img src={leftImg2} alt="Decorative" className="w-40 h-40 object-contain translate-y-16" />
    <img src={rightImg1} alt="Decorative" className="w-40 h-40 object-contain -translate-y-20" />
    <img src={rightImg2} alt="Decorative" className="w-40 h-40 object-contain translate-y-16" />
    <img src={leftImg3} alt="Decorative" className="w-40 h-40 object-contain -translate-y-12" />
    <img src={rightImg3} alt="Decorative" className="w-40 h-40 object-contain translate-y-2" />
  </div>

  {/* ✅ Desktop Heading (only visible on md and above) */}
  <div className="hidden md:block relative max-w-6xl mx-auto px-6 py-20 text-center">
    <h1 className="text-5xl font-bold mb-4 text-white">
      Industries Served
    </h1>
    <p className="text-lg mb-6 text-white max-w-3xl mx-auto">
      Serving diverse industries with tailored spring solutions and precision components.
    </p>
  </div>

  {/* ✅ Mobile Heading */}
  <div className="md:hidden text-center relative px-6 py-12">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
      Industries Served
    </h1>
    <p className="w-full max-w-3xl mx-auto text-lg mb-6 text-white">
      Serving diverse industries with tailored spring solutions and precision components.
    </p>
  </div>
</div>




      {/* ✅ Full-Width Industries Grid */}
      <div className="px-6 sm:px-8 md:px-12 lg:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl shadow overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Image */}
            <div className="relative w-full h-40 overflow-hidden group">
              <img
                src={industry.image}
                alt={industry.name}
                className="w-full h-full object-cover rounded-t-xl transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl"></div>
            </div>

            {/* Card Content */}
            <div className="px-6 py-6 flex flex-col items-center text-center">
              {industry.icon}
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {industry.name}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                {industry.description}
              </p>
              {industry.keyProducts && (
                <ul className="max-w-[180px] mx-auto text-gray-500 text-xs list-disc list-inside mb-0 text-left">
                  {industry.keyProducts.map((product, i) => (
                    <li
                      key={i}
                      className="mb-1 leading-relaxed font-medium"
                    >
                      {product}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
