import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Heart, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = ["Home", "About", "Services", "Doctors", "Contact"];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-white fixed top-0 left-0 z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">

        {/* ✅ Logo with animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
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
        </motion.div>

        {/* ✅ Desktop Menu Animated */}
        <ul className="hidden md:flex gap-8 text-gray-800 font-medium items-center">
          {menuItems.map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
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
            </motion.li>
          ))}
        </ul>

        {/* ✅ CTA Button (Desktop) with animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <NavLink
            to="/book-appointment"
            className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Book Appointment
          </NavLink>
        </motion.div>

        {/* ✅ Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-3xl focus:outline-none transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={26} /> : <span className="text-3xl">☰</span>}
        </button>
      </div>

      {/* ✅ Mobile Dropdown Menu with animation */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          open
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.4 }}
        className="md:hidden bg-white shadow-md overflow-hidden"
      >
        <ul className="flex flex-col items-center gap-5 py-5 text-gray-700 font-medium">
          {menuItems.map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -20 }}
              animate={open ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
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
            </motion.li>
          ))}

          {/* ✅ Mobile CTA Animated */}
          <motion.li
            initial={{ opacity: 0, y: 10 }}
            animate={open ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <NavLink
              to="/book-appointment"
              onClick={() => setOpen(false)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Book Appointment
            </NavLink>
          </motion.li>
        </ul>
      </motion.div>
    </motion.nav>
  );
}
