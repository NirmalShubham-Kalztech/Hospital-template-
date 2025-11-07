import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center py-24 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Our Medical Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100">
          Comprehensive healthcare services delivered by expert medical professionals
        </p>
      </section>

      {/* Description Section (Your Uploaded Example) */}
      <section className="py-20 text-center px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
          We offer a wide range of medical services for every need
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
          From routine check-ups to specialized treatments, our comprehensive
          medical services are designed to keep you and your family healthy at
          every stage of life.
        </p>
      </section>

      {/* How It Works Section */}
<section className="py-20 bg-white text-center">
  <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
    How It Works
  </h2>
  <p className="text-gray-600 text-lg mb-16">
    Simple steps to get the healthcare you need
  </p>

  <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
    {/* Line connecting steps */}
    <div className="hidden md:block absolute top-16 left-0 w-full h-[2px] bg-blue-200 z-0"></div>

    {/* Step 1 */}
    <div className="relative z-10 flex flex-col items-center mb-12 md:mb-0">
      <div className="bg-blue-600 text-white w-24 h-24 rounded-full flex items-center justify-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Book</h3>
      <p className="text-gray-600 max-w-[220px]">
        Schedule your appointment online or call us
      </p>
    </div>

    {/* Step 2 */}
    <div className="relative z-10 flex flex-col items-center mb-12 md:mb-0">
      <div className="bg-blue-600 text-white w-24 h-24 rounded-full flex items-center justify-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21h8M12 17v4M3 11h18M5 11V6a1 1 0 011-1h12a1 1 0 011 1v5" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit</h3>
      <p className="text-gray-600 max-w-[220px]">
        Come to our modern facility for your consultation
      </p>
    </div>

    {/* Step 3 */}
    <div className="relative z-10 flex flex-col items-center mb-12 md:mb-0">
      <div className="bg-blue-600 text-white w-24 h-24 rounded-full flex items-center justify-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Diagnose</h3>
      <p className="text-gray-600 max-w-[220px]">
        Our experts provide accurate diagnosis and treatment plans
      </p>
    </div>

    {/* Step 4 */}
    <div className="relative z-10 flex flex-col items-center">
      <div className="bg-blue-600 text-white w-24 h-24 rounded-full flex items-center justify-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-.91-.91a5.5 5.5 0 00-7.78 7.78l.91.91L12 21l7.78-7.78.91-.91a5.5 5.5 0 000-7.78z" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Recover</h3>
      <p className="text-gray-600 max-w-[220px]">
        Follow-up care and support for your complete recovery
      </p>
    </div>
  </div>

  {/* Floating Book Button */}
  <button className="fixed bottom-6 right-6 bg-blue-600 text-white flex items-center gap-2 px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
    Book Now
  </button>
</section>


      <Footer />
    </>
  );
}
