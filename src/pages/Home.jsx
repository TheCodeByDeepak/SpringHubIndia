import React from "react";
import {
  FaCogs,
  FaTools,
  FaIndustry,
  FaCheckCircle,
  FaArrowRight,
  FaThumbsUp,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";
import heroImg from "../assets/hero.jpg";
import spring1 from "../assets/g1.jpg";
import spring2 from "../assets/g2.jpg";
import spring3 from "../assets/g3.jpg";
import Spring5 from "../assets/g5.jpg"

import v6 from "../assets/v6.mp4";

const Home = () => {
  const products = [
    { img: spring1, name: "Compression Spring" },
    { img: spring2, name: "Torsion Spring" },
    { img: spring3, name: "Extension Spring" },
    { img: Spring5, name: "Conical Spring" },
  ];

  const loopedProducts = [...products, ...products]; // for seamless loop

  return (
    <section className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white">
        <img
          src={heroImg}
          alt="Springs"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative max-w-6xl mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Spring Hub India
          </h1>
          <p className="max-w-2xl mx-auto text-lg mb-6">
            Delivering precision-engineered springs with unmatched quality,
            reliability, and performance since our inception.
          </p>
          <a
            href="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold inline-flex items-center"
          >
            Get in Touch <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>

      {/* Our Core Expertise */}
      <div className="py-16 bg-[#F4F9FF]">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Our Core Expertise
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
          {[
            {
              icon: <FaCogs className="text-yellow-500 text-4xl mb-4" />,
              title: "Precision Engineering",
            },
            {
              icon: <FaTools className="text-yellow-500 text-4xl mb-4" />,
              title: "Custom Solutions",
            },
            {
              icon: <FaIndustry className="text-yellow-500 text-4xl mb-4" />,
              title: "Industry-Leading Standards",
            },
            {
              icon: <FaCheckCircle className="text-yellow-500 text-4xl mb-4" />,
              title: "Quality Assurance",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white shadow rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              {feature.icon}
              <h3 className="text-lg font-semibold text-blue-900">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Who We Are */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <video
          src={v6}
          className="rounded-lg shadow-lg object-cover w-full h-80"
          autoPlay
          muted
          playsInline
          loop
        />
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Who We Are</h2>
          <p className="text-gray-700 mb-4">
            We specialize in crafting high-quality springs for a wide range of
            industries. Our state-of-the-art facilities and skilled engineers
            ensure that every spring meets rigorous quality standards.
          </p>
          <a
            href="/about"
            className="inline-block bg-blue-900 text-white px-5 py-3 rounded-full font-semibold hover:bg-blue-800 transition"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Our Products */}
<div className="bg-[#F4F9FF] py-16">
  <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
    Our Products
  </h2>

  {/* Desktop Auto-scroll */}
  <div className="overflow-hidden max-w-6xl mx-auto px-6 hidden md:block">
    <div className="flex gap-6 animate-scroll">
      {loopedProducts.map((product, i) => (
        <div
          key={i}
          className="bg-white shadow rounded-lg overflow-hidden min-w-[250px] hover:shadow-lg transition flex-shrink-0"
        >
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-60 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="font-semibold text-blue-900">{product.name}</h3>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Mobile Grid (No Scroll) */}
  <div className="grid grid-cols-2 gap-6 px-6 max-w-6xl mx-auto md:hidden">
    {products.map((product, i) => (
      <div
        key={i}
        className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
      >
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 text-center">
          <h3 className="font-semibold text-blue-900">{product.name}</h3>
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
    `}
  </style>
</div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Why Choose Us?</h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-12">
          With years of experience, cutting-edge technology, and a commitment to
          excellence, we stand out as the trusted choice for springs across
          industries worldwide.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {[
            {
              icon: <FaThumbsUp className="text-yellow-500 text-4xl" />,
              title: "Trusted Quality",
              desc: "Every spring is manufactured to meet the highest industry standards.",
            },
            {
              icon: <FaClock className="text-yellow-500 text-4xl" />,
              title: "On-Time Delivery",
              desc: "We ensure your projects run smoothly with punctual delivery.",
            },
            {
              icon: <FaShieldAlt className="text-yellow-500 text-4xl" />,
              title: "Proven Reliability",
              desc: "Our springs perform consistently even in the toughest conditions.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition flex flex-col items-center text-center"
            >
              <div className="flex justify-center items-center mb-3">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-[#F4F9FF] py-16">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          What Our Clients Say
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {[
            {
              quote:
                "Spring Hub India has been our go-to supplier for years. The quality and consistency are unmatched.",
              name: "Ravi Kumar",
            },
            {
              quote:
                "Their team understands our needs and delivers custom solutions right on time.",
              name: "Priya Sharma",
            },
            {
              quote:
                "Reliable, innovative, and committed — that’s why we trust Spring Hub India for all our spring needs.",
              name: "Amit Verma",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-xl p-6 text-center border-t-4 border-orange-500 hover:shadow-xl transition"
            >
              <p className="text-gray-700 italic mb-4">"{t.quote}"</p>
              <h4 className="font-bold text-blue-900">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
