// Animated Doctors Section with Framer Motion
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GraduationCap, Clock, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

import data from "../data/DoctorsSection.json";

import Drimg1 from "../assets/img/drimg1.png";
import Drimg2 from "../assets/img/drimg2.png";
import Drimg3 from "../assets/img/drimg3.png";
import Drimg4 from "../assets/img/drimg4.png";
import Drimg5 from "../assets/img/drimg5.png";

const images = {
  "drimg1.png": Drimg1,
  "drimg2.png": Drimg2,
  "drimg3.png": Drimg3,
  "drimg4.png": Drimg4,
  "drimg5.png": Drimg5,
};

export default function DoctorsSection() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full py-24 flex flex-col justify-center items-center text-center bg-gradient-to-r from-[#1e3cfa] to-[#2563eb] text-white"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          {data.heroSection.title}
        </h1>
        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
          {data.heroSection.subtitle}
        </p>
      </motion.section>

      {/* Intro Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full py-20 bg-white text-center px-6"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
          {data.introSection.title}
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {data.introSection.description}
        </p>
      </motion.section>

      {/* Doctors Grid */}
      <section className="py-20 bg-[#f5f9ff] px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {data.doctors.map((doc, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="w-full h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src={images[doc.image]}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{doc.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{doc.specialization}</p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {doc.description}
                  </p>

                  <div className="flex flex-col gap-2 mb-4 text-gray-700 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span>{doc.experience}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-blue-600" />
                      <span>{doc.qualification}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                      Book Appointment
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="w-9 h-9 bg-blue-50 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-blue-600" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}