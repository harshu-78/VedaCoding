import { useState } from "react";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

export default function AstroLogin() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-gray-50 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition hover:scale-105 duration-300">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Astrologer Login
        </h2>

        {/* Email */}
        <div className="mb-4 relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-yellow-500">
            <FiMail />
          </span>
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <a
            href="#"
            className="absolute right-2 top-2 text-yellow-500 text-sm hover:underline"
          >
            Forgot Password ?
          </a>
        </div>

        {/* Password */}
        <div className="mb-6 relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-yellow-500">
            <FiLock />
          </span>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-yellow-500"
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        </div>

        {/* Button */}
        <button className="w-full bg-yellow-400 text-white font-semibold py-2 rounded-lg hover:bg-yellow-500 transition duration-200">
          Login
        </button>
      </div>
    </div>
  );
}
