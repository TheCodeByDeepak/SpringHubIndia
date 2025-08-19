import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
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
import heroImg2 from "../assets/p36.jpg";
import heroImg3 from "../assets/p19.jpg"; 
import spring1 from "../assets/p18.jpg";
import spring2 from "../assets/g2.jpg";
import spring3 from "../assets/g3.jpg";
import Spring4 from "../assets/g5.jpg"
import Spring5 from "../assets/p19.jpg"
import Spring6 from "../assets/p20.jpg"
import Spring7 from "../assets/p21.jpg"
import Spring8 from "../assets/p22.jpg"
import Spring9 from "../assets/p23.jpg"
import Spring10 from "../assets/p24.jpg"
import v6 from "../assets/v6.mp4";

const Home = () => {
  const slides = [
    {
      img: heroImg,
      title: "Welcome to Spring Hub India",
      desc: "Delivering precision-engineered springs with unmatched quality, reliability, and performance since our inception.",
    },
   {
  img: heroImg2,
  title: "Proudly Made in India",
  desc: "Supporting the Make in India initiative by delivering world-class springs manufactured with precision, innovation, and Indian expertise.",
},

{
  img: heroImg3,
  title: "Innovation with Precision",
  desc: "Delivering high-quality springs and industrial solutions with precision and trust.",
}

  ];

  const [current, setCurrent] = useState(0);
const [isTransitioning, setIsTransitioning] = useState(true);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => prev + 1);
    setIsTransitioning(true);
  }, 5000);

  return () => clearInterval(interval);
}, []);

useEffect(() => {
  // If we reached the cloned last slide, reset without animation
  if (current === slides.length) {
    const timeout = setTimeout(() => {
      setIsTransitioning(false);
      setCurrent(0);
    }, 700); // should match transition duration (700ms above)

    return () => clearTimeout(timeout);
  }
}, [current, slides.length]);


  // ✅ Products Array (your existing code)
  const products = [
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

  


  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800 font-sans -ml-2 -mr-2 -mt-2">
     <div className="relative overflow-hidden h-[60vh] bg-blue-900 text-white -mt-6 -ml-4 -mr-4">
      {/* Slider container */}
    <div
  className={`flex h-full ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
  style={{ transform: `translateX(-${current * 100}%)` }}
>
  {[...slides, slides[0]].map((slide, index) => (
    <div
      key={index}
      className="w-full flex-shrink-0 relative h-full flex items-center justify-center"
    >
      <img
        src={slide.img}
        alt="slide"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="relative z-10 max-w-4xl px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
        <p className="max-w-2xl mx-auto text-lg mb-6">{slide.desc}</p>
        <Link
          to="/contact"
          onClick={() => window.scrollTo(0, 0)}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold inline-flex items-center"
        >
          Get in Touch <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  ))}
</div>


      {/* ✅ Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index ? "bg-orange-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>


       {/* Our Products */}
<div className="overflow-hidden relative mb-12 bg-[#F4F9FF] py-16 px-6">
  <h3 className="text-3xl font-bold text-center text-blue-900 mb-12">
    Our Categories
  </h3>

  <div className="flex animate-marquee gap-4">
    {[...products, ...products].map((item, i) => (
      <div
        key={i}
        className="w-[200px] sm:w-[220px] md:w-[250px] flex-shrink-0 bg-white rounded-lg shadow overflow-hidden"
      >
        {/* Image */}
        <div className="h-[150px] sm:h-[180px] md:h-[200px] overflow-hidden">
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
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
        gap: 1rem;
        width: max-content;
        animation: marquee 25s linear infinite;
      }
    `}
  </style>
</div>


      {/* Our Core Expertise */}
      <div className="-py-4 -mt-12">
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
      <div className="w-full px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
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
        <Link
  to="/about"
  onClick={() => window.scrollTo(0, 0)}
  className="inline-block bg-blue-900 text-white px-5 py-3 rounded-full font-semibold hover:bg-blue-800 transition"
>
  Learn More
</Link>


        </div>
      </div>

     

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto px-6 py-2 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Why Prefer Us?</h2>
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
      <div className="bg-[#F4F9FF] py-2">
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
