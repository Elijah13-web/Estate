import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/icons/logo1.jpeg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects & Experience", href: "/projects" },
  { label: "Corporate Documents", href: "/documents" },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleLogoClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.location.reload();
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#092b42]">
      <div className="container mx-auto flex items-center justify-between h-30 px-3">
        
        <Link
          to="/"
          onClick={handleLogoClick}
          className=""
        >
          <div className="flex space-x-4 items-center ">
           <img
  src={logo}
  alt="logo"
  onClick={() =>
    location.pathname === '/'
      ? window.scrollTo({ top: 0, behavior: 'smooth' })
      : (window.location.href = '/')
  }
  className="w-20 h-20 cursor-pointer object-contain bg-transparent rounded-full"
/>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-[#0c1c2b]">
            Markson Ajiboye
          </span>
          <span className="text-[10px] uppercase tracking-widest text-[#937723] font-semibold text-center">
            Consulting 
          </span>
          </div>
          </div>
        </Link>

        {/* ✅ DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.href
                  ? "text-[#937723]"
                  : "text-gray-600 hover:text-[#937723]"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Button asChild className="bg-[#d09d1e] hover:bg-[#ffb702] font-semibold transition-all duration-300 hover:shadow-lg cursor-pointer">
            <Link to="/contact">Speak to a Consultant</Link>
          </Button>
        </div>

        {/* ✅ MOBILE TOGGLE */}
        <button
          className="lg:hidden text-[#0c1c2b]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ✅ MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-6 pb-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block text-sm font-medium ${
                location.pathname === link.href
                  ? "text-[#937723]"
                  : "text-gray-600 hover:text-[#937723]"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Button
            asChild
            className="w-full bg-[#d09d1e] hover:bg-[#ffb702] transition-all duration-300 hover:shadow-lg cursor-pointer font-semibold"
          >
            <Link to="/contact" onClick={() => setMobileOpen(false)}>
              Speak to a Consultant
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


