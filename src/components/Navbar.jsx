import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Heart, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = ["Home", "About", "Services", "Doctors", "Contact"];

  return (
    <nav className="w-full bg-white fixed top-0 left-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">

        {/* ✅ Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 hover:opacity-90 transition"
          onClick={() => setOpen(false)}
        >
          <div className="bg-blue-600 p-2 rounded-lg">
            <Heart className="text-white w-5 h-5" />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            MedCare <span className="text-blue-600">Plus</span>
          </h1>
        </NavLink>

        {/* ✅ Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-800 font-medium items-center">
          {menuItems.map((item) => (
            <li key={item}>
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `transition hover:text-blue-600 ${
                    isActive ? "text-blue-600 font-semibold" : "text-gray-800"
                  }`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ✅ CTA Button (Desktop) */}
        <NavLink
          to="/book-appointment"
          className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Book Appointment
        </NavLink>

        {/* ✅ Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-3xl focus:outline-none transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={26} /> : <span className="text-3xl">☰</span>}
        </button>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-5 py-5 text-gray-700 font-medium">
          {menuItems.map((item) => (
            <li key={item}>
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block transition hover:text-blue-600 ${
                    isActive ? "text-blue-600 font-semibold" : "text-gray-800"
                  }`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}

          {/* ✅ Mobile CTA Button */}
          <li>
            <NavLink
              to="/book-appointment"
              onClick={() => setOpen(false)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Book Appointment
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
