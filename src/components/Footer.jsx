import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#0f172a] text-gray-300 pt-16 pb-8"
    >
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* ✅ Column 1: Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-blue-600 p-2 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 12v8m0 0l-4-4m4 4l4-4"
                />
              </svg>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              MedCare Plus
            </h2>
          </div>

          <p className="text-gray-400 mb-6 leading-relaxed text-sm md:text-base">
            Delivering trusted healthcare for every generation with
            personalized medical care backed by technology and compassion.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            {[
              { icon: "facebook", href: "#" },
              { icon: "twitter", href: "#" },
              { icon: "instagram", href: "#" },
              { icon: "linkedin", href: "#" },
            ].map((social, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 200 }}
                href={social.href}
                className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-lg transition"
              >
                <i className={`fab fa-${social.icon}`}></i>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ✅ Column 2: Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm md:text-base">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Doctors", path: "/doctors" },
              { label: "Contact", path: "/contact" },
            ].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
              >
                <Link to={item.path} className="hover:text-blue-400 transition">
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* ✅ Column 3: Our Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm md:text-base">
            {[
              "Cardiology",
              "Dental Care",
              "Eye Care",
              "Neurology",
              "Pediatrics",
              "General Check-up",
            ].map((service, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
              >
                <a href="#" className="hover:text-blue-400 transition">
                  {service}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* ✅ Column 4: Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
            Contact Info
          </h3>
          <ul className="space-y-3 text-sm md:text-base">
            <li className="flex items-start gap-3">
              <i className="fas fa-map-marker-alt text-blue-500 mt-1"></i>
              <p>
                123 Wellness Street <br />
                Pune, Maharashtra 411001 <br />
                India
              </p>
            </li>
            <li className="flex items-center gap-3">
              <i className="fas fa-phone text-blue-500"></i>
              <p>+91 98765 43210</p>
            </li>
            <li className="flex items-center gap-3">
              <i className="fas fa-envelope text-blue-500"></i>
              <p>contact@medcareplus.com</p>
            </li>
            <li className="flex items-center gap-3">
              <i className="fas fa-clock text-blue-500"></i>
              <p>24/7 Emergency Care</p>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* ✅ Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-xs md:text-sm text-gray-500 px-6 max-w-7xl mx-auto"
      >
        <p>© 2025 MedCare Plus. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-blue-400 transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            Terms of Service
          </a>
        </div>
      </motion.div>
    </motion.footer>
  );
}
