import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import data from "../data/BookAppointment.json";

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    doctor: "",
    date: "",
    time: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment booked successfully!");
    console.log(formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      doctor: "",
      date: "",
      time: "",
      message: ""
    });
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center py-24 mt-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          {data.heroSection.title}
        </h1>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto">
          {data.heroSection.description}
        </p>
      </section>

      {/* Form Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {data.formSection.title}
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                {data.formSection.labels.name}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={data.formSection.placeholders.name}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                {data.formSection.labels.email}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={data.formSection.placeholders.email}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                {data.formSection.labels.phone}
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder={data.formSection.placeholders.phone}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Doctor */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                {data.formSection.labels.doctor}
              </label>
              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">-- Select Doctor --</option>
                {data.formSection.doctors.map((doc, index) => (
                  <option key={index} value={doc}>
                    {doc}
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                {data.formSection.labels.date}
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                {data.formSection.labels.time}
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-2">
                {data.formSection.labels.textarea}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder={data.formSection.placeholders.message}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold py-3 px-10 rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                {data.formSection.submitButton}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-center text-white py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {data.ctaSection.title}
        </h2>
        <p className="text-blue-100 text-lg mb-8">
          {data.ctaSection.description}
        </p>
        <a
          href={`tel:${data.ctaSection.callNumber}`}
          className="bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
        >
          {data.ctaSection.buttonText}
        </a>
      </section>

      <Footer />
    </>
  );
}
