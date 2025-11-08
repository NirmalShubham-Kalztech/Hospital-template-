import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GraduationCap, Clock, Linkedin } from "lucide-react";

export default function DoctorsSection() {
  const doctors = [
    {
      name: "Dr. Rajesh Sharma",
      specialization: "Cardiologist",
      experience: "20+ Years",
      qualification: "MBBS, MD Cardiology",
      description:
        "Leading cardiologist with 20+ years of experience in interventional cardiology and heart surgery.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      name: "Dr. Priya Patel",
      specialization: "Neurologist",
      experience: "15+ Years",
      qualification: "MBBS, MD Neurology",
      description:
        "Expert neurologist specializing in stroke care, epilepsy treatment, and neurodegenerative disorders.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      name: "Dr. Amit Kumar",
      specialization: "Orthopedic Surgeon",
      experience: "18+ Years",
      qualification: "MBBS, MS Orthopedics",
      description:
        "Skilled orthopedic surgeon with expertise in joint replacement and sports medicine.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      name: "Dr. Sunita Reddy",
      specialization: "Pediatrician",
      experience: "12+ Years",
      qualification: "MBBS, MD Pediatrics",
      description:
        "Compassionate pediatrician dedicated to providing comprehensive care for children of all ages.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      name: "Dr. Vikram Singh",
      specialization: "Ophthalmologist",
      experience: "16+ Years",
      qualification: "MBBS, MS Ophthalmology",
      description:
        "Expert eye specialist with advanced training in cataract surgery and retinal treatments.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      name: "Dr. Kavya Nair",
      specialization: "Dermatologist",
      experience: "14+ Years",
      qualification: "MBBS, MD Dermatology",
      description:
        "Renowned dermatologist specializing in skin care, cosmetic procedures, and dermatological surgery.",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  // Stats section content
  const stats = [
    { value: "25+", label: "Expert Doctors" },
    { value: "10+", label: "Medical Departments" },
    { value: "10,000+", label: "Patients Served" },
    { value: "15+", label: "Years Experience" },
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="w-full py-24 flex flex-col justify-center items-center text-center bg-gradient-to-r from-[#1e3cfa] to-[#2563eb] text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Meet Our Expert Doctors
        </h1>
        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
          Our team combines medical expertise with genuine compassion to deliver
          exceptional healthcare
        </p>
      </section>

      {/* Intro */}
      <section className="w-full py-20 bg-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
          Our team combines medical expertise with genuine compassion
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Each of our doctors brings years of specialized training and
          experience, combined with a deep commitment to patient care. We
          believe in treating not just conditions, but the whole person with
          empathy and understanding.
        </p>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 bg-[#f5f9ff] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doc, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {doc.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {doc.specialization}
                  </p>
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
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                      Book Appointment
                    </button>
                    <button className="w-9 h-9 bg-blue-50 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                      <Linkedin className="w-5 h-5 text-blue-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Stats Section added here */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center gap-10">
          {stats.map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <h2 className="text-5xl font-bold text-blue-600">{item.value}</h2>
              <p className="text-gray-700 text-lg mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>


            {/* ✅ Testimonials Section */}  
      <section className="w-full py-24 bg-[#e8f1ff] px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Real experiences from patients who trust our doctors with their health
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <div className="bg-white p-10 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>

            <p className="text-gray-700 italic leading-relaxed mb-6">
              "Dr. Sharma made me feel completely at ease during my heart procedure.
              His expertise and caring nature are truly exceptional."
            </p>

            <h4 className="text-lg font-semibold text-gray-900">Ravi Gupta</h4>
            <p className="text-blue-600 text-sm mt-1">Cardiac Surgery</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-10 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>

            <p className="text-gray-700 italic leading-relaxed mb-6">
              "Dr. Priya Patel's thorough approach to my neurological condition gave
              me confidence in my treatment plan."
            </p>

            <h4 className="text-lg font-semibold text-gray-900">Meera Shah</h4>
            <p className="text-blue-600 text-sm mt-1">Neurology Consultation</p>
          </div>
        </div>
      </section>

      


      <Footer />
    </>
  );
}
