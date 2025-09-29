
import { Link } from "react-router-dom";
export default function RefundPolicy() {
  return (
    <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-white font-serif relative overflow-y-auto min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-12 shadow-lg relative z-10">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl font-extrabold tracking-wide drop-shadow-md">
            Refund Policy
          </h1>
        </div>
      </header>

      {/* Main */}
      <main className="container mx-auto px-6 py-12 relative z-10 min-h-screen">
        <div className="bg-white rounded-3xl shadow-xl p-10 border-t-8 border-yellow-400">
          <p className="mb-10 text-lg text-gray-700 leading-relaxed">
            At{" "}
            <span className="font-semibold text-yellow-600">Veda Structure</span>
            , we value trust and devotion. Please read the Refund Policy
            carefully to understand our terms and practices.
          </p>

          {/* Sections */}
          <div className="space-y-10">
            {/* Section 1 */}
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-3 rounded-full shadow-md">
                ✅
              </div>
              <div>
                <h2 className="text-2xl font-bold text-yellow-700">
                  Eligibility for Refunds
                </h2>
                <p className="mt-2 text-gray-700">
                  Refunds are available within{" "}
                  <span className="font-semibold">7 days of purchase</span>,
                  provided the service is unused or partially utilized.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-3 rounded-full shadow-md">
                ⚠️
              </div>
              <div>
                <h2 className="text-2xl font-bold text-yellow-700">
                  Non-Refundable Services
                </h2>
                <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
                  <li>Personalized astrology reports</li>
                  <li>Completed spiritual consultations</li>
                  <li>Services marked as “non-refundable”</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-3 rounded-full shadow-md">
                💳
              </div>
              <div>
                <h2 className="text-2xl font-bold text-yellow-700">
                  Refund Process
                </h2>
                <p className="mt-2 text-gray-700">
                  Send us an email with your order details. Once approved,
                  refunds will be processed within{" "}
                  <span className="font-semibold">5–7 business days</span> to
                  the original payment method.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-3 rounded-full shadow-md">
                📞
              </div>
              <div>
                <h2 className="text-2xl font-bold text-yellow-700">
                  Contact Us
                </h2>
                <div className="bg-yellow-50 p-5 rounded-xl shadow-inner mt-3 border border-yellow-300">
                  <ul className="space-y-2 text-gray-800">
                    <li>
                      📧{" "}
                      <a
                        href="mailto:support@vedastructure.com"
                        className="text-yellow-700 font-semibold hover:underline"
                      >
                        support@vedastructure.com
                      </a>
                    </li>
                    <li>📞 +91-98765-43210</li>
                    <li>📍 Varanasi, India</li>
                  </ul>
                </div>
                 <p className="text-gray-700 mb-4">
                            If you have any queries regarding our Privacy Policy or how we
                            handle your personal data, feel free to reach out.  
                            We’re here to assist you.
                          </p>
                          <Link
                            to="/contact"
                            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
                          >
                            Contact Us
                          </Link>
              </div>
              
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
