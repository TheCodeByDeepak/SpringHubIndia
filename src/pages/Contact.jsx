import React, { useRef, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  User,
} from "lucide-react";
import headerBg from "../assets/b7.jpg";
// Left side images
import leftImg1 from "../assets/h10.png";
import leftImg2 from "../assets/h9.png";
import leftImg3 from "../assets/h8.png";

// Right side images
import rightImg1 from "../assets/h7.png";
import rightImg2 from "../assets/h6.png";
import rightImg3 from "../assets/h5.png";

const ContactUs = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage(null);

    // Simulate a successful form submission
    setTimeout(() => {
      setStatusMessage({
        type: "success",
        text: "Message sent successfully!",
      });
      form.current.reset();
      setIsLoading(false);

      setTimeout(() => {
        setStatusMessage(null);
      }, 3000);
    }, 1500);
  };
  

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800 font-sans -ml-2 -mr-2 -mt-2">
     {/* Contact Us Section */}
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
      Contact Us
    </h1>
    <p className="max-w-2xl mx-auto text-lg mb-6 text-white">
      We’re here to help. Reach out anytime.
    </p>
  </div>

  {/* ✅ Mobile Heading */}
  <div className="md:hidden text-center relative px-6 py-16">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
      Contact Us
    </h1>
    <p className="max-w-2xl mx-auto text-lg mb-6 text-white">
      We’re here to help. Reach out anytime.
    </p>
  </div>
</div>


      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-10">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: <User className="mx-auto text-blue-600 mb-2" />,
                name: " Shailesh Yadav",
                role: "Director",
              },
              {
                icon: <User className="mx-auto text-green-600 mb-2" />,
                name: "Sanjay Yadav",
                role: "Production & Quality Manager",
              },
             
            ].map((person, idx) => (
              <div
                key={idx}
                className="bg-white border rounded-xl shadow px-4 py-6 text-center hover:shadow-md transition"
              >
                {person.icon}
                <h2 className="text-lg font-semibold text-blue-800">
                  {person.name}
                </h2>
                <p className="text-sm text-gray-500">{person.role}</p>
              </div>
            ))}
          </div>

          {/* Contact Details */}
          <div className="bg-white border rounded-xl shadow p-6 space-y-6">
            <ContactInfo
              Icon={MapPin}
              title="Address"
              text={
                <a
                href="https://www.google.com/maps?q=19.410350,72.883583"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Mangalmurti Nagar Building No 10A 403 Tungarfata Sativali Vasai (E) - 401 208 Maharashtra
              </a>

              }
              color="text-red-600"
              size={40}
            />
            <ContactInfo
              Icon={Phone}
              title="Contact"
              text={
                <>
  <span>
    <a href="tel:+918007431996" className="hover:underline">
      +91 8007431996
    </a>
  </span>
  <br />
  <span>
    <a href="tel:+918127516770" className="hover:underline">
      +91 8127516770
    </a>
  </span>
</>

              }
              color="text-green-600"
            />
            <ContactInfo
              Icon={Mail}
              title="Email"
              text={
                <a
                  href="mailto:info@springhubindia.com"
                  className="hover:underline "
                >
                  info@springhubindia.com
                </a>
              }
              color="text-blue-600"
            />
            <ContactInfo
              Icon={Clock}
              title="Working Hours"
              text={
                <>
                  Mon - Sat: 9:00 AM – 7:00 PM
                  <br />
                  Sunday: Closed
                </>
              }
              color="text-yellow-500"
            />
          </div>
        </div>

        {/* Message Form */}
        <div className="bg-white border rounded-xl shadow p-6">
  <h3 className="text-2xl font-bold text-blue-800 mb-6">Send a Message</h3>
  <form ref={form} onSubmit={handleFormSubmit} className="space-y-4">
    <input
      type="text"
      name="user_name"
      placeholder="Your Name"
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    />
    <input
      type="email"
      name="user_email"
      placeholder="Your Email"
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    />
    {/* ✅ City Textbox */}
    <input
      type="text"
      name="user_city"
      placeholder="Your City"
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    />
    <textarea
      name="message"
      placeholder="Your Message"
      rows="4"
      className="w-full px-4 py-2 border rounded-lg resize focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    ></textarea>

    <button
      type="submit"
      disabled={isLoading}
      className={`w-full flex items-center justify-center gap-2 ${
        isLoading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
      } text-white px-6 py-2 rounded-lg transition`}
    >
      {isLoading && (
        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
      )}
      {isLoading ? "Sending..." : "Send Message"}
    </button>

    {statusMessage && (
      <p
        className={`text-sm mt-3 font-medium ${
          statusMessage.type === "success" ? "text-green-600" : "text-red-600"
        }`}
      >
        {statusMessage.text}
      </p>
    )}
  </form>
</div>

      </div>

      {/* Google Map */}
<div className="mt-20 w-full">
  <h4 className="text-2xl font-bold text-center text-blue-800 mb-6">Our Location</h4>
  <div className="w-full h-[450px] overflow-hidden rounded-xl shadow-lg">
    <iframe
      title="Google Map"
      src="https://www.google.com/maps?q=19.410350,72.883583&hl=es;z=18&output=embed"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>

    </section>
  );
};

// Reusable contact detail
const ContactInfo = ({ Icon, title, text, color, size }) => (
  <div className="flex items-start gap-4">
    <Icon className={`${color} mt-1`} size={size || 24} /> {/* default size 24 */}
    <div>
      <h3 className="text-lg font-bold text-blue-800">{title}</h3>
      <p className="text-sm text-gray-700">{text}</p>
    </div>
  </div>
);


export default ContactUs;
