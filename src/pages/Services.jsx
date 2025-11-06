import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <>
      <Navbar />
      <div className="pt-24 max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            "General Checkup",
            "Cardiology",
            "Neurology",
            "Pediatrics",
            "Dental Care",
            "Emergency Care"
          ].map((service) => (
            <div key={service} className="p-6 shadow-lg rounded-xl">
              <h2 className="text-xl font-bold mb-2">{service}</h2>
              <p className="text-gray-600">
                High-quality care and treatment from specialists.
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
