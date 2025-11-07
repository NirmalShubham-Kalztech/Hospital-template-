import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Phone } from "lucide-react";


export default function Contact() {
  const [message, setMessage] = useState("");

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-20 mt-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          We're Here to Help You 24/7
        </h1>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto">
          Get in touch with our healthcare team for appointments, questions, or emergency care.
        </p>
      </section>

      {/* Contact & Map Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE — CONTACT FORM */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
            <p className="text-gray-600 mb-6">
              Have a question or need to schedule an appointment? Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">Full Name *</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">Email Address *</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">Message *</label>
                <textarea
                  placeholder="Tell us how we can help you..."
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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

          {/* RIGHT SIDE — MAP & EMERGENCY BOX */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Visit Our Facility</h2>
            <p className="text-gray-600 mb-6">
              Our modern medical facility is conveniently located in the heart of Pune,
              easily accessible by public transport and with ample parking available.
            </p>

            {/* Google Map */}
            <div className="rounded-lg overflow-hidden shadow-md mb-6">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.0611957026254!2d73.85674347497428!3d18.526447682574323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06e1b6a3f15%3A0x3f77a5f156b96c8b!2sKamla%20Nehru%20Hospital%2C%20Pune!5e0!3m2!1sen!2sin!4v1707059478780!5m2!1sen!2sin"
                width="100%"
                height="250"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Emergency Contact Box */}
            <div className="bg-red-50 border border-red-300 rounded-xl p-6">
              <h3 className="text-lg font-bold text-red-700 flex items-center gap-2 mb-3">
                <span>🕑</span> Emergency Contact
              </h3>
              <p className="text-red-600 mb-4">
                For medical emergencies, call us immediately or visit our emergency department.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+919876543210"
                  className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
                >
                  Call Emergency: +91 98765 43210
                </a>
                <button className="border border-red-600 text-red-700 px-4 py-2 rounded-lg font-semibold hover:bg-red-100 transition">
                  Emergency Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-600 text-white py-20 text-center">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex justify-center items-center gap-3 mb-4">
          <Phone className="w-7 h-7 text-white" />
          <h2 className="text-3xl md:text-4xl font-bold">Need Emergency Help?</h2>
        </div>

        <p className="text-blue-100 text-lg mb-8">
          Our emergency team is available 24/7 for urgent medical situations
        </p>

        <a
          href="tel:+919876543210"
          className="inline-block bg-white text-blue-700 font-semibold px-8 py-4 rounded-2xl shadow-md hover:shadow-lg hover:bg-blue-50 transition duration-300"
        >
          Call Now: +91 98765 43210
        </a>
      </div>
    </section>


      <Footer />
    </>
  );
}
