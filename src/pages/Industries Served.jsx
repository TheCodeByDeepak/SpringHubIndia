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
} from "react-icons/fa";

// Import images from assets
import ManufacturingImg from "../assets/Manufacturing.png";
import AutomotiveImg from "../assets/Automotive.png";
import ConstructionImg from "../assets/Construction.png";
import ElectricalImg from "../assets/Electrical.png";
import InfrastructureImg from "../assets/Infrastructure.png";
import IndustrialEquipmentImg from "../assets/Industrial_Equipment.png";
import AgricultureImg from "../assets/Agriculture.png";
import HealthcareImg from "../assets/Healthcare.png";

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
];

export default function IndustriesServed() {
  return (
    <section className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-16 py-12 bg-gradient-to-b from-white to-blue-50 text-gray-800 font-sans">
      {/* Section Title */}
      <div className="text-center mb-14 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800">Industries Served</h1>
        <p className="text-lg text-gray-700">
          Serving diverse industries with tailored spring solutions and precision components.
        </p>
      </div>

      {/* Industries Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl shadow overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Image with Overlay */}
            <div className="relative w-full h-40 overflow-hidden group">
              <img
                src={industry.image}
                alt={industry.name}
                className="w-full h-full object-cover rounded-t-xl transform group-hover:scale-105 transition-transform duration-300"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl"></div>
            </div>

            {/* Card Content */}
            <div className="px-6 py-6 flex flex-col items-center text-center">
              {industry.icon}
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{industry.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{industry.description}</p>
              {industry.keyProducts && (
                <ul className="max-w-[180px] mx-auto text-gray-500 text-xs list-disc list-inside mb-0 text-left">
                  {industry.keyProducts.map((product, i) => (
                    <li key={i} className="mb-1 leading-relaxed font-medium">
                      {product}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
