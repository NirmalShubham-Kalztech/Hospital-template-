import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Phone } from "lucide-react";

import contactData from "../data/contact.json";

export default function ContactPage() {
  const [message, setMessage] = useState("");

  return (
    <>
      <Navbar />

      {/* ✅ Hero Section */}
      <section className="bg-blue-600 text-white text-center py-20 mt-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {contactData.hero.title}
        </h1>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto">
          {contactData.hero.subtitle}
        </p>
      </section>

      {/* ✅ Contact & Map Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* ✅ LEFT SIDE — CONTACT FORM */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {contactData.form.title}
            </h2>
            <p className="text-gray-600 mb-6">{contactData.form.description}</p>

            <form className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">
                  Message *
                </label>
                <textarea
                  placeholder="Tell us how we can help you..."
                  rows="5"
                  value={message}
                  onChange={(e) =>
                    e.target.value.length <= 500 && setMessage(e.target.value)
                  }
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                ></textarea>

                <p className="text-xs text-gray-500 mt-1">
                  {message.length}/500 characters
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* ✅ RIGHT SIDE — MAP + EMERGENCY */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {contactData.visit.title}
            </h2>
            <p className="text-gray-600 mb-6">{contactData.visit.description}</p>

            {/* Google Map */}
            <div className="rounded-lg overflow-hidden shadow-md mb-6">
              <iframe
                title="Google Map"
                src={contactData.visit.mapUrl}
                width="100%"
                height="250"
                loading="lazy"
                className="border-0"
              ></iframe>
            </div>

            {/* Emergency Box */}
            <div className="bg-red-50 border border-red-300 rounded-xl p-6">
              <h3 className="text-lg font-bold text-red-700 flex items-center gap-2 mb-3">
                <span>🕑</span> Emergency Contact
              </h3>

              <p className="text-red-600 mb-4">
                {contactData.emergency.description}
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:${contactData.emergency.phone}`}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
                >
                  Call Emergency: {contactData.emergency.phone}
                </a>

                <button className="border border-red-600 text-red-700 px-4 py-2 rounded-lg font-semibold hover:bg-red-100 transition">
                  Emergency Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Bottom Emergency Banner */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Phone className="w-7 h-7 text-white" />
            <h2 className="text-3xl md:text-4xl font-bold">
              {contactData.bottomEmergency.title}
            </h2>
          </div>

          <p className="text-blue-100 text-lg mb-8">
            {contactData.bottomEmergency.subtitle}
          </p>

          <a
            href={`tel:${contactData.emergency.phone}`}
            className="inline-block bg-white text-blue-700 font-semibold px-8 py-4 rounded-2xl shadow-md hover:shadow-lg hover:bg-blue-50 transition duration-300"
          >
            Call Now: {contactData.emergency.phone}
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
