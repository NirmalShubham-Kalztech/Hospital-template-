import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// JSON
import content from "../data/content.json";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="pt-20">
        {/* ======================================================
                         ✅ HERO SECTION
        ====================================================== */}
        <section
          className="relative h-[90vh] sm:h-[80vh] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `url('${content.hero.backgroundImage}')`,
          }}
        >
          <div className="absolute inset-0 bg-blue-700/60"></div>

          {/* ✅ Hero Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center text-white px-4 sm:px-8 max-w-3xl"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-snug mb-6">
              {content.hero.title}
            </h1>

            <p className="text-base sm:text-lg md:text-xl mb-10 text-gray-100">
              {content.hero.subtitle}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/book-appointment"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-xl font-medium shadow-md transition"
              >
                {content.hero.button1}
              </Link>

              <Link
                to="/services"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-xl font-medium hover:bg-white hover:text-blue-600 transition"
              >
                {content.hero.button2}
              </Link>
            </div>
          </motion.div>
        </section>

        {/* ======================================================
                         ✅ WHO WE ARE
        ====================================================== */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

            {/* ✅ Text Animation */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                {content.whoWeAre.title}
              </h2>

              <p className="text-gray-600 leading-relaxed mb-5">
                {content.whoWeAre.description1}
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                {content.whoWeAre.description2}
              </p>

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-md transition">
                {content.whoWeAre.button}
              </button>
            </motion.div>

            {/* ✅ Image Animation */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <img
                src={content.whoWeAre.image}
                alt="Our Medical Team"
                className="rounded-2xl shadow-lg w-full max-w-md md:max-w-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* ======================================================
                         ✅ SERVICES
        ====================================================== */}
        <section className="py-16 sm:py-20 bg-blue-50">
          <div className="max-w-7xl mx-auto px-6 text-center">

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-4xl font-extrabold text-gray-900 mb-4"
            >
              Our Medical Services
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-gray-600 mb-12 max-w-2xl mx-auto"
            >
              Comprehensive healthcare services delivered by expert medical professionals.
            </motion.p>

            {/* ✅ Stagger Animation */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 }
                }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
            >
              {content.services.map((s, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 }
                  }}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition text-center"
                >
                  <div className="bg-blue-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="#2563eb"
                      className="w-8 h-8"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                  <p className="text-gray-600">{s.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ======================================================
                    ✅ WHY CHOOSE US
        ====================================================== */}
        <section className="py-16 sm:py-20 bg-white text-center">
          <div className="max-w-7xl mx-auto px-6">

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-4xl font-extrabold text-gray-900 mb-4"
            >
              {content.whyChooseUs.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-600 mb-12"
            >
              {content.whyChooseUs.subtitle}
            </motion.p>

            {/* ✅ Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {content.whyChooseUs.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl sm:text-4xl font-bold text-blue-600">{stat.num}</h3>
                  <p className="text-gray-700 mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* ✅ Cards */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {content.whyChooseUs.cards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-blue-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition"
                >
                  <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center bg-blue-100 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="#2563eb"
                      className="w-7 h-7"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                  </div>

                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h4>
                  <p className="text-gray-600">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================
                    ✅ TESTIMONIALS
        ====================================================== */}
        <section className="py-16 sm:py-20 bg-[#f5f9ff]">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-4xl font-extrabold text-gray-900 mb-3"
            >
              {content.testimonials.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-600 mb-12"
            >
              {content.testimonials.subtitle}
            </motion.p>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {content.testimonials.people.map((name, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-8 text-left"
                >
                  <div className="flex mb-3">
                    {Array(5)
                      .fill(0)
                      .map((_, i2) => (
                        <svg
                          key={i2}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#facc15"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#facc15"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.5a.56.56 0 011.04 0l2.12 4.3a.56.56 0 00.42.3l4.75.69a.56.56 0 01.31.96l-3.43 3.34a.56.56 0 00-.16.5l.81 4.72a.56.56 0 01-.82.59l-4.24-2.23a.56.56 0 00-.52 0l-4.24 2.23a.56.56 0 01-.82-.59l.81-4.72a.56.56 0 00-.16-.5L4.87 9.76a.56.56 0 01.31-.96l4.75-.69a.56.56 0 00.42-.3l2.13-4.31z"
                          />
                        </svg>
                      ))}
                  </div>

                  <p className="text-gray-600 italic mb-4">“The care was exceptional.”</p>
                  <p className="font-semibold text-gray-900">- {name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================
                           ✅ CTA
        ====================================================== */}
       <section className="bg-[#2563eb] py-16 sm:py-20 text-center text-white">
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="max-w-5xl mx-auto px-6"
  >
    <h2 className="text-2xl sm:text-4xl font-extrabold mb-4">
      {content.cta.title}
    </h2>

    <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-10">
      {content.cta.subtitle}
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-6">

      {/* ✅ Button 1 Link */}
      <Link
        to="/book-appointment"
        className="bg-white text-[#2563eb] font-semibold px-8 py-4 rounded-xl text-lg shadow-md hover:bg-blue-50 transition"
      >
        {content.cta.button1}
      </Link>

      {/* ✅ Button 2 Link */}
      <Link
        to="/contact"
        className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-[#2563eb] transition"
      >
        {content.cta.button2}
      </Link>

    </div>
  </motion.div>
</section>



        {/* Emergency Section */}
<motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="w-full bg-red-600 text-white py-20 px-6 text-center"
>
  <div className="max-w-3xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
      {content.emergencySection.title}
    </h2>

    <p className="text-lg text-red-100 mb-10">
      {content.emergencySection.description}
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <button className="bg-white text-red-600 font-semibold px-8 py-3 rounded-xl hover:bg-red-50 transition-colors">
        Call {content.emergencySection.callNumber}
      </button>

      <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-xl hover:bg-white hover:text-red-600 transition-colors">
        Emergency Services
      </button>
    </div>
  </div>
</motion.section>


        <Footer />
      </div>
    </>
  );
}
