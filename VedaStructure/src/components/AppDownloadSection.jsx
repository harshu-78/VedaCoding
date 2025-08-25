// AppDownloadSection.jsx
import { useState, useEffect } from "react";
import "./AppDownload.css";

export default function AppDownloadSection() {
  const [index, setIndex] = useState(0);
  const mockups = ["images/d1.png", "images/d2.png", "images/d3.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % mockups.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [mockups.length]);

  return (
    <section className="bg-gray-50 y-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="relative z-10">
          {/* Decorative Circle */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-50"></div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Download Our <span className="text-orange-600">Mobile App</span>
          </h2>
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            Take your <span className="font-semibold text-orange-600">spiritual journey</span> with you wherever you go.  
            Experience daily guidance, personalized rituals, and divine connections in your pocket.
          </p>

          {/* Features List */}
          <ul className="space-y-4 text-gray-800 text-base md:text-lg">
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✔</span>
              Daily Panchang updates & personalized horoscope
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✔</span>
              Book pujas & track order status in real-time
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✔</span>
              Access exclusive meditation & chanting audios
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✔</span>
              Set reminders for spiritual dates & events
            </li>
          </ul>

          <div className="mt-8 flex gap-4">
            <a href="#"><img src="images/app.png" className="h-12" alt="App Store"/></a>
            <a href="#"><img src="images/google.png" className="h-12" alt="Google Play"/></a>
          </div>
        </div>

        {/* Right Side - Rotating Mockups */}
        <div className="flex justify-center relative h-[500px]">
          <div className="relative w-[250px] h-[500px]">
            {mockups.map((src, i) => {
              let className = "mockup";
              if (i === index) className += " active";
              else if (i === (index + 1) % mockups.length) className += " left";
              return (
                <img
                  key={i}
                  src={src}
                  alt={`Mockup ${i}`}
                  className={`${className} absolute inset-0 transition-all duration-700`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
