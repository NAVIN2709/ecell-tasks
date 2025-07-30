import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Vision", path: "/vision" },
    { name: "Showcase", path: "/showcase" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-black via-green-800 to-green-600 text-white px-6 py-4 shadow-lg w-full">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="text-2xl font-extrabold tracking-tight">
            Ride<span className="text-green-300">NITT</span>
          </div>
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <div className="sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Nav Links (Desktop) */}
        <div className="hidden sm:flex space-x-4 text-sm md:text-base">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`px-3 py-2 rounded-full transition-all ${
                location.pathname === path
                  ? "bg-green-500"
                  : "hover:bg-green-500"
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="sm:hidden mt-2 px-4 space-y-2">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-2 rounded-md ${
                location.pathname === path
                  ? "bg-green-500"
                  : "hover:bg-green-500"
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
