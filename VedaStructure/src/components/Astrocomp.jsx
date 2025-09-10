"use client";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Astrocomp() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  // Validation
  const validateStep = (step) => {
    let valid = true;
    const stepElement = document.getElementById(`step${step}`);
    const inputs = stepElement?.querySelectorAll("[required]") || [];

    inputs.forEach((input) => {
      if (!input.value) {
        input.classList.add("border-red-500");
        valid = false;
      } else {
        input.classList.remove("border-red-500");
      }
    });

    if (step === 2) {
      const categories = document.querySelectorAll("input[name='category']:checked");
      const languages = document.querySelectorAll("input[name='language']:checked");
      const specialization = document.querySelectorAll("input[name='specialization']:checked");

      if (categories.length === 0 || languages.length === 0 || specialization.length === 0) {
        alert("Please select at least one Category, Language and Specialization.");
        valid = false;
      }
    }
    return valid;
  };

  const nextStep = () => {
    if (!validateStep(currentStep)) return;
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      alert("Form Submitted Successfully!");
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section className="text-center py-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Become an Astrologer</h1>
        <p className="max-w-2xl mx-auto text-lg mb-6">
          Share your wisdom, guide seekers, and grow with us.  
          Join our global network of trusted astrologers today.
        </p>
        <a 
          href="#register-form" 
          className="bg-white text-yellow-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </section>

      {/* WHY JOIN */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Join Us?</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition">
            <span className="text-4xl">🌍</span>
            <h3 className="mt-4 font-semibold text-lg">Global Reach</h3>
            <p className="text-gray-600 mt-2">Connect with seekers worldwide.</p>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition">
            <span className="text-4xl">💸</span>
            <h3 className="mt-4 font-semibold text-lg">Earn & Grow</h3>
            <p className="text-gray-600 mt-2">Transparent payouts and rewards.</p>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition">
            <span className="text-4xl">🧘</span>
            <h3 className="mt-4 font-semibold text-lg">Work Flexibly</h3>
            <p className="text-gray-600 mt-2">Set your own schedule anywhere.</p>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition">
            <span className="text-4xl">🔒</span>
            <h3 className="mt-4 font-semibold text-lg">Trusted & Secure</h3>
            <p className="text-gray-600 mt-2">Safe platform with full support.</p>
          </div>

        </div>
      </section>

      {/* FORM */}
      <section id="register-form" className="py-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Registration Form</h2>
        <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">

          {/* Progress */}
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
            <div
              className="bg-yellow-400 h-2.5 rounded-full"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>

          {/* Tabs */}
          <div className="flex justify-center space-x-12 mb-8">
            {["Personal", "Skills", "Bank", "Documents"].map((label, i) => {
              const step = i + 1;
              return (
                <div
                  key={step}
                  className={`text-center ${currentStep === step ? "opacity-100 text-yellow-500" : "opacity-50"}`}
                >
                  <div className="bg-yellow-400 text-white rounded-full p-3 w-12 h-12 mx-auto flex items-center justify-center">
                    {step}
                  </div>
                  <p className="mt-2 font-semibold">{label}</p>
                </div>
              );
            })}
          </div>

          {/* STEP 1 */}
          {currentStep === 1 && (
            <div id="step1" className="grid grid-cols-2 gap-4">
              <input required type="text" placeholder="Phone" className="border p-2 rounded" />
              <input required type="text" placeholder="Name" className="border p-2 rounded" />
              <input required type="text" placeholder="Display Name" className="border p-2 rounded" />
              <select required className="border p-2 rounded">
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <input required type="date" className="border p-2 rounded" />
              <input required type="email" placeholder="Email" className="border p-2 rounded" />
              <input required type="password" placeholder="Password" className="border p-2 rounded" />
              <input required type="text" placeholder="Area" className="border p-2 rounded" />
              <input required type="text" placeholder="Address" className="border p-2 rounded" />
              <input required type="text" placeholder="Pincode" className="border p-2 rounded" />
              <input required type="text" placeholder="Landmark" className="border p-2 rounded" />
              <input required type="text" placeholder="Experience (in years)" className="border p-2 rounded" />
            </div>
          )}

          {/* STEP 2 */}
          {currentStep === 2 && (
            <div id="step2" className="grid grid-cols-3 gap-4">
              <div className="border p-4 rounded">
                <p className="mb-2 font-semibold">Select Category</p>
                <label><input type="checkbox" name="category" /> Vedic Astrology</label><br />
                <label><input type="checkbox" name="category" /> Numerologist</label><br />
                <label><input type="checkbox" name="category" /> Tarot Reader</label>
              </div>
              <div className="border p-4 rounded">
                <p className="mb-2 font-semibold">Languages</p>
                <label><input type="checkbox" name="language" /> English</label><br />
                <label><input type="checkbox" name="language" /> Hindi</label><br />
                <label><input type="checkbox" name="language" /> Bangla</label>
              </div>
              <div className="border p-4 rounded">
                <p className="mb-2 font-semibold">Specialization</p>
                <label><input type="checkbox" name="specialization" /> Astrologer</label>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {currentStep === 3 && (
            <div id="step3" className="grid grid-cols-2 gap-4">
              <input required type="text" placeholder="Pan Card Number" className="border p-2 rounded" />
              <input required type="text" placeholder="Account Number" className="border p-2 rounded" />
              <input required type="text" placeholder="Account Holder Name" className="border p-2 rounded" />
              <select required className="border p-2 rounded">
                <option value="">Select Account Type</option>
                <option>Saving</option>
                <option>Current</option>
              </select>
              <input required type="text" placeholder="Bank Name" className="border p-2 rounded" />
              <input required type="text" placeholder="Branch Name" className="border p-2 rounded" />
              <input required type="text" placeholder="IFSC Code" className="border p-2 rounded" />
              <input required type="text" placeholder="State" className="border p-2 rounded" />
              <input required type="text" placeholder="City" className="border p-2 rounded" />
            </div>
          )}

          {/* STEP 4 */}
          {currentStep === 4 && (
            <div id="step4" className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">Upload Aadhaar Front *</label>
                <input required type="file" className="border p-2 w-full rounded" />
              </div>
              <div>
                <label className="block mb-1">Upload Aadhaar Back *</label>
                <input required type="file" className="border p-2 w-full rounded" />
              </div>
              <div>
                <label className="block mb-1">Upload Photo *</label>
                <input required type="file" className="border p-2 w-full rounded" />
              </div>
              <div>
                <label className="block mb-1">Upload PAN Card *</label>
                <input required type="file" className="border p-2 w-full rounded" />
              </div>
              <div>
                <label className="block mb-1">Upload Passbook/Cancelled Cheque *</label>
                <input required type="file" className="border p-2 w-full rounded" />
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-between mt-8">
            {currentStep > 1 ? (
              <button onClick={prevStep} className="bg-gray-600 text-white px-6 py-2 rounded">
                Previous
              </button>
            ) : (
              <div></div>
            )}
            <button onClick={nextStep} className="bg-yellow-400 text-white px-6 py-2 rounded">
              {currentStep === totalSteps ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="text-center py-16 bg-white shadow-inner">
        <p className="text-lg mb-4 text-gray-700">Have any questions? We are here to help.</p>
        <Link 
          to="/Contact" 
          className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-yellow-600 transition"
        >
          Contact Us
        </Link>
      </section>

    </div>
  );
}
