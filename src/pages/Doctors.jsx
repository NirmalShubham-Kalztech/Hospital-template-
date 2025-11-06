import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Doctors() {
  const doctors = [
    { name: "Dr. Smith", spec: "Cardiologist" },
    { name: "Dr. James", spec: "Orthopedic" },
    { name: "Dr. Sarah", spec: "Gynecologist" },
    { name: "Dr. Johnson", spec: "Neurologist" },
  ];

  return (
    <>
      <Navbar />
      <div className="pt-24 max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Our Doctors</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {doctors.map((doc) => (
            <div className="bg-white p-6 shadow rounded-xl text-center">
              <img src="https://via.placeholder.com/150" className="mx-auto rounded-full mb-4" />
              <h2 className="font-bold text-xl">{doc.name}</h2>
              <p className="text-gray-600">{doc.spec}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
