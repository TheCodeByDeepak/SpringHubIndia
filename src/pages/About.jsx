import React, { useEffect, useRef, useState } from "react";
import { FaUsers, FaProjectDiagram, FaTrophy, FaGlobe } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";

import productionManagerImg from "../assets/production.jpg";
import headerBg from "../assets/b5.jpg";
import spring1 from "../assets/p18.jpg";
import spring2 from "../assets/g2.jpg";
import spring3 from "../assets/g3.jpg";
import Spring4 from "../assets/g5.jpg";
import Spring5 from "../assets/p19.jpg";
import Spring6 from "../assets/p20.jpg";
import Spring7 from "../assets/p21.jpg";
import Spring8 from "../assets/p22.jpg";
import Spring9 from "../assets/p23.jpg";
import Spring10 from "../assets/p24.jpg";
import founderImg from "../assets/founder.jpg";

// Left side images
import leftImg1 from "../assets/h9.png";
import leftImg2 from "../assets/h7.png";
import leftImg3 from "../assets/h6.png";

// Right side images
import rightImg1 from "../assets/h8.png";
import rightImg2 from "../assets/h4.png";
import rightImg3 from "../assets/h10.png";

const stats = [
  { icon: <FaUsers />, value: 200, suffix: "+", label: "Clients Served" },
  { icon: <FaProjectDiagram />, value: 15, suffix: "+", label: "Major Projects" },
  { icon: <FaGlobe />, value: 10, suffix: "+", label: "Countries Served" },
  { icon: <FaTrophy />, value: 25, suffix: "+", label: "Certifications Earned" },
];

const StatsCard = ({ icon, value, suffix, label, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (isInView) setStart(true);
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className="bg-white p-6 rounded-xl shadow flex flex-col items-center"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
    >
      <div className="text-yellow-500 text-4xl mb-2">{icon}</div>
      <h4 className="text-blue-900 text-2xl font-bold">
        {start && <CountUp end={value} duration={3} suffix={suffix} />}
      </h4>
      <p className="text-sm font-medium text-blue-900">{label}</p>
    </motion.div>
  );
};

const experts = [
  { name: "Sanjay Yadav", title: "Production & Quality Manager", img: productionManagerImg },
];

const galleryItems = [
  { img: spring1, name: "Compression Spring" },
  { img: spring2, name: "Torsion Spring" },
  { img: spring3, name: "Extension Spring" },
  { img: Spring4, name: "Conical Spring" },
  { img: Spring5, name: "Tension Spring" },
  { img: Spring6, name: "Wire Form" },
  { img: Spring7, name: "Sheet Metal" },
  { img: Spring8, name: "Clutch Spring" },
  { img: Spring9, name: "Garter Spring" },
  { img: Spring10, name: "Spiral Spring" },
];

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800 font-sans -ml-2 -mr-2 -mt-2">
     {/* About Us Section */}
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
    <img src={leftImg2} alt="Decorative" className="w-40 h-40 object-contain translate-y-4" />
    <img src={rightImg1} alt="Decorative" className="w-40 h-40 object-contain -translate-y-2" />
    <img src={rightImg2} alt="Decorative" className="w-40 h-40 object-contain translate-y-6" />
    <img src={leftImg3} alt="Decorative" className="w-40 h-40 object-contain -translate-y-4" />
    <img src={rightImg3} alt="Decorative" className="w-40 h-40 object-contain translate-y-2" />
  </div>

  {/* ✅ Desktop Heading (only visible on md and above) */}
  <div className="hidden md:block relative max-w-6xl mx-auto px-6 py-20 text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      About Us
    </h1>
    <p className="max-w-3xl mx-auto text-lg">
      Delivering precision-engineered springs with unmatched quality, reliability, and performance across industries.
    </p>
  </div>

  {/* ✅ Mobile Heading */}
  <div className="md:hidden text-center relative px-6 py-16">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      About Us
    </h1>
    <p className="max-w-3xl mx-auto text-lg">
      Delivering precision-engineered springs with unmatched quality, reliability, and performance across industries.
    </p>
  </div>
</div>


      {/* Intro */}
      <motion.p
        className="text-gray-700 text-lg max-w-5xl mx-auto mb-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        We specialize in delivering precision springs with unmatched quality and trust across industries. From design to
        production, our commitment to excellence ensures every spring meets the highest performance and durability
        standards.
      </motion.p>

      {/* CEO Message */}
      <div className="bg-white shadow-md rounded-xl p-8 mb-12 ml-20 mr-20 max-w-6xl mx-auto flex flex-col sm:flex-row items-center">
        <img src={founderImg} alt="Founder" className="w-32 h-32 rounded-full object-cover mb-4 sm:mb-0 sm:mr-8" />
        <div>
          <h3 className="text-2xl font-bold text-blue-800 mb-2">Message from the C.E.O</h3>
          <p className="text-gray-700 text-base italic mb-2">
            "We believe in engineering excellence, innovation, and customer satisfaction as the foundation of our success."
          </p>
          <p className="text-base font-semibold text-orange-500">– <span className="text-blue-800">Shailesh Yadav</span>, C.E.O</p>
        </div>
      </div>

      {/* Company Info */}
      <div className="bg-white shadow-md rounded-xl p-8 mb-12 w-full max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-blue-800 mb-4">Company Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <div>
            <p><span className="font-semibold text-blue-800">Nature of Business:</span> Manufacturing</p>
            <p><span className="font-semibold text-blue-800">Company C.E.O:</span> Shailesh Yadav</p>
            <p><span className="font-semibold text-blue-800">Registered Address:</span> Mangalmurti Nagar Building No 10A 403, Tuungarfata, Sativali, Vasai (E) 401 208, Maharashtra</p>
          </div>
          <div>
            <p><span className="font-semibold text-blue-800">Banker:</span> Indian Bank</p>
            <p><span className="font-semibold text-blue-800">GST No:</span> 27BDRPY1193B1Z5</p>
          </div>
        </div>
      </div>

      {/* Vision, Mission & Values */}
      <div className="bg-white shadow-md rounded-xl p-8 mb-12 w-full max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-blue-800 mb-6">Vision, Mission & Values</h3>
        <div className="mb-4">
          <h4 className="font-semibold text-blue-800">Vision:</h4>
          <p className="text-gray-700">To be the most trusted provider of precision-engineered springs worldwide.</p>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold text-blue-800">Mission:</h4>
          <p className="text-gray-700">To provide high-quality, custom-engineered spring solutions with strong client relationships and timely delivery.</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-800">Core Values:</h4>
          <ul className="list-disc list-inside text-gray-700">
            <li>Customer Satisfaction</li>
            <li>Innovation</li>
            <li>Reliability</li>
            <li>Customer-First Approach</li>
            <li>Sustainability</li>
            <li>Integrity & Excellence</li>
          </ul>
        </div>
      </div>

      {/* Experts */}
      <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">Meet Our Experts</h3>
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {experts.map((expert, i) => (
          <motion.div
            key={i}
            className="bg-white shadow-md rounded-xl p-6 w-72 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={expert.img} alt={expert.name} className="w-28 h-28 rounded-full object-cover mb-4" />
            <h4 className="text-lg font-bold text-blue-800">{expert.name}</h4>
            <p className="text-sm font-semibold text-orange-500">{expert.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 w-full max-w-6xl mx-auto">
        {stats.map((stat, i) => (
          <StatsCard key={i} icon={stat.icon} value={stat.value} suffix={stat.suffix} label={stat.label} delay={0.2 * i} />
        ))}
      </div>

      {/* Gallery */}
      <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Work in Action</h3>
      <div className="overflow-hidden relative mb-12">
        <div className="flex animate-marquee gap-6">
          {[...galleryItems, ...galleryItems].map((item, i) => (
            <div key={i} className="w-[220px] flex-shrink-0 bg-white rounded-lg shadow overflow-hidden">
              <div className="h-[180px] overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-2 text-center">
                <h4 className="text-blue-900 font-semibold">{item.name}</h4>
              </div>
            </div>
          ))}
        </div>
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              display: flex;
              width: max-content;
              animation: marquee 25s linear infinite;
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default About;
