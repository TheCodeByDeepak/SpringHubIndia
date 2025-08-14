import React, { useRef, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  User,
  Users,
} from "lucide-react";

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
    <section className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-16 py-12 bg-gradient-to-b from-white to-blue-50 text-gray-800 font-sans">
      <div className="text-center mb-14">
        <h1 className="text-3xl font-bold text-blue-800">Contact Us</h1>
        <p className="text-lg text-gray-700">
          We’re here to help. Reach out anytime.
        </p>
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
                role: "Founder",
              },
              {
                icon: <User className="mx-auto text-green-600 mb-2" />,
                name: "Sanjay Yadav",
                role: "Production Manager",
              },
              {
                icon: <Users className="mx-auto text-purple-600 mb-2" />,
                name: "Sanjay Yadav ",
                role: "Quality Head",
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
