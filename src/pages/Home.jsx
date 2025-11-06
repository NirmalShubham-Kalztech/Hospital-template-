import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// ✅ JSON IMPORT (New Change)
import content from "../data/content.json";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="pt-20">
        {/* ================= HERO SECTION ================= */}
        <section
          className="relative h-[90vh] sm:h-[80vh] bg-cover bg-center flex items-center justify-center"
          style={{
            // ✅ Background from JSON
            backgroundImage: `url('${content.hero.backgroundImage}')`,
          }}
        >
          <div className="absolute inset-0 bg-blue-700/60"></div>

          {/* ✅ Text from JSON */}
          <div className="relative z-10 text-center text-white px-4 sm:px-8 max-w-3xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-snug mb-6">
              {content.hero.title}
            </h1>

            <p className="text-base sm:text-lg md:text-xl mb-10 text-gray-100">
              {content.hero.subtitle}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/appointment"
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
          </div>

          {/* Floating Button Same
          <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6">
            <Link
              to="/appointment"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-xl font-medium shadow-lg transition text-sm sm:text-base"
            >
              <span>📅</span> Book Now
            </Link>
          </div> */}
        </section>

        {/* ================= WHO WE ARE SECTION ================= */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
              {/* ✅ JSON Text */}
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
            </div>

            {/* ✅ Image from JSON */}
            <div className="flex justify-center">
              <img
                src={content.whoWeAre.image}
                alt="Our Medical Team"
                className="rounded-2xl shadow-lg w-full max-w-md md:max-w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* ================= OUR SERVICES ================= */}
        <section className="py-16 sm:py-20 bg-blue-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Our Medical Services
            </h2>

            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
              Comprehensive healthcare services delivered by expert medical professionals.
            </p>

            {/* ✅ Services Coming from JSON */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {content.services.map((s, i) => (
                <div
                  key={i}
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= WHY CHOOSE US ================= */}
        <section className="py-16 sm:py-20 bg-white text-center">
          <div className="max-w-7xl mx-auto px-6">
            {/* ✅ Title & Subtitle */}
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              {content.whyChooseUs.title}
            </h2>

            <p className="text-gray-600 mb-12">{content.whyChooseUs.subtitle}</p>

            {/* ✅ Stats from JSON */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {content.whyChooseUs.stats.map((stat, i) => (
                <div key={i}>
                  <h3 className="text-3xl sm:text-4xl font-bold text-blue-600">{stat.num}</h3>
                  <p className="text-gray-700 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* ✅ Cards from JSON */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {content.whyChooseUs.cards.map((card, i) => (
                <div key={i} className="bg-blue-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= TESTIMONIALS ================= */}
        <section className="py-16 sm:py-20 bg-[#f5f9ff]">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mb-3">
              {content.testimonials.title}
            </h2>

            <p className="text-gray-600 mb-12">{content.testimonials.subtitle}</p>

            {/* ✅ Testimonials from JSON */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {content.testimonials.people.map((name, i) => (
                <div
                  key={i}
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA SECTION ================= */}
        <section className="bg-[#2563eb] py-16 sm:py-20 text-center text-white">
          <div className="max-w-5xl mx-auto px-6">
            {/* ✅ CTA JSON */}
            <h2 className="text-2xl sm:text-4xl font-extrabold mb-4">
              {content.cta.title}
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-10">
              {content.cta.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-white text-[#2563eb] font-semibold px-8 py-4 rounded-xl text-lg shadow-md hover:bg-blue-50 transition">
                {content.cta.button1}
              </button>

              <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-[#2563eb] transition">
                {content.cta.button2}
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
