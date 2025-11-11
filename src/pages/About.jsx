import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import aboutData from "../data/about.json";

// Reusable animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

export default function About() {
  return (
    <>
      <Navbar />

      {/* ✅ Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center py-24"
      >
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          {aboutData.hero.title}
        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto"
        >
          {aboutData.hero.subtitle}
        </motion.p>
      </motion.section>

      {/* ✅ WHO WE ARE */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Left Text */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {aboutData.whoWeAre.title}
            </h2>

            {aboutData.whoWeAre.description.map((para, index) => (
              <p
                key={index}
                className="text-gray-700 text-lg leading-8 mb-6"
              >
                {para}
              </p>
            ))}
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={aboutData.whoWeAre.image}
              alt="Who We Are"
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ✅ Mission & Vision */}
      <section className="bg-blue-50 py-20 px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10"
        >
          {/* Mission */}
          <motion.div
            variants={fadeUp}
            className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl hover:scale-[1.03] transition"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {aboutData.missionVision.mission.title}
            </h3>
            <p className="text-gray-700 leading-7">
              {aboutData.missionVision.mission.text}
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            variants={fadeUp}
            className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl hover:scale-[1.03] transition"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {aboutData.missionVision.vision.title}
            </h3>
            <p className="text-gray-700 leading-7">
              {aboutData.missionVision.vision.text}
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ✅ Core Values */}
      <section className="py-20 bg-white text-center px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Our Core Values
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {aboutData.coreValues.map((value, index) => (
              <motion.div
                variants={fadeUp}
                key={index}
                className="bg-blue-50 rounded-2xl shadow-sm p-8 flex flex-col items-center hover:scale-[1.05] hover:shadow-xl transition"
              >
                <div className="bg-blue-600 text-white w-16 h-16 flex items-center justify-center rounded-full mb-6">
                  <i className={value.icon + " text-2xl"}></i>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>

                <p className="text-gray-700">{value.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ✅ Journey */}
      <section className="py-20 bg-blue-50 text-center px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Our Journey
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {aboutData.journey.map((item, index) => (
              <motion.div
                variants={fadeUp}
                key={index}
                className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-xl hover:scale-[1.03] transition"
              >
                <h3 className="text-3xl font-bold text-blue-600 mb-2">
                  {item.year}
                </h3>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-700">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ✅ Leadership */}
      <section className="py-20 bg-white text-center px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Our Leadership Team
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {aboutData.leadership.map((leader, index) => (
              <motion.div
                variants={fadeUp}
                key={index}
                className="bg-blue-50 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:scale-[1.04] transition"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-28 h-28 object-cover rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {leader.name}
                </h3>
                <p className="text-blue-600 mb-4">{leader.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ✅ CTA */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-blue-600 text-center text-white py-20 px-6"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            {aboutData.cta.title}
          </h2>

          <p className="text-lg text-blue-100 mb-8">
            {aboutData.cta.subtitle}
          </p>

          <a
            href="#"
            className="inline-block bg-white text-blue-700 font-semibold py-3 px-8 rounded-xl shadow-md hover:bg-blue-50 transition"
          >
            {aboutData.cta.button}
          </a>
        </div>
      </motion.section>

      <Footer />
    </>
  );
}
