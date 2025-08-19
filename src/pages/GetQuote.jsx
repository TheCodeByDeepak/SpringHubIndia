import React, { useState } from "react";
import { Phone, Mail, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import headerBg from "../assets/b9.jpg";
// Left side images
import leftImg1 from "../assets/h6.png";
import leftImg2 from "../assets/h5.png";
import leftImg3 from "../assets/h3.png";

// Right side images
import rightImg1 from "../assets/h8.png";
import rightImg2 from "../assets/h6.png";
import rightImg3 from "../assets/h2.png";

export default function GetAQuote() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    details: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.service.trim()) newErrors.service = "Service is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    setFormData({ name: "", email: "", service: "", details: "" });
  };

  const faqs = [
    {
      question: "Is getting a quote free?",
      answer: "Yes, requesting a quote is completely free of charge."
    },
    {
      question: "How long does it take to receive a quote?",
      answer: "Typically, we respond within 1 business day."
    },
    {
      question: "Can I get a quote over WhatsApp?",
      answer:
        "Absolutely! Reach us on WhatsApp and we'll assist you immediately."
    },
    {
      question: "What information do I need to provide?",
      answer:
        "You can provide service type, location, budget (if any), and your contact info."
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800 font-sans -ml-2 -mr-2 -mt-2">
      {/* Get a Quote Section */}
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
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
      Get a Quote
    </h1>
    <p className="max-w-2xl mx-auto text-lg mb-6 text-white">
      Fast, reliable, and always available. Let’s get you started.
    </p>
  </div>

  {/* ✅ Mobile Heading */}
  <div className="md:hidden text-center relative px-6 py-16">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
      Get a Quote
    </h1>
    <p className="max-w-2xl mx-auto text-lg mb-6 text-white">
      Fast, reliable, and always available. Let’s get you started.
    </p>
  </div>
</div>


      {/* Grid Layout */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="space-y-10">
          {/* Contact Options */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
  <Phone className="text-orange-500" />
  <div className="flex flex-col">
    <a
      href="tel:+918007431996"
      className="text-lg font-medium hover:underline"
    >
      Call: +91 80074 31996
    </a>
    <a
      href="tel:+918127516770"
      className="text-lg font-medium hover:underline"
    >
      Call: +91 81275 16770
    </a>
  </div>
</div>

<div className="flex items-center gap-4">
  <FaWhatsapp className="text-green-600 text-2xl" />
  <div className="flex flex-col">
    <a
      href="https://wa.me/918007431996"
      target="_blank"
      rel="noopener noreferrer"
      className="text-lg font-medium hover:underline"
    >
      WhatsApp: +91 80074 31996
    </a>
    <a
      href="https://wa.me/918127516770"
      target="_blank"
      rel="noopener noreferrer"
      className="text-lg font-medium hover:underline"
    >
      WhatsApp: +91 81275 16770
    </a>
  </div>
</div>

            <div className="flex items-center gap-4">
              <Mail className="text-blue-600" />
              <a
                href="mailto:info@springhubindia.com"
                className="text-lg font-medium hover:underline"
              >
                Email: info@springhubindia.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="text-yellow-500" />
              <p className="text-lg font-medium">
                Mon - Sat, 9:00 AM – 7:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Service Areas */}
          <div className="bg-white border rounded-xl shadow p-6">
            <h3 className="text-2xl font-bold text-blue-800 mb-6">
              Service Areas
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Custom Spring Design",
                  desc: "Tailored engineering solutions to meet specific mechanical needs."
                },
                {
                  title: "Pan-India Delivery",
                  desc: "Nationwide delivery for industrial bulk or custom orders."
                },
                {
                  title: "Bulk Manufacturing",
                  desc: "Scalable production for large orders with quality assurance."
                },
               
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col h-full">
                  <h4 className="text-lg font-semibold text-blue-800">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Trust and Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white border shadow px-6 py-3 rounded-lg text-center w-full h-full">
              <p className="text-2xl font-bold text-blue-700">500+</p>
              <p className="text-gray-600 text-sm">Quotes Served</p>
            </div>
            <div className="bg-white border shadow px-6 py-3 rounded-lg text-center w-full h-full">
              <p className="text-2xl font-bold text-blue-700">100%</p>
              <p className="text-gray-600 text-sm">Customer Satisfaction</p>
            </div>
            <div className="bg-white border shadow px-6 py-3 rounded-lg text-center w-full h-full col-span-full sm:col-span-1">
              <p className="text-2xl font-bold text-blue-700">24/7</p>
              <p className="text-gray-600 text-sm">Support</p>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              Our Certifications
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              
              <div className="bg-white border shadow px-6 py-3 rounded-lg text-center w-full h-full">
                <p className="text-2xl font-bold text-blue-700">MSME</p>
                <p className="text-gray-600 text-sm">Govt. Registered</p>
              </div>
              
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-10">
          {/* Get a Quote Form */}
         <div className="bg-white p-6 rounded-xl shadow border">
  <h3 className="text-2xl font-bold text-blue-800 mb-4">
    Request a Quote
  </h3>
  <form className="space-y-4" onSubmit={handleSubmit}>
    {/* Name */}
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="Your Name"
      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
        errors.name
          ? "border-red-500 focus:ring-red-500"
          : "focus:ring-blue-500"
      }`}
    />
    {errors.name && (
      <p className="text-red-600 text-sm">{errors.name}</p>
    )}

    {/* Company Name */}
    <input
      type="text"
      name="company"
      value={formData.company}
      onChange={handleChange}
      placeholder="Company Name"
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    {/* Email */}
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Your Email"
      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
        errors.email
          ? "border-red-500 focus:ring-red-500"
          : "focus:ring-blue-500"
      }`}
    />
    {errors.email && (
      <p className="text-red-600 text-sm">{errors.email}</p>
    )}

    {/* City */}
    <input
      type="text"
      name="city"
      value={formData.city}
      onChange={handleChange}
      placeholder="City"
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    {/* Product */}
    <input
      type="text"
      name="service"
      value={formData.service}
      onChange={handleChange}
      placeholder="Product Name"
      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
        errors.service
          ? "border-red-500 focus:ring-red-500"
          : "focus:ring-blue-500"
      }`}
    />
    {errors.service && (
      <p className="text-red-600 text-sm">{errors.service}</p>
    )}

    {/* Details */}
    <textarea
      name="details"
      value={formData.details}
      onChange={handleChange}
      placeholder="Additional Details"
      rows={3}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    ></textarea>

    {/* ✅ Success Message */}
    {showSuccess && (
      <div className="text-green-700 px-4 py-2 font-medium">
        Request submitted successfully!
      </div>
    )}

    <button
      type="submit"
      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
    >
      Submit Request
    </button>
  </form>
</div>

          {/* FAQs */}
          <div className="bg-orange-50 p-6 rounded-xl shadow">
            <h3 className="text-2xl font-bold text-orange-700 mb-4">
              FAQs - Quotes
            </h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border rounded-md bg-white overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    className="w-full flex justify-between items-center px-4 py-3 font-medium text-left text-gray-800 hover:bg-orange-100 transition"
                    onClick={() =>
                      setOpenFAQ(openFAQ === index ? null : index)
                    }
                  >
                    {faq.question}
                    {openFAQ === index ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </button>
                  <div
                    className={`px-4 text-gray-600 transition-all duration-300 ease-in-out ${
                      openFAQ === index
                        ? "max-h-40 py-3"
                        : "max-h-0 overflow-hidden"
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
