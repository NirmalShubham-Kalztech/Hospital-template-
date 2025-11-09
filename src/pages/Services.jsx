import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import data from "../data/Services.json";

export default function Services() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center py-24 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          {data.heroSection.title}
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100">
          {data.heroSection.description}
        </p>
      </section>

      {/* Description Section */}
      <section className="py-20 text-center px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
          {data.descriptionSection.title}
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
          {data.descriptionSection.description}
        </p>
      </section>

      {/* Medical Services Section */}
      <section className="w-full py-24 bg-[#f5f9ff] px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Our Medical Services
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive care across multiple specialties — from routine check-ups to advanced medical treatments.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.servicesList.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 text-left flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
            >
              <div>
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                <ul className="text-sm text-gray-700 space-y-1 mb-6">
                  {service.list.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-blue-600">✔</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="bg-blue-600 text-white font-medium rounded-lg px-5 py-2 mt-auto hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">How It Works</h2>
        <p className="text-gray-600 text-lg mb-16">
          Simple steps to get the healthcare you need
        </p>

        <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <div className="hidden md:block absolute top-16 left-0 w-full h-[2px] bg-blue-200 z-0"></div>

          {data.howItWorks.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center mb-12 md:mb-0">
              <div className="bg-blue-600 text-white w-24 h-24 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 max-w-[220px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-[#f7fbff] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Get answers to common questions about our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {data.faqList.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 text-left hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Section */}
      <section className="w-full bg-red-600 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            {data.emergencySection.title}
          </h2>

          <p className="text-lg text-red-100 mb-10">
            {data.emergencySection.description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-red-600 font-semibold px-8 py-3 rounded-xl hover:bg-red-50 transition-colors">
              Call {data.emergencySection.callNumber}
            </button>
            <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-xl hover:bg-white hover:text-red-600 transition-colors">
              Emergency Services
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
