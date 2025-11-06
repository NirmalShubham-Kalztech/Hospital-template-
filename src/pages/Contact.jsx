import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="pt-24 max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* FORM */}
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" />
            <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
            <textarea placeholder="Message" rows="5" className="w-full p-3 border rounded"></textarea>
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded">
              Send Message
            </button>
          </form>

          {/* DETAILS */}
          <div>
            <h2 className="text-xl font-bold mb-4">Reach Us</h2>
            <p className="text-gray-700">📍 City Hospital, Main Road</p>
            <p className="text-gray-700">📞 +91 9876543210</p>
            <p className="text-gray-700">📧 support@medcare.com</p>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
