import React, { useEffect, useRef, useState } from "react";
import {
  FaCogs,
  FaTools,
  FaIndustry,
  FaCheckCircle,
  FaUsers,
  FaProjectDiagram,
  FaTrophy,
  FaGlobe,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";

import productionManagerImg from "../assets/production.jpg";
import qualityHeadImg from "../assets/quality.jpg";
import gallery1 from "../assets/g1.jpg";
import gallery2 from "../assets/g2.jpg";
import gallery3  from "../assets/g3.jpg";
import gallery4 from "../assets/g5.jpg"
import founderImg from "../assets/founder.jpg";

const features = [
  { icon: <FaCogs className="text-yellow-500 text-3xl mb-2" />, title: "Precision Engineering" },
  { icon: <FaTools className="text-yellow-500 text-3xl mb-2" />, title: "Custom Solutions" },
  { icon: <FaIndustry className="text-yellow-500 text-3xl mb-2" />, title: "Industry-Leading Standards" },
  { icon: <FaCheckCircle className="text-yellow-500 text-3xl mb-2" />, title: "Quality Assurance" },
];

const stats = [
  { icon: <FaUsers className="text-yellow-500 text-3xl mb-2" />, value: 200, suffix: "+", label: "Clients Served" },
  { icon: <FaProjectDiagram className="text-yellow-500 text-3xl mb-2" />, value: 15, suffix: "+", label: "Major Projects" },
  { icon: <FaGlobe className="text-yellow-500 text-3xl mb-2" />, value: 10, suffix: "+", label: "Countries Served" },
  { icon: <FaTrophy className="text-yellow-500 text-3xl mb-2" />, value: 25, suffix: "+", label: "Certifications Earned" },
];

const StatsCard = ({ icon, value, suffix, label, delay }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (isInView) setStartCount(true);
  }, [isInView]);

  return (
    <motion.div
      ref={containerRef}
      className="bg-white p-4 rounded-xl shadow flex flex-col items-center"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
    >
      <div className="text-3xl text-yellow-600 mb-2">{icon}</div>
      <h4 className="text-blue-900 text-xl font-bold">
        {startCount && <CountUp end={value} duration={3} suffix={suffix} />}
      </h4>
      <p className="text-sm font-medium text-blue-900">{label}</p>
    </motion.div>
  );
};

const experts = [
  { name: "Sanjay Yadav", title: "Production Manager", img: productionManagerImg },
  { name: "Sanjay Yadav", title: "Quality Head", img: qualityHeadImg },
];

const galleryItems = [
  { img: gallery1, name: "Compression Spring" },
  { img: gallery2, name: "Torsion Spring" },
  { img: gallery3, name: "Extension Spring" },
  { img: gallery4, name: "Conical Spring" },
];

const About = () => {
  return (
    <section id="about" className="bg-[#F4F9FF] py-12 px-6 md:px-20 text-center scroll-mt-20">
      {/* Title & Intro */}
      <motion.h2
        className="text-3xl font-bold text-blue-900 mb-2"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        About Us
      </motion.h2>
      <motion.p
        className="text-gray-700 max-w-3xl mx-auto mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        We specialize in delivering precision springs with unmatched quality and trust across industries.
        From design to production, our commitment to excellence ensures every spring meets the highest
        performance and durability standards. Our team works closely with clients to deliver custom-engineered
        solutions tailored to their specific needs.
      </motion.p>

      {/* Founder Message */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-10 max-w-3xl mx-auto flex flex-col sm:flex-row items-center text-left">
        <img src={founderImg} alt="Founder" className="w-28 h-28 rounded-full object-cover mb-4 sm:mb-0 sm:mr-6" />
        <div>
          <h3 className="text-xl font-bold text-blue-800 mb-2">Message from the Founder</h3>
          <p className="text-gray-700 text-sm italic mb-2">
            "We believe in engineering excellence, innovation, and customer satisfaction as the foundation of our success."
          </p>
          <p className="text-sm font-semibold text-orange-500">
            – <span className="text-blue-800">Shailesh Yadav</span>, Founder
          </p>
        </div>
      </div>

      {/* Experts Section */}
      <h3 className="text-2xl font-bold text-blue-900 mb-6">Meet Our Experts</h3>
      <div className="flex flex-col md:flex-row justify-center gap-8 mb-10">
        {experts.map((expert, i) => (
          <motion.div
            key={i}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={expert.img} alt={expert.name} className="w-28 h-28 rounded-full object-cover mb-4" />
            <h4 className="text-lg font-bold text-blue-800">{expert.name}</h4>
            <p className="text-sm font-semibold text-orange-500 mb-2">{expert.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, i) => (
          <StatsCard key={i} icon={stat.icon} value={stat.value} suffix={stat.suffix} label={stat.label} delay={0.2 * i} />
        ))}
      </div>

      {/* Gallery */}
      <h3 className="text-2xl font-bold text-blue-900 mb-6">Our Work in Action</h3>

      {/* Mobile Grid */}
      <div className="grid grid-cols-2 gap-4 md:hidden mb-12">
        {galleryItems.map((item, i) => (
          <div key={i} className="bg-white rounded-lg shadow overflow-hidden">
            <img src={item.img} alt={item.name} className="w-full h-40 object-cover" />
            <div className="p-2 text-center">
              <h4 className="text-blue-900 font-semibold">{item.name}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Auto-scroll */}
      <div className="overflow-hidden relative hidden md:block mb-12">
        <div className="flex animate-scroll gap-4">
          {galleryItems.concat(galleryItems).map((item, i) => (
            <div
              key={i}
              className="min-w-[25%] flex-shrink-0 bg-white rounded-lg shadow overflow-hidden"
            >
              <img src={item.img} alt={item.name} className="w-full h-56 object-cover" />
              <div className="p-2 text-center">
                <h4 className="text-blue-900 font-semibold">{item.name}</h4>
              </div>
            </div>
          ))}
        </div>

        <style>
          {`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll {
              animation: scroll 10s linear infinite;
            }
            /* Hide scrollbar */
            .overflow-hidden::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default About;
