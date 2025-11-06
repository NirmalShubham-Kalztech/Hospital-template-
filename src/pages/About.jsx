import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="pt-24 max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>

        <p className="text-gray-700 text-lg leading-7">
          MedCare+ is a leading healthcare provider with modern facilities,
          expert doctors, and round-the-clock emergency support.
        </p>

        <h2 className="text-2xl font-bold mt-8">Our Mission</h2>
        <p className="text-gray-700 leading-7">
          To deliver high-quality, affordable healthcare to everyone.
        </p>

        <h2 className="text-2xl font-bold mt-8">Our Vision</h2>
        <p className="text-gray-700 leading-7">
          To be the most trusted and advanced medical center in the region.
        </p>
      </div>
      <Footer />
    </>
  );
}
