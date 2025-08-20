import {
  Home as HomeIcon,
  Info,
  Factory,
  Building2,
  Images,
  Phone,
  FileText,
  Package,
  ChevronFirst,
  Menu
} from "lucide-react";
import { Outlet } from "react-router-dom";
import { useContext, useRef, createContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/logo.png";
import Header from "./Header";
import Footer from "./Footer";

const SidebarContext = createContext();

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { text: "Home", icon: <HomeIcon size={20} />, path: "/" },
    { text: "Products", icon: <Package size={20} />, path: "/products" },
    { text: "Manufacturing", icon: <Factory size={20} />, path: "/manufacturing" },
    { text: "Industries Served", icon: <Building2 size={20} />, path: "/industries-served" },
    { text: "Gallery", icon: <Images size={20} />, path: "/gallary" },
    { text: "About Us", icon: <Info size={20} />, path: "/about" },
    { text: "Contact Us", icon: <Phone size={20} />, path: "/contact" },
    { text: "Get a Quote", icon: <FileText size={20} />, path: "/get-quote" }
  ];

  return (
    <>
      {/* ✅ Mobile Toggle Button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className={`fixed top-4  z-50 md:hidden transition-all duration-300 flex items-center justify-center
              w-12 h-12 
              ${mobileOpen ? "left-64 bg-blue-100" : "left-4 -ml-2"}`}
      >
        {mobileOpen ? (
          <ChevronFirst size={33} className="text-blue-600" />
        ) : (
          <Menu size={33} className="text-orange-500" />
        )}
      </button>

      {/* ✅ Sidebar */}
      <aside
        className={`
          bg-white border-r border-gray-200 shadow-lg transition-all duration-300 z-40
          fixed top-0 left-0 h-full md:h-screen md:fixed
          ${mobileOpen ? "translate-x-0 w-64" : "-translate-x-full"}
          md:translate-x-0 md:w-64
        `}
      >
        <nav className="h-full flex flex-col justify-between">
          {/* ✅ Logo Section */}
<div className="p-4 flex flex-col items-center">
  {/* Mobile: logo + name side by side */}
  <div className="flex flex-col items-center justify-center md:hidden">
  <Link 
    to="/" 
    onClick={() => {
      setMobileOpen(false); 
      window.scrollTo({ top: 0, behavior: "smooth" });
    }}
    className="flex flex-col items-center"
  >
    <img src={logo} className="w-11 h-11 mb-2" alt="Logo" />
    <span className="text-base font-semibold text-blue-800 text-center -mt-1">
      SPRING HUB INDIA
    </span>
  </Link>
</div>


  {/* Desktop: logo above name */}
  <div className="hidden md:flex flex-col items-center">
    <Link 
      to="/" 
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="flex flex-col items-center"
    >
      <img src={logo} className="w-11 h-11 mb-2" alt="Logo" />
      <span className="text-lg font-semibold text-blue-800 text-center -mt-1">
        SPRING HUB INDIA
      </span>
    </Link>
  </div>
</div>




          {/* ✅ Sidebar Items */}
          <SidebarContext.Provider value={{ expanded: true }}>
            <ul className="px-3 flex-1 overflow-y-auto">
              {menuItems.map((item) => (
                <SidebarItem
                  key={item.text}
                  icon={item.icon}
                  text={item.text}
                  path={item.path}
                  active={location.pathname === item.path}
                  onClick={() => setMobileOpen(false)}
                />
              ))}
            </ul>
          </SidebarContext.Provider>

{/* ✅ Footer Section */}
<div className="border-t p-4 flex flex-col items-center space-y-4">
{/* ✅ Footer Logo + Brand Info */}
<div className="flex flex-col items-center">
  <Link 
    to="/" 
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
    className="flex flex-col items-center"
  >
    <img src={logo} alt="Footer Logo" className="w-11 h-11 rounded-md mb-2" />
    <h4 className="font-semibold text-blue-800 -mt-1 text-lg">
      SPRING HUB INDIA
    </h4>
  </Link>

  <p className="text-gray-600 text-mm mb-2">
    <a
      href="mailto:info@springhubindia.com"
      className="text-blue-700 hover:text-orange-500 transition"
    >
      info@springhubindia.com
    </a>
  </p>
</div>


{/* ✅ Social Media Icons */}
<div className="flex justify-center items-center space-x-4">
  <a
    href="https://www.facebook.com/profile.php?id=61579307682312"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:text-orange-500 transform transition duration-200 hover:scale-110"
  >
    <FaFacebookF size={20} />
  </a>
  <a
    href="https://x.com/springhubindia"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 hover:text-orange-500 transform transition duration-200 hover:scale-110"
  >
    <FaXTwitter size={20} />
  </a>
  <a
    href="https://www.instagram.com/springhubindia"
    target="_blank"
    rel="noopener noreferrer"
    className="text-pink-500 hover:text-orange-500 transform transition duration-200 hover:scale-110"
  >
    <FaInstagram size={20} />
  </a>
  <a
  href="https://www.linkedin.com/in/spring-hub-india-9924b537b/"
  target="_blank"
  rel="noreferrer"
  className="text-blue-600 hover:text-orange-500 transform transition duration-200 hover:scale-110"
>
  <FaLinkedin size={20} />
</a>

</div>

</div>

        </nav>
      </aside>

      {/* ✅ Main Content */}
      <div
        className={`
          transition-[margin] duration-300 ease-in-out
          md:ml-64 ml-0
          flex flex-col min-h-screen
        `}
      >
        <Header />
        <div className="flex-1 p-6">
          <Outlet />
        </div>
        <Footer />
      </div>

      {/* ✅ Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}

/* ✅ Sidebar Item Component */
function SidebarItem({ icon, text, path, active, onClick }) {
  const { expanded } = useContext(SidebarContext);
  const itemRef = useRef(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    if (itemRef.current) {
      const rect = itemRef.current.getBoundingClientRect();
      setTooltipPosition({
        top: rect.top + rect.height / 2,
        left: rect.right + 12
      });
      setShowTooltip(true);
    }
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <>
      <Link
        to={path}
        onClick={() => {
          onClick();
          setShowTooltip(false);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <li
          ref={itemRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`
            relative flex items-center 
            h-12
            font-medium rounded-md cursor-pointer
            transition-all group
            justify-start px-3
            ${active ? "bg-blue-100 text-blue-700" : "hover:bg-orange-50 text-gray-700"}
          `}
        >
          {/* ✅ Icon */}
          <span className="flex justify-center items-center w-6 h-6 text-blue-600">
            {icon}
          </span>

          {/* ✅ Text (always on desktop) */}
          <span className="ml-3">{text}</span>
        </li>
      </Link>

      {/* ✅ Tooltip for collapsed (mobile) */}
      {!expanded && showTooltip && (
        <div
          className="fixed z-[9999] px-3 py-1 rounded-lg bg-blue-100 text-blue-800 text-sm font-medium
          whitespace-nowrap shadow-lg transition-all duration-300"
          style={{
            top: tooltipPosition.top,
            left: tooltipPosition.left,
            transform: "translateY(-50%)"
          }}
        >
          {text}
        </div>
      )}
    </>
  );
}
